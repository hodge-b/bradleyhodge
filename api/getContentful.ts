import { createClient } from "contentful";

import type { IncomingMessage, ServerResponse } from "http";
import type {
  ContentfulLink,
  ContentfulImage,
  ProjectEntrySkeleton,
  ResolvedLinkEntry,
  ResolvedImageAsset,
  ResolvedProjectEntry,
} from "../src/types/contentful";

export interface ProjectFields {
  title: string;
  description: string;
  images: Array<ContentfulImage | null>;
  liveLink?: ContentfulLink;
  gitLink?: ContentfulLink;
}

export default async function handler(
  _req: IncomingMessage,
  res: ServerResponse,
) {
  try {
    // Set up contentful client.
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ?? "",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
    });

    // Call for contentful data.
    const entries = await client.getEntries<ProjectEntrySkeleton>({
      content_type: "project",
      include: 2,
    });

    const resolvedItems = entries.items as unknown as ResolvedProjectEntry[];

    const normalized = resolvedItems.map((item: ResolvedProjectEntry) =>
      normalizeData(item),
    );

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=300, stale-while-revalidate=86400",
    });

    return res.end(JSON.stringify(normalized));
  } catch (error) {
    console.error(`Error: failed to fetch from contentful: ${error}`);

    res.writeHead(500, {
      "Content-Type": "application/json",
    });

    return res.end(JSON.stringify({ error: "failed to fetch data" }));
  }
}

const normalizeData = (entry: ResolvedProjectEntry): ProjectFields => {
  const getLinkData = (linkEntry?: ResolvedLinkEntry) => {
    if (!linkEntry?.fields) return undefined;

    if (linkEntry.fields) {
      return {
        label: linkEntry.fields.label,
        link: linkEntry.fields.link,
      };
    }

    return undefined;
  };

  const getImageData = (
    imageAssets: Array<ResolvedImageAsset>,
  ): Array<ContentfulImage | null> => {
    return imageAssets.map((asset) => {
      if (!asset.fields?.file?.url) return null;

      if (asset.fields.file?.details) {
        if ("image" in asset.fields.file.details) {
          const imageDetails = asset.fields.file.details.image;

          return {
            src: asset.fields.file.url as string,
            alt: asset.fields.title as string,
            width: imageDetails?.width ?? undefined,
            height: imageDetails?.height ?? undefined,
          };
        }
      }

      return {
        src: asset.fields.file.url as string,
        alt: asset.fields.title as string,
      };
    });
  };

  return {
    title: entry.fields.title as string,
    description: entry.fields.description as string,
    images: getImageData(entry.fields.image),
    liveLink: getLinkData(entry.fields.liveLink),
    gitLink: getLinkData(entry.fields.gitLink),
  };
};

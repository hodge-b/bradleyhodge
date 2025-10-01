import { createClient, type Entry } from "contentful";
import type { IncomingMessage, ServerResponse } from "http";

import type { HeroPageType, SiteType } from "../types/contentful";
import type {
  TypeSiteSkeleton,
  TypeLinkSkeleton,
  TypeHeroPageSkeleton,
} from "../@types/generated/contentful.d.ts";

type SiteEntry = Entry<TypeSiteSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
type HeroPageEntry = Entry<TypeHeroPageSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
type LinkEntry = Entry<TypeLinkSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;

export default async function handler(
  _req: IncomingMessage,
  res: ServerResponse
) {
  try {
    // Set up contentful client.
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ?? "",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
    });

    // Call for contentful data.
    const entries = await client.getEntries({
      content_type: "site",
      include: 5,
    });

    const siteEntry = entries.items[0] as SiteEntry;
    const normalized = normalizeContentfulData(siteEntry);

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

const normalizeContentfulData = (site: SiteEntry): SiteType => {
  const heroPage = site.fields.heroPage as HeroPageEntry;

  return {
    heroPage: normalizeHeroPageData(heroPage),
  };
};

const normalizeHeroPageData = (heroPage: HeroPageEntry): HeroPageType => {
  const ctaButton = heroPage.fields?.heroCtaButton as LinkEntry;

  return {
    mainHeading: heroPage.fields.mainHeading,
    overline: heroPage.fields?.overline ?? null,
    subHeading: heroPage.fields?.subHeading ?? null,
    description: heroPage.fields.description,
    ctaButton: {
      config: {
        label: ctaButton.fields.label,
        link: ctaButton.fields.link,
      },
    },
  };
};

import { createClient, type Asset, type Entry } from "contentful";
import type { IncomingMessage, ServerResponse } from "http";

import type {
  AboutPageType,
  ContactPageType,
  HeroPageType,
  ProjectPageType,
  ProjectType,
  SiteType,
  Image,
} from "../types/contentful";
import type {
  TypeSiteSkeleton,
  TypeLinkSkeleton,
  TypeHeroPageSkeleton,
  TypeAboutPageSkeleton,
  TypeTechnologySkeleton,
  TypeContactPageSkeleton,
  TypeProjectPageSkeleton,
  TypeProjectSkeleton,
} from "../@types/generated/contentful.d.ts";

type LinkEntry = Entry<TypeLinkSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
type AssetEntry = Asset<"WITHOUT_UNRESOLVABLE_LINKS">;
type TechEntry = Entry<TypeTechnologySkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
type ProjectEntry = Entry<TypeProjectSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;

type SiteEntry = Entry<TypeSiteSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
type HeroPageEntry = Entry<TypeHeroPageSkeleton, "WITHOUT_UNRESOLVABLE_LINKS">;
type ProjectPageEntry = Entry<
  TypeProjectPageSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;
type AboutPageEntry = Entry<
  TypeAboutPageSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;
type ContactPageEntry = Entry<
  TypeContactPageSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS"
>;

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
      include: 10,
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
  const projectPage = site.fields.projectPage as ProjectPageEntry;
  const aboutPage = site.fields.aboutPage as AboutPageEntry;
  const contactPage = site.fields.contactPage as ContactPageEntry;

  return {
    heroPage: normalizeHeroPageData(heroPage),
    projectPage: normalizeProjectPageData(projectPage),
    aboutPage: normalizeAboutPageData(aboutPage),
    contactPage: normalizeContactPageData(contactPage),
  };
};

// Hero page.
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

// Project page.
const normalizeProjectPageData = (
  projectPage: ProjectPageEntry
): ProjectPageType => {
  const showcasedProjects = projectPage.fields.primaryProjectList ?? [];
  const secondaryProjects = projectPage.fields.secondaryProjectList;

  return {
    title: projectPage.fields.title,
    mainHeading: projectPage.fields.mainHeading,
    subHeading: projectPage.fields.subHeading,
    showcasedProjects: showcasedProjects.map((item) =>
      normalizeProjectData(item as ProjectEntry)
    ),
    projects:
      secondaryProjects?.map((item) =>
        normalizeProjectData(item as ProjectEntry)
      ) ?? null,
  };
};

// Project.
const normalizeProjectData = (project: ProjectEntry): ProjectType => {
  const images = project.fields.image ?? [];
  const ctaButtons = project.fields.projectCtaButton ?? [];

  return {
    title: project.fields.title,
    description: project.fields.description,
    images: images.map((item) => (item ? normalizeAsset(item) : undefined)),
    ctaButtons: ctaButtons.map((item) => {
      return {
        config: {
          label: item?.fields.label ?? "",
          link: item?.fields.link ?? "",
        },
      };
    }),
  };
};

// About page.
const normalizeAboutPageData = (aboutPage: AboutPageEntry): AboutPageType => {
  const image = aboutPage.fields.image as AssetEntry | undefined;
  const tech = aboutPage.fields.technologies as Array<TechEntry>;

  return {
    title: aboutPage.fields.title,
    image: image ? normalizeAsset(image) : undefined,
    description: aboutPage.fields.description,
    tech: tech.map((item) => {
      const techImage = item.fields.image as AssetEntry | undefined;
      return {
        label: item.fields.label,
        image: techImage ? normalizeAsset(techImage) : undefined,
      };
    }),
  };
};

// Contact page.
const normalizeContactPageData = (
  contactPage: ContactPageEntry
): ContactPageType => {
  const ctaButton = contactPage.fields?.contactCtaButton as LinkEntry;

  return {
    title: contactPage.fields.title,
    mainHeading: contactPage.fields.mainHeading,
    description: contactPage.fields.description,
    ctaButton: {
      config: {
        label: ctaButton.fields.label,
        link: ctaButton.fields.link,
      },
    },
  };
};

// Image.
const normalizeAsset = (asset: AssetEntry): Image => {
  const assetDetails = asset.fields.file?.details;

  return {
    url: `https:${asset.fields.file?.url}`,
    title: asset.fields.title ?? "",
    width: assetDetails?.image?.width,
    height: assetDetails?.image?.height,
  };
};

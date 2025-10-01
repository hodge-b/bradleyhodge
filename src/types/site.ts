import type { ContentfulLink, ContentfulImage } from "./contentful";

export interface SiteType {
  heroPage?: HeroPageType;
}

export interface HeroPageType {
  mainHeading: string;
  overline: string;
  subHeading: string;
  description: string;
}

export interface ProjectFields {
  title: string;
  description: string;
  images: Array<ContentfulImage | null>;
  liveLink?: ContentfulLink;
  gitLink?: ContentfulLink;
}

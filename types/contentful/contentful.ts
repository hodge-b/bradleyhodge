import type { Document } from "@contentful/rich-text-types";

export interface SiteType {
  heroPage: HeroPageType;
}

export interface HeroPageType {
  mainHeading: string;
  overline: string | null;
  subHeading: string | null;
  description: Document;
  ctaButton: CtaButton;
}

export interface CtaButton {
  config: Link;
}

export interface Link {
  label: string;
  link: string;
}

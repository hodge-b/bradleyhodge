import type { Document } from "@contentful/rich-text-types";

export interface SiteType {
  heroPage: HeroPageType;
  aboutPage: AboutPageType;
}

export interface HeroPageType {
  mainHeading: string;
  overline: string | null;
  subHeading: string | null;
  description: Document;
  ctaButton: CtaButton;
}

export interface AboutPageType {
  title: string;
  image?: Image;
  description: Document;
  tech: Array<TechType>;
}

export interface Image {
  url: string;
  title: string;
  width?: number;
  height?: number;
}

export interface CtaButton {
  config: Link;
}

export interface Link {
  label: string;
  link: string;
}

export interface TechType {
  label: string;
  image?: Image;
}

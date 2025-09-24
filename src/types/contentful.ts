import * as contentful from "contentful";

export type LinkEntrySkeleton = contentful.EntrySkeletonType<
  {
    label: contentful.EntryFieldTypes.Text;
    link: contentful.EntryFieldTypes.Text;
  },
  "link"
>;

export type ResolvedLinkEntry = contentful.Entry<
  LinkEntrySkeleton,
  undefined,
  string
>;

export type ResolvedImageAsset = contentful.Asset;

export type ProjectEntrySkeleton = contentful.EntrySkeletonType<{
  title: contentful.EntryFieldTypes.Text;
  description: contentful.EntryFieldTypes.Text;
  images: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.AssetLink>;
  liveLink?: contentful.EntryFieldTypes.EntryLink<LinkEntrySkeleton>;
  gitLink?: contentful.EntryFieldTypes.EntryLink<LinkEntrySkeleton>;
}>;

export type ResolvedProjectEntry = contentful.Entry<
  contentful.EntrySkeletonType<
    {
      title: contentful.EntryFieldTypes.Text;
      description: contentful.EntryFieldTypes.Text;
      image: contentful.Asset[];
      liveLink?: ResolvedLinkEntry;
      gitLink?: ResolvedLinkEntry;
    },
    "project"
  >,
  undefined,
  string
>;

export interface ContentfulLink {
  label?: string;
  link?: string;
}

export interface ContentfulImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

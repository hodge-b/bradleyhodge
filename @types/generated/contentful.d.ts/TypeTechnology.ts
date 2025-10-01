import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTechnologyFields {
    label: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
}

export type TypeTechnologySkeleton = EntrySkeletonType<TypeTechnologyFields, "technology">;
export type TypeTechnology<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTechnologySkeleton, Modifiers, Locales>;

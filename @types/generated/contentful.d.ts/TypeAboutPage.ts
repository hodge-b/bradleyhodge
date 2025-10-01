import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTechnologySkeleton } from "./TypeTechnology";

export interface TypeAboutPageFields {
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.RichText;
    technologies: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTechnologySkeleton>>;
}

export type TypeAboutPageSkeleton = EntrySkeletonType<TypeAboutPageFields, "aboutPage">;
export type TypeAboutPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAboutPageSkeleton, Modifiers, Locales>;

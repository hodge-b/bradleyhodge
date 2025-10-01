import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeHeroPageFields {
    title: EntryFieldTypes.Symbol;
    mainHeading: EntryFieldTypes.Symbol;
    overline?: EntryFieldTypes.Symbol;
    subHeading?: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    heroCtaButton: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
}

export type TypeHeroPageSkeleton = EntrySkeletonType<TypeHeroPageFields, "heroPage">;
export type TypeHeroPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroPageSkeleton, Modifiers, Locales>;

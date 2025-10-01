import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeContactPageFields {
    title: EntryFieldTypes.Symbol;
    mainHeading: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    contactCtaButton: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
}

export type TypeContactPageSkeleton = EntrySkeletonType<TypeContactPageFields, "contactPage">;
export type TypeContactPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactPageSkeleton, Modifiers, Locales>;

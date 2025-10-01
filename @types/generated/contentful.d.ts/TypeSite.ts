import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroPageSkeleton } from "./TypeHeroPage";
import type { TypeProjectPageSkeleton } from "./TypeProjectPage";

export interface TypeSiteFields {
    title: EntryFieldTypes.Symbol;
    heroPage: EntryFieldTypes.EntryLink<TypeHeroPageSkeleton>;
    projectPage: EntryFieldTypes.EntryLink<TypeProjectPageSkeleton>;
}

export type TypeSiteSkeleton = EntrySkeletonType<TypeSiteFields, "site">;
export type TypeSite<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSiteSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAboutPageSkeleton } from "./TypeAboutPage";
import type { TypeHeroPageSkeleton } from "./TypeHeroPage";
import type { TypeProjectPageSkeleton } from "./TypeProjectPage";

export interface TypeSiteFields {
    title: EntryFieldTypes.Symbol;
    heroPage: EntryFieldTypes.EntryLink<TypeHeroPageSkeleton>;
    projectPage: EntryFieldTypes.EntryLink<TypeProjectPageSkeleton>;
    aboutPage: EntryFieldTypes.EntryLink<TypeAboutPageSkeleton>;
}

export type TypeSiteSkeleton = EntrySkeletonType<TypeSiteFields, "site">;
export type TypeSite<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSiteSkeleton, Modifiers, Locales>;

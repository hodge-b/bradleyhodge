import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProjectSkeleton } from "./TypeProject";

export interface TypeProjectPageFields {
    title: EntryFieldTypes.Symbol;
    projectList: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProjectSkeleton>>;
}

export type TypeProjectPageSkeleton = EntrySkeletonType<TypeProjectPageFields, "projectPage">;
export type TypeProjectPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectPageSkeleton, Modifiers, Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProjectFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    liveLink?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    gitLink?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;

// SPDX-FileCopyrightText: © 2019 EteSync Authors
// SPDX-License-Identifier: GPL-3.0-only

export const appName = "Ciphwren Notes";
export const sourceCode = "https://github.com/nikossvnk/ciphwren-notes";
export const reportIssue = sourceCode + "/issues";


export const colType = "etebase.md.note";
// Bookmarks: the title is the item's name, the link and the rest are in its meta (see bookmarks.ts)
export const bookmarkColType = "etebase.bookmark";
// All of the types that are synced
export const collectionTypes = [colType, bookmarkColType];

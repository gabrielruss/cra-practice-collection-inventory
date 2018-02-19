import { CREATE_ENTRY } from './actionTypes';

export function createEntry(entry) {
  return { type: CREATE_ENTRY, entry }
}


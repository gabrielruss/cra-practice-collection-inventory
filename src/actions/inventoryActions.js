import { CREATE_ENTRY } from './actionTypes';

function createEntry(entry) {
  return { type: CREATE_ENTRY, entry }
}
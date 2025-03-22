import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IBookmarksState = Array<string>;

const initialState: IBookmarksState = [];

const slice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<string>) => [...state, action.payload],
    deleteBookmark: (state, action: PayloadAction<string>) => [...state, action.payload],
    clearAllBookmarks: () => [],
  },
});

export const { addBookmark, deleteBookmark, clearAllBookmarks } = slice.actions;

export default slice.reducer;

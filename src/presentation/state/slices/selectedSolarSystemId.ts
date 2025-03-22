import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string | null = null;

const slice = createSlice({
  name: 'selectedSolarSystemID:',
  initialState,
  reducers: {
    setSelectedSolarSystemID: (_, action) => action.payload,
    clearSelectedSolarSystemID: () => null,
  },
});

export const { setSelectedSolarSystemID, clearSelectedSolarSystemID } = slice.actions;

export default slice.reducer;

export {};

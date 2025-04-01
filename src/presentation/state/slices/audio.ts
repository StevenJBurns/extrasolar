import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IAudioState = {
  source: string;
  volume: number;
  isMuted: boolean;
};

const slice = createSlice({
  name: 'audio',
  initialState: {
    path: '',
    volume: 50,
    isMuted: true,
  },
  reducers: {
    setSource: (state, action: PayloadAction<string>) => ({ ...state, source: action.payload }),
    setVolume: (state, action: PayloadAction<number>) => ({ ...state, volume: action.payload }),
    toggleMute: state => ({ ...state, isMuted: !state.isMuted }),
  },
});

export const { setSource, setVolume, toggleMute } = slice.actions;

export default slice.reducer;

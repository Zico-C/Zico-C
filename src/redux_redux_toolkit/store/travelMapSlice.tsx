import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface travelMapSlice {
  filter: Record<string, string[]>;
}

export const initialState: travelMapSlice = {
  filter: {
    id: [],
    name: [],
    type: [],
  },
};

const travelMapSlice = createSlice({
  name: "Map",
  initialState,
  reducers: {
    setFilterName: (state, action: PayloadAction<travelMapSlice["filter"]>) => {
      state.filter = action.payload;
    },
    setFilterType: (state, action: PayloadAction<travelMapSlice["filter"]>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilterName, setFilterType } = travelMapSlice.actions;

export default travelMapSlice;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Marker {
  id: number;
  position: [number, number];
  name: string;
  type: string;
  officialWeb?: string;
  googleMap?: string;
  icon?: string;
}
interface travelMapSlice {
  filter: Record<string, string[]>;
  markers: Marker[];
}

const initialState: travelMapSlice = {
  filter: {
    id: [],
    name: [],
    type: [],
  },
  markers: JSON.parse(localStorage.getItem("markers") || "[]"),
};

const travelMapSlice = createSlice({
  name: "Map",
  initialState,
  reducers: {
    setFilterName: (state, action: PayloadAction<travelMapSlice["filter"]>) => {
      state.filter = action.payload;
    },
    setMarkersS: (state, action: PayloadAction<travelMapSlice["markers"]>) => {
      state.markers = action.payload;
    },
  },
});

export const { setFilterName, setMarkersS } = travelMapSlice.actions;

export default travelMapSlice.reducer;

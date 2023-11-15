import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../redux_redux_toolkit/store/globalSlice";
import UserSlice from "@/views/ReduxPage/Store/UserSlice";
import ArrStatus from "./ArrStatus/reducer";
import NumStatus from "./NumStatus/reducer";
import travelMapSlice from "../redux_redux_toolkit/store/travelMapSlice";
const store = configureStore({
  reducer: {
    ArrStatus,
    NumStatus,
    global: globalSlice,
    user: UserSlice,
    Map: travelMapSlice.reducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

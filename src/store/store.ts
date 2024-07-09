import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customers/customerSlice";

export const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: CustomersState}
export type AppDispatch = typeof store.dispatch;

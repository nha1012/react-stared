import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import rootReducer from "src/reducer/reducer"

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "production" ? false : true
})

export type AppDispatch = typeof store.dispatch | any
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "./coursesApi";
import courseReducer from "./courseSlice.store";

export const store = configureStore({
	reducer: {
		[coursesApi.reducerPath]: coursesApi.reducer,
		course: courseReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(coursesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

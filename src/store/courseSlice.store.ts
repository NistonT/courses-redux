import { createSlice } from "@reduxjs/toolkit";
import { ICourse } from "../types/types";

export interface ICoursesState {
	courses: ICourse[];
}

const initialState: ICoursesState = {
	courses: [],
};

const courseSlice = createSlice({
	name: "courses",
	initialState,
	reducers: {
		addCourseDebounce(state, actions) {
			state.courses = actions.payload;
		},
	},
});

export const { addCourseDebounce } = courseSlice.actions;
export default courseSlice.reducer;

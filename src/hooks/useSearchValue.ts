import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetCoursesQuery } from "../store/coursesApi";
import { addCourseDebounce } from "../store/courseSlice.store";
import { ICourse } from "../types/types";
import { useDebounce } from "./useDebounce";

export const useSearchValue = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const { data = [] } = useGetCoursesQuery({});
	const debounceValue = useDebounce(searchValue);
	const dispatch = useDispatch();

	const courses = data.filter((course: ICourse) =>
		course.title.toLowerCase().includes(debounceValue.toLowerCase())
	);

	useEffect(() => {
		dispatch(addCourseDebounce(courses));
	}, [courses, dispatch]);

	return { searchValue, setSearchValue, courses };
};

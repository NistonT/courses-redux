import { Route, Routes } from "react-router";
import App from "./App";
import { AddCourse } from "./components/AddCourse";
import { AddModule } from "./components/AddModule";
import { Course } from "./components/Course";
import { pagesConfig } from "./config/pages.config";

export const Routers = () => {
	return (
		<>
			<Routes>
				<Route path={pagesConfig.HOME} element={<App />} />
				<Route path={pagesConfig.COURSE} element={<Course />} />
				<Route path={pagesConfig.ADD_COURSE} element={<AddCourse />} />
				<Route path={pagesConfig.ADD_MODULE} element={<AddModule />} />
			</Routes>
		</>
	);
};

import { useParams } from "react-router";
import {
	useGetCourseAtIdQuery,
	useGetModuleAtIdCourseQuery,
} from "../../store/coursesApi";
import { IModule } from "../../types/types";

export const Course = () => {
	const params = useParams();

	const { data: modules } = useGetModuleAtIdCourseQuery(params.courseId!);
	const { data: course } = useGetCourseAtIdQuery(params.courseId!);

	return (
		<>
			Course {course?.title}
			{modules &&
				modules.map((module: IModule) => (
					<div key={module.id}>{module.title}</div>
				))}
		</>
	);
};

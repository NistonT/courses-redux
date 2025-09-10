import { SubmitHandler, useForm } from "react-hook-form";
import {
	useAddModuleMutation,
	useGetCoursesQuery,
} from "../../store/coursesApi";
import { TAddModule } from "../../types/addModule.type";
import { ICourse } from "../../types/types";

export const AddModule = () => {
	const { data: courses } = useGetCoursesQuery({});
	const [addModule] = useAddModuleMutation();

	const { register, handleSubmit, reset } = useForm<TAddModule>();

	const onSubmit: SubmitHandler<TAddModule> = data => {
		addModule(data);
		reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type='text'
					placeholder='title'
					{...register("title", { required: true })}
				/>
				<input
					type='text'
					placeholder='description'
					{...register("description", { required: true })}
				/>
				<select {...register("courseId")}>
					{courses &&
						courses.map((course: ICourse) => (
							<option value={course.id}>{course.title}</option>
						))}
				</select>
				<button type='submit'>Создать</button>
			</form>
		</div>
	);
};

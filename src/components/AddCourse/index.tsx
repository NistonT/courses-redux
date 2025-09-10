import { SubmitHandler, useForm } from "react-hook-form";
import { useAddCourseMutation } from "../../store/coursesApi";
import { TAddCourse } from "../../types/addCourse.type";

export const AddCourse = () => {
	const { register, handleSubmit, reset } = useForm<TAddCourse>();
	const [addCourse] = useAddCourseMutation();

	const onSubmit: SubmitHandler<TAddCourse> = data => {
		addCourse(data);
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
				<input
					type='text'
					placeholder='category'
					{...register("category", { required: true })}
				/>
				<input
					type='text'
					placeholder='imageUrl'
					{...register("imageUrl", { required: false })}
				/>
				<button type='submit'>Отправить</button>
			</form>
		</div>
	);
};

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { TID } from "../types/types";

export const coursesApi = createApi({
	reducerPath: "coursesApi",
	tagTypes: ["Courses", "CourseId", "Modules", "ModuleId"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
	endpoints: build => ({
		getCourses: build.query({
			query: () => "courses",
			providesTags: result =>
				result
					? [
							...result.map(({ id }: TID) => ({
								type: "Courses" as const,
								id,
							})),
							{ type: "Courses", id: "List" },
					  ]
					: [{ type: "Courses", id: "List" }],
		}),
		getCourseAtId: build.query({
			query: (id: string) => `courses/${id}`,
			providesTags: result =>
				result
					? [
							{ type: "CourseId" as const, id: result.id },
							{ type: "CourseId" as const, id: "LIST" },
					  ]
					: [{ type: "CourseId" as const, id: "LIST" }],
		}),
		addCourse: build.mutation({
			query: body => ({
				url: "courses",
				method: "POST",
				body: {
					id: new Date().toISOString(),
					title: body.title,
					description: body.description,
					imageUrl: body.image,
					category: body.category,
				},
			}),
			invalidatesTags: [{ type: "Courses", id: "List" }],
		}),
		getModules: build.query({
			query: () => "modules",
			providesTags: result =>
				result
					? [
							...result.map(({ id }: TID) => ({
								type: "Modules" as const,
								id,
							})),
							{ type: "Modules", id: "List" },
					  ]
					: [{ type: "Modules", id: "List" }],
		}),
		getModuleAtIdCourse: build.query({
			query: (id: string) => `modules?courseId=${id}`,
			providesTags: result =>
				result
					? [
							...result.map(({ id }: TID) => ({
								type: "ModuleId" as const,
								id,
							})),
							{ type: "ModuleId", id: "List" },
					  ]
					: [{ type: "ModuleId", id: "List" }],
		}),
		addModule: build.mutation({
			query: body => ({
				url: "modules",
				method: "POST",
				body: {
					id: new Date().toISOString(),
					title: body.title,
					description: body.description,
					courseId: body.courseId,
				},
			}),
			invalidatesTags: [{ type: "Modules", id: "List" }],
		}),
	}),
});

export const {
	useGetCoursesQuery,
	useGetModulesQuery,
	useGetModuleAtIdCourseQuery,
	useGetCourseAtIdQuery,
	useAddCourseMutation,
	useAddModuleMutation,
} = coursesApi;

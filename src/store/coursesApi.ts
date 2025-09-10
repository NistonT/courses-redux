import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { TID } from "../types/types";

export const coursesApi = createApi({
	reducerPath: "coursesApi",
	tagTypes: ["Courses", "Modules"],
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
	}),
});

export const { useGetCoursesQuery, useGetModulesQuery } = coursesApi;

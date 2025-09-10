class PagesConfig {
	HOME = "/";
	ADD_COURSE = "/course";
	ADD_MODULE = "/module";

	COURSE = "/:courseId";

	toCourse(id: string) {
		return `/${id}`;
	}
}

export const pagesConfig = new PagesConfig();

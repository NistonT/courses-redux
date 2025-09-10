class PagesConfig {
	static HOME = "/";

	static COURSE(id: number) {
		return `/${id}`;
	}
}

export const pagesConfig = new PagesConfig();

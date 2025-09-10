export type TID = {
	id: number;
};

interface IBase {
	title: string;
	description: string;
}

export interface ICourse extends IBase {
	id: string;
	imageUrl: string;
	category: string;
}

export interface IModule extends IBase {
	id: number;
	courseId: number;
}

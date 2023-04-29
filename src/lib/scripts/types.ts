export type Categories = 'coding' | 'software' | 'hosting' | 'other';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Categories = 'coding' | 'software' | 'hosting' | 'vcs' | 'virtualization' | 'other';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

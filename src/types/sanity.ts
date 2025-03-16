export interface SanityDocument {
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
}

export interface SanitySlug {
	current: string;
}

export interface SanityImageAsset {
	_ref: string;
	_type: string;
}

export interface SanityImage {
	_type: string;
	asset: SanityImageAsset;
}

export interface SanityBlock {
	_key: string;
	_type: string;
	style: string;
	children: Array<{
		_key: string;
		_type: string;
		marks: string[];
		text: string;
	}>;
}

export interface SanityTag extends SanityDocument {
	name: string;
}

export interface AppTag {
	id: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface SanityCategory {
	_id: string;
	title: string;
}

export interface SanityPost extends SanityDocument {
	_id: string;
	title: string;
	slug: string; // Changed from SanitySlug since query transforms it
	excerpt?: string;
	content?: SanityBlock[]; // Optional since it's not always in queries
	imagePath: string; // Direct URL from mainImage.asset->url
	publishedAt: string;
	authorName?: string;
	categories?: string[];
	tags?: SanityTag[]; // Add tags
}

export interface SanityPostFormatted {
	id: string;
	_id: string;
	title: string;
	slug: string;
	excerpt?: string;
	content: SanityBlock[];
	createdAt: string;
	publishedAt: string;
	imagePath: string;
	published: boolean;
	authorId: string | null;
	tags?: {
		id: string;
		name: string;
		createdAt: Date;
		updatedAt: Date;
	}[];
}

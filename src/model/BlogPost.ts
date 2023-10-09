export interface IPost {
    _id: string;
    type?: string;
    title?: string;
    overview?: string;
    content?: any;
    coverImage?: any;
    date: string;
    slug?: string;
    _updatedAt?: string
    excerpt?: string
}
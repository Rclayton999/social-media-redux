export interface Profile{
    name:string;
    birthdate:string;
    posts:Post[];
}

export interface Post{
    content:string;
    likes:number;
}
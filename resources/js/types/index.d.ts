import { ReactNode } from "react";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type LayoutProps = {
    children: ReactNode; 
  };

 export type Category = {
    id: number,
    name: string
  }

  export type Blog = {
    id: number,
    name: string
  }

  type CreatePostPageProps = {
    users: User[];
    categories: Category[];
    blogPosts: Blog[]
  };


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    blogPosts: Blog
};

const API_URL = 'http://localhost:5000/api';

export interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  readTime: string;
  createdAt: string;
  updatedAt: string;
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export async function getPost(id: string): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

export async function createPost(postData: Omit<Post, '_id' | 'createdAt' | 'updatedAt' | 'excerpt' | 'readTime'>): Promise<Post> {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
}
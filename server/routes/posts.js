import express from 'express';
import { mockPosts } from '../mockData.js';

export const router = express.Router();

// Get all posts
router.get('/', (req, res) => {
  res.json(mockPosts);
});

// Get single post
router.get('/:id', (req, res) => {
  const post = mockPosts[0]; // For demo, always return the first post
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
});

// Create post
router.post('/', (req, res) => {
  const newPost = {
    ...req.body,
    excerpt: req.body.content.substring(0, 150) + '...',
    readTime: `${Math.ceil(req.body.content.split(' ').length / 200)} min`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  mockPosts.unshift(newPost);
  res.status(201).json(newPost);
});
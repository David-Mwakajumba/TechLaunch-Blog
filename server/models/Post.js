import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  author: {
    name: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    }
  },
  readTime: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const Post = mongoose.model('Post', postSchema);
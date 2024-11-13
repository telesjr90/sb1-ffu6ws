import { Handler } from '@netlify/functions';
import { blogPosts } from '../../src/data/blog-posts';

export const handler: Handler = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(blogPosts)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch posts' })
    };
  }
};

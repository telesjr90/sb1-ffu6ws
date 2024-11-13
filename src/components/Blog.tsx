import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blog-posts';
import { getBlogPosts } from '../utils/content';

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  const blogPosts = getBlogPosts();

  return (
    <section className="py-20 bg-[#1E293B]/30" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights into my creative process and recent works
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPost) => (
            <article
              key={post.slug}
              className="bg-[#1E293B]/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <ArrowRight className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
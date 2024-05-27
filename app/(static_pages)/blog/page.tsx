import BlogComponent from '@/components/Blogs/BlogComponent'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Cyclewaycoffee",

  },
  description: "Unlock the secrets to perfect coffee every time! Explore top commercial coffee machines, expert reviews, and price comparisons on our blog.",
  twitter: {
    card: "summary_large_image",
  },
  robots: 'index, follow',
};

const BlogPage = () => {
  return (
    <div>
      <BlogComponent />
    </div>
  )
}

export default BlogPage
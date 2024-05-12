import BlogComponent from '@/components/Blogs/BlogComponent'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Cyclewaycoffee",

  },
  description: "Unlock the Secret to Perfect Coffee Every Time! Find Your Ideal Commercial Coffee Machines Today. Expert Reviews & Top Picks. Compare Prices & Features.",
  twitter: {
    card: "summary_large_image",
  },
  robots: 'index, follow',
  openGraph: {
    images: ['https://lift-car.com/tools/wp-content/uploads/2024/04/0_3Xdd_WEaRxryzfLC.webp'],
  },
};

const BlogPage = () => {
  return (
    <div>
      <BlogComponent />
    </div>
  )
}

export default BlogPage
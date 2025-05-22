import Link from "next/link";
import Layout from "@/components/Layout";
import { blogPosts } from "./blogs/blogData";

export default function Blogs() {
  return (
    <Layout>
      <div className="bg-primary/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Blog Articles</h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-muted-foreground">
            Dive into our collection of guides, tutorials, and insights around JSON tools and formatting.
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`}>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition cursor-pointer">
                <h2 className="text-2xl font-semibold text-foreground">{post.title}</h2>
                <p className="text-muted-foreground mt-2">{post.summary}</p>
                <p className="text-sm text-gray-400 mt-4">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
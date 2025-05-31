import { useRoute } from "wouter";
import { blogPosts } from "./blogData";

export default function BlogPostPage() {
  const [match, params] = useRoute("/blogs/:slug");

  if (!match || !params) {
    return <div>Post not found</div>;
  }

  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-muted-foreground mb-4">{post.date}</p>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}

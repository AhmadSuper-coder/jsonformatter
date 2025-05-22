import Link from "next/link";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

// Dummy blog data
const blogPosts = [
  {
    id: 1,
    title: "Free JSON Formatter Without Ads",
    excerpt: "Explore a clean, distraction-free JSON formatter that respects your privacy.",
    slug: "free-json-formatter-without-ads",
    date: "2025-05-20",
  },
  {
    id: 2,
    title: "Online JSON Formatter with Dark Mode",
    excerpt: "Switch to dark mode and comfortably format JSON without hurting your eyes.",
    slug: "json-formatter-dark-mode",
    date: "2025-05-18",
  },
  {
    id: 3,
    title: "How to Format JSON in Your Browser Instantly",
    excerpt: "No installations needed. Just copy, paste, and format right in your browser.",
    slug: "format-json-using-browser",
    date: "2025-05-15",
  },
];

// Ad Placeholder
const AdPlaceholder = ({ position }: { position: "top" | "bottom" }) => {
  return (
    <div className={`ad-placeholder ad-${position} border border-dashed border-muted-foreground/30 rounded-md bg-background/50 p-3 flex items-center justify-center h-full min-h-[90px] text-center text-muted-foreground text-sm`}>
      <p>Ad Space - {position}</p>
    </div>
  );
};

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

      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder position="top" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <div key={post.id} className="border border-border bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-foreground mb-2">{post.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <Link href={`/blogs/${post.slug}`}>
              <Button>Read More</Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="py-4 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder position="bottom" />
        </div>
      </div>
    </Layout>
  );
}

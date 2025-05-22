// pages/blogs/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { blogPosts, BlogPost } from "shared/blogData";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />
      </Head>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-muted-foreground mb-4">{post.date}</p>
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug) || null;

  return {
    props: {
      post,
    },
  };
};

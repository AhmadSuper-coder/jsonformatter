// shared/blogData.ts
export interface BlogPost {
    slug: string;
    title: string;
    summary: string;
    content: string;
    date: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      slug: "json-pretty-print",
      title: "How to Pretty Print JSON in JavaScript",
      summary: "Learn how to format and pretty print JSON objects using simple JavaScript methods.",
      content: `<p>To pretty print JSON in JavaScript, you can use <code>JSON.stringify</code> with indentation.</p><pre><code>const obj = { a: 1, b: 2 };\nconsole.log(JSON.stringify(obj, null, 2));</code></pre>`,
      date: "2025-05-22",
    },
    {
      slug: "json-vs-xml",
      title: "JSON vs XML: What's the Difference?",
      summary: "Understand the key differences between JSON and XML in data exchange formats.",
      content: `<p>JSON and XML are both data formats, but JSON is more lightweight and easier to use with JavaScript.</p>`,
      date: "2025-05-21",
    },
  ];
  

# 🧭 React Router + Markdown Blog (Technical Guide)

Build a **technical blog** using **React**, **React Router v6**, and **Markdown (.md)** files.  
This guide walks you through project setup, routing, loading Markdown files, and rendering them as blog posts.

---

## 🚀 Overview

### 🧱 What You’ll Build
A lightweight technical blog that:
- Uses **React Router** for page navigation  
- Loads blog content from local **Markdown files**  
- Renders Markdown using **react-markdown**  
- Supports **dynamic routes** for each blog post  

### 🧰 Tech Stack
| Tool | Purpose |
|------|----------|
| React 18+ | UI framework |
| React Router v6 | Routing |
| react-markdown | Render Markdown as HTML |
| remark-gfm | GitHub-flavored Markdown support |
| Vite / CRA | Build setup |

---

## 🧩 Project Setup

### 1️⃣ Create the React App

```bash
npm create vite@latest react-markdown-blog --template react
cd react-markdown-blog
npm install
````

### 2️⃣ Install Dependencies

```bash
npm install react-router-dom react-markdown remark-gfm
```

---

## 📂 Folder Structure

```
react-markdown-blog/
├── public/
│   ├── posts/
│   │   ├── react-router.md
│   │   └── oauth2-java.md
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── PostList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   └── Post.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

---

## 🧱 Setting Up React Router

**`main.jsx`**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**`App.jsx`**

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
```

---

## 🧭 Navbar Component

**`Navbar.jsx`**

```jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
      <NavLink to="/" style={{ marginRight: "1rem" }}>Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  );
}
```

---

## 🏡 Home Page

**`Home.jsx`**

```jsx
export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to the React Markdown Blog 🧑‍💻</h1>
      <p>Read technical articles on React, Java, OAuth2, and more!</p>
    </div>
  );
}
```

---

## 📰 Blog List Page

**`Blog.jsx`**

```jsx
import { Link } from "react-router-dom";

const posts = [
  { title: "React Router Deep Dive", slug: "react-router" },
  { title: "OAuth2 with Java & Spring Boot", slug: "oauth2-java" }
];

export default function Blog() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📝 Technical Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 📄 Rendering Markdown Posts

### 1️⃣ Add Markdown Files

Create files in `public/posts/` like:

**`public/posts/react-router.md`**

````markdown
# React Router Overview

React Router is a standard library for routing in React.
It allows navigation without reloading the page.

## Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
````

````

---

### 2️⃣ Markdown Post Page

**`Post.jsx`**
```jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent("⚠️ Post not found!"));
  }, [slug]);

  return (
    <div style={{ padding: "2rem" }}>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </div>
  );
}
````

---

## 🧠 Dynamic Routing Flow

```
/blog              → Blog.jsx (list of posts)
/blog/:slug        → Post.jsx (loads specific Markdown file)
```

✅ Example:
Visiting `/blog/react-router` will fetch `/public/posts/react-router.md` and render it as a full blog post.

---

## 💅 Styling (Optional)

You can style Markdown content using CSS classes:

**`index.css`**

```css
body {
  font-family: system-ui, sans-serif;
  background: #fafafa;
}

h1, h2 {
  color: #007acc;
}

pre {
  background: #1e1e1e;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}
```

---

## ⚡ Optional: Syntax Highlighting

To add syntax highlighting for code blocks:

```bash
npm install react-syntax-highlighter
```

**In Post.jsx**

```jsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

<ReactMarkdown
  children={content}
  components={{
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  }}
/>
```

---

## 🧾 SEO & Metadata (Optional)

You can dynamically set the document title:

```jsx
useEffect(() => {
  document.title = `Blog - ${slug}`;
}, [slug]);
```

---

## 🧠 Summary

| Feature             | Implementation                  |
| ------------------- | ------------------------------- |
| Routing             | React Router v6                 |
| Markdown Rendering  | react-markdown + remark-gfm |
| Syntax Highlighting | react-syntax-highlighter      |
| Blog Content        | Local .md files               |
| Dynamic Routes      | /blog/:slug pattern           |

---

## 🧰 Bonus Ideas

* 🧩 Add a JSON file to manage blog metadata (date, tags, author)
* 🌓 Add a dark mode toggle
* 🔍 Add search/filter for blog posts
* 🌍 Deploy to Netlify or Vercel

---

## 📚 References

* [React Router Docs](https://reactrouter.com/)
* [React Markdown Docs](https://github.com/remarkjs/react-markdown)
* [Vite Documentation](https://vitejs.dev/)
* [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
 

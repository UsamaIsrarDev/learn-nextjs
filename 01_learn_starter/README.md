In the first class, I coverd 18 Chapters.

## Pages Router

```
https://nextjs.org/learn/pages-router
```

```
https://www.cars.com/
```

```
https://www.telia.no/
```

# Next.js – Complete Beginner Guide

## Course Context

This guide is based on the **Quarter 2 (2D UI Development)** curriculum.

- **2D User Interface Development** → focus of this quarter.
- **3D Development** → will be covered in Quarter 4.
- **Core Tracks**:
  - ☁️ Cloud Computing (Serverless)
  - ⛓️ Blockchain Development
  - 🖥️ 2D/3D User Interfaces

The curriculum is **research-based** and aligned with **industry demand**.

---

## Why Learn Modern Technologies?

- Companies widely use **React.js** and **Next.js** for modern web apps.
- These technologies are **future-proof, scalable, and flexible**.
- Next.js is developed by **Vercel**, a cloud provider known for speed and deployment ease.

**React = Library for UIs**  
**Next.js = Framework built on top of React**

Both work together for **scalable, performant web apps**.

---

## 🏗️ Software Development Lifecycle (SDLC)

A typical application development process includes:

1. **Requirement Analysis**
2. **Design**
3. **Development**
4. **Testing**
5. **Deployment**
6. **Updates & Maintenance**

Apps (games, mobile, web) are continuously updated to improve features and performance.  
Developers work in **teams**, each handling different SDLC roles.

---

## 🏗️ Setting Up Your First Next.js Project

1. Install **Node.js** (LTS recommended).
2. Create a new Next.js project:
   ```bash
   npx create-next-app@latest my-blog
   cd my-blog
   npm run dev
   ```
3. Open in browser:
   ```
   http://localhost:3000
   ```

---

## File-System Routing

- Next.js uses **file-based routing** → every file in `pages/` becomes a route.
- Examples:
  - `pages/index.js` → `/`
  - `pages/posts/first-post.js` → `/posts/first-post`

---

## 🔗 Navigation with `<Link>`

Use the `<Link>` component for fast **client-side navigation**.

```jsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/posts/first-post">Go to First Post</Link>
    </div>
  );
}
```

---

## 🖼️ Image Optimization

Next.js `<Image>` component provides:

- Automatic resizing
- Lazy loading
- Performance optimization

```jsx
import Image from "next/image";
import profilePic from "../public/profile.jpg";

export default function Profile() {
  return <Image src={profilePic} alt="Profile" width={200} height={200} />;
}
```

---

## 📝 Metadata with `<Head>`

Customize the HTML `<head>` for SEO and titles.

```jsx
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>My First Post</title>
        <meta name="description" content="This is my first blog post" />
      </Head>
      <h1>First Post</h1>
    </>
  );
}
```

---

## 📜 Third-Party Scripts

Load external scripts using `<Script>` with different strategies.

```jsx
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <h1>My App</h1>
      <Script src="https://example.com/analytics.js" strategy="lazyOnload" />
    </>
  );
}
```

---

## 🎨 Styling Options in Next.js

You can style in multiple ways:

1. **Global CSS** – in `styles/globals.css` (imported in `_app.js`).
2. **CSS Modules** – scoped styles per component:
   ```jsx
   import styles from "./button.module.css";
   export default function Button() {
     return <button className={styles.primary}>Click Me</button>;
   }
   ```
3. **Styled JSX** (built-in).
4. **Utility frameworks** like Tailwind CSS.

---

## 🧩 Layout Component

Create reusable layouts for consistent UI.

```jsx
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

Usage:

```jsx
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <h1>First Post</h1>
    </Layout>
  );
}
```

---

## Rendering Approaches in Next.js

### 1. Client-Side Rendering (CSR)

- Content fetched **in the browser after page load**.
- Example: **YouTube** (shows skeleton, then loads videos).

### 2. Server-Side Rendering (SSR)

- Content fetched **on the server per request**.
- Example: **Cars.com** (renders complete page with data).

### 3. Static Site Generation (SSG)

- Pages are generated **at build time**.
- Best for **blogs, portfolios, landing pages**.

---

## Key Aspects of Modern App Development

- **Navigation** → Seamless page transitions.
- **Data Fetching** → Where/how data is retrieved.
- **Rendering** → Choosing CSR, SSR, or SSG.
- **Integration** → Payments, APIs, third-party services.
- **Hosting/Deployment** → Platforms like **Vercel**.
- **Performance** → Optimized images, fast loading.
- **Scalability** → Handle high traffic smoothly.
- **Developer Experience** → TypeScript, tooling, better productivity.

---

## 🌍 Market Relevance

- Thousands of companies use **Next.js**, many showcased on **Vercel’s platform**.
- High adoption = **strong job opportunities**.
- Skills in **React + Next.js** make you competitive in the global tech market.

---

✅ With this foundation, you’re ready to build **scalable, modern, and industry-relevant web applications** using **Next.js**.

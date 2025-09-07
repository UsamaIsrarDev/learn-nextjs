# Next.js Basics & Rendering Techniques

This document covers the **fundamentals of Next.js** including project setup, components, styling, routing, image optimization, linking, and rendering methods (SSG, SSR, CSR).

---

## Key Concepts

### 1. Project Setup

To create and run a Next.js project:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

- Local server runs at **http://localhost:3000**

---

### 2. Components

- **React Components** → Small building blocks of UI (like puzzle pieces).
- **Layout Component** → Reusable component that defines the base structure of pages.

---

### 3. Styling in Next.js

- **Global CSS** → Styles applied across the entire app (`globals.css`).
- **CSS Modules** → Scoped styles applied only to a specific component (e.g., `Home.module.css`).
- **UI Libraries** → You can use **Chakra UI, Tailwind, MUI** etc. for faster styling.

---

### 4. Images & Optimization

Next.js provides the `<Image />` component:

- Automatic **resizing**
- **Lazy loading** for performance
- Optimized image delivery

---

### 5. Routing in Next.js

- **File-based Routing**

  - Each file in the `pages/` folder becomes a route.
  - Example: `pages/about.js` → `/about`

- **Dynamic Routing**
  - Use brackets for dynamic routes.
  - Example: `pages/products/[id].js` → `/products/1`

---

### 6. Linking Between Pages

Use Next.js `<Link />` for client-side navigation:

```jsx
import Link from "next/link";

<Link href="/about">Go to About</Link>;
```

---

### 7. Pre-rendering

- **Static Site Generation (SSG)** → Pages generated at build time.
- **Server-Side Rendering (SSR)** → Pages generated at request time.
- Both improve **performance and SEO** compared to CSR.

---

## ⚡ Rendering in Next.js (SSG, SSR, CSR)

### 1. Static Site Generation (SSG)

📖 **Real-world example:**  
Mr. Sikandar prepares food **before guests arrive** (e.g., cooking Peshawari Karahi & naan in advance). Guests are served instantly.

🔧 **Technical meaning:**

- Pages generated **at build time** and served as static HTML.
- Best for content that **rarely changes** (blogs, docs, portfolios).

💻 **Code Example:**

```js
export async function getStaticProps() {
  const posts = await getPosts(); // fetched at build time
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
```

---

### 2. Server-Side Rendering (SSR)

📖 **Real-world example:**  
Guests request **fresh naan** during dinner → it is prepared **on-demand**.

🔧 **Technical meaning:**

- Pages are rendered **per request** on the server.
- Best for **frequently changing data** (weather, stocks, live dashboards).

💻 **Code Example:**

```js
export async function getServerSideProps(context) {
  const data = await fetchWeather(); // fetched on every request
  return { props: { data } };
}

export default function Weather({ data }) {
  return <h1>Today’s Weather: {data.temp}°C</h1>;
}
```

---

### 3. Client-Side Rendering (CSR)

📖 **Real-world example:**  
Guests are served **basic food first**, extra dishes (like Pepsi) are fetched later.

🔧 **Technical meaning:**

- Page loads with **basic HTML first**, then data is fetched **on the client** using APIs.
- Best for **user-specific or interactive content** (feeds, dashboards, search).

💻 **Code Example:**

```js
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then(setUser);
  }, []);

  if (!user) return <p>Loading...</p>;
  return <h1>Hello, {user.name}</h1>;
}
```

---

### 4. Mixed Rendering Approach

Next.js supports **per-page rendering**:

- Blog → **SSG** (static content)
- Weather App → **SSR** (real-time data)
- User Dashboard → **CSR** (personalized content)

---

## ✅ Summary

- **SSG** → Build time → Fastest & SEO-friendly.
- **SSR** → Request time → Real-time & SEO-friendly.
- **CSR** → Client-side → Best for personalization & interactivity.

Next.js allows mixing all three for **optimal performance and flexibility**.

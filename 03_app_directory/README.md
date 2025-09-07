# Next.js Class Notes

### 1. Assignments & Practice

- Completing assignments is mandatory — without practice, attending classes holds no real value.
- Assignments are currently checked in Islamabad and Peshawar; Karachi’s checking will begin soon.
- A form must be filled out by students who complete their assignments.

### 2. Start of Second Quarter

- The second quarter focuses on **2D User Interface (UI) Development**.
- Core technologies: **JavaScript, React, and Next.js**.
- Goal: Building modern, scalable, and interactive applications.

### 3. User Interface (UI)

- **UI = User + Interface** → the way a user interacts with a computer/software.
- Examples of interfaces:

  - Laptop → keyboard & mouse.
  - Mobile → touch screen.
  - Smart devices → sensors & gestures.

### 4. React & Next.js

- **React** → a JavaScript library for creating interactive UIs.
- **Next.js** → a React-based framework offering additional features.
- Together, they provide faster development, better performance, and enhanced scalability.

### 5. Why Frameworks like Next.js Are Needed

Modern apps require:

- **Clean UI** → engaging and responsive user interfaces.
- **Routing** → seamless navigation between pages.
- **Data fetching & integration** → working with APIs and third-party services.
- **Dynamic content rendering** → showing updated and real-time data.
- **Performance optimization** → faster load times to retain users.
- **Infrastructure/Deployment** → efficient hosting and scaling.
- **Flexibility & scalability** → support for large user bases.
- **Developer experience** → productivity tools like TypeScript and VS Code IntelliSense.

### 6. Client vs Server Components (React 18 + Next.js 13)

- **Client Components** → handle interactivity (forms, inputs, buttons).
- **Server Components** → handle structure (layouts, navigation bars).

### 7. Rendering Techniques in Next.js

- **CSR (Client-Side Rendering)** → UI is rendered in the browser.
- **SSR (Server-Side Rendering)** → HTML pre-rendered on the server for faster response.
- **SSG (Static Site Generation)** → pages generated at build time (ideal for portfolios/landing pages).

### 8. Routing in Next.js

- Routing = moving between app pages (e.g., homepage → about page).
- Next.js provides **file-system-based routing**, which is automatic and easy to use.

### 9. Perspectives

- **Developer’s perspective** → easier coding, debugging, and maintenance.
- **User’s perspective** → smooth, interactive, and fast user experience.

### 10. Practical Setup

- Creating a Next.js project with **TypeScript**.
- Project structure:

  - `package.json` → dependencies.
  - `app/` → application code.
  - `public/` → static assets (images, icons).
  - `globals.css` → global styles.

- First demo → a simple **Hello World app** running on a local server.

---

## 📌 Important Technical Notes

### 1. Basics of Routing

- Next.js uses **file-based routing**.
- Example:

  - `/app/page.js` → Home page (`/`).
  - `/app/posts/page.js` → Posts page (`/posts`).

### 2. Navigation

- Traditional `<a>` tags reload pages.
- Next.js provides the **`Link` component** for smooth, client-side navigation.
- For programmatic navigation (e.g., button click), use the **`useRouter` hook** → `router.push("/path")`.

### 3. Layouts & Styling

- Create **shared layouts** for headers, footers, and navigation bars.
- Use **CSS Modules** (`page.module.css`) for component-specific styling.
- Store images in the **`public/` folder** and use the optimized **`Image` component**.

### 4. Dynamic Routes

- Dynamic segments created with **square brackets `[ ]`**.
- Example: `/app/posts/[id]/page.js` → routes like `/posts/1`, `/posts/2`.
- Access route parameters using **`params`**.

### 5. Displaying Data

- Store data (e.g., blog posts) in `data/posts.js`.
- Use `.map()` to loop through posts:

  ```jsx
  posts.map((post) => <Link href={`/posts/${post.id}`}>{post.title}</Link>);
  ```

### 6. Static Site Generation (SSG)

- By default, Next.js uses **SSG** in the app router.
- To pre-generate specific routes, use **`generateStaticParams()`**.

### 7. SEO & Metadata

- Add page titles and metadata using the `metadata` object or `<head>` tag.

### 8. Client vs Server Components

- By default → **Server Components**.
- To add interactivity (e.g., `onClick`), add `"use client"` at the top of the file.

---

## ✅ Summary

- Learned **UI basics** and importance of practice.
- Understood **React + Next.js fundamentals**.
- Explored **why frameworks are needed**.
- Practiced **routing, navigation, layouts, and styling**.
- Implemented **dynamic routes & data rendering**.
- Learned about **rendering techniques (CSR, SSR, SSG)**.
- Differentiated between **client vs server components**.
- Built a **Hello World app** as a first project.

---

With this foundation, you’re ready to start building modern, scalable applications using **Next.js**.

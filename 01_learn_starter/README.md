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

# Next.js & React: 2D User Interface Development

## Table of Contents

1. [Course Overview](#course-overview)
2. [2D User Interface (UI) Fundamentals](#2d-user-interface-ui-fundamentals)
3. [Technology Choices](#technology-choices)
4. [Next.js Overview](#nextjs-overview)
5. [Key Concepts in Web Application Development](#key-concepts-in-web-application-development)
6. [Learning Approach](#learning-approach)
7. [Modern App Flexibility & Developer Experience](#modern-app-flexibility--developer-experience)
8. [React & User Interfaces](#react--user-interfaces)
9. [Next.js Framework Details](#nextjs-framework-details)
10. [Client-Server Architecture](#client-server-architecture)
11. [Next.js Project Setup](#nextjs-project-setup)
12. [Development Server](#development-server)
13. [Page Creation & Routing](#page-creation--routing)
14. [Static Assets & Images](#static-assets--images)
15. [Page Metadata & SEO](#page-metadata--seo)
16. [Adding Scripts & Third-Party Services](#adding-scripts--third-party-services)
17. [Styling in Next.js](#styling-in-nextjs)
18. [Layout Components](#layout-components)
19. [Page Content & Reusability](#page-content--reusability)
20. [Development & Testing Best Practices](#development--testing-best-practices)
21. [Best Practices Summary](#best-practices-summary)

---

## Course Overview

This course focuses on **2D User Interface (UI) Development** as part of the second quarter of the program.

- 2D UI refers to flat-screen experiences on **mobile phones, tablets, or laptops**.
- 3D development will be introduced in the fourth quarter.
- Focus areas include:

  1. **Cloud Computing** (serverless applications)
  2. **Blockchain** (limited due to cost; majority of data stored in the cloud)
  3. **2D/3D UI Design**

> Integration with existing technologies, not replacement.

## 2D User Interface (UI) Fundamentals

- **Technology Selection:** Choose the right tools and frameworks.
- **Software Development Life Cycle (SDLC):**

  - Requirement gathering & historical context
  - Development
  - Testing
  - Updates & maintenance

> SDLC ensures continuous improvement and maintainable software.

## Technology Choices

- Stay updated with **modern technologies**.
- Learn both **frameworks and libraries**.
- Example: **Next.js (framework) + React (library)** for scalable web apps.

## Next.js Overview

- Open-source JavaScript framework by **Vercel**.
- Built for **fast web application development and hosting**.
- Requires basic **JavaScript** and some **React** knowledge.

### Key Concepts in Web Application Development

- Navigation: User movement between pages
- Data Handling: Efficient data retrieval and display
- Rendering: Static vs dynamic content
- Integration: Third-party services (analytics, payments)
- Hosting & Execution: Server-client interaction
- Performance & Scalability: Optimize for user growth

## Learning Approach

- Hands-on learning with **React** and **Next.js**
- Focus on **real-world applications**
- Prepare for **software developer roles**

## Modern App Flexibility & Developer Experience

- Apps must be **scalable** to handle traffic changes.
- **Developer experience (DX)** is crucial.
- **TypeScript** enhances productivity by preventing errors.

## React & User Interfaces

- React builds **interactive, dynamic, high-performing UIs**.
- Next.js extends React with **routing, server-side rendering, and integrations**.

## Next.js Framework Details

- Multiple rendering techniques:

  - **Client-Side Rendering (CSR)**
  - **Server-Side Rendering (SSR)**
  - **Static Site Generation (SSG)**

- Automatic routing via **pages directory**

## Client-Server Architecture

- Client: User’s browser/device
- Server: Remote data storage and delivery
- Next.js simplifies server-client operations

## Next.js Project Setup

1. Install Node.js and npm/yarn
2. Create project:

```bash
npx create-next-app@latest <project-name>
```

3. Project structure includes:

   - React for UI
   - Pages folder for routing
   - Basic dependencies ready

## Development Server

- Runs on **localhost:3000** by default
- Supports **hot-reloading**
- Auto-increments ports if multiple servers run

## Page Creation & Routing

- File-based routing in **pages directory**
- Example:

  - `pages/index.js` → `/`
  - `pages/post/first-post.js` → `/post/first-post`

- Navigation using Next.js **`<Link>`**
- Prefetching for faster load times

## Static Assets & Images

- Store images/fonts in **public directory**
- Use **Next.js Image component** for optimization:

  - Modern formats
  - Lazy loading
  - Build-time optimization

- Supports local & external URLs

## Page Metadata & SEO

- Set titles & meta tags with Next.js **`Head` component**
- Each page can have **custom metadata**

## Adding Scripts & Third-Party Services

- Add scripts in the **Head**
- Integrate analytics, chat, rating systems
- Use **Next.js Script component** for optimized execution:

  - Strategies: `beforeInteractive`, `afterInteractive`, etc.
  - Reduces performance impact

## Styling in Next.js

- **CSS Modules:** Component-scoped styling

  - Unique class names
  - Example: `layout.module.css` for Layout component

- **Global CSS:** Shared styles across all pages (imported in `app.js`)
- **Utility Classes:** Reusable styles across multiple components

## Layout Components

- Reusable components for consistent page structures
- Pass data to child components
- Example: `components/Layout.js` + `components/layout.module.css`
- Promotes **DRY principle**

## Page Content & Reusability

- Components can receive **props** for dynamic content
- Layout & reusable components maintain **design consistency**
- Example: Home page with Layout + content + navigation link

## Development & Testing Best Practices

- Restart server after major changes
- Inspect auto-generated CSS class names
- Combine **CSS modules, global CSS, and utility classes** for scalable styling

## Best Practices Summary

- Use **CSS modules** for component-specific styles
- Use **global CSS** for shared styles
- Use **utility classes** for reusable styles
- Use **Next.js Script component** for third-party scripts
- Keep **layout components reusable** across pages

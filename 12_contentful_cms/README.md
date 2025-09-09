# 📖 CMS & Headless CMS with Contentful

## Overview

This document summarizes key learnings about **Content**, **CMS**, and **Headless CMS (Contentful)**, along with how they integrate with **Next.js** applications.

---

## Understanding Data & Content

### Previous Learning

- Earlier, APIs and data were created by **others**.
- Now, the focus is on learning how to **create both applications and data** ourselves.

### Data vs Content

- **Data** → Information used by applications.
- **Content** → Information created for business purposes (e.g., articles, product details, media).

### Example: Wall Street Journal (WSJ)

- The value of WSJ lies in its **content** (news, insights, business articles).
- Writers (non-developers) create content, while developers focus on code.

### CMS (Content Management System)

- Separates **content creation** (writers) from **code integration** (developers).
- Common in industry to streamline collaboration.

### Headless CMS (e.g., Contentful)

- **Headless = Content and its presentation are separated.**
- Writers add content → Developers fetch it → Applications display it.

#### Features of Contentful

- Real-time collaboration.
- Version control for tracking changes.
- CDN for automatic updates everywhere.
  - Example: If an author’s bio changes → it updates across all articles instantly.

---

## Contentful Basics

### Why Not Hardcoding?

- Without CMS, developers must hardcode text & images.
- This adds unnecessary load; writers should manage content instead.

### Role of Contentful

- Provides a **third-party tool** for managing content.
- Developers fetch content using **APIs** and integrate it into applications.

### Getting Started

1. Sign up for a free Contentful account.
2. Create an **organization/space**.
3. Define **Content Models** inside the space.

### Example: Article Content Model

An **Article** can include fields like:

- `Title` → short text, required, unique.
- `Author` → reference to an Author content type.
- `Article Text` → long/rich text.
- `Image/Media` → optional.
- `Date/Time` → publishing schedule.
- `Status` → published, draft, hidden.

### Supported Field Types

- Short text, long text, media, date/time.
- Boolean (yes/no).
- Location (latitude/longitude).
- References (linking to other models like Author).

### Validation Rules

- Mark fields as **required**.
- Ensure uniqueness (e.g., no duplicate titles).
- Define default values (except unique fields).

### Entries & Publishing

- Once models are ready → add entries.
- Entries can be: **Draft**, **Published**, or **Hidden**.
- Developers fetch them via API → App displays content.

**Summary:**  
Contentful = Define structured models → Writers add entries → Developers fetch via API → Users see content.

---

## Connecting Contentful with Next.js

### Content Modeling

- Think about requirements **before** building models.
- In real projects, architects handle this, but developers must understand it too.

### Content Delivery API (CDA)

- Used to fetch data from Contentful.
- **Read-only & optimized for delivery**.
- Content is distributed via **CDN** for faster response (nearest server).

### API Setup

- Requires a **Content Delivery Token**.
- API request includes:
  - Space ID
  - Environment (e.g., `master`)
  - Content Type
- Fetch all entries or a specific entry using its ID.

### Environment Variables

- Store tokens securely in `.env` files.
- Never hardcode sensitive credentials.

### Working with Data

- Example: Create two articles → fetch them via Postman.
- Articles can be in **draft** or **published** state.

### Rich Text Editing

- Writers can format text in CMS (headings, italics, bullet points).
- Developers fetch structured rich text and render it in apps.

### Next.js Integration

- Use API to fetch data inside Next.js.
- Map fields like `title`, `text`, `author`, `image`.
- Frontend decides how content is displayed (headless concept).

---

## Final Summary

🔄 **Workflow:**

1. Writers manage content inside **Contentful**.
2. Developers fetch data via **API**.
3. **Next.js** app renders the content.
4. Users always see the **latest updated content instantly**.

---

**In short:**

- **CMS/Headless CMS** makes collaboration easier.
- **Contentful** = Flexible, scalable, and integrates with modern apps.
- **Next.js + Contentful** = Powerful combination for building dynamic, content-driven applications.

**Assignment**

- Create a complete frontend with next.js + CMS with contentful

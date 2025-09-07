https://react-icons.github.io/react-icons/search/#q=bar%20chart

# 📘 2D UI Development

## Key Highlights

### 📝 Assignments & Practice

- Students must take **assignments seriously** and practice regularly.
- Start with **small practice tasks and components** before building complete projects.

### 🔄 Project Workflow

1. Begin with **small reusable components** (e.g., Tweet box, profile info, icons).
2. Gradually **combine components into a complete project**.
3. Ensure the project is **responsive** and add **animations step by step**.

### ⚛️ Components

- Components are **reusable React functions**.
- Example: **Tweet Component** (white box) includes:
  - Profile name
  - Twitter handle
  - Date of tweet
  - Tweet text
  - Icons (comments, retweets, likes, etc.)

### File Structure

- Create a `components` folder inside the `app` directory.
- Use `page.tsx` as the main entry point.

### 🎨 Styling

- Start with **simple styling**: margins, borders, background colors.
- Use **Flexbox** for horizontal/vertical alignment.
- Add spacing with **margins** (left, right, top, etc.).
- Use **semantic HTML tags** (`strong`, `span`, etc.) for text formatting.

### 🖼️ Icons & Layout

- Each icon (e.g., comment icon with number) is placed inside **flex containers**.
- Use `justify-between` or margins for proper spacing.

### ♻️ Reusability & Clean Code

- Avoid repeating **inline styles** → create reusable **CSS classes**.
- Always add **comments in code** to improve collaboration.

### 📐 Flexbox vs Grid

- **Flexbox**: Best for **one-dimensional layouts** (row _or_ column).
- **Grid**: Best for **two-dimensional layouts** (rows _and_ columns).
- Use **Grid** when complex designs require both directions.

---

## Key Points on CSS Grid & Tailwind

### 🔲 Grid Basics

- **Parent element** = Grid Container.
- **Child elements** = Grid Items.

### 📊 Grid Template Columns

- `grid-cols-*` in Tailwind defines the number of columns.
- Tailwind supports **up to 12 columns** by default.
- Example:
  ```html
  <div class="grid grid-cols-2"><!-- Two equal columns (50% each) --></div>
  ```

### ⚖️ Custom Column Sizes

- Override equal distribution with **custom values**:
  ```html
  <div class="grid grid-cols-[40%_60%]"><!-- Sidebar + Content --></div>
  ```

### 📏 Fractional Units (fr)

- `fr` = fraction of remaining space.
- Example:
  ```html
  <div class="grid grid-cols-[200px_1fr]">
    <!-- Fixed sidebar + flexible content -->
  </div>
  ```

### 📱 Responsive Grids

- Tailwind allows responsive layouts using breakpoints:
  ```html
  <div class="grid sm:grid-cols-2 lg:grid-cols-4"></div>
  ```
- Small screens → 2 columns.
- Large screens → 4 columns.

### ↕️ Grid Template Rows

- Similar to columns: `grid-rows-*`.
- Example:
  ```html
  <div class="grid grid-rows-3"><!-- 3 equal rows --></div>
  ```

### 📏 Spacing (Gap)

- `gap-*` → adds spacing between rows/columns.
- Example: `gap-4` = uniform spacing.
- Use `gap-x-*` (horizontal) and `gap-y-*` (vertical) separately.

### 🔀 Combining Grid & Flexbox

- **Flexbox** = one-dimensional (row _or_ column).
- **Grid** = two-dimensional (rows + columns).
- Example: **Facebook layout**
  ```html
  <div class="grid grid-cols-[25%_1fr_25%]"><!-- Sidebar + Main + Ads --></div>
  ```

### 🃏 Card Design Example

- Each card styled with:
  - `bg-gray-500` → background color.
  - `rounded-xl` → rounded corners.
  - `object-cover` or `object-contain` for images.
- Responsive layout:
  ```html
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
  ```

### Alignment in Grid

- Available utilities:
  - `justify-items`
  - `justify-content`
  - `items-center`
  - `place-items-center`

---

## 📚 Practice & Next Topic

- Students should practice **columns, rows, and grid layouts** independently.
- Next lecture → **API integration (JavaScript-based)**.

---

**Summary:**  
This lecture covered building reusable **Tweet components** with **React + Next.js**, styling with **Flexbox**, and an introduction to **CSS Grid with Tailwind**. Students should practice **small layouts**, then combine them into **responsive projects**. Flexbox is best for simple one-dimensional layouts, while Grid is more powerful for complex, multi-dimensional designs.

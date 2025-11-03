
# 🧱 Flowbite Guide

A comprehensive guide to getting started with **Flowbite**, a UI component library built on top of Tailwind CSS.  
It provides pre-built components, dark mode support, and interactive UI elements.  

---

## ✅ What is Flowbite?

**Flowbite** is an open-source UI component library based on Tailwind CSS utility classes. 
Key features:
- Over 50+ UI component types (e.g., buttons, modals, dropdowns, navbars) built with Tailwind CSS. 
- Supports dark mode out of the box. 
- Offers both HTML + vanilla JS integration as well as framework wrappers (React, Vue, Svelte, etc.). 

---

## 🚀 Quickstart / Installation

### Using NPM  
```bash
npm install flowbite
````

Then in your CSS (with Tailwind already configured):

```css
@import "flowbite/src/themes/default";
@plugin "flowbite/plugin";
```

And include the Flowbite JS before the end of <body>:

````html
<script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
````

### Using CDN  
```html
<link href="https://cdn.jsdelivr.net/npm/flowbite/dist/flowbite.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/flowbite/dist/flowbite.min.js"></script>
``` 

---

## 🧩 Basic Usage Example

For example, to create a simple modal using Flowbite:
```html
<!-- Trigger button -->
<button data-modal-target="exampleModal" data-modal-toggle="exampleModal" class="...">Open Modal</button>

<!-- Modal markup -->
<div id="exampleModal" tabindex="-1" class="hidden">
  <div class="modal-content">
    <h3 class="text-xl font-medium">Modal Title</h3>
    <p class="text-gray-500">Modal body content goes here.</p>
    <button data-modal-hide="exampleModal" class="...">Close</button>
  </div>
</div>

<script>
  import { Modal } from 'flowbite';
  const modalEl = document.querySelector('#exampleModal');
  const modal = new Modal(modalEl, { onShow: ()=>console.log('shown') });
  modal.show();
</script>
```

---

## 🔍 Component Highlights

- **Buttons** – styled, utility-class based buttons.  
- **Dropdowns & Menus** – interactive dropdowns using data attributes.  
- **Modals** – overlays, dialogs with controlled show/hide.  
- **Navbars / Sidebar** – responsive navigation components.  
- **Forms & Inputs** – styled form controls, validations.  
- **Dark Mode Support** – works with `dark:` classes from Tailwind.  

---

## 🔧 Framework Integrations

Flowbite supports multiple frameworks:

- **React**: Flowbite React library for React + Tailwind. 
- **Vue**: Flowbite Vue components built for Vue 3.   
- **Svelte**: Flowbite Svelte for Svelte applications.   

---

## 📝 Best Practices & Tips

- Purge unused Tailwind classes to keep CSS size small when using Flowbite.  
- Leverage data attributes (`data-modal-toggle`, `data-dropdown-toggle`) for simplicity.  
- Customize theme by extending Tailwind config and Flowbite plugin.  
- Ensure accessibility: check ARIA roles when using interactive components.  
- Use dark mode classes (`dark:`) and test both light and dark themes.  
- For large UI systems, consider the Pro version or Blocks for prebuilt layouts (optional).  

---

## 🧪 Example Flowbite Setup (Tailwind + Flowbite)

1. Install Tailwind CSS and initialize.  
2. Install Flowbite: `npm install flowbite`.  
3. Update `tailwind.config.js`:
   ```js
   module.exports = {
     content: [
       "./src/**/*.{html,js,jsx,ts,tsx}",
       "./node_modules/flowbite/**/*.js"
     ],
     theme: {
       extend: {},
     },
     plugins: [
       require('flowbite/plugin')
     ],
   }
```

4. In CSS (e.g., `src/styles.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   @import "flowbite/src/themes/default";
   ```
5. Use a Flowbite component in HTML/JSX:

   ```html
   <button class="btn btn-primary">Click me</button>
   <div class="modal hidden" id="myModal"> … </div>
   <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
   ```

---

## 🧭 Summary

Flowbite offers a fast way to build modern UIs using Tailwind CSS with ready-to-use interactive components. Whether building a simple landing page or a full-scale application, Flowbite can save development time while ensuring consistency and responsiveness.

---

## 📚 Resources & Documentation

- Official Flowbite Docs: [flowbite.com/docs](https://flowbite.com/docs)  
- GitHub Repository: [themesberg/flowbite](https://github.com/themesberg/flowbite)  
- Flowbite React: [flowbite-react.com](https://flowbite-react.com)  
- Tutorial / Crash Course: [YouTube – Flowbite Crash Course](https://www.youtube.com/watch?v=KaLxCiilHns) 


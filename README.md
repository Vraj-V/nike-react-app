🛒 Nike Store – React Cart Application

A simple Nike e-commerce frontend built with React that allows users to browse products, add items to a cart, and see real-time cart updates using localStorage.

🚀 Features

🧾 Product listing with price & discount price

🛒 Add to Cart functionality

🔁 Prevents duplicate items in cart

📦 Cart data stored in localStorage

🔢 Dynamic cart count in Navbar

✅ Button text changes to “Added” after adding item

🎨 Clean & modern UI

❌ Empty cart handling (“Nothing in Cart”)

🧠 Concepts Used

React Hooks

useState – UI updates (button text, cart count)

useEffect – sync UI with localStorage on load

localStorage

Persistent cart data across pages & refresh

Conditional Rendering

Empty cart vs cart summary

Button text change (Add → Added)

Reusable Components

Product Card

Navbar

Basic CSS Styling

🛠 Tech Stack

React (Vite)

JavaScript (ES6+)

HTML5

CSS3

localStorage (Browser API)


🚀 Deployment Guide: React (Vite) App on Vercel

This guide explains how to deploy a React app built with Vite on Vercel, including required configuration files and common mistakes.

🧠 Why extra config is needed?

Vite builds a Single Page Application (SPA)

React Router uses client-side routing

Vercel is a server-based platform

When user refreshes /cart or /login, Vercel looks for a real file ❌

👉 Solution: Rewrite all routes to index.html

✅ Step 1: Create vite.config.js

This tells Vite how to build your project.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // IMPORTANT for Vercel
})

🔍 Why base: '/' is important

Tells Vite where assets will be served from

Without it:

CSS may not load

JS bundle may break

Vercel serves from root /, so this is required

✅ Step 2: Create vercel.json

This file tells Vercel how to handle routing.

📁 File location:

root/
 ├─ src/
 ├─ public/
 ├─ vite.config.js
 ├─ vercel.json ✅

Correct vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

🧠 What this rewrite does (VERY IMPORTANT)
User visits	What Vercel does
/	serves index.html
/cart	serves index.html
/login	serves index.html
/product/5	serves index.html

👉 Then React Router takes over and shows the correct page. 
✅ Step 3: React Router setup (required)

Make sure your app uses BrowserRouter, not HashRouter.

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


Without this → routing breaks even with rewrites.

✅ Step 4: Build locally (optional but recommended)

Before deploying, test build:

npm run build
npm run preview


If preview works → Vercel will work.

✅ Step 5: Push to GitHub
git add .
git commit -m "Ready for Vercel deployment"
git push origin main

✅ Step 6: Deploy on Vercel

Go to vercel.com

Click New Project

Import your GitHub repo

Vercel auto-detects Vite 🎉

Click Deploy
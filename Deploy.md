

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
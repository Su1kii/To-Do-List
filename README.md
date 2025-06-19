# 📝 To-Do List App

A full-stack, authenticated to-do list application built with **Next.js 14 (App Router)**, **Prisma ORM**, **Clerk authentication**, and **PostgreSQL**. Users can add, delete, and mark tasks as complete, with real-time UI updates and secure backend validation.

---

## 🚀 Features

- ✅ Create new to-do items
- 🗑️ Delete tasks
- ✏️ Click to toggle task completion
- 🔐 Clerk authentication (user-specific task lists)
- 🔄 Revalidates tasks on every action
- 💅 TailwindCSS UI
- 🧠 Built with React Server + Client Components

---

## 🧱 Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, React, Tailwind CSS
- **Backend:** Prisma ORM, PostgreSQL, Next.js server actions
- **Auth:** Clerk.dev (with `currentUser()` integration)
- **Hosting:** Vercel or localhost

---

## 🖼️ Demo

![Demo Screenshot](./to_do.png) 

---

### 🔗 Live Demo  
[https://to-do-list-two-mu-63.vercel.app](https://to-do-list-two-mu-63.vercel.app)

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/todo-app.git
cd todo-app

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Fill in your database URL and Clerk credentials in the .env file

# Push Prisma schema
npx prisma db push

# Run dev server
pnpm dev

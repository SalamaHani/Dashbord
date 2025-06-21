
# 📊 Admin Dashboard – E-Commerce App

A responsive and modern **Admin Dashboard** for managing an E-Commerce platform. Built with **React.js (Vite)** and powered by **Laravel PHP** backend.

## ⚙️ Features

### 🧑‍💻 Frontend (React Dashboard)
- 🚀 Vite for lightning-fast development
- 🧭 React Router 6.4+ with nested layouts
- 🧩 Redux Toolkit (RTK) for global admin state
- 🔁 React Query for real-time API data
- 🧪 Axios for secure HTTP calls
- 🎨 Shadcn UI + Tailwind CSS for stunning UI
- 📊 Dashboard with analytics, orders, and product management
- 🔐 Admin login & protected routes

### 🔧 Backend (Laravel)
- 🧬 RESTful API endpoints (admin/user routes)
- 🗂️ Roles & permissions (admin vs customer)
- 📦 Product/Order/User management
- 🔐 Auth via Sanctum or JWT

---

## 🧱 Admin Dashboard Structure

```
dashboard/
├── src/
│   ├── components/        # UI components
│   ├── features/          # Redux slices (auth, analytics, etc.)
│   ├── pages/             # Routes (Dashboard, Products, Orders, etc.)
│   ├── services/          # Axios + Query hooks
│   ├── layout/            # Sidebar, Navbar, Layouts
│   └── main.tsx
│
└── tailwind.config.js
```

---

## 🚀 Getting Started

### 💻 Frontend

```bash
cd dashboard
npm install
npm run dev
```

Set your `.env`:

```
VITE_API_URL=http://localhost:8000/api
```

---

### ⚙️ Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Allow CORS from frontend and setup auth guard in `config/sanctum.php` or use `jwt-auth`.

---

## 🧪 Tech Stack

| Layer       | Technology               |
|-------------|---------------------------|
| Frontend    | React.js + Vite           |
| Router      | React Router 6.4+         |
| State       | Redux Toolkit + React Query |
| Styling     | Tailwind CSS + Shadcn UI  |
| Backend     | Laravel PHP               |
| Auth        | Sanctum or JWT            |
| DB          | MySQL / PostgreSQL        |

---

## ✨ Admin Features

- [x] Admin login/logout
- [x] Product CRUD
- [x] View & manage customer orders
- [x] Sales analytics dashboard
- [x] User management
- [x] Role-based route protection

---

## 🔐 API Endpoints (Admin)

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| GET    | `/api/admin/products`  | Fetch all products        |
| POST   | `/api/admin/products`  | Create new product        |
| PUT    | `/api/admin/products/:id` | Update product         |
| DELETE | `/api/admin/products/:id` | Delete product         |
| GET    | `/api/admin/orders`    | View customer orders      |
| GET    | `/api/admin/stats`     | Analytics data            |

---

## 📸 Screenshots

> Add admin dashboard screenshots, charts, tables, product editor, etc.

---

## 📄 License

MIT License

---

## 🙋‍♂️ Feedback / Help

Create an issue or discussion if you need help or want to contribute.


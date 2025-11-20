# 🏥 XMedify - Healthcare Appointment Platform

A modern healthcare application for searching and booking medical appointments at hospitals. Built with React 19, Vite, and Material-UI.

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Pages](#pages)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# Opens at http://localhost:5173
```

---

## ✨ Features

- **Hospital Search** — Find hospitals by state and city
- **Appointment Booking** — Book appointments with 7-day calendar picker
- **Time Slots** — Choose morning, afternoon, or evening slots
- **My Bookings** — View all your bookings in one place
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Material Design** — Clean and professional UI

---

## 🛣️ Pages

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Landing page with features and specializations |
| **Search** | `/search?state=X&city=Y` | Hospital search and booking |
| **My Bookings** | `/my-bookings` | View all booked appointments |

---

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components
├── Home/             # Landing page
├── Search/           # Search & booking page
├── MyBookings/       # Bookings dashboard
├── App.jsx           # Root component
└── index.jsx         # Entry point & routing
```

---

## 🏗️ Technology Stack

| Tool | Version |
|------|---------|
| React | 19.2 |
| Vite | 7.2 |
| Material-UI | 7.3 |
| React Router | 7.9 |
| Axios | 1.13 |
| date-fns | 4.1 |

**API Backend:** https://meddata-backend.onrender.com

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Check code quality
npm run preview  # Preview production build
```

---

## 🌐 How It Works

1. **Search** → Select state and city
2. **Results** → Browse available hospitals
3. **Book** → Choose date and time slot
4. **Confirm** → Save appointment
5. **View** → Check bookings anytime

---

## 💾 Data Storage

Bookings are saved in browser localStorage and persist across sessions.

---

## 📄 License

MIT

---

<div align="center">

**Made with ❤️ for XMedify**

</div>




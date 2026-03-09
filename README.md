# 🌍 Travel Bucket List

A personal web application for saving the places you dream of visiting, writing why each destination calls to you, and tracking your progress as you turn wishlist destinations into real memories.

Built for DIG 4503 — Midterm Project.

---

## What the App Does

Travel Bucket List gives you a private, organized space to manage your travel goals. You can add destinations from anywhere in the world, attach a photo, write a personal note about why you want to go, and rate how high it sits on your priority list. As you travel, you update each destination's status — moving it from Wishlist to In Progress to Visited — and watch your personal stats grow over time.

All data is tied to your account, so your list is private and accessible from any device.

---

## Planned Features

- 🔐 **User Authentication** — Sign up and log in with email/password or Google via Firebase Auth
- ➕ **Add & Manage Destinations** — Full create, read, update, and delete (CRUD) for travel destinations stored in Firestore
- 📌 **Status Tracking** — Move destinations through three stages: Wishlist → In Progress → Visited
- 🔍 **Search, Filter & Sort** — Filter by continent or status, sort by priority or date added, and search by name
- ⭐ **Priority Rating** — Rate each destination 1–5 so you always know where to go next
- 🖼️ **Photo Attachment** — Upload a photo via Firebase Storage or pull one from the Unsplash API
- 📊 **Stats Dashboard** — See how many places you've saved, visited, and have left to explore
- 🔒 **Private Data** — Firestore security rules ensure each user can only access their own destinations

---

## Technologies Used

| Layer | Technology |
|-------|-----------|
| Frontend framework | React 18 |
| Build tool | Vite |
| Routing | React Router v6 |
| Authentication | Firebase Auth |
| Database | Cloud Firestore |
| File storage | Firebase Storage |
| Styling | Plain CSS (component-scoped) |
| Hosting | Firebase Hosting *(planned)* |

---

## Project Structure

```
src/
├── components/
│   ├── common/        # Reusable UI elements (buttons, modals, badges)
│   └── layout/        # Navbar, Footer
├── context/           # React Context for auth and bucket list state
├── hooks/             # Custom hooks (useAuth, useBucketList)
├── pages/             # One component per route (Landing, Dashboard, etc.)
├── services/          # Firebase calls (auth.js, db.js)
└── utils/             # Helper functions
```

---

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A [Firebase](https://firebase.google.com/) project with Firestore and Authentication enabled

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd travel-bucket-list
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env` file in the project root and add your Firebase config values:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> **Note:** Never commit your `.env` file. It is listed in `.gitignore`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

---

## Current Status

The landing page is complete. Full application features are under active development.

---

## Author

Aurora Gibson — DIG 4503, Spring 2026

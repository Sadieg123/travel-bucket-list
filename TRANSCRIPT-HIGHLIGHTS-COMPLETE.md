# Transcript Highlights

## 1. Planning the Firebase Architecture
At the beginning of development, I asked Claude to help design the architecture for my React + Vite application before writing code. We discussed how to structure the project folders, manage authentication using Firebase Auth, and store user-specific data in Firestore. Planning the architecture first helped keep the project organized and prevented major refactoring later.

## 2. Solving GitHub Pages Routing Issues
During development I discovered that BrowserRouter was breaking when deployed to GitHub Pages because the server cannot handle deep routes. I worked with Claude to switch to HashRouter so routes like /#/dashboard would work correctly on a static host. This ensured the deployed app functioned properly outside of localhost.

## 3. Implementing Firebase Authentication
Claude helped me implement Firebase Authentication with both email/password login and Google sign-in. We created protected routes so only logged-in users could access the dashboard. This required connecting Firebase Auth to a React AuthContext so authentication state could be accessed throughout the app.

## 4. Building Firestore CRUD Operations
I worked with Claude to design Firestore queries that store each destination with a userId field. This allowed the app to filter data so each user only sees their own destinations. We implemented functions to create, update, delete, and retrieve destinations, which enabled the core functionality of the Travel Bucket List.

## 5. Debugging Data Loading and Real-Time Updates
While connecting Firestore, I encountered issues where destination lists were not updating correctly. Using Claude, I implemented a real-time Firestore listener with onSnapshot so the dashboard automatically updates when data changes. This improved the user experience and ensured the app stayed in sync with the database.
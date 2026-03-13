import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Wraps any route that requires the user to be logged in.
// Usage in App.jsx:
//   <ProtectedRoute><Dashboard /></ProtectedRoute>
export default function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  // Wait until Firebase has checked the login state before deciding
  if (loading) return null;

  // Not logged in — send to login page
  if (!currentUser) return <Navigate to="/login" replace />;

  // Logged in — show the page
  return children;
}

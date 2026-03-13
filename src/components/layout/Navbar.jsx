import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">🌍 Travel Bucket List</Link>
        <nav className="navbar-links">
          {currentUser ? (
            <>
              <span className="nav-user">{currentUser.email}</span>
              <button className="nav-link" onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Sign In</Link>
              <Link to="/signup" className="nav-link nav-link-primary">Get Started</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

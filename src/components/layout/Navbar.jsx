import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">🌍 Travel Bucket List</span>
        <nav className="navbar-links">
          {/* These will become real links once routing is added */}
          <button className="nav-link" disabled>Sign In</button>
          <button className="nav-link nav-link-primary" disabled>Get Started</button>
        </nav>
      </div>
    </header>
  );
}

import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const features = [
  '🔐 User authentication with email and Google sign-in',
  '➕ Add destinations with a name, country, and reason for visiting',
  '📌 Track status: Wishlist, In Progress, or Visited',
  '🔍 Search and filter by continent, status, or priority',
  '⭐ Rate destinations by priority (1–5 stars)',
  '🖼️ Attach a photo to each destination',
  '📊 Personal stats dashboard (places saved, visited, remaining)',
  '🔒 Private lists — your data is only visible to you',
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="landing-wrapper">
      <div className="landing-card">

        {/* Header */}
        <div className="landing-header">
          <span className="landing-emoji">🌍</span>
          <h1>Travel Bucket List</h1>
          <p className="landing-tagline">
            Save the places you dream of visiting and write why each one calls to you.
            Track your progress as you turn wishlist destinations into real memories.
          </p>
        </div>

        {/* Features */}
        <section className="features-section">
          <h2>Features</h2>
          <ul className="features-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* CTA buttons */}
        <div className="landing-actions">
          <button className="btn-primary" onClick={() => navigate('/signup')}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>

      </div>
    </main>
  );
}

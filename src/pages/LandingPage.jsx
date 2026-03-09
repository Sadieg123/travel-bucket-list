import './LandingPage.css';

const plannedFeatures = [
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

        {/* Planned Features */}
        <section className="features-section">
          <h2>Planned Features</h2>
          <ul className="features-list">
            {plannedFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Status note */}
        <div className="status-banner">
          🚧 This app is currently under development. Full features coming soon!
        </div>

        {/* CTA buttons (non-functional placeholders for now) */}
        <div className="landing-actions">
          <button className="btn-primary" disabled>Get Started</button>
          <button className="btn-secondary" disabled>Sign In</button>
        </div>

      </div>
    </main>
  );
}

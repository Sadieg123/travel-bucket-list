import DestinationCard from './DestinationCard';
import './Destination.css';

export default function DestinationList({ destinations, onEdit, onDelete }) {
  if (destinations.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state-icon">🌍</p>
        <p className="empty-state-title">No destinations yet</p>
        <p className="empty-state-hint">
          Click &ldquo;+ Add Destination&rdquo; to start your bucket list!
        </p>
      </div>
    );
  }

  return (
    <div className="destination-grid">
      {destinations.map((dest) => (
        <DestinationCard
          key={dest.id}
          destination={dest}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

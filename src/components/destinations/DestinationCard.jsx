import './Destination.css';

// Background and text colors for each status badge
const STATUS_BG = {
  Wishlist: '#e3f2fd',
  'In Progress': '#fff8e1',
  Visited: '#e8f5e9',
};

const STATUS_COLOR = {
  Wishlist: '#1565c0',
  'In Progress': '#f57f17',
  Visited: '#2e7d32',
};

export default function DestinationCard({ destination, onEdit, onDelete }) {
  const { name, country, continent, status, reason, priority, imageUrl } = destination;

  return (
    <div className="dest-card">
      {/* Image or gradient placeholder so all cards have the same height */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="dest-card-image"
          onError={(e) => {
            // If the URL is broken, swap to the placeholder div
            e.target.replaceWith(Object.assign(document.createElement('div'), {
              className: 'dest-card-placeholder',
            }));
          }}
        />
      ) : (
        <div className="dest-card-placeholder" aria-hidden="true" />
      )}

      <div className="dest-card-body">
        {/* Name, location, status badge */}
        <div className="dest-card-header">
          <div className="dest-card-title">
            <h3 className="dest-name">{name}</h3>
            <p className="dest-location">
              {country}{continent ? ` · ${continent}` : ''}
            </p>
          </div>
          <span
            className="dest-status"
            style={{ background: STATUS_BG[status], color: STATUS_COLOR[status] }}
          >
            {status}
          </span>
        </div>

        {/* Priority stars */}
        {priority && (
          <p className="dest-priority" title={`Priority: ${priority}/5`}>
            {'★'.repeat(Number(priority))}{'☆'.repeat(5 - Number(priority))}
          </p>
        )}

        {/* Reason */}
        {reason && <p className="dest-reason">{reason}</p>}

        {/* Edit / Delete buttons */}
        <div className="dest-actions">
          <button className="btn-edit" onClick={() => onEdit(destination)}>
            Edit
          </button>
          <button className="btn-delete" onClick={() => onDelete(destination.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

import { STATUSES, CONTINENTS } from '../../utils/constants';
import './Destination.css';

// Receives the current filter values and an onChange handler from Dashboard.
// onChange(field, value) updates a single filter at a time.
export default function DashboardFilters({ search, status, continent, priority, onChange, onClear }) {
  const hasActiveFilters = search || status || continent || priority;

  return (
    <div className="filters-bar">
      <input
        type="search"
        className="filter-search"
        placeholder="Search by name or country…"
        value={search}
        onChange={(e) => onChange('search', e.target.value)}
      />

      <select value={status} onChange={(e) => onChange('status', e.target.value)}>
        <option value="">All statuses</option>
        {STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <select value={continent} onChange={(e) => onChange('continent', e.target.value)}>
        <option value="">All continents</option>
        {CONTINENTS.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select value={priority} onChange={(e) => onChange('priority', e.target.value)}>
        <option value="">Any priority</option>
        {[5, 4, 3, 2, 1].map((n) => (
          <option key={n} value={String(n)}>
            {'★'.repeat(n)} — {n} star{n > 1 ? 's' : ''}
          </option>
        ))}
      </select>

      {hasActiveFilters && (
        <button className="btn-clear-filters" onClick={onClear}>
          Clear filters
        </button>
      )}
    </div>
  );
}

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useDestinations } from '../hooks/useDestinations';
import DestinationList from '../components/destinations/DestinationList';
import DestinationForm from '../components/destinations/DestinationForm';
import DashboardFilters from '../components/destinations/DashboardFilters';
import './Dashboard.css';

// Default filter state — all empty means "no filter applied"
const EMPTY_FILTERS = { search: '', status: '', continent: '', priority: '' };

export default function Dashboard() {
  const { currentUser } = useAuth();
  const { destinations, loading, addDestination, updateDestination, deleteDestination } =
    useDestinations();

  const [panelOpen, setPanelOpen] = useState(false);
  const [editingDest, setEditingDest] = useState(null);
  const [filters, setFilters] = useState(EMPTY_FILTERS);

  // Update a single filter field without clearing the others
  function handleFilterChange(field, value) {
    setFilters((prev) => ({ ...prev, [field]: value }));
  }

  function clearFilters() {
    setFilters(EMPTY_FILTERS);
  }

  // Apply all active filters to the destinations array
  const filteredDestinations = destinations.filter((d) => {
    const { search, status, continent, priority } = filters;

    if (search) {
      const q = search.toLowerCase();
      const matchesName = d.name?.toLowerCase().includes(q);
      const matchesCountry = d.country?.toLowerCase().includes(q);
      if (!matchesName && !matchesCountry) return false;
    }

    if (status && d.status !== status) return false;
    if (continent && d.continent !== continent) return false;
    if (priority && String(d.priority) !== priority) return false;

    return true;
  });

  const hasActiveFilters = Object.values(filters).some(Boolean);

  function openAddPanel() {
    setEditingDest(null);
    setPanelOpen(true);
  }

  function openEditPanel(destination) {
    setEditingDest(destination);
    setPanelOpen(true);
  }

  function closePanel() {
    setPanelOpen(false);
    setEditingDest(null);
  }

  async function handleSave(formData) {
    if (editingDest) {
      await updateDestination(editingDest.id, formData);
    } else {
      await addDestination({ ...formData, userId: currentUser.uid });
    }
  }

  async function handleDelete(id) {
    if (window.confirm('Delete this destination? This cannot be undone.')) {
      await deleteDestination(id);
    }
  }

  const visitedCount = destinations.filter((d) => d.status === 'Visited').length;

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <div>
          <h1>My Bucket List</h1>
          <p className="dashboard-stats">
            {destinations.length} saved · {visitedCount} visited ·{' '}
            {destinations.length - visitedCount} to go
          </p>
        </div>
        <button className="btn-add" onClick={openAddPanel}>
          + Add Destination
        </button>
      </div>

      <div className={`dashboard-body ${panelOpen ? 'panel-open' : ''}`}>
        <div className="dashboard-list-area">
          {loading ? (
            <p className="loading-text">Loading your destinations…</p>
          ) : (
            <>
              {/* Only show filters once the user has at least one destination */}
              {destinations.length > 0 && (
                <DashboardFilters
                  search={filters.search}
                  status={filters.status}
                  continent={filters.continent}
                  priority={filters.priority}
                  onChange={handleFilterChange}
                  onClear={clearFilters}
                />
              )}

              {/* No results from active filters */}
              {hasActiveFilters && filteredDestinations.length === 0 ? (
                <div className="no-results">
                  <p className="no-results-title">No destinations match your filters</p>
                  <p className="no-results-hint">
                    Try adjusting the filters or{' '}
                    <button className="btn-inline-link" onClick={clearFilters}>
                      clear them
                    </button>
                  </p>
                </div>
              ) : (
                <DestinationList
                  destinations={filteredDestinations}
                  onEdit={openEditPanel}
                  onDelete={handleDelete}
                />
              )}
            </>
          )}
        </div>

        {panelOpen && (
          <div className="dashboard-panel">
            <DestinationForm
              initialValues={editingDest}
              onSave={handleSave}
              onClose={closePanel}
            />
          </div>
        )}
      </div>
    </div>
  );
}

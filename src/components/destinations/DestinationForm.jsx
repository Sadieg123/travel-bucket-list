import { useState, useEffect } from 'react';
import { CONTINENTS, STATUSES } from '../../utils/constants';
import './Destination.css';

const EMPTY_FORM = {
  name: '',
  country: '',
  continent: '',
  status: 'Wishlist',
  reason: '',
  notes: '',
  priority: 3,
  visitedDate: '',
  imageUrl: '',
};

export default function DestinationForm({ initialValues, onSave, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [imageError, setImageError] = useState(false);

  // When editing, pre-fill the form with the existing destination's values
  useEffect(() => {
    if (initialValues) {
      setForm({ ...EMPTY_FORM, ...initialValues });
    } else {
      setForm(EMPTY_FORM);
    }
  }, [initialValues]);

  // Reset the image error state whenever the URL changes
  useEffect(() => {
    setImageError(false);
  }, [form.imageUrl]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(form);
      onClose();
    } catch (err) {
      console.error('Save failed:', err);
      setSaving(false);
    }
  }

  return (
    <div className="dest-form-card">
      <div className="dest-form-header">
        <h2>{initialValues ? 'Edit Destination' : 'New Destination'}</h2>
        <button className="btn-close" onClick={onClose} aria-label="Close panel">
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="dest-form">
        <label>
          Destination Name *
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="e.g. Kyoto"
          />
        </label>

        <label>
          Country *
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            required
            placeholder="e.g. Japan"
          />
        </label>

        <label>
          Continent
          <select name="continent" value={form.continent} onChange={handleChange}>
            <option value="">— Select —</option>
            {CONTINENTS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange}>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        {/* Only show date picker when status is Visited */}
        {form.status === 'Visited' && (
          <label>
            Date Visited
            <input
              type="date"
              name="visitedDate"
              value={form.visitedDate}
              onChange={handleChange}
            />
          </label>
        )}

        <label>
          Priority
          <select name="priority" value={form.priority} onChange={handleChange}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} — {'★'.repeat(n)}
              </option>
            ))}
          </select>
        </label>

        <label>
          Why do you want to go? *
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            required
            rows={3}
            placeholder="What draws you to this place?"
          />
        </label>

        <label>
          Notes (optional)
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={2}
            placeholder="Anything else to remember…"
          />
        </label>

        <label>
          Image URL (optional)
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
        </label>

        {/* Live image preview */}
        {form.imageUrl && (
          <div className="img-preview-wrapper">
            {imageError ? (
              <p className="img-preview-error">
                ⚠️ Could not load image — double-check the URL.
              </p>
            ) : (
              <img
                src={form.imageUrl}
                alt="Preview"
                className="img-preview"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        )}

        {/* Hint for finding free images */}
        <p className="img-hint">
          💡 Find free photos at{' '}
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">
            unsplash.com
          </a>
          {' '}— open any photo, right-click → Copy image address
        </p>

        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? 'Saving…' : initialValues ? 'Save Changes' : 'Add Destination'}
        </button>
      </form>
    </div>
  );
}

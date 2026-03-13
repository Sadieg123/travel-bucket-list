import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  subscribeToDestinations,
  addDestination,
  updateDestination,
  deleteDestination,
} from '../services/destinations';

// This hook gives the Dashboard everything it needs to manage destinations.
// It sets up a real-time Firestore listener and automatically cleans up when
// the component unmounts.
export function useDestinations() {
  const { currentUser } = useAuth();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = subscribeToDestinations(currentUser.uid, (data) => {
      setDestinations(data);
      setLoading(false);
    });

    // Stop listening when the component unmounts
    return unsubscribe;
  }, [currentUser]);

  return {
    destinations,
    loading,
    addDestination,
    updateDestination,
    deleteDestination,
  };
}

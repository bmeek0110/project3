import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../services/eventService';
import { submitPrediction } from '../services/predictionService';

const Prediction = () => {
  const [events, setEvents] = useState([]);
  const [predictions, setPredictions] = useState({});

  useEffect(() => {
    const loadEvents = async () => {
      const events = await fetchEvents();
      setEvents(events);
    };
    loadEvents();
  }, []);

  const handleChange = (eventId, matchIndex, outcome) => {
    setPredictions((prev) => ({
      ...prev,
      [eventId]: { ...prev[eventId], [matchIndex]: outcome },
    }));
  };

  const handleSubmit = async (eventId) => {
    await submitPrediction(eventId, predictions[eventId]);
    // Optionally update UI or show success message
  };

  return (
    <div>
      {events.map((event) => (
        <div key={event._id}>
          <h2>{event.title}</h2>
          {event.matches.map((match, index) => (
            <div key={index}>
              <span>{match.wrestler1} vs {match.wrestler2}</span>
              <select onChange={(e) => handleChange(event._id, index, e.target.value)}>
                <option value="">Select Winner</option>
                <option value={match.wrestler1}>{match.wrestler1}</option>
                <option value={match.wrestler2}>{match.wrestler2}</option>
              </select>
            </div>
          ))}
          <button onClick={() => handleSubmit(event._id)}>Submit Predictions</button>
        </div>
      ))}
    </div>
  );
};

export default Prediction;

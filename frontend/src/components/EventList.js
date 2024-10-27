import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../services/eventService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const events = await fetchEvents();
      setEvents(events);
    };
    loadEvents();
  }, []);

  return (
    <div>
      <h1>WWE Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title} - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;

import "./App.css";
import EventShow from "./EventShow";
import { useState } from "react";

function getRandomEvent() {
    const events = [
        { type: 'concert', title: 'Concert', features: ['Live Music', 'Great Atmosphere'] },
        { type: 'expo', title: 'Expo', features: ['Networking', 'Innovative Displays'] },
        { type: 'festival', title: 'Festival', features: ['Outdoor Fun', 'Multiple Stages'] },
        { type: 'launch', title: 'Launch', features: ['New Products', 'Exciting Announcements'] },
        { type: 'political', title: 'Political Event', features: ['Speeches', 'Debates'] },
        { type: 'seminar', title: 'Seminar', features: ['Educational Talks', 'Expert Speakers'] }
    ];
    return events[Math.floor(Math.random() * events.length)];
}

function App() {
    const [events, setEvents] = useState([]);

    const handleClick = () => {
        setEvents([...events, getRandomEvent()]);
    };

    const renderedEvents = events.map((event, index) => (
        <EventShow
            type={event.type}
            title={event.title}
            features={event.features}
            key={index}
        />
    ));

    return (
        <div className="app">
            <button onClick={handleClick}>Add Event</button>
            <div className="event-list">{renderedEvents}</div>
        </div>
    );
}

export default App;

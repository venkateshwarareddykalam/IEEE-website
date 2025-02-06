import React, { useState } from 'react';
import '../styles/AgendaSpeakers.css';

const speakers = [
  {
    id: 1,
    name: "Kat Cole",
    title: "CEO @ AG1",
    description:
      "Kat Cole is CEO at AG1, a global health company focused on foundational nutrition. In her role, she is responsible for leading AG1’s next phase of growth, global expansion, and innovation.",
    image: "/speaker1.avif", // Replace with your image path
  },
  {
    id: 2,
    name: "Speaker 2",
    title: "Title @ Company",
    description: "Description for Speaker 2.",
    image: "/speaker2.avif", // Replace with your image path
  },
  {
    id: 3,
    name: "Speaker 3",
    title: "Title @ Company",
    description: "Description for Speaker 3.",
    image: "/speaker3.avif", // Replace with your image path
  },
  {
    id: 4,
    name: "Speaker 4",
    title: "Title @ Company",
    description: "Description for Speaker 4.",
    image: "/speaker4.avif", // Replace with your image path
  },
];

const AgendaSpeakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  return (
    <div className="past-speakers-page">
      {/* Large Heading */}
      <div className="heading-container">
        <h1>Past Speakers</h1>
      </div>

      {/* Agenda & Speakers Section */}
      <div className="agenda-speakers">
        <p>
          Curious what happens when innovative minds gather to share their best
          ideas? Take a look at some of our past programming to see the
          change-makers and creative thinkers who make this event unlike any
          other.
        </p>
        <div className="speakers-container">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className={`speaker-card ${
                activeSpeaker === speaker.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSpeaker(speaker.id)}
              onMouseLeave={() => setActiveSpeaker(null)}
            >
              {/* Speaker Image */}
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />

              {/* Speaker Details */}
              <div className="speaker-details">
                <h3>{speaker.name}</h3>
                <p className="title">{speaker.title}</p>
                {activeSpeaker === speaker.id && (
                  <p className="description">{speaker.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgendaSpeakers;

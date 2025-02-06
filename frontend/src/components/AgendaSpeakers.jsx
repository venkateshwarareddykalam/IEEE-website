import React, { useState } from 'react';
import '../styles/AgendaSpeakers.css';

const speakers = [
  { id: 1, name: "Kat Cole", title: "CEO @ AG1", desc: "Leading AG1’s next phase of growth. Passionate about wellness and innovation.", img: "speaker1.avif" },
  { id: 2, name: "John Doe", title: "Co-Founder @ TechFlow", desc: "Tech entrepreneur specializing in software development, always striving to push boundaries.", img: "speaker2.avif" },
  { id: 3, name: "Jane Smith", title: "CMO @ Creativix", desc: "Marketing strategist with a focus on building brand awareness and customer loyalty.", img: "speaker3.avif" },
  { id: 4, name: "Michael Brown", title: "Founder @ Cloud Innovations", desc: "Expert in cloud computing and digital transformation, leading change across industries.", img: "speaker4.avif" }
];

const AgendaSpeakers = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="past-speakers-page">
      <h1 className="heading">Speakers</h1>
      <p className="description">
        Innovative minds sharing their best ideas. Meet our past speakers.
      </p>
      
      <div className="speakers-container">
        {speakers.map(({ id, name, title, desc, img }) => (
          <div
            key={id}
            className={`speaker-card ${activeId === id ? "active" : ""}`}
            onMouseEnter={() => setActiveId(id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <img src={img} alt={name} className="speaker-image" />
            <div className="speaker-details">
              <h3>{name}</h3>
              <p className="title">{title}</p>
              {activeId === id && <p className="description">{desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaSpeakers;

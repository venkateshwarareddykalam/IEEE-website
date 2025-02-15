import React from "react";
import "../styles/AboutConference.css";

const AboutConference = () => {
  const tracks = [
    {
      title: "Track 1. AI for Environmental Sustainability",
      points: [
        "AI algorithms for climate change prediction and modeling.",
        "Satellite image analysis for deforestation and glacier monitoring.",
        "AI for precision agriculture and water conservation.",
        "Smart irrigation systems powered by AI.",
        "AI-based early warning systems for natural disasters (floods, earthquakes, hurricanes).",
        "Reducing e-waste using AI-based recycling and material recovery methods.",
      ],
    },
    {
      title: "Track 2. AI for Healthcare and Well-being",
      points: [
        "AI for telemedicine and remote patient monitoring in underserved areas.",
        "Predictive analytics for epidemic and pandemic outbreak control.",
        "Applications of machine learning in drug discovery and vaccine development.",
        "AI for tackling malnutrition and improving maternal and child health.",
        "AI-powered prosthetics and assistive technologies for individuals with disabilities.",
        "Personalized AI fitness and mental health solutions for global populations.",
      ],
    },
    {
      title: "Track 3. AI and Inclusive Development",
      points: [
        "AI tools for addressing language barriers in education and communication.",
        "AI for creating adaptive learning platforms in low-resource settings.",
        "Applications of AI in digital identity verification for marginalized communities.",
        "Using AI to improve access to basic utilities like water, sanitation, and electricity.",
        "Developing culturally aware AI systems for diverse populations.",
        "Open-source AI solutions for low-income and remote regions.",
      ],
    },
    {
      title: "Track 4. Green AI and Energy Efficiency",
      points: [
        "Optimizing AI model architectures for reduced energy consumption.",
        "AI for predictive maintenance of renewable energy infrastructure.",
        "Machine learning for solar panel efficiency and wind turbine optimization.",
        "AI-based energy forecasting and load management in smart grids.",
        "Carbon-aware AI systems and their applications.",
        "Resource-efficient AI hardware for edge and IoT devices, data centres and cloud infrastructure.",
      ],
    },
    {
      title: "Track 5. Ethics, Governance, and Policy in AI",
      points: [
        "Frameworks for designing bias-free and inclusive AI systems.",
        "Policy recommendations for responsible AI adoption in developing economies.",
        "Mechanisms for ensuring transparency and explainability in AI systems.",
        "Tackling misinformation and disinformation using ethical AI.",
        "Establishing international standards for sustainable AI governance.",
        "Impact of AI on labor markets: Challenges and opportunities.",
      ],
    },
    {
      title: "Track 6. AI for Economic Empowerment",
      points: [
        "AI-powered crop yield prediction and market price optimization.",
        "AI solutions for sustainable manufacturing, supply chain transparency, and waste reduction.",
        "AI-driven microfinance solutions for small-scale entrepreneurs.",
        "Enhancing trade and commerce in emerging markets using AI.",
        "AI-based decision support systems for policymakers in developing countries.",
        "Empowering rural artisans with AI-based tools for market access.",
      ],
    },
    {
      title: "Track 7. AI for Smart and Resilient Cities",
      points: [
        "AI-powered traffic management and congestion reduction systems.",
        "AI for smart waste collection and recycling in urban areas.",
        "Optimizing urban energy consumption using AI-based analytics.",
        "AI solutions for affordable housing and urban planning.",
        "Applications of AI in public safety and crime prevention.",
        "AI for managing urban heat islands and improving air quality.",
      ],
    },
  ];

  return (
    <div className="conference-container">
      <header className="conference-header">
        <h1>IEEE International Conference on Sustainable AI</h1>
        <h2>For Social Impact & Global Development (SASIGD 2025)</h2>
        <p>
          The IEEE International Conference on Sustainable AI focuses on leveraging Artificial Intelligence to address critical global challenges while emphasizing sustainability, inclusivity, equity, ethical governance, responsible adoption, cultural awareness, open-source tools, cross-disciplinary collaboration, global development, and sustainability.
        </p>
        <button className="explore-tracks">Explore Tracks</button>
      </header>

      <div className="tracks-container">
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <h3>{track.title}</h3>
            <ul>
              {track.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutConference;

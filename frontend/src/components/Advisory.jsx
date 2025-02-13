import React, { useState } from "react";
import Footer from "../components/Footer";
import "../styles/Advisory.css";

const url ="data:image/jpeg;base64,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"
const advisors = [
  { name: "Prof. Anil Maheshwari", institution: "Carleton University, Canada", expertise: "AI", image: url },
  { name: "Prof. Punam Saha", institution: "University of Iowa, USA", expertise: "Medical Imaging", image: url },
  { name: "Prof. Basabi Chakraborty", institution: "Iwate Prefectural University, Japan", expertise: "Machine Learning", image: url },
  { name: "Prof. Raj Reddy", institution: "Carnegie Mellon University, USA", expertise: "Speech Recognition", image:url },
  { name: "Prof. Yoshua Bengio", institution: "University of Montreal, Canada", expertise: "Deep Learning", image:url },
  { name: "Prof. Geoffrey Hinton", institution: "University of Toronto, Canada", expertise: "Neural Networks", image:url },
  { name: "Prof. Yann LeCun", institution: "New York University, USA", expertise: "Computer Vision", image:url },
  { name: "Prof. Andrew Ng", institution: "Stanford University, USA", expertise: "Machine Learning", image:url },
  { name: "Prof. Fei-Fei Li", institution: "Stanford University, USA", expertise: "AI Ethics", image:url },
  { name: "Prof. Joy Buolamwini", institution: "MIT Media Lab, USA", expertise: "AI Fairness", image:url },
  { name: "Prof. Devi Parikh", institution: "Georgia Tech, USA", expertise: "AI and Creativity", image:url },
  { name: "Prof. Subbarao Kambhampati", institution: "Arizona State University, USA", expertise: "AI Planning", image:url },
  { name: "Prof. Pushpak Bhattacharyya", institution: "IIT Bombay, India", expertise: "Natural Language Processing", image:url },
  { name: "Prof. Ponnurangam Kumaraguru", institution: "IIIT Hyderabad, India", expertise: "Cybersecurity & AI", image:url },
  { name: "Prof. Sargur N. Srihari", institution: "University at Buffalo, USA", expertise: "Handwriting Recognition", image:url },
  { name: "Prof. Yann LeCun", institution: "New York University, USA", expertise: "Computer Vision", image:url },
  { name: "Prof. Andrew Ng", institution: "Stanford University, USA", expertise: "Machine Learning", image:url },
  { name: "Prof. Fei-Fei Li", institution: "Stanford University, USA", expertise: "AI Ethics", image:url },
  { name: "Prof. Joy Buolamwini", institution: "MIT Media Lab, USA", expertise: "AI Fairness", image:url },
  { name: "Prof. Devi Parikh", institution: "Georgia Tech, USA", expertise: "AI and Creativity", image:url },
  { name: "Prof. Subbarao Kambhampati", institution: "Arizona State University, USA", expertise: "AI Planning", image:url },
  { name: "Prof. Pushpak Bhattacharyya", institution: "IIT Bombay, India", expertise: "Natural Language Processing", image:url },
  { name: "Prof. Ponnurangam Kumaraguru", institution: "IIIT Hyderabad, India", expertise: "Cybersecurity & AI", image:url },
  { name: "Prof. Sargur N. Srihari", institution: "University at Buffalo, USA", expertise: "Handwriting Recognition", image:url }
  

];


const Advisory = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAdvisors = advisors.filter(advisor =>
        advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        advisor.institution.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="committee-container">
                <header className="committee-header">Committees</header>
                <section className="committee-section">
                    <h2>Advisory Board</h2>

                    {/* Search Box */}
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search by name or institution..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Advisory List */}
                    <ul className="committee-list">
                        {filteredAdvisors.length > 0 ? (
                            filteredAdvisors.map((advisor, index) => (
                                <li key={index}>
                                    <img src={advisor.image || "default_profile.png"} alt={advisor.name} />
                                    <strong>{advisor.name}</strong>
                                    <span>{advisor.institution}</span>
                                    <p>Expertise: {advisor.expertise}</p>
                                </li>
                            ))
                        ) : (
                            <p>No results found.</p>
                        )}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default Advisory;
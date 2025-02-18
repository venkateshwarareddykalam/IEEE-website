import React, { useState } from "react";
import Footer from "../components/Footer";
import "../styles/Patrons.css";

const url ="public/principal.png";
const advisors = [
  { name: "Prof. C. V. Narasimhulu", institution: "Principal, Chaitanya Bharathi Institute Of Technology, Hyderabad", expertise: "AI", image: url }  
];


const Patrons = () => {
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

export default Patrons;
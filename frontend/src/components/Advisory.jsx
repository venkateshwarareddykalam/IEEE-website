import React, { useState } from "react";
import Footer from "../components/Footer";
import "../styles/Advisory.css";

const url =""
const internationaladvisors = [

  { name: "Murty Polvarapu", image: url },
  { name: "Cinzia Da Via",  image: url },
  { name: "Morgan Kiani",  image: url },
  { name: "Bozenna Pasik Ducan", image:url },
  { name: "Takako Hashimoto", image:url },
  { name: "Emi Yano",  image:url },
  { name: "Kalyan Sen",  image:url },
  { name: "Prasanta Ghosh", image:url },
  { name: "Heather Love", image:url },
  { name: "Katina Michael ", image:url },
  {name: "Supaavdee Aramvith",image:url}
];
const nationaladvisors = [
    { name: "Dr. Alwyn Roshan Pais ", institution: "Department of CSE, NITK Surathkal, India",image:url },
    { name: "Dr. Asoke K Talukder", institution: "Co-Founder ARAI Solutions & Cybernetic Care, Pune, Maharashtra", image:url },
    {name: "Dr. Gopi Chand Merugu", institution:"UGC" , image: url},
    { name: "Dr. K. Shyamala", institution: "Osmania University", image:url }
  ];


const Advisory = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredAdvisors = internationaladvisors.filter(advisor =>
        advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        advisor.institution.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filterednationalAdvisors = nationaladvisors.filter(advisor =>
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
                    <h2>International Advisory Board</h2>
                    {/* Advisory List */}
                    <ul className="committee-list">
                        {filteredAdvisors.length > 0 ? (
                            filteredAdvisors.map((advisor, index) => (
                                <li key={index}>
                                    <img src={advisor.image || "default_profile.png"} alt={advisor.name} />
                                    <strong>{advisor.name}</strong>
                                    <span>{advisor.institution}</span>
                                    {/* <p>Expertise: {advisor.expertise}</p> */}
                                </li>
                            ))
                        ) : (
                            <p>No results found.</p>
                        )}
                    </ul>
                    <h2>National Advisory Board</h2>
                    <ul className="committee-list">
                        {filterednationalAdvisors.length > 0 ? (
                            filterednationalAdvisors.map((advisor, index) => (
                                <li key={index}>
                                    <img src={advisor.image || "default_profile.png"} alt={advisor.name} />
                                    <strong>{advisor.name}</strong>
                                    <span>{advisor.institution}</span>
                                    {/* <p>Expertise: {advisor.expertise}</p> */}
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
import React from "react";
import "../styles/AboutITDepartment.css"; // Import CSS for styling

const AboutITDepartment = () => {
  return (
    <div className="about-it-department">
      {/* Top Image Section */}
      <div className="top-image">
        <img
          src="/src/assets/cbit1.png" // Replace with your IT department banner image path
          alt="IT Department Banner"
          className="banner-image"
        />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <a href="/">Home</a> &gt;&gt; <span>About Information Technology</span>
      </div>

      {/* Content Section */}
      <div className="content">
        {/* Introduction Section */}
        <section className="introduction">
          <h2>Department of Information Technology</h2>
          <p>We’re talking game-changing IT education</p>
          <p>
            The IT department at CBIT does not need any lucky stars to thank, since we have stars among us who are always willing to go that extra mile. When excellence is the permanent goal, obstacles appear as temporary. That is the spirit with which our departmental teachers, students and research scholars work in order to retain the prestigious position it holds in this field of engineering.
          </p>
        </section>

        {/* Vision and Mission Section */}
        <section className="vision-mission">
          <h2>Department Vision</h2>
          <p>
            To be a center of excellence in the field of information technology that yields pioneers and research experts who can contribute for the socio-economic development of the nation.
          </p>

          <h2>Department Mission</h2>
          <ul>
            <li>To impart state-of-the-art value based education in the field of Information Technology.</li>
            <li>To collaborate with industries and research organizations and excel in the emerging areas of research.</li>
            <li>To imbibe social responsibility in students.</li>
            <li>To motivate students to be trend setters and technopreneurs.</li>
          </ul>
        </section>

        {/* Programs Offered Section */}
        <section className="programs-offered">
          <h2>Programs Offered</h2>
          <p>The Department offers Under Graduate program in B.E. (Information Technology) with an intake of 180 students.</p>
          <ul>
            <li>B.E (IT)</li>
          </ul>
        </section>

        {/* Program Outcomes Section */}
        <section className="program-outcomes">
          <h2>B.E Program Outcomes (PO’s)</h2>
          <ul>
            <li><strong>Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization for the solution of complex engineering problems.</li>
            <li><strong>Problem Analysis:</strong> Identify, formulate, review, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
            <li><strong>Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</li>
            <li><strong>Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
            <li><strong>Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
            <li><strong>The Engineer and Society:</strong> Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and responsibilities relevant to professional engineering practice.</li>
            <li><strong>Environment and Sustainability:</strong> Understand the impact of professional engineering solutions in societal and environmental contexts, demonstrating knowledge of sustainable development.</li>
            <li><strong>Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.</li>
            <li><strong>Individual and Team Work:</strong> Function effectively as an individual, as a member or leader in diverse teams, and in multidisciplinary settings.</li>
            <li><strong>Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and society at large through reports, presentations, documentation, etc.</li>
            <li><strong>Project Management and Finance:</strong> Demonstrate knowledge of engineering management principles to manage projects in multidisciplinary environments.</li>
            <li><strong>Lifelong Learning:</strong> Recognize the need for lifelong learning in the broadest context of technological change.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutITDepartment;

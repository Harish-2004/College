import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const InternshipPage = () => {
  return (
    <>
      <h1>Internship</h1>
      <div className="row">
        <div className="col">
          <h2>Apply for Internship</h2>
          <p>Explore available internships and apply for the one that suits your interests.</p>
          <a href="fillup.html" className="btn">
            Apply Now
          </a>
        </div>

        <div className="col">
          <h2>See Ongoing Internships</h2>
          <p>View a list of internships that are currently in progress.</p>
          <a href="complete.html" className="btn">
            View Ongoing Internships
          </a>
        </div>

        <div className="col">
          <h2>See Past Internships</h2>
          <p>Explore internships that have concluded and read about the experiences of past interns.</p>
          <a href="past.html" className="btn">
            View Past Internships
          </a>
        </div>
      </div>
    </>
  );
};

export default InternshipPage;

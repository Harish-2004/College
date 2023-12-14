import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './fill.css'; // Import your custom styles if needed

const ApplicationForm = () => {
  return (
    <>
      <h1>APPLICATION FORM</h1>
      <form action="">
        <label htmlFor="companyName">NAME OF THE COMPANY</label>
        <input type="text" id="companyName" />

        <label htmlFor="rollNo">ROLL NO:</label>
        <input type="text" id="rollNo" />

        <label htmlFor="studentName">NAME OF THE STUDENT</label>
        <input type="text" id="studentName" />

        <label htmlFor="projectTitle">TITLE OF THE PROJECT</label>
        <input type="text" id="projectTitle" />

        <div className="form-group">
          <label htmlFor="year">YEAR</label>
          <select className="form-control" id="year"></select>
        </div>

        <br />

        <label htmlFor="semester">SEM</label>
        <input type="text" id="semester" />

        <label htmlFor="startDate">START DATE:</label>
        <input type="date" id="startDate" />

        <label htmlFor="endDate">END DATE:</label>
        <input type="date" id="endDate" />

        <label htmlFor="stipend">STIPEND</label>
        <input type="text" id="stipend" />

        <label htmlFor="file">Choose a file to upload</label>
        <input type="file" name="file" id="file" />

        <input
          type="button"
          value="GET APPROVAL"
          onClick={() => {
            window.location.href = '/approval.html';
          }}
        />

        <input type="submit" value="SUBMIT" />
      </form>

      {/* Include your script at the end */}
      <script src="fillscript.js"></script>
    </>
  );
};

export default ApplicationForm;

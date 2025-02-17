import React from "react";
import "../styles/Registration.css";

const Registration = () => {
  return (
    <div className="registration-container">
      <div className="committee-header">Registration Guidelines</div>
      <div className="registration-content">
        <p>
          At least one author of the accepted paper must register with an appropriate conference fee to include the paper in 
          the SASGID 2025 conference program and submission to IEEE Xplore. Final decision of uploading the 
          presented paper will be taken by IEEE Xplore.
        </p>
        <ul>
          <li>For early bird registration, at least one author of the accepted paper must register on or before 23rd December, 2025.</li>
          <li>For regular registration after the early bird registration, i.e., .12.2024, at least one author of the accepted paper must register with higher fees.</li>
          <li>Unregistered papers will not be included in the final program for presentation and submission to IEEE Xplore.</li>
          <li>Each full registration is valid for one paper.</li>
          <li>The length of each submitted final paper is presumably six (6) to eight (8) pages, with a maximum of 10 pages.</li>
          <li>Extra two pages (i.e., maximum of 10 pages) may be allowed with an over-length page charge as per table below.</li>
        </ul>
        <h2>Payment Process</h2>
        <p>Payment of registration fee should be made online to IIT (ISM) Dhanbad using the following link.</p>
        
        <p>If UPI payment is not available, you can avail the following bank payment details:</p>
        <ul>
          <li><strong>Name of the Account Holder:</strong> </li>
          <li><strong>Bank Name:</strong>K</li>
          <li><strong>Bank Address:</strong></li>
          <li><strong>Type of Savings Account:</strong> </li>
          <li><strong>Bank Account Number:</strong></li>
          <li><strong>MICR Code of Bank:</strong> </li>
          <li><strong>IFSC Code:</strong> </li>
        </ul>
        <h2>Registration for Virtual Mode</h2>
        <table>
          <thead>
            <tr>
            <th rowspan="2">Category</th>
            <th colspan="2">Early Bird Registration (Upto December 23, 2024)</th>
            <th colspan="2">Regular Registration (After December 23, 2024)</th>
            </tr>
            <tr>
              <th>IEEE Member (Early Bird)</th>
              <th>Non-IEEE Member (Early Bird)</th>
              <th>IEEE Member (Regular)</th>
              <th>Non-IEEE Member (Regular)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indian Author (Academia/Industry)</td>
              <td>₹ 6,000</td>
              <td>₹ 7,000</td>
              <td>₹ 7,000</td>
              <td>₹ 8,500</td>
            </tr>
            <tr>
              <td>Indian Student Attendee (Non-Author)</td>
              <td>₹ 4,000</td>
              <td>₹ 5,200</td>
              <td>₹ 5,500</td>
              <td>₹ 6,700</td>
            </tr>
            <tr>
              <td>Indian Academia Attendee (Non-Author)</td>
              <td>₹ 7,000</td>
              <td>₹ 8,000</td>
              <td>₹ 8,000</td>
              <td>₹ 9,000</td>
            </tr>
            <tr>
              <td>Indian Industry Attendee (Non-Author)</td>
              <td>₹ 9,000</td>
              <td>₹ 9,000</td>
              <td>₹ 10,000</td>
              <td>₹ 10,000</td>
            </tr>
            <tr>
              <td>Indian Author Attendee (Additional Page)</td>
              <td>₹ 500 per page</td>
              <td>₹ 500 per page</td>
              <td>₹ 500 per page</td>
              <td>₹ 500 per page</td>
            </tr>
            <tr>
              <td>Tutorial only (Indian Student)</td>
              <td>₹ 500</td>
              <td>₹ 700</td>
              <td>₹ 700</td>
              <td>₹ 1,000</td>
            </tr>
            <tr>
              <td>Foreign Author*(Academia/Industry)</td>
              <td>$ 100</td>
              <td>$ 125</td>
              <td>$ 125</td>
              <td>$ 150</td>
            </tr>
            <tr>
              <td>Foreign Student Attendee (Non-Author)</td>
              <td>$ 50</td>
              <td>$ 75</td>
              <td>$ 75</td>
              <td>$ 100</td>
            </tr>
            <tr>
              <td>Foreign Professional Attendee(Non-Author)</td>
              <td>$ 150</td>
              <td>$ 200</td>
              <td>$ 200</td>
              <td>$ 250</td>
            </tr>
            <tr>
              <td>Foreign Author Attendee (Additional Page)</td>
              <td>$ 25 per page</td>
              <td>$ 25 per page</td>
              <td>$ 25 per page</td>
              <td>$ 25 per page</td>
            </tr>
            <tr>
              <td>Tutorial only (Foreign Student)</td>
              <td>$ 25</td>
              <td>$ 35</td>
              <td>$ 35</td>
              <td>$ 50</td>
            </tr>
          </tbody>
        </table>

        <h2>Regitration for Physical mode</h2>
        <table>
          <thead>
          <tr>
            <th rowspan="2">Category</th>
            <th colspan="2">Early Bird Registration (Upto December 23, 2024)</th>
            <th colspan="2">Regular Registration (After December 23, 2024)</th>
            </tr>
            <tr>
              <th>IEEE Member (Early Bird)</th>
              <th>Non-IEEE Member (Early Bird)</th>
              <th>IEEE Member (Regular)</th>
              <th>Non-IEEE Member (Regular)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Indian Author (Academia/Industry)</td>
              <td>₹ 8,000</td>
              <td>₹ 9,000</td>
              <td>₹ 9,000</td>
              <td>₹ 10,500</td>
            </tr>
            <tr>
              <td>Indian Student Attendee (Non-Author)</td>
              <td>₹ 6,000</td>
              <td>₹ 7,200</td>
              <td>₹ 7,500</td>
              <td>₹ 8,700</td>
            </tr>
            <tr>
              <td>Indian Academia Attendee (Non-Author)</td>
              <td>₹ 9,000</td>
              <td>₹ 10,000</td>
              <td>₹ 10,000</td>
              <td>₹ 11,000</td>
            </tr>
            <tr>
              <td>Indian Industry Attendee (Non-Author)</td>
              <td>₹ 11,000</td>
              <td>₹ 11,000</td>
              <td>₹ 12,000</td>
              <td>₹ 12,000</td>
            </tr>
            <tr>
              <td>Indian Author Attendee (Additional Page)</td>
              <td>₹ 500 per page</td>
              <td>₹ 500 per page</td>
              <td>₹ 500 per page</td>
              <td>₹ 500 per page</td>
            </tr>
            <tr>
              <td>Tutorial only (Indian Student)</td>
              <td>₹ 2,500</td>
              <td>₹ 2,700</td>
              <td>₹ 2,700</td>
              <td>₹ 3,000</td>
            </tr>
            <tr>
              <td>Foreign Author*(Academia/Industry)</td>
              <td>$ 125</td>
              <td>$ 150</td>
              <td>$ 150</td>
              <td>$ 175</td>
            </tr>
            <tr>
              <td>Foreign Student Attendee (Non-Author)</td>
              <td>$ 75</td>
              <td>$ 100</td>
              <td>$ 100</td>
              <td>$ 125</td>
            </tr>
            <tr>
              <td>Foreign Professional Attendee (Non-Author)</td>
              <td>$ 175</td>
              <td>$ 225</td>
              <td>$ 225</td>
              <td>$ 275</td>
            </tr>
            <tr>
              <td>Foreign Author Attendee (Additional Paper)</td>
              <td>$ 25 per page</td>
              <td>$ 25 per page</td>
              <td>$ 25 per page</td>
              <td>$ 25 per page</td>
            </tr>
            <tr>
              <td>Tutorial only (Foreign Student)</td>
              <td>$ 50</td>
              <td>$ 60</td>
              <td>$ 60</td>
              <td>$ 100</td>
            </tr>
          </tbody>
        </table>
        <ol>
            <li>All papers must be registered. One FULL AUTHOR REGISTRATION will allow the author to present only one paper on which he/she is an author or co-author. To present more than one paper registration must be done accordingly.</li>
            <li>The paper authors must register by the respective camera ready deadline, i.e., January 15, 2025.</li>
            <li>Accomodation may be provided as per availability in EDC(Executive Development Center) and Student Hostels on payment basis in First Come First Serve basis.</li>
        </ol>
        
        <div className="sponsor-container"> 
        
        <a href="https://google.com"><img src="data:image/jpeg;base64,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" alt="" className="sponsor-logo"/></a>
        <a href="http://microsoft.com"><img src="data:image/jpeg;base64,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" alt="" className="sponsor-logo" /></a>
        <a href="http://ibm.com"><img src="data:image/png;base64,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" alt=""  className="sponsor-logo"/></a>
        <a href="http://amazon.com"><img src="data:image/png;base64,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" alt=""  className="sponsor-logo"/></a>
        </div>
      </div>
    </div>
  );
};

export default Registration;

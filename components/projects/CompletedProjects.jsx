"use client";
import React from "react";

const CompletedProjects = () => {
  return (
    <div className="container-md my-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#000" }}>
        Projects Completed Successfully
      </h2>
      <div className="table-responsive">
        <table className="completed-projects-table w-100">
          <thead>
            <tr>
              <th>Nature of Activity</th>
              <th>Project Details</th>
              <th>UOM</th>
              <th>Total Qty Achieved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Underground Fibre Optic Network By HDD</td>
              <td>R 4G Giga Fiber (JIO), L&T Smart City, Bharat Net</td>
              <td>Km</td>
              <td>500+</td>
            </tr>
            <tr>
              <td>Overhead Fiber Optic Network</td>
              <td>R 4G Giga Fiber (JIO), L&T Smart City</td>
              <td>Km</td>
              <td>1500+</td>
            </tr>
            <tr>
              <td>CCTV Installation</td>
              <td>Mumbai, Pune, PCMC, GOA Smart City Project (L&T)</td>
              <td>Nos</td>
              <td>3000+</td>
            </tr>
            <tr>
              <td>Wi-Fi Installation</td>
              <td>Mumbai, Pune, PCMC, GOA Smart City Project (L&T)</td>
              <td>Nos</td>
              <td>3000+</td>
            </tr>
            <tr>
              <td>Customer Premise Equipment Installed</td>
              <td>
                R 4G Giga Fiber-JIO, FTTX (Surat, Uttarakhand, Punjab, Uttar Pradesh)
              </td>
              <td>Nos</td>
              <td>50000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .completed-projects-table {
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
          border-radius: 1.2rem;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(44, 62, 80, 0.10);
        }
        .completed-projects-table th,
        .completed-projects-table td {
          padding: 1rem 1.2rem;
          text-align: left;
        }
        .completed-projects-table th {
          background-color: #000;
          color: #fff;
          font-size: 1.08rem;
          font-weight: 600;
          border-bottom: 2px solid #e3eefe;
        }
        .completed-projects-table tbody tr {
          transition: background 0.2s;
        }
        .completed-projects-table tbody tr:nth-child(even) {
          background: #f8fbff;
        }
        .completed-projects-table tbody tr:hover {
          background: #e3eefe;
        }
        .completed-projects-table td {
          font-size: 1.02rem;
          color: #222;
          vertical-align: middle;
        }
        @media (max-width: 767.98px) {
          .completed-projects-table th,
          .completed-projects-table td {
            padding: 0.7rem 0.5rem;
            font-size: 0.98rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CompletedProjects;
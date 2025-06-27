"use client";
import React from "react";

const ProjectsInProgress = () => {
  return (
    <div className="container-md my-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#000" }}>
        Upcoming Projects
      </h2>
      <div className="table-responsive" style={{ overflowX: "auto" }}>
        <table className="projects-in-progress-table w-100">
          <thead>
            <tr>
              <th>Nature of Activity</th>
              <th>Name of Client</th>
              <th>Project Details</th>
              <th>UOM</th>
              <th>Order Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Underground Fibre Optic Network</td>
              <td>Reliance Jio, Rajesh Power, Comtech Pvt. Ltd</td>
              <td>
                R 4G Giga Fiber-JIO at South Gujarat, Punjab, Uttar Pradesh,
                Rajesh Power Cable-Gujarat, BSNL-Gujarat
              </td>
              <td>Km</td>
              <td>150.000</td>
            </tr>
            <tr>
              <td>Overhead Fiber Optic Network</td>
              <td>Reliance Jio</td>
              <td>R 4G Giga Fiber-JIO at Uttarakhand, Punjab, Uttar Pradesh</td>
              <td>Km</td>
              <td>200.000</td>
            </tr>
            <tr>
              <td>CCTV Installation</td>
              <td>L &amp; T Limited</td>
              <td>Mumbai, Thane &amp; PCMC Smart City Project</td>
              <td>Nos</td>
              <td>2000.00</td>
            </tr>
            <tr>
              <td>Wi-Fi Installation</td>
              <td>L &amp; T Limited</td>
              <td>Mumbai, Thane &amp; PCMC Smart City Project</td>
              <td>Nos</td>
              <td>500.00</td>
            </tr>
            <tr>
              <td>Customer Premise Equipment Installation</td>
              <td>Reliance Jio</td>
              <td>
                R 4G Giga Fiber-JIO at South Gujarat, Punjab, Uttar Pradesh
              </td>
              <td>Nos</td>
              <td>1000.00</td>
            </tr>
            <tr>
              <td>Steel Pipe Line Work for Gas and Petroleum By HDD</td>
              <td>Mangal Petroleum</td>
              <td>Mangal Petroleum - Steel Line Work - Pan India</td>
              <td>Km</td>
              <td>100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .projects-in-progress-table {
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
          border-radius: 1.2rem;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(44, 62, 80, 0.1);
        }
        .projects-in-progress-table th,
        .projects-in-progress-table td {
          padding: 1rem 1.2rem;
          text-align: left;
        }
        .projects-in-progress-table th {
          background-color: black;
          color: #fff;
          font-size: 1.08rem;
          font-weight: 600;
          border-bottom: 2px solid #e3eefe;
        }
        .projects-in-progress-table tbody tr {
          transition: background 0.2s;
        }
        .projects-in-progress-table tbody tr:nth-child(even) {
          background: #f8fbff;
        }
        .projects-in-progress-table tbody tr:hover {
          background: #e3eefe;
        }
        .projects-in-progress-table td {
          font-size: 1.02rem;
          color: #222;
          vertical-align: middle;
        }
        @media (max-width: 767.98px) {
          .projects-in-progress-table th,
          .projects-in-progress-table td {
            padding: 0.7rem 0.5rem;
            font-size: 0.98rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsInProgress;

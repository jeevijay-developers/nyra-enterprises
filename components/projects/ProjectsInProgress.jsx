import React from "react";

const ProjectsInProgress = () => {
  return (
    <div className="container-md">
      <h1>Upcoming Projects</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-dark bg-black text-white">
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
              <td>L & T Limited</td>
              <td>Mumbai, Thane & PCMC Smart City Project</td>
              <td>Nos</td>
              <td>2000.00</td>
            </tr>
            <tr>
              <td>Wi-Fi Installation</td>
              <td>L & T Limited</td>
              <td>Mumbai, Thane & PCMC Smart City Project</td>
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
    </div>
  );
};

export default ProjectsInProgress;

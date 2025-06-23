import React from "react";

const CompletedProjects = () => {
  return (
    <div className="container-md">
      <h1>Project Completed Successfully</h1>
      <div class="table-responsive">
        <table class="table table-bordered table-striped align-middle">
          <thead class="table-dark bg-black text-white">
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
                R 4G Giga Fiber-JIO, FTTX (Surat, Uttarakhand, Punjab, Uttar
                Pradesh)
              </td>
              <td>Nos</td>
              <td>50000+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedProjects;

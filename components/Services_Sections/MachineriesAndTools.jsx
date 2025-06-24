// components/MachineriesAndTools.js
import React from "react";
import styles from "./MachineriesAndTools.module.css";
import Image from "next/image";

const MachineriesAndTools = () => {
  const data = [
    { item: "HDD Machine", quantity: 4 },
    { item: "Splicing Machine", quantity: 3 },
    { item: "OTDR", quantity: 3 },
    { item: "Optical Power Meter", quantity: 3 },
    { item: "Laser Source Meter", quantity: 3 },
    { item: "Cable Locator", quantity: 1 },
    { item: "Cable Roader", quantity: 3 },
    { item: "Vehicles for Transporting", quantity: 4 },
    { item: "Mac Lift(Man Lifter)", quantity: 2 },
    { item: "Hydraulic Crane F-15", quantity: 1 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.sectiontitle}>Machineries and Tools</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Particulars</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.item}</td>
                <td>{row.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
       
        <div className={styles.imageContainer}>
          <Image
            src="/img/nyra/1.jpeg"
            alt="Machinery Tools"
            className={styles.image}
            width={500} // You need to specify width and height
            height={300} // Adjust these values as needed
            // You can also add layout="responsive" if you want responsive behavior
          />
          <Image
            src="/img/nyra/2.jpeg"
            alt="Machinery Tools"
            className={styles.image}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default MachineriesAndTools;

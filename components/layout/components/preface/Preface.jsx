// components/Preface.js

import React from "react";
import styles from "./Preface.module.css";

const prefaceItems = [
  {
    title: "Foundation",
    text: "Started as a Cable Trenching & Ducting Contractor",
    icon: "🔧",
  },
  {
    title: "Telecom Entry",
    text: "Established Subcontractor Firm in Telecom industries",
    icon: "📡",
  },
  {
    title: "Smart City Projects",
    text: "Entered Smart City Projects & MGL as a subcontractor",
    icon: "🏙️",
  },
  {
    title: "Main Contractor",
    text: "Began working as a main contractor in Smart City projects across Pan India",
    icon: "🧱",
  },
  {
    title: "Wi-Fi & CCTV",
    text: "Expanded into Wi-Fi & CCTV projects",
    icon: "📷",
  },
  {
    title: "Advanced Tech",
    text: "Integrated Horizontal Directional Drilling (HDD)",
    icon: "💡",
  },
  {
    title: "Infra Services",
    text: "Dealing with HDD, FTTX, CCTV, Wi-Fi, VMS Board and more",
    icon: "🛠️",
  },
  {
    title: "Distribution",
    text: "Distributor of HDPE Conduit Pipe and fittings",
    icon: "📦",
  },
];

const Preface = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span>📘</span> Company Preface
      </h2>
      <div className={styles.grid}>
        {prefaceItems.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Preface;

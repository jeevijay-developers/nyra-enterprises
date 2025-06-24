import Image from "next/image";
import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
const ProjectExecution = () => {
  return (
    <div className="container-md mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col col-lg-8 col-12">
          <div>
            <h1>Project Execution</h1>
            <h4 className="ms-3">HDD(Horizontal Directional Drilling)</h4>
          </div>
          <div>
            <ul className="d-flex flex-column justify-content-start align-items-center w-100">
              <li
                className="d-flex align-items-center justify-content-start w-100 flex-row gap-3"
                style={{
                  width: "100%",
                }}
              >
                <TiArrowForwardOutline />
                Adapting industry best practice for OFC laying
              </li>
              <li
                className="d-flex align-items-center justify-content-start flex-row gap-3"
                style={{
                  width: "100%",
                }}
              >
                <TiArrowForwardOutline />
                Overcomes challenges of congestion at any open trenching
              </li>
              <li
                className="d-flex align-items-center justify-content-start flex-row gap-3"
                style={{
                  width: "100%",
                }}
              >
                <TiArrowForwardOutline />
                Effective and Quality execution enables project completion on
                time
              </li>
              <li
                className="d-flex align-items-center justify-content-start flex-row gap-3"
                style={{
                  width: "100%",
                }}
              >
                <TiArrowForwardOutline />
                Fully Owned machinery and in house execution team.
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-lg-4 col-12">
          <Image
            width={500}
            height={500}
            src="/img/drill-444510_1280.jpg"
            alt="image"
          />
        </div>
      </div>

      <div className="row justify-content-between align-items-center">
        <Image
          width={500}
          height={500}
          src="/img/fiber-optic-4393369_1280.jpg"
          alt="image"
          className="col col-lg-4 col-12"
        />
        <div className="col col-lg-8 col-12 justify-content-end">
          <ul className="d-flex flex-column justify-content-end align-items-center w-100">
            <li
              className="d-flex align-items-center justify-content-start flex-row gap-3"
              style={{
                width: "100%",
              }}
            >
              <TiArrowForwardOutline /> Marinating splicing loss less than 0.05
              dBm
            </li>
            <li
              className="d-flex align-items-center justify-content-start flex-row gap-3"
              style={{
                width: "100%",
              }}
            >
              <TiArrowForwardOutline />
              Fiber would be neatly coiled without kinks
            </li>
            <li
              className="d-flex align-items-center justify-content-start flex-row gap-3"
              style={{
                width: "100%",
              }}
            >
              <TiArrowForwardOutline />
              Minimum bending radius of 80mm would be ensured
            </li>
            <li
              className="d-flex align-items-center justify-content-start flex-row gap-3"
              style={{
                width: "100%",
              }}
            >
              <TiArrowForwardOutline />
              Joint closure would sealed properly before it is taken out of the
              control
            </li>
            <li
              className="d-flex align-items-center justify-content-start flex-row gap-3"
              style={{
                width: "100%",
              }}
            >
              <TiArrowForwardOutline />
              Environment free from dust particles and air-conditioned splicing
              va
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectExecution;

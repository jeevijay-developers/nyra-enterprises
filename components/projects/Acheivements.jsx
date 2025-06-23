import Image from "next/image";
import React from "react";
import { FaTrophy } from "react-icons/fa";

const Acheivements = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        {/* Left Image */}
        <div className="col-12 col-lg-6 text-center">
          <Image
            width={300}
            height={300}
            src="/img/award.jpg"
            alt="Award Image"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-lg-6">
          {/* Achievement Card 1 */}
          <div className="card mb-4 shadow-sm">
            <div className="card-body d-flex">
              <div className="me-3 text-warning fs-2">
                <FaTrophy />
              </div>
              <div>
                <h5 className="card-title">BEST PERFORMER</h5>
                <p className="card-text text-muted">
                  Awarded as <strong>BEST PERFORMER</strong> for completing work
                  in Safety and Quality at <strong>PUNE SMART CITY</strong> by{" "}
                  <strong>L&T</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Card 2 */}
          <div className="card shadow-sm">
            <div className="card-body d-flex">
              <div className="me-3 text-warning fs-2">
                <FaTrophy />
              </div>
              <div>
                <h5 className="card-title">BEST HSEF PERFORMER</h5>
                <p className="card-text text-muted">
                  Awarded as <strong>BEST HSEF PERFORMER 2023–2024</strong> for{" "}
                  <strong>GUJARAT Region</strong> by{" "}
                  <strong>Reliance Jio</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acheivements;

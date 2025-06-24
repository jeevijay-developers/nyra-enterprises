import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const ProjectActivities = () => {
  return (
    <div className="container-md">
      <h2>Project Activities</h2>
      <ul>
        <li className="d-flex flex-column">
          <div className="d-flex justify-content-start align-items-center  flex-row gap-3">
            <h6>RoW Permission</h6>
            <FaArrowRightLong />
          </div>
          <div>
            <p className="mt-2 ms-3">
              State Highway, Railway Departmnets,Road and Building, Municipal
              Corporation, Irrigation department, Panchayat, National Highway
              Authorities, Cantonments
            </p>
          </div>
        </li>

        <li className="d-flex flex-column">
          <div className="d-flex justify-content-start align-items-center  flex-row gap-3">
            <h6>Trenching & Ducting</h6>
            <FaArrowRightLong />
          </div>
          <div>
            <p className="mt-2 ms-3">
              Our in house team is expert in Cable Blowing work with OUR
              ownership Cable Blowing Machine for execution of work on targeted
              time.
            </p>
          </div>
        </li>

        <li className="d-flex flex-column">
          <div className="d-flex justify-content-start align-items-center  flex-row gap-3">
            <h6>Cable Blowing </h6>
            <FaArrowRightLong />
          </div>
          <div>
            <p className="mt-2 ms-3">
              Commit to deliver Quality solutions to our client. So we are
              focused to maintain in depth & good quality of work as per Telecom
              Standard
            </p>
          </div>
        </li>

        <li className="d-flex flex-column">
          <div className="d-flex justify-content-start align-items-center  flex-row gap-3">
            <h6>Aerial Cable</h6>
            <FaArrowRightLong />
          </div>
          <div>
            <p className="mt-2 ms-3">
              At places where open trenching is not possible due to very narrow
              roads and due to delay in obtaining RoW, Arial cabling will be
              adopted as a temporary solution
            </p>
          </div>
        </li>

        <li className="d-flex flex-column">
          <div className="d-flex justify-content-start align-items-center  flex-row gap-3">
            <h6>Duct Integrity Test</h6>
            <FaArrowRightLong />
          </div>
          <div>
            <p className="mt-2 ms-3">
              After backfilling ducts shall be tested for integrity by closing
              one end of duct and passing compressed air at 5-6kg/cm2 from the
              other end, when pressure reaches about 5kg/cm2,the inlet of the
              duct is closed then fall in pressure should not be more than 50%
              in 1 hour
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectActivities;

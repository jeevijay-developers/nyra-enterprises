'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const OurTechnologies = () => {
    const technology = [
        "Redundant Fiber ring Network,",
        "Multiple Connectivity on Fiber",
        "Customize Solution according to Requirements.",
        "No bandwidth limitations",
        "Technology integration Service",
    ];

    return (
        <>
            <section className="solution-section">
                <div className="container container-custom">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">Our Technology</h2>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <ul className="solutions-list">
                                <li className="solution-item">
                                    {technology.map((tech, index) => (
                                        <div key={index} className="d-flex align-items-start my-3">
                                            <span className="check-icon">✓</span>
                                            <p className="solution-text">{tech}</p>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <div className="hero-image-container">
                                <div className="hero-image">
                                    <Image
                                        src={'/service_img/technology.png'}
                                        width={550}
                                        height={300}
                                        alt='solution'
                                        className='object-fit-contain'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
        .solution-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 100px 0;
          position: relative;
        }        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 3rem;
          position: relative;
          text-align: center;
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 3px;
          background: #007bff;
          margin: 1rem auto 0;
        }
        
        .hero-image-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 123, 255, 0.15);
          height: 100%;
          min-height: 150px;
        }
        
        .hero-image {
          width: 100%;
          height: 100%;
          min-height: 280px;
          object-fit: contain;
          background: linear-gradient(135deg, #fff 0%, #fff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          position: relative;
        }
        img{
            max-width:none;
        }
        .gear-icon {
          position: absolute;
          color: rgba(255, 255, 255, 0.3);
          font-size: 4rem;
          top: 20%;
          left: 15%;
        }
        
        .gear-icon:nth-child(2) {
          font-size: 3rem;
          top: 60%;
          left: 70%;
        }
        
        .gear-icon:nth-child(3) {
          font-size: 2.5rem;
          top: 40%;
          right: 20%;
        }
        
        .finger-pointer {
          position: absolute;
          color: rgba(255, 255, 255, 0.9);
          font-size: 2rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        
        .solutions-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .solution-item {
          background: white;
          margin-bottom: 1.5rem;
          padding: 1.5rem 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          border-left: 4px solid #007bff;
          position: relative;
          transition: all 0.2s ease;
        }
        
        .solution-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        }
        
        .check-icon {
          color: #28a745;
          font-size: 1.2rem;
          margin-right: 1rem;
          font-weight: bold;
        }
        
        .solution-text {
          color: #495057;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
          font-weight: 500;
        }
        
        .container-custom {
          max-width: 1200px;
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .hero-image {
            height: 200px;
          }
          
          .solution-item {
            padding: 1.2rem 1.5rem;
          }
          
          .gear-icon {
            font-size: 3rem;
          }
          
          .gear-icon:nth-child(2) {
            font-size: 2.5rem;
          }
          
          .gear-icon:nth-child(3) {
            font-size: 2rem;
          }
        }
                `}</style>
            </section>
        </>
    );
};

export default OurTechnologies;
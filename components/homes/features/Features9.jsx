'use client'
import React from "react";

export default function Features9() {
  // Mock feature cards data - replace with your actual data
  const featureCards = [
    {
      imgSrc: "🌐",
      title: "OFC Network Deployment"
    },
    {
      imgSrc: "📡",
      title: "Telecom Infrastructure"
    },
    {
      imgSrc: "📹",
      title: "CCTV Installation"
    },
    {
      imgSrc: "🏙️",
      title: "Smart City Solutions"
    },
    {
      imgSrc: "🔧",
      title: "Network Maintenance"
    },
    {
      imgSrc: "⚡",
      title: "Power Solutions"
    },
    {
      imgSrc: "🛡️",
      title: "Security Systems"
    },
    {
      imgSrc: "📊",
      title: "Data Analytics"
    }
  ];

  return (
    <>
      <style jsx>{`
        .services-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 100px 0;
          position: relative;
        }
        
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .intro-section {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .section-description {
          font-size: 1.1rem;
          color: #6c757d;
          line-height: 1.7;
          margin: 0;
          max-width: 600px;
        }
        
        .stats-highlight {
          display: inline-block;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          margin: 0 0.25rem;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .service-card {
          background: white;
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 123, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #28a745);
          transition: left 0.3s ease;
        }
        
        .service-card:hover::before {
          left: 0;
        }
        
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .service-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border: 2px solid #007bff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-icon {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          transform: scale(1.05);
        }
        
        .service-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0;
          line-height: 1.4;
        }
        
        .service-link {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }
        
        .service-link:hover {
          text-decoration: none;
          color: inherit;
        }
        
        .experience-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          margin-top: 2rem;
          font-weight: 600;
          color: #2c3e50;
        }
        
        .experience-icon {
          width: 20px;
          height: 20px;
          background: #28a745;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.75rem;
        }
        
        @media (max-width: 768px) {
          .services-section {
            padding: 80px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-description {
            font-size: 1rem;
          }
          
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }
          
          .service-card {
            padding: 1.5rem 1rem;
          }
          
          .intro-section {
            margin-bottom: 3rem;
          }
        }
        
        @media (max-width: 576px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 1.75rem;
          }
          
          .stats-highlight {
            display: block;
            margin: 0.25rem 0;
            text-align: center;
          }
        }
      `}</style>
      
      <section className="services-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="intro-section text-center">
                  <h2 className="section-title">
                    Our Comprehensive Services
                  </h2>
                  <p className="section-description">
                    NYRA ENTERPRISES delivers end-to-end telecom infrastructure solutions, 
                    from OFC network deployment to smart city integrations. With 
                    <span className="stats-highlight">500+ km</span> 
                    of fiber laid and 
                    <span className="stats-highlight">3,000+ CCTV</span> 
                    installations, we bring technical excellence to every project.
                  </p>
                  <div className="experience-badge">
                    <div className="experience-icon">✓</div>
                    <span>Proven Track Record Since 2015</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="services-grid">
              {featureCards.map((card, index) => (
                <div key={index} className="service-card">
                  <a href="#" className="service-link">
                    <div className="service-icon">
                      {card.imgSrc}
                    </div>
                    <h4 className="service-title">{card.title}</h4>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
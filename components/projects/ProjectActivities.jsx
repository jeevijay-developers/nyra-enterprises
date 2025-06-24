'use client'
import React from "react";

const ProjectActivities = () => {
  const activities = [
    {
      title: "RoW Permission",
      description: "State Highway, Railway Departments, Road and Building, Municipal Corporation, Irrigation department, Panchayat, National Highway Authorities, Cantonments",
      icon: "🏛️"
    },
    {
      title: "Trenching & Ducting",
      description: "Our in house team is expert in Cable Blowing work with OUR ownership Cable Blowing Machine for execution of work on targeted time.",
      icon: "🚧"
    },
    {
      title: "Cable Blowing",
      description: "Commit to deliver Quality solutions to our client. So we are focused to maintain in depth & good quality of work as per Telecom Standard",
      icon: "🔌"
    },
    {
      title: "Aerial Cable",
      description: "At places where open trenching is not possible due to very narrow roads and due to delay in obtaining RoW, Arial cabling will be adopted as a temporary solution",
      icon: "📡"
    },
    {
      title: "Duct Integrity Test",
      description: "After backfilling ducts shall be tested for integrity by closing one end of duct and passing compressed air at 5-6kg/cm2 from the other end, when pressure reaches about 5kg/cm2, the inlet of the duct is closed then fall in pressure should not be more than 50% in 1 hour",
      icon: "🔬"
    }
  ];

  return (
    <>
      <style jsx>{`
        .activities-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        
        .section-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 3.5rem;
          text-align: center;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #28a745);
          margin: 1.5rem auto 0;
          border-radius: 2px;
        }
        
        .activities-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .activity-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 123, 255, 0.1);
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .activity-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #007bff, #28a745);
          transition: width 0.3s ease;
        }
        
        .activity-card:hover {
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
        }
        
        .activity-card:hover::before {
          width: 8px;
        }
        
        .activity-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .activity-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0, 123, 255, 0.3);
        }
        
        .activity-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 0;
          flex-grow: 1;
        }
        
        .arrow-icon {
          color: #007bff;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .activity-card:hover .arrow-icon {
          transform: translateX(4px);
        }
        
        .activity-description {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
          padding-left: 4rem;
          position: relative;
        }
        
        .activity-description::before {
          content: '';
          position: absolute;
          left: 2rem;
          top: 0.5rem;
          width: 1rem;
          height: 2px;
          background: #007bff;
          border-radius: 1px;
        }
        
        .activity-number {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 32px;
          height: 32px;
          background: rgba(0, 123, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 600;
          color: #007bff;
        }
        
        @media (max-width: 768px) {
          .activities-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.25rem;
            margin-bottom: 2.5rem;
          }
          
          .activity-card {
            padding: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .activity-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .activity-title {
            font-size: 1.25rem;
          }
          
          .activity-description {
            padding-left: 0;
            margin-top: 1rem;
          }
          
          .activity-description::before {
            display: none;
          }
          
          .activity-icon {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }
        }
      `}</style>
      
      <section className="activities-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title">Project Activities</h2>
            </div>
          </div>
          
          <div className="activities-container">
            {activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="activity-header">
                  <div className="activity-icon">
                    {activity.icon}
                  </div>
                  <h3 className="activity-title">{activity.title}</h3>
                  <div className="arrow-icon">→</div>
                </div>
                <p className="activity-description">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectActivities;
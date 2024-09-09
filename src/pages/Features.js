import React from 'react';
import { Truck, BarChart, Clock, DollarSign, Shield, Zap, Smartphone, HeadphonesIcon } from 'lucide-react';
import './Features.css';

const Features = () => (
  <div className="features-section">
    <div className="features-content">
      <h1 className="features-title">TeleTrack Features</h1>
      <div className="features-grid">
        <FeatureCard
          icon={<Truck className="feature-icon" />}
          title="Real-time GPS Tracking"
          description="Monitor your fleet's location in real-time for improved logistics and customer service."
        />
        <FeatureCard
          icon={<BarChart className="feature-icon" />}
          title="Performance Analytics"
          description="Gain insights into vehicle performance, fuel efficiency, and driver behavior."
        />
        <FeatureCard
          icon={<Clock className="feature-icon" />}
          title="Route Optimization"
          description="Reduce travel time and fuel consumption with intelligent route planning algorithms."
        />
        <FeatureCard
          icon={<DollarSign className="feature-icon" />}
          title="Cost Management"
          description="Track and analyze expenses to identify cost-saving opportunities across your fleet."
        />
        <FeatureCard
          icon={<Shield className="feature-icon" />}
          title="Safety Monitoring"
          description="Enhance driver safety with real-time alerts for speeding, harsh braking, and other risky behaviors."
        />
        <FeatureCard
          icon={<Zap className="feature-icon" />}
          title="Maintenance Scheduling"
          description="Proactively schedule maintenance based on real-time vehicle diagnostics to prevent breakdowns."
        />
        <FeatureCard
          icon={<Smartphone className="feature-icon" />}
          title="Mobile App"
          description="Access TeleTrack features on-the-go with our user-friendly mobile application."
        />
        <FeatureCard
          icon={<HeadphonesIcon className="feature-icon" />}
          title="24/7 Support"
          description="Get round-the-clock assistance from our dedicated customer support team."
        />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="icon-container">
      {icon}
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

export default Features;

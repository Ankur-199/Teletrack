// import React from 'react';
// import './Home.css';
// import backgroundVideo from '../assets/background-video.mp4';

// const Home = () => (
//   <div className="home">
//     <section className="hero">
//       <video autoPlay muted loop className="background-video">
//         <source src={backgroundVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="hero-content">
//         <h1>TeleTrack</h1>
//         <p>Integrated Telematics Solution for Efficient Trucking</p>
//         <a href="/tracking" className="cta-button">Start Tracking</a>
//       </div>
//     </section>
//     {/* Add more sections like Features, Testimonials, etc. */}
//   </div>
// );

// export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';
import backgroundVideo from '../assets/background-video.mp4';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartTracking = () => {
    navigate('/login'); // Redirect to the login page on button click
  };

  return (
    <div className="home">
      <section className="hero">
        <video autoPlay muted loop className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>TeleTrack</h1>
          <p>Integrated Telematics Solution for Efficient Trucking</p>
          {/* Use button with click handler to navigate */}
          <button onClick={handleStartTracking} className="cta-button">
            Start Tracking
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
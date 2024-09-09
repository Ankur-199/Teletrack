// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Features from './pages/Features';
// import Contact from './pages/Contact'; // Assuming you have a Contact component

// function App() {
//   const isAuthenticated = localStorage.getItem('authToken'); // Check if user is logged in

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route 
//           path="/features" 
//           element={isAuthenticated ? <Features /> : <Navigate to="/login" />} // Redirect to login if not authenticated
//         />
//         <Route path="/contact" element={<Contact />} /> {/* Adjust if you have Contact component */}
//       </Routes>
//     </Router>
//   );
// }
// function App() {
//   const isAuthenticated = localStorage.getItem('authToken');
//   console.log('Authenticated:', isAuthenticated); // Check if the token exists

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route 
//           path="/features" 
//           element={isAuthenticated ? <Features /> : <Navigate to="/login" />} 
//         />
//         <Route path="/contact" element={<Contact />} /> {/* Adjust if you have Contact component */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Features from './pages/Features';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Features from './pages/Features';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Features from './pages/Features';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;










// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup'; // Import the Signup component
// import Features from './pages/Features';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} /> {/* Add the Signup route */}
//         <Route path="/features" element={<Features />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// src/App.js
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import NavbarLoggedIn from './components/NavbarLoggedIn';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import AddTruck from './pages/AddTruck';
// import Tracking from './pages/Tracking';
// import TruckAnalytics from './pages/TruckAnalytics';
// import DriverInfo from './pages/DriverInfo';
// import Contact from './pages/Contact'; // Adjust if you have Contact component

// function App() {
//   const isAuthenticated = localStorage.getItem('authToken'); // Check if user is logged in

//   return (
//     <Router>
//       {isAuthenticated ? <NavbarLoggedIn /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-truck" element={<AddTruck />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/truck-analytics" element={<TruckAnalytics />} />
//         <Route path="/driver-info" element={<DriverInfo />} />
//         <Route path="/contact" element={<Contact />} /> {/* Adjust if needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;






// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import NavbarLoggedIn from './components/NavbarLoggedIn';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import AddTruck from './pages/AddTruck';
// import Tracking from './pages/Tracking';
// import TruckAnalytics from './pages/TruckAnalytics';
// import DriverInfo from './pages/DriverInfo';
// import Contact from './pages/Contact';

// function App() {
//   const isAuthenticated = localStorage.getItem('authToken');
  
//   console.log('isAuthenticated:', isAuthenticated); // Check if this logs 'authenticated'

//   return (
//     <Router>
//       {isAuthenticated ? <NavbarLoggedIn /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-truck" element={<AddTruck />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/truck-analytics" element={<TruckAnalytics />} />
//         <Route path="/driver-info" element={<DriverInfo />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import NavbarLoggedIn from './components/NavbarLoggedIn';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import AddTruck from './pages/AddTruck';
// import Tracking from './pages/Tracking';
// import TruckAnalytics from './pages/TruckAnalytics';
// import DriverInfo from './pages/DriverInfo';
// import Contact from './pages/Contact';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     setIsAuthenticated(false);
//     navigate('/home'); // Redirect to home page
//   };

//   return (
//     <Router>
//       {isAuthenticated ? <NavbarLoggedIn onLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-truck" element={<AddTruck />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/truck-analytics" element={<TruckAnalytics />} />
//         <Route path="/driver-info" element={<DriverInfo />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





// src/App.js
// import React, { useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import NavbarLoggedIn from './components/NavbarLoggedIn';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import AddTruck from './pages/AddTruck';
// import Tracking from './pages/Tracking';
// import TruckAnalytics from './pages/TruckAnalytics';
// import DriverInfo from './pages/DriverInfo';
// import Contact from './pages/Contact';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     setIsAuthenticated(false);
//     navigate('/'); // Redirect to home page
//   };

//   return (
//     <>
//       {isAuthenticated ? <NavbarLoggedIn onLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-truck" element={<AddTruck />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/truck-analytics" element={<TruckAnalytics />} />
//         <Route path="/driver-info" element={<DriverInfo />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

// src/App.js
// import React, { useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import NavbarLoggedIn from './components/NavbarLoggedIn';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import AddTruck from './pages/AddTruck';
// import Tracking from './pages/Tracking';
// import TruckAnalytics from './pages/TruckAnalytics';
// import DriverInfo from './pages/DriverInfo';
// import Contact from './pages/Contact';
// import Features from './pages/Features'; // Import Features

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     setIsAuthenticated(false);
//     navigate('/'); // Redirect to home page
//   };

//   return (
//     <>
//       {isAuthenticated ? <NavbarLoggedIn onLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-truck" element={<AddTruck />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/truck-analytics" element={<TruckAnalytics />} />
//         <Route path="/driver-info" element={<DriverInfo />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/features" element={<Features />} /> {/* Add Features route */}
//       </Routes>
//     </>
//   );
// };

// export default App;




// src/App.js
// import React, { useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import NavbarLoggedIn from './components/NavbarLoggedIn';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import AddTruck from './pages/AddTruck';
// import Tracking from './pages/Tracking';
// import TruckAnalytics from './pages/TruckAnalytics';
// import DriverInfo from './pages/DriverInfo';
// import Contact from './pages/Contact';
// import Features from './pages/Features'; // Import Features

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     setIsAuthenticated(false);
//     navigate('/'); // Redirect to home page
//   };

//   return (
//     <>
//       {isAuthenticated ? <NavbarLoggedIn onLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-truck" element={<AddTruck />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/truck-analytics" element={<TruckAnalytics />} />
//         <Route path="/driver-info" element={<DriverInfo />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/features" element={<Features />} /> {/* Add Features route */}
//       </Routes>
//     </>
//   );
// };

// export default App


// import React, { useState } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import NavbarLoggedIn from './components/NavbarLoggedIn';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import AddTruck from './pages/AddTruck';
// import Tracking from './pages/Tracking';
// import TruckAnalytics from './pages/TruckAnalytics';
// import DriverInfo from './pages/DriverDetails';
// import Contact from './pages/Contact';
// import Features from './pages/Features'; // Import Features

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     setIsAuthenticated(false);
//     navigate('/'); // Redirect to home page
//   };

//   return (
//     <>
//       {isAuthenticated ? <NavbarLoggedIn onLogout={handleLogout} /> : <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-truck" element={<AddTruck />} />
//         <Route path="/tracking" element={<Tracking />} />
//         <Route path="/truck-analytics" element={<TruckAnalytics />} />
//         <Route path="/driver-info" element={<DriverInfo />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/features" element={<Features />} /> {/* Add Features route */}
//       </Routes>
//     </>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarLoggedIn from './components/NavbarLoggedIn';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AddTruck from './pages/AddTruck';
import Tracking from './pages/Tracking';
import DriverInfo from './pages/DriverDetails';
import Contact from './pages/Contact';
import Features from './pages/Features'; // Import Features
import FuelConsumption from './pages/FuelConsumption'; // Import FuelConsumption
import TripScheduling from './pages/TripScheduling'; // Import TripScheduling
import Maintenance from './pages/Maintenance'; // Import Maintenance
import Alerts from './pages/Alerts'; // Import Alerts

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to home page
  };

  return (
    <>
      {isAuthenticated ? <NavbarLoggedIn onLogout={handleLogout} /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-truck" element={<AddTruck />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/driver-info" element={<DriverInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/fuel-consumption" element={<FuelConsumption />} /> {/* Added Route */}
        <Route path="/trip-scheduling" element={<TripScheduling />} /> {/* Added Route */}
        <Route path="/maintenance" element={<Maintenance />} /> {/* Added Route */}
        <Route path="/alerts" element={<Alerts />} /> {/* Added Route */}
      </Routes>
    </>
  );
};

export default App;

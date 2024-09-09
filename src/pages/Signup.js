// import React, { useState } from 'react';
// import './Signup.css';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Placeholder signup logic
//     if (username && password) {
//       localStorage.setItem('authToken', 'authenticated');
//       navigate('/features'); // Redirect to features page upon successful signup
//     } else {
//       setErrorMessage('Please fill in both fields');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="input-container">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {errorMessage && <p className="error">{errorMessage}</p>}
//           <button type="submit">Sign Up</button>
//         </form>
//         <p className="switch-form">
//           Already have an account? <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;





// import React, { useState } from 'react';
// import './Signup.css';
// import { useNavigate, Link } from 'react-router-dom';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Placeholder signup logic
//     if (username && password) {
//       localStorage.setItem('authToken', 'authenticated');
//       navigate('/dashboard'); // Redirect to dashboard upon successful signup
//     } else {
//       setErrorMessage('Please fill in both fields');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="input-container">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {errorMessage && <p className="error">{errorMessage}</p>}
//           <button type="submit">Sign Up</button>
//         </form>
//         <p className="switch-form">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;




// src/pages/Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     // Mock signup logic
//     if (username && password) {
//       localStorage.setItem('authToken', 'dummyToken');
//       setIsAuthenticated(true);
//       navigate('/dashboard'); // Redirect to dashboard or home after signup
//     } else {
//       alert('Please fill in both fields');
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from 'react';
// import './Signup.css'; // Ensure you have the necessary styles
// import { useNavigate, Link } from 'react-router-dom';

// const Signup = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Placeholder signup logic
//     if (username && password) {
//       localStorage.setItem('authToken', 'authenticated');
//       setIsAuthenticated(true);
//       navigate('/dashboard'); // Redirect to dashboard upon successful signup
//     } else {
//       setErrorMessage('Please fill in both fields');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="input-container">
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {errorMessage && <p className="error">{errorMessage}</p>}
//           <button type="submit">Sign Up</button>
//         </form>
//         <p className="switch-form">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import './Signup.css'; // Ensure you have the necessary styles
import { useNavigate, Link } from 'react-router-dom';

const Signup = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder signup logic
    if (username && password) {
      localStorage.setItem('authToken', 'authenticated');
      setIsAuthenticated(true); // Update authentication state
      navigate('/dashboard'); // Redirect to dashboard upon successful signup
    } else {
      setErrorMessage('Please fill in both fields');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p className="switch-form">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

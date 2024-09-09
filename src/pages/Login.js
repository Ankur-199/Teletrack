// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('authToken', 'sample-token');
//     window.location.href = '/features'; // Redirect after login
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import styles from './Form.module.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const pp = () => {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [isSignup, setIsSignup] = useState(false);
//   const [passwordType, setPasswordType] = useState('password');

//   const togglePassword = () => {
//     setPasswordType(passwordType === 'password' ? 'text' : 'password');
//   };

//   return (
//     <div>
//       {/* Header */}
//       <header className={styles.header}>
//         <nav className={styles.nav}>
//           <a href="#" className={styles.navLogo}>CodingLab</a>
//           <ul className={styles.navItems}>
//             <li className={styles.navItem}>
//               <a href="#" className={styles.navLink}>Home</a>
//               <a href="#" className={styles.navLink}>Product</a>
//               <a href="#" className={styles.navLink}>Services</a>
//               <a href="#" className={styles.navLink}>Contact</a>
//             </li>
//           </ul>
//           <button className={styles.button} onClick={() => setIsFormVisible(true)}>Login</button>
//         </nav>
//       </header>

//       {/* Home Section */}
//       <section className={styles.home}>
//         {isFormVisible && (
//           <div className={`${styles.formContainer} ${styles.active}`}>
//             <i className={styles.formClose} onClick={() => setIsFormVisible(false)}>✖</i>
//             {/* Login Form */}
//             {!isSignup ? (
//               <div className={styles.loginForm}>
//                 <form>
//                   <h2>Login</h2>
//                   <div className={styles.inputBox}>
//                     <input type="email" placeholder="Enter your email" required />
//                     <i className={styles.emailIcon}></i>
//                   </div>
//                   <div className={styles.inputBox}>
//                     <input type={passwordType} placeholder="Enter your password" required />
//                     <i className={styles.passwordIcon}></i>
//                     <span onClick={togglePassword}>
//                       {passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </div>
//                   <div className={styles.optionField}>
//                     <span className={styles.checkbox}>
//                       <input type="checkbox" id="check" />
//                       <label htmlFor="check">Remember me</label>
//                     </span>
//                     <a href="#" className={styles.forgotPw}>Forgot password?</a>
//                   </div>
//                   <button className={styles.button}>Login Now</button>
//                   <div className={styles.loginSignup}>Don't have an account? <a href="#" onClick={() => setIsSignup(true)}>Signup</a></div>
//                 </form>
//               </div>
//             ) : (
//               /* Signup Form */
//               <div className={styles.signupForm}>
//                 <form>
//                   <h2>Signup</h2>
//                   <div className={styles.inputBox}>
//                     <input type="email" placeholder="Enter your email" required />
//                     <i className={styles.emailIcon}></i>
//                   </div>
//                   <div className={styles.inputBox}>
//                     <input type={passwordType} placeholder="Create password" required />
//                     <i className={styles.passwordIcon}></i>
//                     <span onClick={togglePassword}>
//                       {passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </div>
//                   <div className={styles.inputBox}>
//                     <input type={passwordType} placeholder="Confirm password" required />
//                     <i className={styles.passwordIcon}></i>
//                     <span onClick={togglePassword}>
//                       {passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </div>
//                   <button className={styles.button}>Signup Now</button>
//                   <div className={styles.loginSignup}>Already have an account? <a href="#" onClick={() => setIsSignup(false)}>Login</a></div>
//                 </form>
//               </div>
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default App;A

// src/pages/Login.js
// import React, { useState } from 'react';
// import styles from './Form.module.css'; // Ensure the path is correct
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const Login = () => {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [isSignup, setIsSignup] = useState(false);
//   const [passwordType, setPasswordType] = useState('password');

//   const togglePassword = () => {
//     setPasswordType(passwordType === 'password' ? 'text' : 'password');
//   };

//   return (
//     <div>
//       {/* Header */}
//       <header className={styles.header}>
//         <nav className={styles.nav}>
//           <a href="#" className={styles.navLogo}>CodingLab</a>
//           <ul className={styles.navItems}>
//             <li className={styles.navItem}>
//               <a href="#" className={styles.navLink}>Home</a>
//               <a href="#" className={styles.navLink}>Product</a>
//               <a href="#" className={styles.navLink}>Services</a>
//               <a href="#" className={styles.navLink}>Contact</a>
//             </li>
//           </ul>
//           <button className={styles.button} onClick={() => setIsFormVisible(true)}>Login</button>
//         </nav>
//       </header>

//       {/* Home Section */}
//       <section className={styles.home}>
//         {isFormVisible && (
//           <div className={`${styles.formContainer} ${styles.active}`}>
//             <i className={styles.formClose} onClick={() => setIsFormVisible(false)}>✖</i>
//             {/* Login Form */}
//             {!isSignup ? (
//               <div className={styles.loginForm}>
//                 <form>
//                   <h2>Login</h2>
//                   <div className={styles.inputBox}>
//                     <input type="email" placeholder="Enter your email" required />
//                     <i className={styles.emailIcon}></i>
//                   </div>
//                   <div className={styles.inputBox}>
//                     <input type={passwordType} placeholder="Enter your password" required />
//                     <i className={styles.passwordIcon}></i>
//                     <span onClick={togglePassword}>
//                       {passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </div>
//                   <div className={styles.optionField}>
//                     <span className={styles.checkbox}>
//                       <input type="checkbox" id="check" />
//                       <label htmlFor="check">Remember me</label>
//                     </span>
//                     <a href="#" className={styles.forgotPw}>Forgot password?</a>
//                   </div>
//                   <button className={styles.button}>Login Now</button>
//                   <div className={styles.loginSignup}>Don't have an account? <a href="#" onClick={() => setIsSignup(true)}>Signup</a></div>
//                 </form>
//               </div>
//             ) : (
//               /* Signup Form */
//               <div className={styles.signupForm}>
//                 <form>
//                   <h2>Signup</h2>
//                   <div className={styles.inputBox}>
//                     <input type="email" placeholder="Enter your email" required />
//                     <i className={styles.emailIcon}></i>
//                   </div>
//                   <div className={styles.inputBox}>
//                     <input type={passwordType} placeholder="Create password" required />
//                     <i className={styles.passwordIcon}></i>
//                     <span onClick={togglePassword}>
//                       {passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </div>
//                   <div className={styles.inputBox}>
//                     <input type={passwordType} placeholder="Confirm password" required />
//                     <i className={styles.passwordIcon}></i>
//                     <span onClick={togglePassword}>
//                       {passwordType === 'password' ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </div>
//                   <button className={styles.button}>Signup Now</button>
//                   <div className={styles.loginSignup}>Already have an account? <a href="#" onClick={() => setIsSignup(false)}>Login</a></div>
//                 </form>
//               </div>
//             )}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Login;
// src/pages/Login.js
// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add login logic here (authentication)
//     console.log('Email:', email, 'Password:', password);
//     // Simulate successful login and redirect
//     window.location.href = '/dashboard';
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-container">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <input
//               type={passwordVisible ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span
//               className="toggle-password"
//               onClick={() => setPasswordVisible(!passwordVisible)}
//             >
//               {passwordVisible ? 'Hide' : 'Show'}
//             </span>
//           </div>
//           <div className="actions">
//             <button type="submit" className="login-button">Login</button>
//             <a href="#" className="forgot-password">Forgot Password?</a>
//           </div>
//         </form>
//         <p>
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === 'test@example.com' && password === 'password') {
//       localStorage.setItem('authToken', 'sample-token');
//       navigate('/features'); // Redirect to features page
//     } else {
//       alert('Invalid login credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="email" 
//             placeholder="Enter your email" 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//           <input 
//             type="password" 
//             placeholder="Enter your password" 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} 
//             required 
//           />
//           <button type="submit">Login</button>
//         </form>
//         <a href="#">Forgot your password?</a>
//         <a href="#">Don't have an account? Sign up here!</a>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Placeholder login logic
//     if (username === 'admin' && password === 'password') {
//       localStorage.setItem('authToken', 'authenticated');
//       navigate('/features'); // Redirect to features page upon successful login
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
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
//           <button type="submit">Login</button>
//         </form>
//         <p className="switch-form">
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import './Login.css';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Placeholder login logic
//     if (username === 'admin' && password === 'password') {
//       localStorage.setItem('authToken', 'authenticated');
//       navigate('/dashboard'); // Redirect to dashboard upon successful login
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
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
//           <button type="submit">Login</button>
//         </form>
//         <p className="switch-form">
//           Don't have an account? <Link to="/signup">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// src/pages/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Mock authentication logic
//     if (username === 'user' && password === 'password') {
//       localStorage.setItem('authToken', 'dummyToken');
//       setIsAuthenticated(true);
//       navigate('/dashboard'); // Redirect to dashboard or home after login
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
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
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Ensure you have the necessary styles

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder login logic
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('authToken', 'authenticated');
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard upon successful login
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p className="switch-form">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

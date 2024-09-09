// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import corresponding CSS
// import styled from 'styled-components';

// const Navbar = () => (
//   <nav className="navbar">
//     <div className="navbar-logo">
//       <Link to="/">TeleTrack</Link>
//     </div>
//     <ul className="navbar-links">
//       <li><Link to="/tracking">Tracking</Link></li>
//       <li><Link to="/dashboard">Dashboard</Link></li>
//       <li><Link to="/reports">Reports</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//   </nav>
// );

// export default Navbar;
// // src/components/Navbar.js


// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   background-color: #1e1e2f;
//   padding: 15px 30px;
// `;

// const Logo = styled.div`
//   a {
//     color: #ffffff;
//     font-size: 28px;
//     font-weight: bold;
//     text-decoration: none;
//   }
// `;

// const NavLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   align-items: center;

//   li {
//     margin-left: 25px;

//     a {
//       color: #ffffff;
//       font-size: 18px;
//       text-decoration: none;
//       transition: color 0.3s;

//       &:hover {
//         color: #e67e22;
//       }
//     }
//   }
// `;

// Use these styled components in your Navbar component
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   background-color: #1e1e2f;
//   padding: 15px 30px;
// `;

// const Logo = styled.div`
//   a {
//     color: #ffffff;
//     font-size: 28px;
//     font-weight: bold;
//     text-decoration: none;
//   }
// `;

// const NavLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   align-items: center;

//   li {
//     margin-left: 25px;

//     a {
//       color: #ffffff;
//       font-size: 18px;
//       text-decoration: none;
//       transition: color 0.3s;

//       &:hover {
//         color: #e67e22;
//       }
//     }
//   }
// `;

// const Navbar = () => (
//   <Nav>
//     <Logo>
//       <Link to="/">TeleTrack</Link>
//     </Logo>
//     <NavLinks>
//       <li><Link to="/login">Login</Link></li>
//       <li><Link to="/features">Features</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </NavLinks>
//   </Nav>
// );

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the updated CSS

const Navbar = () => (
  <nav className="Nav">
    <div className="navbar-logo">
      <Link to="/">TeleTrack</Link>
    </div>
    <ul className="NavLinks">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign Up</Link></li> {/* Add the signup link */}
      <li><Link to="/features">Features</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;

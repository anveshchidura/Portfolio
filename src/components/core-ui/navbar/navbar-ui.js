import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import { headerData } from '../../../data/headerData';
import './navbar.css';
const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };
  
  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };
function NavbarUI({ theme, shortname, classes, handleDrawerOpen, handleDrawerClose, open, changeTheme, isDark }) {


    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.primary }}>
                    {shortname(headerData.name)}
                </h1>
            <header className="header">
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/#about"
                  smooth={true}
                  spy='true'
                  duration={2000}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#experience"
                  smooth={true}
                  spy='true'
                  duration={2000}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#resume"
                  smooth={true}
                  spy='true'
                  duration={2000}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  smooth={true}
                  spy='true'
                  duration={2000}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#skill"
                  smooth={true}
                  spy='true'
                  duration={2000}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#contacts"
                  smooth={true}
                  spy='true'
                  duration={2000}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
           
            </div>

                                
        </div>
    );
}

export default NavbarUI;

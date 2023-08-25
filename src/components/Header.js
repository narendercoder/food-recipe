import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  return (
    <Wrapper className="w-full">
      <div className="flex justify-between items-center w-full p-5">
        <div>
          <Link to="/">
          <img src="/logo.png" alt="logo" className="w-48" />
          </Link>
        </div>
        <div className="navbar-lists">
          <ul className=" flex justify-between items-center">
            <li className="navbar-item text-xl font-semibold">
              <NavLink to="/" className="navbar-link">
                Home
              </NavLink>
            </li>
            <li className="navbar-item text-xl font-semibold">
              <NavLink to="/about" className="navbar-link">
                About Us
              </NavLink>
            </li>
            <li className="navbar-item text-xl font-semibold">
              <NavLink to="/recipes" className="navbar-link">
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  .navbar-link {
    position: relative;
    padding: 0.5rem 0rem;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.4s ease;

    &:active {
      color: orange;
      /* transition: color 0.3s linear;
        border-bottom: 2px solid orange; */
    }

    &:after {
      content: "";
      display: block;
      position: relative;
      z-index: 1;
      top: auto;
      bottom: 0;
      left: 0;
      height: 2px;
      transform: none;
      background-color: orange;
      transition: all 0.2s ease;
      width: 0;
    }
  }

  .navbar-lists {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      padding: 0 20px;
    }
  }
  li:hover > .navbar-link::after {
    width: 100%;
  }
  li:hover > .navbar-link {
    color: orange;
  }
`;

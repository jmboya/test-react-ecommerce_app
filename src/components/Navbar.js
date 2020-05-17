import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./common/Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <span>
            <h1>
              <i className="fa fa-home"></i>
            </h1>
          </span>
          {/* <img src={home} alt="home image" className="navbar-brand" /> */}
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <h2>products</h2>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fa fa-cart-plus" />
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;

import React, { Component } from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
//
import Rates from "./home/Rates";
import About from "./home/About";
import Events from "./home/Events";
import Contact from "./home/Contact";

injectGlobal`
  ${reset}
  body {
    font-family: 'Lato', sans-serif;
    line-height: 1.3rem;
  }
`;

const Header = styled.div`
  font-weight: 300;
  height: 100vh;
  width: 100%;
  background: url(/static/img/party.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: center;

  .background {
    z-index: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .7), transparent);
  }

  .content {
    position: relative;
    z-index: 1;
  }

  .byline {
    margin-top: 6rem;
    line-height: 3rem;
    font-size: 2.5rem;
    color: white;
    text-shadow: 0 0 .7rem black, 0 0 .7rem black;
  }
  .callButton {
    position: relative;
    border-radius: .8rem;
    font-size: 1rem;
    color: white;
    margin: 3rem auto;
    max-width: 15rem;
    display: inline-block;
    padding: 1rem;
    line-height: 1.5rem;
    background-color: rgba(19, 18, 15, 0.75);
    box-shadow: 0 .3rem 1rem -.3rem rgba(0, 0, 0, 1);
    :hover {
      background-color: lightgray;
    }
  }
  a {
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  width: 80%;
  position: relative;
  z-index: 1;
  font-size: 4rem;
  font-weight: 300;
  text-align: left;
  color: white;
  padding: 1.5rem;
  text-shadow: 0 0 2rem black, 0 0 2rem black;
  border-bottom: 1px solid white;
  margin: 0 auto .5rem;
`;

const Navbar = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: right;

  li {
    display: inline-block;
  }

  a {
    display: inline-block;
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    padding: 1rem;
    text-shadow: 0 0 2rem black, 0 0 2rem black;
    transition: all .2s ease-out;

    :hover {
      transform: translateY(-.2rem);
    }
  }
`;
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <div className="background" />
          <div className="content">
            <Logo>
              City View
              <br />
              <br />
              <br />
              Memoriam
              <Navbar>
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#events">Events</a>
                  </li>
                  <li>
                    <a href="#rates">Rates</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </Navbar>
            </Logo>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="byline">
              <strong>Salt Lake City's premiere event center</strong>
            </div>
            <a href="tel:+18017466913">
              <div className="callButton">
                <div>CALL NOW TO BOOK AN EVENT!</div>
              </div>
            </a>
          </div>
        </Header>
        <About />

        <Events />

        <Rates />

        <Contact />
      </div>
    );
  }
}

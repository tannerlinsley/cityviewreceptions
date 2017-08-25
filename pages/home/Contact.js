import React, { Component } from "react";
import styled from "styled-components";

const Contact = styled.div`
  padding: 1rem 2rem;
  background: rgba(19, 18, 15, 0.75);
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;

  .header {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: .5rem;
    text-shadow: 0 0 .05rem black, 0 0 .05rem black;
  }

  .column {
    max-width: 1500px;
    margin: 0 auto 0 auto;
    line-height: 1.65;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 .08rem black, 0 0 .08rem black;
  }
  .columnLeft {
    width: 15rem;
    font-size: 1rem;
    padding: .5rem 5rem;
    margin-left: -9rem;
    line-height: 2rem;
  }
  .columnRight {
    font-size: 1rem;
    padding: 1rem .5rem;
    line-height: 2rem;
  }
  .contactBody {
    font-size: 1rem;
    font-style: italic;
  }
  .contactInfo {
    font-size: 1.1rem;
  }
`;

export default () =>
  <Contact id="contact">
    <div className="header">Contact Us</div>
    <br />
    <div className="column">
      <div className="columnLeft">
        <div className="contactBody">
          Give us a call for more information about our building and services.
          We are happy to assist you in planning your upcoming event.
        </div>
      </div>
      <br />
      <div className="columnRight">
        <div className="contactInfo">
          <div>City View Memoriam</div>
          <div>1001 East 11th Avenue</div>
          <div>Salt Lake City, UT 84103</div>
          <a href="tel:+18017466913">(801) 476 - 6913</a>
        </div>
      </div>
    </div>
  </Contact>;

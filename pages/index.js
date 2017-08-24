import React, { Component } from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
//

injectGlobal`
  ${reset}
  body {
    font-family: 'Lato', sans-serif;
    line-height: 1.3rem;
  }
`;

const Header = styled.div`
  height: 1000px;
  width: 100%;
  background: url(/static/img/party.jpg);
  background-position: center;
  background-size: cover;
  position: relative;

  .background {
    z-index: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  }

  .content {
    position: relative;
    z-index: 1;
  }

  .byline {
    margin-top: 6rem;
    text-align: center;
    font-size: 2.5rem;
    font-style: italic;
    color: white;
    text-shadow: 0 0 2rem black, 0 0 2rem black;
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

const About = styled.div`
  padding: 8rem 20rem;
  line-height: 2rem;
  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .column {
    max-width: 1500px;
    margin: 0 auto 0 auto;
    line-height: 1.65;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .columnLeft {
    font-size: 1rem;
    padding: 2rem 2rem;
    background: url(/static/img/aboutPic.jpeg);
    line-height: 2rem;
    text-align: left;
  }
  .columnRight {
    font-size: 1rem;
    padding: 1rem 2rem;
    line-height: 2rem;
    text-align: left;
  }
`;

const Events = styled.div`
  position: relative;
  padding: 8rem 20rem;
  line-height: 2rem;
  background: url(/static/img/wine.jpg);
  background-position: center;
  background-size: cover;
  color: white;

  .content {
    position: relative;
    z-index: 1;
    text-shadow: 0 0 2rem black, 0 0 2rem black;
  }

  .background {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
const Rates = styled.div`
  padding: 8rem 2rem;
  text-align: center;

  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .subHeader {
    font-size: 1.5rem;
  }
  .column {
    max-width: 1500px;
    margin: 0 auto 0 auto;
    line-height: 1.65;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .columnLeft {
    font-size: 1rem;
    padding: 2rem 2rem;
    border-right: 1px solid black;
    line-height: 2rem;
    text-align: left;
  }
  .columnRight {
    font-size: 1rem;
    padding: 1rem 2rem;
    line-height: 2rem;
    text-align: left;
  }
  .info {
    font-size: 1rem;
    font-style: italic;
  }
`;
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
            <div className="byline">Salt Lake City's premiere event center</div>
          </div>
        </Header>
        <About id="about">
          <div className="header">About</div>
          In 1928, Salt Lake City Corporation deeded to American Abbey and
          Mausoleum Company 6.5 acres north of the Salt Lake City Cemetery for
          the construction of a mausoleum, crematorium, chapel and gardens.
          Cecil E. Bryan, America’s foremost mausoleum architect was
          commissioned to design and erect a stately temple built of stone,
          marble, bronze, carved woods and stained glass that would withstand
          the ravages of time and be a beacon of beauty and memory for Salt Lake
          City. The property was named the Salt Lake Mausoleum and was dedicated
          for the public in 1931. After a few changes in ownership, in 2015,
          Salt Lake City Memoriam, LLC purchased the property and changed the
          name to the City View Memoriam.
        </About>

        <Events id="events">
          <div className="content">
            <div className="header">Events</div>
            City View Memoriam provides a beautiful and elegant place to
            celebrate your significant event, be it a wedding, memorial for a
            departed loved one, or family gathering. Our grounds, buildings and
            gardens stand as a highlight and foil to your important occasion.
            The unparalleled view of the Salt Lake Valley provides not only the
            finest view of our valley, but provides opportunities for
            reflection. We invite you to come yourself and experience the
            unparalleled beauty of our facilities.
          </div>
          <div className="background" />
        </Events>

        <Rates id="rates">
          <div className="header">Rates</div>
          <br />
          <div className="column">
            <div className="columnLeft">
              <div className="subHeader">
                <strong>Reception</strong>
              </div>
              <br />$995 – Includes:
              <br />
              <br />Use of the building for 5 hours
              <br />Tables and chairs for 80, setup
              <br />Linens
              <br />One staff member for assistance during event
              <div className="info">
                <br />$100 of that $995 potentially refundable cleaning deposit
                <br />$100 – additional hourly charge
              </div>
            </div>
            <br />
            <br />
            <div className="columnRight">
              <div className="subHeader">
                <strong>Luncheon, memorial service, or family gathering</strong>
              </div>
              <br />$495 – Includes:
              <br />
              <br />Use of the building for 4 hours
              <br />Tables and chairs for 80, setup
              <br />Linens
              <br />One staff member for assistance during event
              <div className="info">
                <br />$100 of that $495 potentially refundable cleaning deposit
                <br />$100 – additional hourly charge
              </div>
            </div>
          </div>
        </Rates>

        <Contact id="contact">
          <div className="header">Contact Us</div>
          <br />
          <div className="column">
            <div className="columnLeft">
              <div className="contactBody">
                Give us a call for more information about our building and
                services. We are happy to assist you in planning your upcoming
                event.
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
        </Contact>
      </div>
    );
  }
}

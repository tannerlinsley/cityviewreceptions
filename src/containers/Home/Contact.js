import React from 'react'
import styled from 'styled-components'

const Contact = styled.div`
  padding: 5rem 2rem;
  background: rgba(19, 18, 15, 0.9);
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;

  .header {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    text-shadow: 0 0 0.05rem black, 0 0 0.05rem black;
  }

  .columns {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-shadow: 0 0 0.08rem black, 0 0 0.08rem black;
  }
  .column {
    flex: 1 1 300px;
    padding: 1rem;
    max-width: 15rem;
    font-size: 1rem;
    line-height: 2rem;
  }
  .phone {
    display: block;
    text-decoration: none;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    border-radius: 0.3rem;
    margin: 0.5rem;
  }
`

export default () => (
  <Contact id="contact">
    <div className="header">Contact Us</div>
    <div className="columns">
      <div className="column">
        Give us a call for more information about our building and services. We are happy to assist
        you in planning your upcoming event.
      </div>
      <div className="column">
        <div>City View Receptions</div>
        <div>1001 East 11th Avenue</div>
        <div>Salt Lake City, UT 84103</div>
        <a href="tel:+18017466913" className="phone">
          (801) 476 - 6913
        </a>
      </div>
    </div>
    <div className="copyright">
      Copyright &copy; {new Date().getYear() + 1900} City View Memorium
    </div>
  </Contact>
)

import React from 'react'
import styled from 'styled-components'
//

export const List = styled.ul`
  list-style-type: disc;
  text-align: left;
  margin: 0.5rem auto;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  background: white;
  box-shadow: 0 0.3rem 1rem -0.3rem rgba(0, 0, 0, 0.3);
`

export const Item = styled.li`
  margin-bottom: 0.2rem;
  :last-child {
    margin-bottom: 0;
  }
`

const Rates = styled.div`
  position: relative;
  padding: 8rem 0;
  text-align: center;
  background-image: url(/img/wedding.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  .backing {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.75);
  }

  .header {
    position: relative;
    z-index: 1;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .subHeader {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .price {
    margin-bottom: 1rem;
  }

  .content {
    z-index: 1;
    position: relative;
    max-width: 1500px;
    margin: 0 auto 0 auto;
    line-height: 1.65;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

  .column {
    padding: 2rem 2rem;

    :first-child {
      border-right: 1px solid black;

      @media (max-width: 800px) {
        border-right: 0;
      }
    }
  }

  .info {
    font-size: 1rem;
    font-style: italic;
    opacity: 0.9;
  }
`

export default () => (
  <Rates id="rates">
    <div className="header">Rates</div>
    <div className="backing" />
    <div className="content">
      <div className="column">
        <div className="subHeader">
          <strong>Reception</strong>
        </div>
        <div className="price">$995</div>
        <List>
          <Item>Great for Weddings &amp; Anniversaries</Item>
          <Item>Use of the building for 5 hours</Item>
          <Item>Tables and chairs for 80, setup</Item>
          <Item>Linens</Item>
          <Item>One staff member for assistance during event</Item>
        </List>
        <div className="info">
          <br />Up to $100 refundable cleaning deposit
          <br />$100 – additional hourly charge
        </div>
      </div>
      <div className="column">
        <div className="subHeader">
          <strong>Gathering</strong>
        </div>
        <div className="price">$495</div>
        <List>
          <Item>Great for family reunions &amp; funeral services</Item>
          <Item>Use of the building for 4 hours</Item>
          <Item>Tables and chairs for 80, setup</Item>
          <Item>Linens</Item>
          <Item>One staff member for assistance during event</Item>
        </List>
        <div className="info">
          <br />Up to $100 refundable cleaning deposit
          <br />$100 – additional hourly charge
        </div>
      </div>
    </div>
  </Rates>
)

import React, { Component } from 'react'
import styled from 'styled-components'

const Events = styled.div`
  position: relative;
  padding: 5em 2rem;
  line-height: 2rem;
  background: url(/static/img/party.jpg);
  background-position: center;
  background-size: cover;
  color: white;

  .content {
    position: relative;
    z-index: 1;
    text-shadow: 0 0 2rem black, 0 0 2rem black;
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
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
`

export default () =>
  <Events id="events">
    <div className="content">
      <div className="header">Events</div>
      City View Memoriam provides a beautiful and elegant place to celebrate
      your significant event, be it a wedding, memorial for a departed loved
      one, or family gathering. Our grounds, buildings and gardens stand as a
      highlight and foil to your important occasion. The unparalleled view of
      the Salt Lake Valley provides not only the finest view of our valley, but
      provides opportunities for reflection. We invite you to come yourself and
      experience the unparalleled beauty of our facilities.
    </div>
    <div className="background" />
  </Events>

import React from 'react'
import styled from 'styled-components'

const Events = styled.div`
  position: relative;
  padding: 4em 2rem;
  line-height: 2rem;
  background: white;
  z-index: 0;
  text-align: center;
  box-shadow: inset 0 0px 20px rgba(0, 0, 0, 0.3);

  .header {
    position: relative;
    z-index: 1;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 0 auto 2rem;
    padding-bottom: 1rem;
    color: #b5902a;
    display: inline-block;
    border-bottom: 5px solid #b5902a;
  }

  .content {
    position: relative;
    z-index: 1;
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    text-align: left;
  }
`

export default () => (
  <Events id="events">
    <div className="header">Events</div>
    <div className="content">
      City View Reception center provides a beautiful and elegant place to celebrate your
      significant event, be it a wedding, memorial for a departed loved one, or family gathering.
      Our grounds, buildings and gardens stand as a highlight and foil to your important occasion.
      The unparalleled view of the Salt Lake Valley provides not only the finest view of our valley,
      but provides opportunities for reflection. We invite you to come yourself and experience the
      unparalleled beauty of our facilities.
    </div>
    <div className="background" />
  </Events>
)

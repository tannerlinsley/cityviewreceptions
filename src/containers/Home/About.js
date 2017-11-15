import React from 'react'
import styled from 'styled-components'

const About = styled.div`
  background: url(/img/blossoms2.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  line-height: 2rem;
  text-shadow: 0 0 30px white, 0 0 30px white;
  box-shadow: 0 3px 40px 0 black;
  z-index: 1;

  .inner {
    padding: 8rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: inset 0 0 0 13px white, inset 0 0 0 15px rgba(215, 99, 148, 0.5);
  }
  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .content {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
  }
`

export default () => (
  <About id="about">
    <div className="inner">
      <div className="header">About</div>
      <div className="content">
        An Architectural treasure in the heart of Salt Lake City, just a step away from the State
        Capitol and directly above the Salt Lake City Cemetery. City View Reception Center, with its
        magnificent art deco Tiffany windows has perfected the art of elegance, comfort, and
        tradition.
        <br />
        <br />
        City View provides the perfect ambiance for your special event. Our professional staff
        offers you the flexibility of hosting groups from 50 to 300 . Our location is ideal for
        wedding receptions, cocktail parties, fundraisers, holiday gatherings, luncheons, seminars,
        conferences, trade shows and much, much more. All of this is available at an equally special
        and affordable price. City Views all-inclusive packages are completely customizable and make
        for a stress-free planning experience.
      </div>
    </div>
  </About>
)

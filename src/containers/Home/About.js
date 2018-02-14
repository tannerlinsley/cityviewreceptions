import React from 'react'
import styled from 'styled-components'

const About = styled.div`
  background: white;
  line-height: 2rem;
  text-shadow: 0 0 30px white, 0 0 30px white;
  z-index: 1;

  .inner {
    padding: 5rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 0 auto 2rem;
    padding-bottom: 1rem;
    color: #b5902a;
    display: inline-block;
    border-bottom: 5px solid #b5902a;
  }
  .content {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    text-align: left;
  }
`

export default () => (
  <About id="about">
    <div className="inner">
      <div className="header">About Us</div>
      <div className="content">
        An Architectural treasure in the heart of Salt Lake City, just a step away from the State
        Capitol and directly above the Salt Lake City avenues. City View Reception Center, with its
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

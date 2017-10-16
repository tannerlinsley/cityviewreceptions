import React from 'react'
import styled from 'styled-components'

const About = styled.div`
  padding: 8rem 2rem;
  line-height: 2rem;
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
    <div className="header">About</div>
    <div className="content">
      An Architectural treasure in the heart of downtown Salt Lake City, just a step away from the
      State Capitol and directly above the Salt Lake City Cemetery. City View Reception Center, with
      its magnificent art deco Tiffany windows has perfected the art of balance, of elegance and
      comfort, of tradition and versatility.
      <br />
      <br />
      City View provides the perfect ambiance for your special event. Our professional staff offers
      you the flexibility of hosting groups from 50 to 300 . Our location is ideal for wedding
      receptions, cocktail parties, fundraisers, holiday gatherings, luncheons, seminars,
      conferences, trade shows and much, much more. All of this is yours for one of the most
      important days of your life at an equally special and affordable price. City Views
      all-inclusive packages are completely customizable and make for a stress-free planning
      experience.
    </div>
  </About>
)

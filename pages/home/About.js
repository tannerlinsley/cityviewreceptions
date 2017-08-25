import React, { Component } from "react";
import styled from "styled-components";

const About = styled.div`
  padding: 5rem 2rem;
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
`;

export default () =>
  <About id="about">
    <div className="header">About</div>
    <div className="content">
      In 1928, Salt Lake City Corporation deeded to American Abbey and Mausoleum
      Company 6.5 acres north of the Salt Lake City Cemetery for the
      construction of a mausoleum, crematorium, chapel and gardens. Cecil E.
      Bryan, America’s foremost mausoleum architect was commissioned to design
      and erect a stately temple built of stone, marble, bronze, carved woods
      and stained glass that would withstand the ravages of time and be a beacon
      of beauty and memory for Salt Lake City. The property was named the Salt
      Lake Mausoleum and was dedicated for the public in 1931. After a few
      changes in ownership, in 2015, Salt Lake City Memoriam, LLC purchased the
      property and changed the name to the City View Memoriam.
    </div>
  </About>;

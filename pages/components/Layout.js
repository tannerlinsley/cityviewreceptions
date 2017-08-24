import React, { Component } from "react";
import styled from "styled-components";

export const List = styled.ul`
  list-style-type: disc;
  text-align: left;
  margin: .5rem auto;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: .3rem;
  background: rgba(0, 0, 0, .02);
  box-shadow: 0 .3rem 1rem -.3rem rgba(0, 0, 0, .3);
`;

export const Item = styled.li`
  margin-bottom: .2rem;
  :last-child {
    margin-bottom: 0;
  }
`;

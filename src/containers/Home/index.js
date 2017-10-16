/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
//
import Link from 'components/Link'
import ClickOutside from 'components/ClickOutside'
import ScrollTo from 'utils/ScrollTo'
//
import About from './About'
import Events from './Events'
import Gallery from './Gallery'
import Rates from './Rates'
import Contact from './Contact'
//

const Menu = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 99999;

  .handle {
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 3rem;
    height: 3rem;
    border-radius: 0.25rem;
    cursor: pointer;

    .bar {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.9);
      width: 70%;
      height: 12%;
      top: 20%;
      left: 15%;
      border-radius: 0.1rem;

      &:nth-child(2) {
        top: 44%;
      }
      &:nth-child(3) {
        top: auto;
        bottom: 20%;
      }
    }
  }

  ul {
    position: absolute;
    top: 4rem;
    left: 0;
    text-align: left;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 0.25rem;
    width: 6rem;
    overflow: hidden;
    transition: all 0.15s ease-out;

    opacity: 0;
    pointer-events: none;

    &.open {
      opacity: 1;
      pointer-events: all;
    }

    a {
      display: block;
      font-size: 1.1rem;
      color: white;
      text-decoration: none;
      padding: 0.7rem 1rem;
      text-shadow: 0 0 2rem black;
      transition: all 0.15s ease-out;

      :hover {
        background: white;
        color: black;
      }
    }
  }
`

const animationBounce = keyframes`
  0%, 100% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-.5rem)
  }
`

const Header = styled.div`
  font-weight: 300;
  height: 100vh;
  width: 100%;
  background: url(/img/blossoms.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;

  .content {
    height: 100%;
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0.7rem;
    border: solid 2px rgba(255, 255, 255, 0.8);
    border-radius: 0.2rem;

    img {
      background: rgba(255, 255, 255, 0.8);
      width: 200px;
      padding: 1rem 1.5rem;
      border-radius: 0.25rem;
    }
  }

  .scroll-for-more {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    height: 3rem;
    animation: 1s infinite ${animationBounce};
    cursor: pointer;

    .arrow {
      position: absolute;
      bottom: 0.5rem;
      left: 50%;
      width: 2rem;
      height: 2rem;
      border-right: solid 3px white;
      border-bottom: solid 3px white;
      transform: translateX(-50%) rotate(45deg);
    }
  }
`

export default class Home extends Component {
  state = {
    isMenuOpen: false,
  }
  componentDidMount () {
    this.interval =
      this.interval ||
      setInterval(() => {
        const els = Array.from(document.querySelectorAll('[id]'))
        els.forEach(el => {
          el.scrollIntoView = () => console.log('hello') || ScrollTo(el)
          el.scrollIntoViewIfNeeded = () => console.log('hello') || ScrollTo(el)
        })
      }, 500)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    const { isMenuOpen } = this.state
    return (
      <div>
        <Menu>
          <div
            className="handle"
            onClick={() =>
              this.setState({
                isMenuOpen: true,
              })}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <ClickOutside
            onClickOutside={() =>
              this.setState({
                isMenuOpen: false,
              })}
          >
            {useRef => (
              <ul className={isMenuOpen ? 'open' : ''} ref={el => useRef(el)}>
                <li>
                  <Link to="/#top">Home</Link>
                </li>
                <li>
                  <Link to="/#about">About</Link>
                </li>
                <li>
                  <Link to="/#events">Events</Link>
                </li>
                <li>
                  <Link to="/#gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/#rates">Rates</Link>
                </li>
                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </ul>
            )}
          </ClickOutside>
        </Menu>
        <Header id="top">
          <div className="content">
            <div className="logo">
              <img src="/img/logo.png" alt="" />
            </div>
            <Link to="/#about" className="scroll-for-more">
              <div className="arrow" />
            </Link>
          </div>
        </Header>
        <About />
        <Events />
        <Gallery />
        <Rates />
        <Contact />
      </div>
    )
  }
}

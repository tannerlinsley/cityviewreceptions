import React, { Component } from 'react'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Link from 'next/link'
//
import ScrollTo from './utils/ScrollTo'

import Rates from './home/Rates'
import About from './home/About'
import Events from './home/Events'
import Contact from './home/Contact'

injectGlobal`
  ${reset}
  body {
    font-family: 'Lato', sans-serif;
    line-height: 1.3rem;
  }
`

const Header = styled.div`
  font-weight: 300;
  height: 100vh;
  width: 100%;
  background: url(/static/img/party.jpg);
  background-position: center;
  background-size: cover;
  position: relative;

  .gradient {
    z-index: 0;
    width: 100%;
    height: 50%;
    position: absolute;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .7), transparent);
  }

  .content {
    height: 100%;
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
    flex-wrap: wrap;

    .logo {
      font-size: 3rem;
      line-height: 3rem;
      font-weight: 300;
      text-align: center;
      color: white;
      padding: 1rem 1.5rem;
      text-shadow: 0 0 2rem black, 0 0 2rem black;
    }

    .menu {
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        font-size: 1.1rem;
        color: white;
        text-decoration: none;
        padding: 1rem;
        text-shadow: 0 0 2rem black, 0 0 2rem black;
        transition: all .15s ease-out;

        :hover {
          transform: translateY(-.2rem);
        }
      }
    }
  }

  .byline {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    line-height: 3rem;
    font-size: 2.5rem;
    color: white;
    text-shadow: 0 0 .7rem black, 0 0 .7rem black;

    div {
      margin-bottom: 1rem;
    }

    .callButton {
      text-decoration: none;
      font-size: 1rem;
      color: white;
      max-width: 15rem;
      display: inline-block, table-cell;
      vertical-align: middle;
      padding: 1rem;
      line-height: 1.5rem;
      background-color: rgba(19, 18, 15, 0.75);
      box-shadow: 0 .3rem 1rem -.3rem rgba(0, 0, 0, 1);
      transition: .3s ease-out;
      border-radius: .3rem;

      :hover {
        background-color: rgba(37, 99, 164, 0.88);
        transform: scale(1.05);
      }
    }
  }
`

export default class Home extends Component {
  componentDidMount() {
    this.interval =
      this.interval ||
      setInterval(() => {
        const els = Array.from(document.querySelectorAll('[id]'))
        els.forEach(el => {
          el.scrollIntoView = () => ScrollTo(el)
          el.scrollIntoViewIfNeeded = () => ScrollTo(el)
        })
      }, 500)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>
        <Header>
          <div className="gradient" />
          <div className="content">
            <div className="navbar">
              <h1 className="logo">City View Memoriam</h1>
              <ul className="menu">
                <li>
                  <Link href="#about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#events">
                    <a>Events</a>
                  </Link>
                </li>
                <li>
                  <Link href="#rates">
                    <a>Rates</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="byline">
              <div>Salt Lake City's premiere memorial center</div>
              <a href="tel:+18017466913" className="callButton">
                CALL NOW TO BOOK AN EVENT!
              </a>
            </div>
          </div>
        </Header>
        <About />
        <Events />
        <Rates />
        <Contact />
      </div>
    )
  }
}

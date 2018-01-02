import React from 'react'
import styled from 'styled-components'
import { Form, Text, TextArea } from 'react-form'
import axios from 'axios'

const Contact = styled.div`
  padding: 5rem 2rem;
  background: rgba(19, 18, 15, 0.9);
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;

  .header {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    text-shadow: 0 0 0.05rem black, 0 0 0.05rem black;
  }

  form {
    margin: 2rem 0 1rem;
    > div {
      width: 400px;
      max-width: 100%;
      margin: 0 auto;
      margin-bottom: 1rem;
      > div {
        display: block;
        margin-bottom: 0.2rem;
        font-size: 0.9rem;
        text-align: left;
        opacity: 0.6;
      }
      input {
        display: block;
      }
    }
    input,
    textarea {
      border: 0;
      background: rgba(0, 0, 0, 0.3);
      color: white;
      padding: 0.7rem;
      width: 100%;
      font-size: 1rem;
      border-radius: 0.3rem;
    }
    button {
      border: 0;
      border-radius: 0.3rem;
      background: rgb(198, 79, 104);
      color: white;
      appearance: none;
      padding: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.1s ease-out;

      :hover {
        transform: scale(1.2);
        background: rgb(191, 44, 75);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .columns {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-shadow: 0 0 0.08rem black, 0 0 0.08rem black;
  }
  .column {
    flex: 1 1 500px;
    padding: 1rem;
    max-width: 20rem;
    font-size: 1rem;
    line-height: 2rem;
  }
  .phone {
    display: block;
    text-decoration: none;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    border-radius: 0.3rem;
    margin: 0.5rem;
  }
`

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export default class extends React.Component {
  render () {
    return (
      <Contact id="contact">
        <div className="header">Contact Us</div>
        <Form
          onSubmit={values => {
            axios.post('/', encode({ 'form-name': 'contact', ...values }), {
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            })
          }}
        >
          {({ submitForm }) => (
            <form name="contact" netlify="true" onSubmit={submitForm}>
              <div>
                <div>Name</div>
                <Text field="name" name="name" placeholder="John Doe" />
              </div>
              <div>
                <div>Email</div>
                <Text field="email" name="email" placeholder="johndoe@gmail.com" />
              </div>
              <div>
                <div>Phone</div>
                <Text field="phone" name="phone" placeholder="(555) 555-555" />
              </div>
              <div>
                <div>Message</div>
                <TextArea
                  field="message"
                  name="message"
                  rows="5"
                  placeholder="Your message to us :)"
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </Form>
        <div className="columns">
          <div className="column">
            Or give us a call for more information about our building and services. We are happy to
            assist you in planning your upcoming event.
          </div>
          <div className="column">
            <div>City View Receptions</div>
            <div>1001 East 11th Avenue</div>
            <div>Salt Lake City, UT 84103</div>
            <a href="tel:+18017466913" className="phone">
              (801) 476 - 6913
            </a>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; {new Date().getYear() + 1900} City View Receptions
        </div>
      </Contact>
    )
  }
}

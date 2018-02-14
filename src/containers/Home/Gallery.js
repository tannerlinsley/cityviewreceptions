import React from 'react'
import styled from 'styled-components'
//

const images = [1, 2, 3, 4, 5, 6, 7, 8]

const Gallery = styled.div`
  padding: 3rem 0 0;
  background: white;
  position: relative;
  box-shadow: inset 0 0px 20px rgba(0, 0, 0, 0.3);

  .header {
    position: relative;
    z-index: 1;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin: 0 0 2rem;
  }

  .images {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2.2rem;

    .image {
      flex: 1 0 300px;
      padding-top: 25%;
      background-size: cover;
      background-position: center;
      transition: 0.2s ease-out;
      opacity: 0.9;
      box-shadow: inset 0 0 0 3px white;

      @media (max-width: 800px) {
        flex: 1 0 50%;
        padding-top: 50%;
      }

      :hover {
        opacity: 1;
      }
    }
  }
`

export default () => (
  <Gallery id="gallery">
    <div className="background" />
    <div className="header">Gallery</div>
    <div className="images">
      {images.map(image => (
        <a
          key={image}
          href={`/img/gallery/${image}.jpg`}
          target="_blank"
          className="image"
          style={{
            backgroundImage: `url(/img/gallery/thumbs/${image}.jpg)`,
          }}
        >
          &nbsp;
        </a>
      ))}
    </div>
  </Gallery>
)

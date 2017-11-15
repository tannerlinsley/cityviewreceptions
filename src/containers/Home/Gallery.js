import React from 'react'
import styled from 'styled-components'
//

const images = ['1.jpg', '2.jpg', '3.jpg']

const Gallery = styled.div`
  padding: 3rem 0;
  background: white;

  .header {
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
    margin: 0 0 2rem;
  }

  .images {
    display: flex;
    max-width: 100%;
    width: 800px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1% 0.5%;

    .image {
      width: 47%;
      margin: 1%;
      padding-top: 33.33%;
      background-size: cover;
      transition: 0.3s ease-out;
      z-index: 0;
      opacity: 0.9;
      border-radius: 0.25rem;

      @media (max-width: 500px) {
        width: 99%;
        padding-top: 66.66%;
      }

      :hover {
        opacity: 1;
        transform: scale(1.05);
        z-index: 1;
        box-shadow: 0 0 3rem 0 rgba(0, 0, 0, 0.4);
      }
    }
  }
`

export default () => (
  <Gallery id="gallery">
    <div className="header">Gallery</div>
    <div className="images">
      {images.map(image => (
        <a
          key={image}
          href={`/img/gallery/${image}`}
          target="_blank"
          className="image"
          style={{
            backgroundImage: `url(/img/gallery/thumbs/${image})`,
          }}
        >
          &nbsp;
        </a>
      ))}
    </div>
  </Gallery>
)

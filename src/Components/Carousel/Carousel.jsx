import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./Img/data"
import classes from './Carousel.module.css'
const CarouselEffect = () => {
  return (
      <div>
          <Carousel
              autoplay={true}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={true}
          >
              {
                  img.map((imageItemLink,index) => {
                      return <img key={index} src={imageItemLink} />
                 }) 
          }    
          </Carousel>
<div className={classes.hero__img}></div>
    </div>
  )
}

export default  CarouselEffect
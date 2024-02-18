import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Category from '../../Components/Category/Category'
import Carousel from '../../Components/Carousel/Carousel'
import Product from "../../Components/Product/Product"
import Footer from '../../Components/Footer/Footer'
const Landing = () => {
  return (
      <LayOut >
          <Carousel />
          <Category />
          <Product />
          <Footer />
      </LayOut>
  )
}

export default Landing
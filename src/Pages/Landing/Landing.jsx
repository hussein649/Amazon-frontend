import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Category from '../../Components/Category/Category'
import Carousel from '../../Components/Carousel/Carousel'
// import Product from "../../Components/Product/Product"
const Landing = () => {
  return (
      <LayOut>
          <Carousel />
          <Category />
          {/* <Product /> */}
      </LayOut>
  )
}

export default Landing
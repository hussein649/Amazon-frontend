import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'

const Routering = () => {
  return (
      <Router>
          <Routes>
              <Route>
                  <Route path="/" element={<Landing/>}/>
                  <Route path="/auth" element={<SignUp/>}/>
                  <Route path="/payments" element={<Payment/>}/>
                  <Route path="/orders" element={<Orders/>}/>
                  <Route path="/cart" element={<Cart/>}/>
              </Route>
          </Routes>
          
    </Router>
  )
}

export default Routering
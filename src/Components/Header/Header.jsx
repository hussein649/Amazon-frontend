import React, { useContext} from "react";
import classes from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from '../../Utility/firebase'
const Header = () => {
  const [{user, basket }, dispatch] = useContext(DataContext)
   const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount
  },0)

  // console.log(basket.length);
 
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo section*/}
          <div className={classes.logo__container}>
            <Link to="/">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className={classes.delivery}>
              <span>{<SlLocationPin />}</span>
              <div className={classes.location}>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            {<BsSearch size={38} />}
          </div>

          {/* other section*/}
          <div className={classes.order__container}>
            <div>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select>
                  <option value="">EN</option>
                </select>
              </Link>
            </div>
            {/* three components*/}
            <div className={classes.customer__container}>
              <div className={classes.account}>
                <Link to={!user && "/auth"}>
                  <div>
                    {user ? (
                      <>
                        <p>Hello,{user?.email?.split("@")[0]}</p>
                        <span onClick={()=>auth.signOut()}>Sign Out</span>
                      </>
                    ) : (
                      <>
                        <p>Hello,Sign In</p>
                        <span>Account & Lists</span>
                      </>
                    )}
                  </div>
                </Link>
              </div>
              {/* orders */}
              <div className={classes.return__order}>
                <Link to="/orders">
                  <p>Returns</p>
                  <span>& Orders</span>
                </Link>
              </div>
              {/* cart*/}
              <div className={classes.cart}>
                <Link to="/cart">
                  {<BiCart size={35} />}
                  <p>Cart</p>
                  <span>{totalItem}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <LowerHeader />
        </div>
      </section>
    </section>
  );
};

export default Header;

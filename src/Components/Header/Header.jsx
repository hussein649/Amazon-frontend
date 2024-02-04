import React from "react";
import classes from "./Header.module.css"
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo section*/}
          <div className={classes.logo__container}>
            <a href="#">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </a>

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
            {<BsSearch size={25} />}
          </div>

          {/* other section*/}
          <div className={classes.order__container}>
            <div>
              <a href="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select>
                  <option value="">EN</option>
                </select>
              </a>
            </div>
            {/* three components*/}
            <div className={classes.customer__container}>
              <div className={classes.account}>
                <a href="">
                  <div>
                    <p>Hello,Sign In</p>
                    <span>Account & Lists</span>
                  </div>
                </a>
              </div>
              {/* orders */}
              <div className={classes.return__order}>
                <a href="">
                  <p>Returns</p>
                  <span>& Orders</span>
                </a>
              </div>
              {/* cart*/}
              <div className={classes.cart}>
                <a href="">
                  {<BiCart size={35} />}
                  <p>Cart</p>
                  <span>0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <LowerHeader/>
        </div>
      </section>
    </>
  );
};

export default Header;

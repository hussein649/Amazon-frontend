import React from "react";
import classes from "./Footer.module.css";
import { CiGlobe } from "react-icons/ci";
import { CgArrowsScrollV } from "react-icons/cg";
import { CgToggleSquare } from "react-icons/cg";
const Footer = () => {
  return (
    <section>
      <div className={classes.footer__container}>
        <div>
          <p>Get to Know Us</p>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations </li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <p>Make Money with Us</p>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Become an Affiliate</li>
            <li> Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>›See More Make Money with Us</li>
          </ul>
        </div>
        <div>
          <p>Amazon Payment Products</p>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <p>Let Us Help You</p>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <div className={classes.footer__list}>
          <div className={classes.logo}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </div>
          <div className={classes.details}>
            <div className={classes.globe}>
              <CiGlobe size={25} />
              <div style={{ paddingTop: "3px" }}>English</div>
              <CgArrowsScrollV size={25} />
            </div>

            <p style={{ marginLeft: "20px" }}>$ USD - U.S.Dollar </p>
          </div>
          <div className={classes.language}>
            <ul>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
              </li>
              <li>United States</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.bottom__container}>
        <div className={classes.bottom__list}>
          <div>
            <p>Amazon Music</p>
            <ul>
              <li>Stream millions of songs</li>
            </ul>
          </div>
          <div>
            <p>AmazonGlobal</p>
            <ul>
              <li>Ship Orders Internationally</li>
            </ul>
          </div>
          <div>
            <p>IMDbPro</p>
            <ul>
              <li>Get Info Entertainment Professionals Need</li>
            </ul>
          </div>
        </div>
        <div className={classes.bottom__list}>
          <div>
            <p>Amazon Ads</p>
            <ul>
              <li>Reach customers wherever they spend their time</li>
            </ul>
          </div>
          <div>
            <p>Home Services</p>
            <ul>
              <li>Experienced Pros Happiness Guarantee</li>
            </ul>
          </div>
          <div>
            <p>Kindle Direct Publishing</p>
            <ul>
              <li>Indie Digital & Print Publishing Made Easy</li>
            </ul>
          </div>
          <div>
            <p>eero WiFi</p>
            <ul>
              <li>Stream 4K Video in Every Room</li>
            </ul>
          </div>
        </div>
        <div className={classes.bottom__list}>
          <div>
            <p>6pm</p>
            <ul>
              <li>Score deals on fashion brands</li>
            </ul>
          </div>
          <div>
            <p>Amazon Web Services</p>
            <ul>
              <li>Amazon Web Services</li>
            </ul>
          </div>
          <div>
            <p>Prime Video Direct</p>
            <ul>
              <li>Video Distribution Made Easy</li>
            </ul>
          </div>
          <div>
            <p>Blink</p>
            <ul>
              <li>Smart Security for Every Home</li>
            </ul>
          </div>
        </div>
        <div className={classes.bottom__list}>
          <div>
            <p>AbeBooks</p>
            <ul>
              <li>Books, art & collectibles</li>
            </ul>
          </div>
          <div>
            <p>Audible</p>
            <ul>
              <li>Listen to Books & Original Audio Performances</li>
            </ul>
          </div>
          <div>
            <p>Shopbop</p>
            <ul>
              <li>Designer Fashion Brands</li>
            </ul>
          </div>
          <div>
            <p>Neighbors App</p>
            <ul>
              <li>Real-Time Crime & Safety Alerts</li>
            </ul>
          </div>
        </div>
        <div className={classes.bottom__list}>
          <div>
            <p>ACX</p>
            <ul>
              <li>Audiobook Publishing Made Easy</li>
            </ul>
          </div>
          <div>
            <p>Box Office Mojo</p>
            <ul>
              <li>Find Movie Box Office Data</li>
            </ul>
          </div>
          <div>
            <p>Woot!</p>
            <ul>
              <li>Deals and Shenanigans</li>
            </ul>
          </div>
          <div>
            <p>Amazon Subscription Boxes</p>
            <ul>
              <li>Top subscription boxes – right to your door</li>
            </ul>
          </div>
        </div>
        <div className={classes.bottom__list}>
          <div>
            <p>Sell on Amazon</p>
            <ul>
              <li>Start a Selling Account</li>
            </ul>
          </div>
          <div>
            <p> Goodreads</p>
            <ul>
              <li>Book reviews & recommendations</li>
            </ul>
          </div>
          <div>
            <p>Zappos</p>
            <ul>
              <li>Shoes & Clothing</li>
            </ul>
          </div>
          <div>
            <p>PillPack</p>
            <ul>
              <li>Pharmacy Simplified</li>
            </ul>
          </div>
        </div>
        <div className={classes.bottom__list}>
          <div>
            <p> Amazon Business</p>
            <ul>
              <li>Everything For Your Business</li>
            </ul>
          </div>
          <div>
            <p> IMDb</p>
            <ul>
              <li>Movies, TV & Celebrities</li>
            </ul>
          </div>
          <div>
            <p> Ring</p>
            <ul>
              <li>Smart Home Security Systems</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.copyright}>
          <div>
            <ul>
              <li>Conditions of Use</li>
              <li>Privacy Notice</li>
              <li>Your Ads Privacy Choices</li>
            </ul>
            <div>
              <CgToggleSquare style={{ color: "#0066FF" }} size={25} />
            </div>
          </div>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

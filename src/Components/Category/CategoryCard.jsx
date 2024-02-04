
import React from 'react'
import classes from './Category.module.css'
const CategoryCard = (props) => {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{props.title}</h2>
        </span>
        <img src={props.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard
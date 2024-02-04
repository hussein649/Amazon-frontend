
import { CategoryInfos } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <section className={classes.category__container}>
      {CategoryInfos.map((item, index) => {
        console.log(item);
        return <CategoryCard
          title={item.title} imgLink={item.imgLink}
        />;
      })}
    </section>
  );
};

export default Category;

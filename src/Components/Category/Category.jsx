
import { CategoryInfos } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <section className={classes.category__container}>
      {CategoryInfos.map((data, index) => {
        // console.log(item);
        return <CategoryCard key={data.name} data={data} />;
      })}
    </section>
  );
};

export default Category;

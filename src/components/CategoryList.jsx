import { MealCard } from "./MealCard";
import { BackBtn } from "./BackBtn";

const CategoryList = ({meals = []}) => {
    return (
      <>
      <div className="category row">
        {
          meals.map(
            el => (
              <MealCard key={el.idMeal} {...el} />
            )       
          )
        }
      </div>
      <BackBtn />
      </>
    );
  }
  
  export {CategoryList};
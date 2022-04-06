import { CategoryCard } from "./CategoryCard";

const Catalog = ({catalog = []}) => {
    return (
      <div className="catalog">
        {
          catalog.map(
            el => (
              <CategoryCard key={el.idCategory} {...el} />
            )       
          )
        }
      </div>
    );
  }
  
  export {Catalog};
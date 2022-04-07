import { CategoryCard } from "./CategoryCard";
import { NoResults } from "./NoResults";

const Catalog = ({catalog = []}) => {
  if(catalog.length) {
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
  else {
    return <NoResults />
  }
}
  
export {Catalog};
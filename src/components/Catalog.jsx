import { CategoryCard } from "./CategoryCard";
import { NoResults } from "./NoResults";

const Catalog = ({catalog = []}) => {
    return (
      <>
        { catalog.length > 0 ?
          <div className="catalog">
            {
              catalog.map(
                el => (
                  <CategoryCard key={el.idCategory} {...el} />
                )       
              )
            }
          </div> :
          <NoResults />
        }    
      </>
    );
}
  
export {Catalog};
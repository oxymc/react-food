import { Link } from 'react-router-dom';

const MealCard = (props) => {
  const {idMeal, strMealThumb, strMeal} = props
    return (
      <div className="col s12 m6 l4">
        <div className="card horizontal">
          <div className="card-image">
            <Link to={`/meal/${idMeal}`}>
              <img className="responsive-img" src={strMealThumb} alt={strMeal} />
            </Link>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{strMeal}</p>
            </div>
            <div className="card-action">
              <Link to={`/meal/${idMeal}`} className="card-title activator btn">watch</Link>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
  
  export {MealCard};
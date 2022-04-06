import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
  const {strCategory, strCategoryDescription, strCategoryThumb} = props
    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator responsive-img" src={strCategoryThumb} alt={strCategory} />
        </div>
        <div className="card-content">
          <Link to={`/category/${strCategory}`} className="card-title activator">{strCategory}</Link>
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
      </div>
    );
  }
  
  export {CategoryCard};
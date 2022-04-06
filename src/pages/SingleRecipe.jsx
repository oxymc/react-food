import { Loader } from '../components/Loader';
import { getItemById } from '../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BackBtn } from '../components/BackBtn';

const SingleRecipe = () => {
  const {id} = useParams()
  const [meal, setMeal] = useState({}) 

  useEffect(() => {
    getItemById(id).then(
      data => {
        setMeal(data.meals[0])
      }
    )
  }, [id])
  return (
    <>
    <div className="row product">
      {
        !meal ? <Loader /> : (
          <>
            <div className='info'>
              <div className="col s12 m6 image">
                <img className="responsive-img" src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div className="col s12 m6 desc">
                <h1>{meal.strMeal}</h1>
                <h4>{meal.strTags ? meal.strTags : null}</h4>
                <small>{meal.strArea}</small>
              </div>
            </div>
            <div className="col s12 instruction">
              <h4>Recipe</h4>
              {meal.strInstructions ? <p>{meal.strInstructions}</p> : null}
              <table className="responsive-table">
                <thead>
                  <tr>
                      <th>Ingredient</th>
                      <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(meal).map((key) => {
                      if(key.includes('Ingredient') && meal[key]) {
                        return (
                          <tr key={key}>
                            <td>{meal[key]}</td>
                            <td>
                              {
                                meal[`strMeasure${key.slice(13)}`]
                              }
                            </td>
                          </tr>
                        )
                      }
                      return null
                    })
                  }
                </tbody>
              </table>
              {meal.strYoutube ? 
                <>
                  <h4>Video</h4>
                  <iframe 
                    title={meal.strMeal}
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} />
                </> : null 
              }
            </div>
          </>
        )
      }
    </div>
    <BackBtn />
    </>
  );
}

export {SingleRecipe};
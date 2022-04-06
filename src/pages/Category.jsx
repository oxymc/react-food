import { Loader } from '../components/Loader';
import { CategoryList } from '../components/CategoryList';
import { getFilteredCategory } from '../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Category = () => {
  const {name} = useParams()

  const [meals, setMeals] = useState([])

  useEffect(() => {
    getFilteredCategory(name).then(
      data => {
        setMeals(data.meals)
      }
    )
  }, [name])
  return (
    <>
      {!meals.length ? <Loader /> : <CategoryList meals={meals}/>}
    </>
  );
}
  
export {Category};
import { Loader } from '../components/Loader';
import { getAllCategories } from '../api';
import { useState, useEffect } from 'react';
import { Catalog } from '../components/Catalog';
import { Search } from '../components/Search';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [catalog, setCatalog] = useState([])
  const [searchParams, setSearchParams] = useSearchParams({});

  const queryParam = searchParams.get('category') || ''

  const submitHandler = (e) => {
    e.preventDefault()
    const query = e.target.search.value
    if(query) {
      setSearchParams({
        category: query
      })
    }
    else {
      setSearchParams(searchParams.delete(queryParam))
    }
  }

  useEffect(() => {
    getAllCategories().then(
      data => {
        setCatalog(data.categories)
      }
    )
  }, [catalog])

  return (
    <div className="row">
      <Search submitHandler={submitHandler} />
      {!catalog.length ?
        <Loader /> :
        <Catalog 
          catalog={
            queryParam ?
            catalog.filter(category => (category.strCategory.toLowerCase().includes(queryParam.toLowerCase()))) : catalog
          } />}
    </div>
  );
}
  
export {Home};
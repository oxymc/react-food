import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contacts } from '../pages/Contacts';
import { NotFound } from '../pages/NotFound';
import { Category } from '../pages/Category';
import { SingleRecipe } from '../pages/SingleRecipe';

const Main = () => {
  return (
    <main className="container">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/meal/:id" element={<SingleRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export {Main};

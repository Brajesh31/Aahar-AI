// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Favorites from './pages/Favorites';
import MealGenerator from './pages/MealGenerator';
import Contact, { ContactUs } from './pages/Contact';

export const routes = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/about', name: 'About Us', component: <AboutMe /> },
  { path: '/favorites', name: 'My Favorites', component: <Favorites /> },
  { path: '/meal-generator', name: 'Meal Generator', component: <MealGenerator /> },
  { path: '/contact-us', name: 'Contact Us', component: <ContactUs /> },
];

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <div className='container'>
        <Routes>

          {
            routes.map((route) => {
              return (
                <Route path={route.path} exact element={route.component} />
              );
            })
          }
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
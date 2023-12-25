import './App.css';
import Header  from './components/Header';
import Body from './components/body';
import React from 'react';
import About from './components/About';
import Error from './Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/ResturantMenu';
import { createBrowserRouter ,  Outlet } from 'react-router-dom'


function App() {
  return (
    <div  className='main' >
      <Header/>
      <Outlet/>  
    </div>
  );
};

export const appRouter = createBrowserRouter ([
  {
    path : '' ,
    element : <App />,
    children :[
      {
        path : "/",
        element : <Body/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
         path : "/resturants/:resNo",
         element : <RestaurantMenu/>
      }
    ],
    errorElement : <Error />
  },

])

export default App;


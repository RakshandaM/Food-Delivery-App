import './App.css';
import Header  from './components/Header';
import Body from './components/body';
import React from 'react';
import About from './components/About';
import Error from './Error';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  );
};

export const appRouter = createBrowserRouter ([
  {
    path : '/' ,
    element : <App />,
    errorElement : <Error />
  },
  {
    path : '/about',
    element : <About/>
  },
])

export default App;


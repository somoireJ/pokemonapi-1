import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RickAndMorty from './components/RickAndMorty';
import Character from './components/Character';
import NewComponent from './components/NewComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RickAndMorty />,
  },
  //normal routing
  {
    path: '/another_route',
    element: <NewComponent />,
  },
  //dynamic routing
  {
    path: '/:id',
    element: <Character />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

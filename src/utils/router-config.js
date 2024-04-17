import { lazy } from 'react';
import Main from '../components/Main';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../components/Home')); // LAZY LOADING OF HOME COMPONENT
const Common = lazy(() => import('../components/Common')); // OPTIMIZATION USING LAZY LOADING

// CREATION OF ROUTING CONFIG
const routerConfig = createBrowserRouter([   
    {
      path:"/",
      element: <Main />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/my-space",
          element: <Common propText="My Space"/>
        },
        {
          path: "/events",
          element: <Common propText="Events"/>
        },
        {
          path: "/videos",
          element: <Common propText="Videos"/>
        },
        {
          path: "/live",
          element: <Common propText="Live"/>
        },
        {
          path: "/register",
          element: <Common propText="Register"/>
        },
      ]
    },
]);

export default routerConfig;
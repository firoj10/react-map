import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage.jsx';
import MapDetails from './page/MapDetails.jsx';
import LeafletMap from './components/LeafletMap.jsx';
import Contact from './page/contact/Contact.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <LeafletMap />
      },
      {
        path: 'mapDetails',
        element: <MapDetails></MapDetails>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
   
  ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

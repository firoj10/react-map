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
        path: "mapDetails/:id",
        element: <MapDetails />,
        loader: async({ params }) => {
          const id = params.id;
          return fetch('/location.json')
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              const location = data.find(item => item.id === id);
              if (!location) {
                throw new Error('Location not found');
              }
              return location;
            });
        }
      },
      // {
      //   path: 'mapDetails',
      //   element: <MapDetails></MapDetails>
      // },
      {
        path:'contact',
        element: <Contact></Contact>
      },
      // {
      //   path: "mapDetails/:id",
      //   element: <MapDetails />,
      //   loader: ({params}) => fetch(`location.json/${params.id}`)

      // },
   
  ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

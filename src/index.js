import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/reset.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
//  Solution 2 imports for Routing
//  uncomment them if you want to use solution 2 for Routing

// import Error from './components/Error';
// import Contact from './components/Contact';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Products from './components/Products';

// Solution 2 for Routing (All the imports for this solution are also commented out above and below)
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App />,
//       children: [
//         {
//           index: true,
//           element: <Products />
//         },
//         {
//           path: 'contacts',
//           element: <Contact />
//         },
//         {
//           path: '*',
//           element: <Error />
//         }
//       ]
//     }
//   ]
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Uncomment below code to use solution 2 for Routing, comment out App component */}
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

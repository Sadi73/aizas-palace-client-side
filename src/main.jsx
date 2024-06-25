import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Home from './Components/Home.jsx';
import AddToy from './Components/AddToy.jsx';
import AuthProviders from './Components/providers/AuthProviders.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import MyToys from './Components/MyToys.jsx';
import AllToys from './Components/AllToys.jsx';
import Blogs from './Components/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: ()=> fetch('https://aizas-palace.vercel.app/alltoydetails')
      },

      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        loader: ()=> fetch('https://aizas-palace.vercel.app/alltoydetails')
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Order from './components/Order/Order.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'shop',
        element: <Shop></Shop>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path:'order',
        element: <Order></Order>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path:'proceed',
        element: <h3>Checking...Please Wait a moment</h3>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

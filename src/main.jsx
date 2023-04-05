import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory'
import Shop from './components/Shop/Shop'
import Login from './components/Login/Login'
import cartProductsLoader from './components/Loader/CartProductLoader'
import CheckOut from './components/CheckOut/CheckOut'




const router = createBrowserRouter([
{
  path:'/',
  element: <App />,
  children:[
    {
      path:'/',
      element: <Shop />
    },
    {
      path:'/orders',
      element:<Orders />,
      loader: cartProductsLoader
    },
    {
      path:'/checkout',
      element:<CheckOut />
    },
    {
      path:'/inventory',
      element: <Inventory />
    },
    {
      path:'/login',
      element:<Login />
    }
  ]
}

]) ;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

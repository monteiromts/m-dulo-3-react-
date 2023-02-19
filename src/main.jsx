import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Products from './routes/Products';
import ProductsSSD from './routes/ProductsSSD';
import ProductsMemorias from './routes/ProductsMemorias';
import ProductsPlacaMae from './routes/ProductsPlacaMae';
import ProductsProcessadores from './routes/ProductsProcessadores';
import ProductsFonte from './routes/ProductsFonte';
import ProductsPlacaDeVideo from './routes/ProductsPlacaDeVideo';
import Coment from './routes/Coment';
import ComentEdit from './routes/ComentEdit'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"products",
        element: <Products/>
      },
      {
        path:"ssd",
        element: <ProductsSSD/>
      },
      {
        path:"placa_mae",
        element: <ProductsPlacaMae/>
      },
      {
        path:"processadores",
        element: <ProductsProcessadores/>
      },
      {
        path:"memorias",
        element: <ProductsMemorias/>
      },
      {
        path:"fonte",
        element: <ProductsFonte/>
      },
      {
        path:"placa_de_video",
        element: <ProductsPlacaDeVideo/>
      },
      {
        path:"comentarios",
        element: <Coment/>
      },
      {
        path:"editar/:id",
        element: <ComentEdit/>
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

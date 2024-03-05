import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import ProductPage from './pages/ProductPage.tsx'
import Homepage from './pages/Homepage.tsx'
import './index.css'
import axios from 'axios'

// defining if we're in development or build, accordingly
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'

const router = createBrowserRouter(
  // creates route objects from routes which aren't objects
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* index true to make it the root "/" */}
      <Route index={true} element={<Homepage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

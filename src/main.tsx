import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './homePage/home'

const router = createBrowserRouter([
  {path:"/" , element: <HomePage/>},
  {path:"/game" , element:<></>},
  {path:"/profile" , element:<></>}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

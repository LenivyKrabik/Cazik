import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './homePage/home'
import Games from './games/games';
import Profile from './profile/profile';

const router = createBrowserRouter([
  {path:"/" , element: <HomePage/>},
  {path:"/game" , element:<Games/>},
  {path:"/profile" , element: <Profile/>}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

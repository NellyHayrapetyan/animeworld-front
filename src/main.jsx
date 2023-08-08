import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import LandingPage from './routes/LandingPage/LandingPage.jsx'
import Series from './routes/Series/Series.jsx'
import Movies from './routes/Movies/Movies.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter([{
  path: '/',
  element: <Navbar />,
  children: [{
    path: '/',
    element: <LandingPage />,
    children: [
      {
        path: '/series',
        element: <Series />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
    ]
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)

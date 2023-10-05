import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, ErrorPage, Contact, User, Github} from './pages'
import { GithubInfoLoader } from './pages/Github.jsx'

// Method #1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     errorElement: <ErrorPage/>,
//     children: [{
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: "about",
//       element: <About/>
//     },
//   {
//     path: "contact",
//     element: <Contact/>
//   }]
//   }
// ])

// Method #2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route 
      loader={GithubInfoLoader}
      path='github' element={<Github/>}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

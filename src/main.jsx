import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
// import './Responsive.css'
// import './Header.jsx'
// import './Index.jsx'
// import './Body.jsx'
// import './Contact.jsx'
// import './Faq.jsx'
// import './Error.jsx'
// import './Footer.jsx'
import Header from './Header.jsx'
import Index from './Index.jsx'
import Body from './Body.jsx'
import Contact from './Contact.jsx'
import Faq from './Faq.jsx'
import Error from './Error.jsx'
import Terms from './Terms.jsx'
import Privacy from './Privacy.jsx'
import Form from './Form.jsx'
import Footer from './Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <Body />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faqs",
    element: <Faq />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/delete-account",
    element: <Form />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* i commented the <App /> and replaced it with the <routerprovider router={router} /> */}

    {/* <App /> */}
    
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)

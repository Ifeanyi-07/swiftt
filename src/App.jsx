import Header from "./Header"
import Index from "./Index"
import Body from "./Body"
import Contact from "./Contact"
import Faq from "./Faq"
// import Indexzz from "./Indexzz"
import Error from "./Error"

import Terms from "./Terms"
import Privacy from "./Privacy"
import Form from "./Form"

import Footer from "./Footer"

import { BrowserRouter, Routes, Route} from "react-router-dom"




function App() {

  return(
    <>

    <BrowserRouter>

    <Header/>

    

    <Routes>

      {/* <Route index element= {<Index/>} /> */}
      <Route path="/" element= {<Index />} />
      <Route path="about" element= {<Body />} />
      <Route path="contact" element= {<Contact />} />
      <Route path="faqs" element= {<Faq />} />
      <Route path="*" element= {<Error />} />
      <Route path="terms" element= {<Terms />} />
      <Route path="privacy" element= {<Privacy />} />
      <Route path="delete-account" element= {<Form />} />


    {/* <Index/> */}
    {/* <Indexzz/> */}

    {/* <Body/> */}

    {/* <Contact/> */}

    {/* <Faq/> */}
    {/* <Error/> */}

    </Routes>


    



    <Footer/>

    </BrowserRouter>

    


  
    
    </>
  )
  
}

export default App

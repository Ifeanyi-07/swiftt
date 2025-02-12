import { Link } from "react-router-dom";

function Header() {


    function navSlide() {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".horizontal-container-33");
        const navLinks = document.querySelectorAll(".div-6 li");
        // const btn= document.querySelector(".button-4")
    
        nav.classList.toggle("nav-active")
        // navLinks.classList.add("btn-active")
    
        // btn.classList.toggle("btn-active")
    
        // navLinks.forEach((link, index)=>{
        //         if(link.style.animation){
        //           link.style.animation= ""
        //         }
        //         else{
        //           link.style.animation = `navLinkFade 0.5s ease-in ${index / 7 + 1}s`
        //         }
        //       })
        
        
              burger.classList.toggle("togg")
              
    
        
    
    
      }



    return(

        <>

        <div className="div-3">
            <div className="div-4">
                <div className="div-5">
                    <img className="imgg" src="./images/newHeadLogo.svg" alt="headlogo" />
                    {/* for the responsive view */}
                    <img className="imgg" id="res-nav" src="./images/resnav2.svg" alt="headlogo" />

                        <ul className="div-6" id="uldiv">

    
                        
                            {/* <li className="div-7"><a href="/">Home</a></li>
                            <li className="div-8"><a href="/about">About</a></li>
                            <li className="div-9"><a href="/contact">Contact</a></li>
                            <li className="div-10"><a href="/faqs">FAQS</a></li> */}

                            <li className="div-7"><Link to="/">Home</Link></li>
                            <li className="div-7"><Link to="/about">About</Link></li>
                            <li className="div-7"><Link to="/contact">Contact</Link></li>
                            <li className="div-7"><Link to="/faqs">FAQS</Link></li>


                                {/* <div className="burger">
                                 <div className="line1"></div>
                                 <div className="line2"></div>
                                 <div className="line3"></div>
                                </div> */}
                        
                            {/* <div className="div-7">Home</div>
                            <div className="div-8">About</div>
                            <div className="div-9">Contact</div>
                            <div className="div-10">FAQS</div> */}
                        </ul>
                        

                        <div className="burger" onClick={navSlide}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        
                        
                </div>
                

                <div className="div-11" id="btndiv">
                    <div className="div-12">Get Started</div>
                    <button className="div-13">Get started</button>
                    {/* the responsive view login button */}
                    {/* <button className="div-13" id="res-btnz">Login</button> */}

                </div>
                <button className="div-13" id="res-btnz">Login</button>

            </div>
            
        </div>

        <div className="horizontal-container-33">

            <ul className="div-6" id="res-ul">

        
{/*                             
                <li className="div-7" id="h-btn"><a href="/">Home</a> <hr /> </li>
                <li className="div-8" id="a-btn"><a href="/about">About</a> <hr /></li>
                <li className="div-9" id="c-btn"><a href="/contact">Contact</a> <hr /></li>
                <li className="div-10" id="f-btn"><a href="/faqs">FAQS</a><hr /></li> */}

                <li className="div-7" id="h-btn"><Link to="/">Home</Link> <hr /> </li>
                <li className="div-7" id="h-btn"><Link to="/about">About</Link> <hr /> </li>
                <li className="div-7" id="h-btn"><Link to="/contact">Contact</Link> <hr /> </li>
                <li className="div-7" id="h-btn"><Link to="/faqs">FAQS</Link> <hr /> </li>

            </ul>

            <div className="div-11" id="nav-btn">
                <div className="div-12">Get Started</div>
                <button className="div-13" id="btn-btn"><span id="txt-btn">Get started</span></button>

            </div>

        </div>

        
        
        </>


    );



};


export default Header;
import { useEffect, useState  } from "react";

function Index() {

  function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".horizontal-container-3");
    const navLinks = document.querySelectorAll(".text-wrapper");
    const btn= document.querySelector(".button-4")

    nav.classList.toggle("nav-active")

    btn.classList.toggle("btn-active")

    navLinks.forEach((link, index)=>{
            if(link.style.animation){
              link.style.animation= ""
            }
            else{
              link.style.animation = `navLinkFade 0.5s ease-in ${index / 7 + 1}s`
            }
          })
    
    
          burger.classList.toggle("togg")
          

    


  }
 



  // useEffect(()=>{

  //   const navSlide= ()=>{
  //     const burger = document.querySelector(".burger");
  //     const nav = document.querySelector(".horizontal-container-3");
  //     const navLinks = document.querySelectorAll(".text-wrapper");


  //   burger.addEventListener('click', ()=>{
  //     nav.classList.toggle("nav-active")


  //      navLinks.forEach((link, index)=>{
  //       if(link.style.animation){
  //         link.style.animation= ""
  //       }
  //       else{
  //         link.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 1}s`
  //       }
  //     })


  //     burger.classList.toggle("togg")




       

       
  //   })


  //   }


  //   navSlide();
  // })

   // window.addEventListener("onload", navSlide);
   // return() => window.removeEventListener("onload", navSlide);

  
  



    return(
        <>

<div className="landing-page">
    
      <div className="div">
        
        <div className="page-header">
          
          <div className="horizontal-container">
            <div className="horizontal-container-2">
            <div className="button">
                  <img className="img-2" alt="Text" src="./images/newHeadLogo.svg" />
                </div>
      
              <div className="horizontal-container-3">
                {/* <div className="button">
                  <img className="img-2" alt="Text" src="./images/Component 1.png" />
                </div> */}
                
                <button className="button-2">
                  <div className="text-wrapper">Home</div>
                </button>
                <button className="button-2">
                  <div className="text-wrapper">About</div>
                </button>
                <button className="button-2">
                  <div className="text-wrapper">Contact</div>
                </button>
                <button className="button-3">
                  <div className="text-wrapper">FAQs</div>
                </button>

                {/* <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> */}
                
              </div>
            </div>
            <div className="burger" onClick={navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            <button className="button-4">
              <button className="button-2">
                <div className="text-2">Get Started</div>
              </button>
              <button className="button-5">
                <div className="text-3">Get started</div>
              </button>
            </button>
            
          </div>
        </div>

        <div className="frame-2">
          <div className="vertical-container">
            <div className="overlap-wrapper">
              <div className="overlap">
                <div className="paragraph-container">
                  <div className="overlap-group-2">
                    <div className="your-financial">
                      Your Financial
                      <br />
                      Journey starts
                      <br />
                      here
                    </div>
                    <img className="vector" alt="Vector" src="./images/Vector.svg" />
                  </div>
                </div>
                <p className="p">
                  Join us on our journey as we revolutionize the way you transact in this digital age!
                </p>
              </div>
            </div>
          </div>
            <div className="logo-img">
                <img className="button-6" alt="Button" src="./images/Button.png" />
            </div>
          
        </div>

        <div className="frame-3">
          <div className="overlap-2">
            <div className="group-3">
              <div className="overlap-group-3">
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
              </div>
            </div>
            <img
              className="element-swiftfiat-iphone"
              alt="Element swiftfiat iphone"
              src="./images/iphone12.png"
            />
          </div>
        </div>

        <div className="frame-4">
          <div className="overlap-3">
            <div className="frame-5">
              <div className="frame-6">
                <div className="frame-7">
                  <div className="mail-img">
                    <img className="img-2" alt="Icon" src="./images/mail.svg" />
                  </div>
                  <div className="frame-8">
                    <p className="join-the-speedsters">
                      Join the Speedsters
                      <br />
                      with the latest updates
                    </p>
                    <p className="text-wrapper-2">Stay in touch with latest news and releases</p>
                  </div>
                </div>
                <div className="button-wrapper">
                  <div className="button-7">
                    <p className="text-wrapper-3">Unlock innovative solutions by subscribing to our Newsletter</p>
                    <div className="input-field">
                      <button className="button-container">
                        <div className="button-8">
                          <input className="text-input" placeholder="Enter email...." type="email" />
                        </div>
                        <button className="button-9">
                          <div className="text-4">Submit</div>
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="horizontal-container-wrapper">
                <div className="horizontal-container-4">
                  <div className="text-input-container">
                    <div className="component-2">
                      <div className="heading-START-wrapper">
                        <div className="heading-START">
                          <img src="./images/newFootLogo.svg" alt="footerPix" />
                        </div>
                      </div>
                    </div>
                    <div className="an-innovative-wrapper">
                      <p className="an-innovative">
                        An innovative company specializing <br />
                        in financial technology solutions.
                      </p>
                    </div>
                  </div>
                  <div className="vertical-container-2">
                    <div className="card">
                      <div className="footer-links">
                        <div className="text-wrapper-4">Company</div>
                      </div>
                      <div className="card-2">
                        <div className="footer-links">
                          <div className="text-wrapper-5">About Us</div>
                        </div>
                        <div className="footer-links-2">
                          <div className="text-wrapper-5">Contact</div>
                        </div>
                        <div className="footer-links-3">
                          <div className="text-wrapper-5">Blog</div>
                        </div>
                      </div>
                    </div>
                    <div className="footer-links-4">
                      <div className="text-wrapper-5">FAQs</div>
                    </div>
                    
                    <div className="vertical-container-3">
                      <div className="footer-links-5">
                        <div className="text-wrapper-4">Products</div>
                      </div>
                      <div className="div-2">
                        <div className="footer-links-5">
                          <div className="text-wrapper-5">Bill Payments</div>
                        </div>
                        <div className="footer-links-5">
                          <div className="text-wrapper-5">Giftcards</div>
                        </div>
                        <div className="footer-links-5">
                          <div className="text-wrapper-5">Trading</div>
                        </div>
                        <div className="footer-links-5">
                          <div className="text-wrapper-5">Withdrawal</div>
                        </div>
                      
                      </div>
                    </div>

                    <div className="card-3">
                      <div className="footer-links-5">
                        <div className="text-wrapper-4">Legal</div>
                      </div>
                      <div className="div-2">
                        <div className="footer-links-5">
                          <div className="text-wrapper-5">Terms &amp; Conditon</div>
                        </div>
                        <div className="footer-links-5">
                          <div className="text-wrapper-5">Privacy Policy</div>
                        </div>
                        <div className="footer-links-5">
                          <div className="text-wrapper-5">Cookie Policy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-input-2">
              <div className="text-wrapper-6">&copy; 2024 Swiftfiat</div>
              <div className="social-icon">
                <img src="./images/socialicon.svg" alt="social-icons" />
              </div>
            
            </div>
          </div>
        </div>

        <div className="overlap-4">
          <div className="frame-9">
            <div className="container">
              <div className="content">
                <div className="heading-and">
                  <div className="heading-and-2">
                    <div className="subheading">FEATURES</div>
                    <p className="heading">Discover the Power of Our Features</p>
                  </div>
                  <p className="supporting-text">Open a full-featured account in less than 5 minutes.</p>
                </div>
              </div>
            </div>

            <div className="frame-10">
              <div className="frame-11">
                <div className="heading-and-wrapper">
                  <div className="heading-and-3">
                    <div className="head-bank">
                      <img className="img-2" alt="Icon" src="./images/bank.svg" />
                    </div>
                    <p className="heading-2">Sell your Giftcards for Naira</p>
                    <p className="supporting-text-2">
                      We make giftcard transactions a breeze. Fast, secure, and at the most competitive rates. Unlock
                      the value trapped in those cards.
                    </p>
                  </div>
                </div>
                {/* <img className="american-express" alt="American express" src="./src/assets/american.png" /> */}
                <div className="overlap-group-4">
                  <img className="amazon" alt="Amazon" src="./images/Amazon.png" />
                  <img className="itunes" alt="Itunes" src="./images/ITunes.png" />
                </div>
              </div>

              <div className="frame-11">
                <div className="overlap-5">
                  <div className="heading-and-4">
                    <div className="head-bank">
                      <img className="img-2" alt="Icon" src="./images/bank-note.svg" />
                    </div>
                    <p className="heading-3">Crypto assets to USD at&nbsp;&nbsp;the bestrate in markets</p>
                    <p className="supporting-text-3">
                      Dive into the world of digital currency with ease. Whether you're looking to convert your local
                      currency to cryptocurrency or exchange your crypto assets for Naira, we've got you covered.
                    </p>
                  </div>
                  <img
                    className="swiftfiat-iphone"
                    alt="Swiftfiat iphone"
                    src="./images/swiftphone.png"
                  />
                </div>
              </div>
            </div>

            <div className="frame-12">
              <div className="heading-and-5">
                <div className="head-bank">
                  <img className="img-2" alt="Icon" src="./images/credit-card-up.svg" />
                </div>
                <div className="heading-3">Pay Bills Anywhere,Anytime</div>
                <p className="supporting-text-4">Experience the swiftest and most secure bill payment solution</p>
              </div>
              <div className="overlap-6">
                <img  className= "doublePhone"  src="./images/double-phone.png" alt="doublePhone"  />
                <img className="MTN" alt="Mtn" src="./images/MTN 1.png" />
                <div className="overlap-group-5">
                  <img className="DSTV" alt="Dstv" src="./images/DSTV 1.png" />
                  <img className="GLO" alt="Glo" src="./images/GLO 1.png" />
                </div>
                <img className="element" alt="Element" src="./images/9 MOBILE1 1.png" />
                <img className="AIRTEL" alt="Airtel" src="./images/AIRTEL 1.png" />
              </div>
            </div>

            <div className="frame-13">
              <div className="overlap-7">
                <div className="services-area">
                  <img className="map" alt="Map" src="./images/map 1.png" />
                </div>
                <div className="heading-4">
                  International/ Offshore <br />
                  Transactions
                </div>
              </div>
            </div>

            {/* <div className="mask-group-wrapper">
              <img className="mask-group" alt="Mask group" src="" />
            </div> */}
          </div>
          
          <div className="download-app">
            <div className="overlap-8">
              <p className="ready-to-get-started">
                Ready to Get Started
                <br />
                for Better Payments
              </p>
              <img className="mask-group-2" alt="Mask group" src="./images/Mask group.svg" />
              <div className="component-68">
                <img className="component-img" src="./images/Component 68.png" alt="comp 68" />
              </div>
        
            </div>
          </div>
        </div>
        
        <div className="frame-14">
          <div className="frame-15">
            <div className="frame-16">
              <div className="frame-16">
                <div className="heading-START-2">SWIFT WAYYYYYYY</div>
                <div className="text-wrapper-7">Elevate your experience</div>
              </div>
              <p className="text-wrapper-8">Take your finance to a whole new level when using our app</p>
            </div>
            <div className="group-4">
              <div className="descriptions">
                <div className="group-5">
                  <img className="view" alt="View" src="./images/view.svg" />
                  <div className="span">
                    <p className="term-visualize-as">
                      <span className="text-wrapper-9">All in one app</span>
                      <span className="text-wrapper-10"> .</span>
                      <span className="text-wrapper-11">&nbsp;</span>
                      <span className="text-wrapper-12">
                        One app to handle all your financial needs, coming soon to revolutionize the way you transact!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="group-6">
                <img className="img-3" alt="Settings" src="./images/settings.svg" />
                <p className="descriptions-term">
                  <span className="text-wrapper-13">Innovative and User friendly</span>
                  <span className="text-wrapper-14">.</span>
                  <span className="text-wrapper-15">
                    {" "}
                    Define unique issue states for each team, and extend them the way you like.
                  </span>
                </p>
              </div>
              <div className="group-7">
                <img className="img-3" alt="Cloud download" src="./images/cloud.svg" />
                <p className="descriptions-term">
                  <span className="text-wrapper-13">Real-time updates</span>
                  <span className="text-wrapper-14">.</span>
                  <span className="text-wrapper-15">
                    {" "}
                    Import issues from your existing issue tracker into Plane in just couple of minutes. Coming soon for
                    self-hosted.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="sdk-webp">
            <img className="swiftfiat-mockup-png" alt="Swiftfiat mockup png" src="./images/swiftfiat mockup.png" />
          </div>
        </div>

        <div className="body-c">
          <div className="group-8">
            <div className="text-wrapper-16">Testimonials</div>
            <p className="text-wrapper-17">See what our customers say</p>
          </div>

          <div className="group-9">
            <div className="overlap-group-6">
              <p className="easily-traded-my">
                Easily traded my giftcards with SwiftPay
                <br />
                at the best rate with no transaction fee
              </p>
              <div className="overlap-group-7">
                <div className="group-10">
                  <div className="component-29">
                    <img src="./images/Component-29.svg" alt="component 29" />
                  </div>
                
                  <div className="ashley-cooper">Oluwakayode Ajibola</div>
                </div>
                <div className="avatar-user-pic">
                  <img className="avatar-user-pic-2" alt="Avatar user pic" src="./images/Pic.svg" />
                </div>
              </div>
              <div className="inverted-comma">
                <img className="inverted-comma-2" alt="Inverted comma" src="./images/inverted comma 1.png" />
                <img className="inverted-comma-3" alt="Inverted comma" src="./images/inverted comma 2.png" />
              </div>
            </div>
          </div>

          <div className="overlap-9">
            <div className="overlap-10">
              <div className="group-11">
                <div className="overlap-group-6">
                  <p className="easily-traded-my">
                    Easily traded my giftcards with SwiftFiat <br />
                    at the best rate with no transaction fee
                  </p>
                  <div className="overlap-group-7">
                    <div className="group-10">
                    <div className="component-29">
                    <img src="./images/Component-29.svg" alt="component 29" />
                  </div>
                      <div className="ashley-cooper">Oluwakayode Ajibola</div>
                    </div>
                    <div className="avatar-user-pic">
                      <img className="avatar-user-pic-2" alt="Avatar user pic" src="./images/Pic.svg" />
                    </div>
                  </div>
                  <div className="inverted-comma">
                    <img className="inverted-comma-2" alt="Inverted comma" src="./images/inverted comma 1.png" />
                    <img className="inverted-comma-3" alt="Inverted comma" src="./images/inverted comma 2.png" />
                  </div>
                </div>
              </div>

            </div> 

            
              {/* <img className="mask-group-3" alt="Mask group" src="./images/Mask group.png" /> */}
            
            <div className="carousel">
              <img className="component-66" src="./images/Component 66.svg" alt="component66" />
              <img className="component-67" src="./images/Component 67.svg" alt="component67" />
            </div>
          </div>

          <div className="group-11a">
                <div className="overlap-group-6">
                  <p className="easily-traded-my">
                    Easily traded my giftcards with SwiftFiat <br />
                    at the best rate with no transaction fee
                  </p>
                  <div className="overlap-group-7">
                    <div className="group-10">
                    <div className="component-29">
                    <img src="./images/Component-29.svg" alt="component 29" />
                  </div>
                      <div className="ashley-cooper">Oluwakayode Ajibola</div>
                    </div>
                    <div className="avatar-user-pic">
                      <img className="avatar-user-pic-2" alt="Avatar user pic" src="./images/Pic.svg" />
                    </div>
                  </div>
                  <div className="inverted-comma">
                    <img className="inverted-comma-2" alt="Inverted comma" src="./images/inverted comma 1.png" />
                    <img className="inverted-comma-3" alt="Inverted comma" src="./images/inverted comma 2.png" />
                  </div>
                </div>
              </div>

        </div>
      </div>
</div>

        
    

    
        
        
        </>

    )

};


export default Index
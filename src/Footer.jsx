
function Footer() {

    return(

        <>
        <div className="div-72">
        <div className="div-73">
            <div className="div-74">
                <div className="column-10">
                    <div className="div-75">
                        <div className="div-76">
                            <img className="imgg-13" src="./images/mail.svg" alt="footmsg" />
                        </div>
                        <div className="div-77">
                            Join the Speedsters
                            <br />
                            with the latest updates
                        </div>
                        <div className="div-78">
                            Stay in touch with latest news and releases
                        </div>
                    </div>
                </div>
                <div className="column-11">
                    <div className="div-79">
                        <div className="div-80">
                            Unlock innovative solutions by subscribing to our Newsletter
                        </div>
                        <form className="div-81">
                            <div className="div-82">
                                <input type="email" placeholder="Enter email...." />
                            </div>
                            {/* <a href="mailto:contact@swiftfiat.com"> */}
                            <button className="div-83">Submit</button>
                            {/* </a> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <img className="imgg-15" id="imgg15" src=".//public/images/socialicon.svg" alt="socials" />

        <div className="div-84">
            <div className="div-85">
                <img className="imgg-14" src="./images/newFootLogo.svg" alt="footlogo" />
                <div className="div-86">
                    An innovative company specializing <br />
                    in financial technology solutions. 
                </div>
            </div>
            <ul className="div-87">
                <div className="div-88">Company</div>
                <div className="p-div">
                    <li className="div-89"><a href="about">About Us</a></li>
                    <li className="div-90"><a href="contact">Contact</a></li>
                    <li className="div-91"><a href="#">Blog</a></li>
                    <li className="div-92"><a href="faqs">FAQS</a></li>
                </div>
            </ul>
            {/* <div className="div-87">
                <div className="div-88">Company</div>
                <div className="div-89">About Us</div>
                <div className="div-90">Contact</div>
                <div className="div-91">Blog</div>
                <div className="div-92">FAQS</div>
            </div> */}


            <ul className="div-93">
                <div className="div-94">Products</div>
                <div className="p-div2">
                    <li className="div-95"><a href="#">Bill Payments</a></li>
                    <li className="div-96"><a href="#">Giftcards</a></li>
                    <li className="div-97"><a href="#">Trading</a></li>
                    <li className="div-98"><a href="#">Withdrawal</a></li>
                </div>
            </ul>
            {/* <div className="div-93">
                <div className="div-94">Products</div>
                <div className="div-95">Bill Payments</div>
                <div className="div-96">Giftcards</div>
                <div className="div-97">Trading</div>
                <div className="div-98">Withdrawal</div>
            </div> */}

            <ul className="div-99">
                <div className="div-100">Legal</div>
                <div className="p-div3">
                    <li className="div-101"><a href="terms">Terms & Condition</a></li>
                    <li className="div-102"><a href="privacy">Privacy Policy</a></li>
                    {/* <li className="div-103"><a href="delete-account">Delete Account</a></li> */}
                </div>
            </ul>


            {/* <div className="div-99">
                <div className="div-100">Legal</div>
                <div className="div-101">Terms & Condition</div>
                <div className="div-102">Privacy Policy</div>
                <div className="div-103">Cookie Policy</div>
            </div> */}
        </div>
        <div className="div-104">
            <div className="div-105">&copy; 2024 Swiftfiat</div>
            <img className="imgg-15" src=".//public/images/socialicon.svg" alt="socials" />
        </div>
    </div>

        </>



    );


};

export default Footer;
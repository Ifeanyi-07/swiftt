import Header from "./Header";
import Footer from "./Footer";

function Form(){

    return(
        <>
        <Header></Header>

        <form action="" className="priv-form">
            <h4>Now just a minute</h4>
            <p id="frm-txt">
                Are you sure you want to delete your whole account? You'll lose access to everything. 
                All of your blogs, original posts, themes, the love we shared, likes, and messages. This can't be
                undone. <br />
                If you're sure, confirm by logging in below.
            </p>
            <input type="email" placeholder="Email" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button>Delete</button> <br /> <br />
            <a href="privacy" id="nvm">Nevermind</a>
            


        </form>

        <Footer></Footer>

        </>
    );
}

export default Form;
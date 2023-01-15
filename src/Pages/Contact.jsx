import "../Styles/Contact.css";

function Contact() {
  return (
    <div>
      
      <div className="mt-60 flex flex-row mx-auto w-96 contact">
        <a href="https://github.com/Pheeraphat47" target={"_blank"} className="mr-10">
          <img
            src="../assets/github.png"
            alt="github"
            className="hover:scale-150 duration-150 cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pheeraphat-dherachaisuphakij-33718b250/"
          target={"_blank"} className="mr-10"
        >
          <img
            src="../assets/linkedin.png"
            alt="linkedin"
            className="hover:scale-150 duration-150 cursor-pointer"
          />
        </a>
        <a href="https://www.instagram.com/phx_pd/" target={"_blank"} className="mr-10">
          <img
            src="../assets/instagram.png"
            alt="instagram"
            className="hover:scale-150 duration-150 cursor-pointer"
          />
        </a>
        <a
          href="https://www.facebook.com/pheeraphat.dherachaisuphakij"
          target={"_blank"}
        >
          <img
            src="../assets/facebook.png"
            alt="facebook"
            className="hover:scale-150 duration-150 cursor-pointer"
          />
        </a>
      </div> 
        
    </div>
  );
}

export default Contact;
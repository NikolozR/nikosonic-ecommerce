import Button from "./Button";
import '../styles/Contact.scss'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="contact-header">Contact Us</h1>
        <div className="contact-body">
          <form action="#" method="post">
            <input placeholder="Full Name" type="text" name="fullName" id="fullName" />
            <input placeholder="E-mail" type="email" name="email" id="email" />
            <input placeholder="Message" type="text" name="message" id="message" />
            <Button>Contact us</Button>
          </form>
          <div className="contact-info">
            <h2>Contact</h2>
            <p className="info contact-mail">BUDU@BUDUUU.com</p>
            <h2>Based in</h2>
            <p className="info contact-place">Kutaisi, Georgia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

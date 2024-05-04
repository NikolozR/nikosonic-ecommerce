function Contact() {
  return (
    <section className="flex-1 flex flex-col">
      <div className="container mx-auto flex-1 flex flex-col">
        <h1 className="text-center text-[50px] mt-[30px]">Contact Us</h1>
        <div className="flex-1 flex items-center justify-between">
          <form className="contact-form" action="#" method="post">
            <input placeholder="Full Name" type="text" name="fullName" id="fullName" />
            <input placeholder="E-mail" type="email" name="email" id="email" />
            <input className="mb-[30px]" placeholder="Message" type="text" name="message" id="message" />
            <button>Contact us</button>
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

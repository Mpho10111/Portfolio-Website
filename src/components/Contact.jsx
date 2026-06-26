import emailjs from "emailjs-com";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent successfully!");
    }, () => {
      alert("Something went wrong.");
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={sendEmail}>
        <div className="contact-container">

          <div className="contact-left">
            <input type="text" name="user_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
            <input type="text" name="phone" placeholder="Phone Number" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>

          <div className="contact-right">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>

        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Email service is not configured yet.");
      return;
    }

    setIsSending(true);
    setStatus("Sending...");

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setStatus("Message sent successfully!");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
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

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="contact-status">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;

import { useState } from 'react';
import './../css/ContactForm.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2372865-0944-431f-9837-40767f61ede8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form-container">
      <h3>Send Us a Message</h3>
      <form onSubmit={onSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            required
            minLength="2"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input 
            type="text" 
            id="subject"
            name="subject" 
            required
            minLength="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message"
            name="message" 
            required
            minLength="10"
            rows="5"
          />
        </div>

        <button type="submit" className="submit-btn">
          {result === "Sending...." ? "Sending..." : "Send Message"}
        </button>

        {result && result !== "Sending...." && (
          <div className={`form-message ${result.includes("Successfully") || result.includes("success") ? "success" : "error"}`}>
            {result}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
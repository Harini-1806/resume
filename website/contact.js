import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Fill all fields");
      return;
    }

    alert("Message Submitted Successfully");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>

      <p>Email: hariniselvan007@gmail.com</p>

      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Enter Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <br /><br />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
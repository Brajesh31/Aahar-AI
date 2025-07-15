import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("serviceid", "template_id", form.current, {
        publicKey: "key",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Request Sent");
          const apply = document.getElementById("form");
          apply.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div style={styles.container}>
        <form id="form" ref={form} style={styles.form} onSubmit={sendEmail}>
          <h1 style={styles.title}>Contact Us</h1>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="name">
              Name
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              style={{ ...styles.input, ...styles.textarea }}
              id="message"
              name="message"
              required
            />
          </div>
          <button style={styles.button} value="send" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    backgroundColor: "#f4f4f9",
  },
  form: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.7)",
    maxWidth: "500px",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
  },
  textarea: {
    minHeight: "100px",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

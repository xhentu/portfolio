// components/EmailMe.jsx
// import { useState } from "react";
// import emailjs from '@emailjs/browser';
// import "../styles/EmailMe.css"; // Optional

// export default function EmailMe() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       setStatus("Please fill out all fields.");
//       return;
//     }

//     emailjs.send(
//       "service_xbubexh",       // ⬅️ from EmailJS
//       "template_puxau3d",      // ⬅️ from EmailJS
//       form,
//       "ZGhlaP3ro1plwYYQ8"        // ⬅️ from EmailJS
//     )
//     .then(() => {
//       setStatus("Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     })
//     .catch(() => {
//       setStatus("Something went wrong. Try again later.");
//     });
//   };

//   return (
//     <div className="email-me-box">
//       <h2>Email Me</h2>
//       <form onSubmit={sendEmail}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         <textarea
//           name="message"
//           placeholder="Your message"
//           value={form.message}
//           onChange={handleChange}
//         ></textarea>
//         <button type="submit">Send</button>
//         {status && <p className="status">{status}</p>}
//       </form>
//     </div>
//   );
// }

import MatrixText from "./MatrixText";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import "../styles/EmailMe.css";

export default function EmailMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const { ref, inView } = useInView({ threshold: 0.25, rootMargin: "-20% 0px", triggerOnce: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    emailjs.send(
      "service_xbubexh",
      "template_puxau3d",
      form,
      "ZGhlaP3ro1plwYYQ8"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("Something went wrong. Try again later.");
    });
  };

  return (
    <motion.div
      className="email-me-box"
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <MatrixText text="Email Me" />
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit"><MatrixText text="Send" /></button>
        {status && <MatrixText text={status} />}
      </form>
    </motion.div>
  );
}

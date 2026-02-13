import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { socials } from "#constants/index.js";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v3e27m2",
        "template_lbyvip8",
        form.current,
        "GJ560X3_Vq5yOOc62",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS error:", error.text);
        },
      );
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="images/1.sam.jpg"
          alt="Sumkelows image"
          className="w-40 rounded-full flex items-center justify-center mx-auto"
        />
        <h3>Let's Connect</h3>
        <p>
          +27 69 159 4100 <br />
          sbkhathi005@gmail.com
        </p>
        <p>Got an idea? A bug to terminate? Or just wanna talk tech?</p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* First and Last Name side by side */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="first_name" className="block font-medium">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="last_name" className="block font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="w-full border rounded p-2"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="user_email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full border rounded p-2"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;

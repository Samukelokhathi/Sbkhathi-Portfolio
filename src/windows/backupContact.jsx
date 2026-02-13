import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { socials } from "#constants/index.js";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5 ">
        <img
          src="images/1.sam.jpg"
          alt="Sumkelows image"
          className="w-40 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>
          +27 69 159 4100 <br />
          sbkhathi005@gmail.com
        </p>
        <p>Got an idea? A bug to terminate? Or just wanna talk tech?</p>

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

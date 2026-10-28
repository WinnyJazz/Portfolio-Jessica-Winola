
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jessica-winola-07073b356/",
  },
  {
    label: "GitHub",
    href: "https://github.com/WinnyJazz",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jazzywinn_",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6282125287892",
  },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM8 19H5V9h3v10ZM6.5 7.73a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V19h-3V9h2.88v1.37h.04a3.16 3.16 0 0 1 2.84-1.56c3.04 0 3.73 2 3.73 4.6V19Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === "WhatsApp") {
    return <MessageCircle size={20} strokeWidth={1.8} />;
  }

  return null;
}

export default function Footer() {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const subject = String(formData.get("subject") || "Portfolio Contact");
    const message = String(formData.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:jewinn2244@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setFormStatus("Your email app will open to send your message.");
    window.location.href = mailto;
  }

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-contact-layout">
          {/* LEFT: CONTACT INFORMATION */}
          <div className="footer-left">
            <span className="footer-eyebrow">LET&apos;S WORK TOGETHER</span>

            <h2 className="footer-connect-title">Let&apos;s Connect</h2>

            <p className="footer-description">
              Feel free to reach out for collaborations,
              opportunities, or just to say hello!
            </p>

            <div className="footer-contact-details">
              <a href="mailto:jewinn2244@gmail.com">
                <Mail size={22} />
                <span>jewinn2244@gmail.com</span>
              </a>

              <a
                href="https://wa.me/6282125287892"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={22} />
                <span>+62 821 2528 7892</span>
              </a>

              <div className="footer-location">
                <MapPin size={22} />
                <span>Tangerang, Indonesia</span>
              </div>
            </div>

            <div className="footer-socials">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <SocialIcon name={label} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="footer-right">
            <div className="footer-form-heading">
              <h2>Get In Touch</h2>
              <span className="footer-form-heading-line" />
            </div>

            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="footer-form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  required
                />
              </div>

              <button type="submit" className="footer-submit">
                <Send size={20} />
                <span>Send Message</span>
                <ArrowUpRight size={17} />
              </button>

              {formStatus && (
                <p className="footer-form-status" role="status">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>Jessica Winola</p>
            <p>
              © {new Date().getFullYear()} Jessica Winola. All rights reserved.
            </p>
          </div>
        </div>

        {/* LARGE WATERMARK */}
        <a href="#home" className="footer-watermark" aria-label="Back to top">
          Jessica Winola
        </a>
      </div>
    </footer>
  );
}

import React, { useState } from "react";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LogoHead from "../assets/HeadLogo.svg";
import QRphone from "../assets/PhoneQR.png";
import Button from "../components/Button";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "terms" && checked) setSubmitted(false);
    if (submitError) setSubmitError("");

    // =========================
    // REALTIME VALIDATION
    // =========================
    let error = "";

    if (name === "name") {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        error = "Name should only contain letters";
      } else if (value.length > 30) {
        error = "Name cannot exceed 30 characters";
      }
    }

    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        error = "Phone number should only contain numbers";
      } else if (value.length > 10) {
        error = "Phone number cannot exceed 10 digits";
      }
    }

    if (name === "subject") {
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

      if (wordCount > 20) {
        error = "Subject cannot exceed 20 words";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const { name, phone, subject, message, terms } = formData;

    if (!name || !phone || !subject || !message) {
      setSubmitError("Please fill all fields");
      return;
    }

    if (errors.name || errors.phone || errors.subject) {
      setSubmitError("Please fix validation errors");
      return;
    }

    if (!terms) {
      setSubmitError("Please agree to the terms and conditions");
      return;
    }

    const text = `
📩 New Inquiry
----------------
Name: ${name}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
`;

    const url = `https://wa.me/9779851227006?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // RESET
    setFormData({
      name: "",
      phone: "",
      subject: "",
      message: "",
      terms: false,
    });

    setErrors({});
  };

  return (
    <>
      <section className="w-full bg-black">
        {/* FORM SECTION */}
        <div
          id="forum"
          className="w-full bg-black flex flex-col p-6 gap-3 lg:gap-0"
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="w-auto text-white text-3xl sm:text-6xl lg:text-6xl">
                Let's Talk Legal Solutions
              </h1>

              <p className="text-slate-400 text-sm sm:text-3xl lg:text-[18px] font-light hidden lg:block">
                Complete the form below to share your inquiry <br />
                or message with our team.
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-sm sm:text-3xl font-light sm:hidden">
            Complete the form below to share your inquiry or message with our
            team.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 mt-6"
          >
            {/* NAME + PHONE */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {/* NAME */}
              <div className="w-full sm:w-1/2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name*"
                  className="text-white w-full text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600 pb-6 focus:outline-none focus:ring-0"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* PHONE */}
              <div className="w-full sm:w-1/2">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone*"
                  className="text-white w-full text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600 pb-6 pt-6 sm:pt-0 focus:outline-none focus:ring-0"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* SUBJECT */}
            <div className="w-full">
              <textarea
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="text-white w-full text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600 pb-6 pt-6 focus:outline-none focus:ring-0"
              ></textarea>

              {errors.subject && (
                <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
              )}
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="text-white text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600 h-40 lg:h-40 sm:h-80 pb-6 pt-6 focus:outline-none focus:ring-0"
            ></textarea>

            {/* TERMS + BUTTON */}
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 mt-6">
              <div className="flex flex-col items-start gap-4 mt-4">
                <div className="flex items-center gap-6 lg:gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className={`w-6 h-6 md:w-5 md:h-5 ${submitted && !formData.terms ? "outline outline-1 outline-red-400" : ""}`}
                  />

                  <label className="text-white text-md sm:text-3xl lg:text-[18px]">
                    I agree to the terms and conditions.
                  </label>
                </div>
                {submitted && !formData.terms && (
                  <span className="text-red-400 text-sm">
                    Please agree to the terms and conditions
                  </span>
                )}

                <div>
                  <p className="text-slate-500 text-md sm:text-3xl lg:text-[18px]">
                    Your information is kept strictly confidential & used only
                    to respond to your inquiry.
                  </p>
                </div>
              </div>

              {submitError && (
                <p className="text-red-400 text-sm text-right w-full">
                  {submitError}
                </p>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="relative w-full mt-60  bg-primary-700 border-t rounded-t-lg flex flex-col items-center justify-center">
          <img
            src={LogoHead}
            alt="Liberty Legal Service & Research Center logo Advocate Meera Maharjan"
            className="absolute -top-10 h-24 w-auto lg:h-36 lg:-top-20 object-contain"
          />
          <div className="w-full h-full py-10 block sm:hidden">
            <div className="w-full h-full flex flex-col justify-center gap-6 px-6 mt-10">
              <div className="w-full h-full flex flex-col gap-6 mt-2">
                <p className="text-white text-4xl font-secondary font-medium">
                  Quick Links
                </p>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/about"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    About
                  </Link>
                  <Link
                    to="/service"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <p className="text-white text-4xl font-medium font-secondary mt-6">
                Our Contacts
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  to="/about"
                  className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                >
                  Lalitpur, Nepal
                </Link>
                <Link
                  to="/service"
                  className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                >
                  +977 9851227006
                </Link>
                <Link
                  to="/contact"
                  className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                >
                  measmeerasms@gmail.com
                </Link>
                <Link
                  to="/contact"
                  className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-full py-10 sm:block hidden">
            <div className="w-full h-full grid grid-cols-4 gap-4 px-6 mt-10">
              <div className="w-full h-auto flex flex-col justify-end gap-4 mt-2">
                <p className="text-white text-3xl font-secondary font-medium">
                  Quick Links
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    to="/about"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    About
                  </Link>
                  <Link
                    to="/service"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="p-6 flex flex-col col-span-2 items-center gap-2">
                <p className="font-primary text-4xl text-white text-center">
                  Liberty Legal Service & <br /> Research Center
                </p>
                <p className="text-white text-sm lg:text-2xl italic text-center font-primary">
                  Advocate Meera Maharjan — Justice open for everyone
                </p>
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-6">
                  <button
                    className="w-auto flex items-center justify-center gap-2 text-2xl rounded border bg-primary-500 px-6 py-4 font-secondary font-medium text-black hover:bg-primary-500 hover:text-black transition-colors duration-300 whitespace-nowrap shrink-0"
                    onClick={() => {
                      const el = document.getElementById("forum");
                      if (el) {
                        if (window.lenis)
                          window.lenis.scrollTo(el, { offset: -70 });
                        else el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Book Consultation
                  </button>
                  <button
                    className="w-auto flex items-center justify-between gap-6 text-2xl border-white border-1 py-2 pl-3 pr-2 font-secondary text-white font-medium rounded hover:bg-primary-600 transition-colors duration-300 cursor-pointer"
                    onClick={() => (window.location.href = "/about")}
                  >
                    <span>Our Story</span>
                    <span className="bg-white text-black p-3 rounded-sm">
                      <ArrowRight className="w-6 h-6" />
                    </span>
                  </button>
                </div>
                <p className="text-white text-lg font-secondary italic mt-4">
                  Follow our journey and community activities
                </p>
                <Link
                  to="/contact"
                  className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                >
                  Facebook
                </Link>
              </div>
              <div className="w-full h-auto flex flex-col items-end justify-end gap-4 mt-2">
                <p className="text-white text-3xl font-medium font-secondary mt-6">
                  Contacts
                </p>
                <div className="flex flex-col items-end gap-2">
                  <Link
                    to="/about"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    Lalitpur, Nepal
                  </Link>
                  <Link
                    to="/service"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    +977 9851227006
                  </Link>
                  <Link
                    to="/contact"
                    className="text-slate-300 text-xl font-secondary hover:text-white transition-colors duration-300"
                  >
                    measmeerasms@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-primary-500 px-6 mt-10"></div>
            <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between gap-4 mt-4 px-6 pt-6">
              <p className="text-white text-md font-light">
                &copy; 2026 Liberty Legal Service & Research Center. All rights
                reserved.
              </p>
              <Link
                to="/privacy"
                className="text-white hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

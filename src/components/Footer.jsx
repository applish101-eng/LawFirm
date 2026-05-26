import React from "react";
import FooterImage from "../assets/FooterImage.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LogoHead from "../assets/HeadLogo.svg";
import { Send } from "lucide-react";
import QRphone from "../assets/PhoneQR.png";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-black">
        {/* Image Section */}

        {/* Black Form Section */}
        <div className="w-full bg-black flex flex-col  p-6 gap-3 lg:gap-0 ">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col  gap-3">
              <h1 className=" w-auto text-white text-3xl sm:text-6xl lg:text-6xl">
                Let's Talk Legal Solutions
              </h1>
              <p className="text-slate-400 text-sm sm:text-3xl lg:text-[18px] font-light hidden lg:block">
                Complete the form below to share your inquiry <br></br>or
                message with our team.
              </p>
            </div>
            <img
              src={QRphone}
              alt="QR Code"
              className="w-25 h-20 sm:h-35 sm:w-35  bg-white border rounded-md"
            />
          </div>
          <p className="text-slate-400 text-sm sm:text-3xl font-light sm:hidden ">
            Complete the form below to share your inquiry or message with our
            team.
          </p>
          <form className="w-full min-h-screen flex flex-col gap-4 mt-6 ">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Name*"
                className=" text-white w-full sm:w-1/2 text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600 pb-6 focus:outline-none focus:ring-0 focus:ring-none"
              />
              <input
                type="phone"
                placeholder="Phone*"
                className=" text-white w-full sm:w-1/2 text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600 pb-6 pt-6 focus:outline-none focus:ring-0 focus:ring-none"
              />
            </div>

            <textarea
              placeholder="Subject"
              className=" text-white text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600  pb-6 pt-6 focus:outline-none focus:ring-0 focus:ring-none"
            ></textarea>
            <textarea
              placeholder="Message"
              className=" text-white text-4xl sm:text-2xl placeholder:text-gray-500 border-b border-gray-600 h-40 lg:h-40 sm:h-80 pb-6 pt-6 focus:outline-none focus:ring-0 focus:ring-none"
            ></textarea>
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 mt-6">
              <div className="flex flex-col items-start gap-4 mt-4">
                <div className="flex items-center gap-6 lg:gap-3">
                  <input type="checkbox" className="w-6 h-6 md:w-5 md:h-5" />
                  <label className="text-white text-md sm:text-3xl lg:text-[18px]">
                    I agree to the terms and conditions.
                  </label>
                </div>
                <div>
                  <p className=" text-slate-500 text-md sm:text-3xl lg:text-[18px]">
                    Your information is kept strictly confidential & used only
                    to respond to your inquiry.
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-between gap-3 bg-primary-500 text-3xl sm:w-fit  font-secondary mt-6 text-black font-medium px-4 py-3 rounded hover:bg-primary-600 transition-colors duration-300 cursor-pointer">
                <span>Submit</span>

                <span className="bg-black text-primary-500 p-3 rounded-sm">
                  <ArrowRight className="w-6 h-6" />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="relative w-full  mt-80 lg:mt-10 min-h-[300px] bg-primary-700 border-t rounded-t-lg flex flex-col items-center justify-center">
          <img
            src={LogoHead}
            alt="logo"
            className="absolute -top-10 h-24 w-auto lg:h-36 lg:-top-20 object-contain "
          />

          <div className="w-full h-full py-10 block sm:hidden ">
            <div className="w-full h-full  flex flex-col   justify-center gap-6  px-6 mt-10">
              {/* Links */}
              <div className="w-full h-full  flex flex-col  gap-6  mt-2">
                <p className="text-white text-4xl font-secondary font-medium  ">
                  Quick Links
                </p>
                <div className="flex flex-col  gap-4 ">
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
              {/* middle part */}
              {/* Contacts */}
              <p className="text-white text-4xl font-medium font-secondary  mt-6">
                Our Contacts
              </p>
              <div className="flex flex-col  gap-4 ">
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

          {/* for desktop */}

          <div className="w-full h-full py-10 sm:block hidden  ">
            <div className="w-full h-full  grid grid-cols-4 gap-4  px-6 mt-10">
              {/* Links */}
              <div className="w-full h-auto  flex flex-col justify-end  gap-4  mt-2">
                <p className="text-white text-3xl font-secondary font-medium  ">
                  Quick Links
                </p>
                <div className="flex flex-col  gap-2 ">
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
              {/* middle part */}
              <div className="p-6 flex flex-col col-span-2 items-center gap-2">
                <p className="font-primary text-4xl text-white text-center ">
                  Liberty Legal Service & <br></br> Research Center, 2011
                </p>
                <p className="text-white text-sm lg:text-2xl italic text-center font-primary">
                  Justice open for everyone
                </p>
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 mt-6">
                  <button className="w-auto flex items-center justify-center   gap-2 text-2xl rounded border  bg-primary-500 px-6 py-4 font-secondary font-medium text-black hover:bg-primary-500 hover:text-black transition-colors duration-300 whitespace-nowrap shrink-0">
                    Book a Consultation
                  </button>
                  <button className="w-auto flex items-center justify-between gap-6 text-2xl  border-white border-1 py-2 pl-3 pr-2 font-secondary text-white font-medium  rounded hover:bg-primary-600 transition-colors duration-300 cursor-pointer">
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

              {/* Contacts */}
              <div className="w-full h-auto  flex flex-col items-end justify-end  gap-4  mt-2">
                <p className="text-white text-3xl font-medium font-secondary  mt-6">
                  Contacts
                </p>

                <div className="flex flex-col items-end gap-2 ">
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

            <div className=" border-t border-primary-500 px-6 mt-10"></div>
            <div className="w-full h-full  flex flex-col lg:flex-row lg:justify-between gap-4 mt-4 px-6 pt-6">
              <p className="text-white text-md font-light ">
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

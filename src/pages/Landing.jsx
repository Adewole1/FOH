import { CiLocationOn } from "react-icons/ci";
import logo from "../assets/icons/FOH-logo.svg";
import butIcon from "../assets/icons/preIcon.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import PartnerModal from "../components/PartnerModal";
import RegisterModal from "../components/RegisterModal";

const LandingPage = () => {
  const [showPartner, setShowPartner] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white font-verdana w-full">
        {/* Header */}
        <div className="flex flex-col items-center bg-white px-6 py-10 md:py-5 md:px-8 w-full">
          <div className="flex items-center justify-between w-full max-w-[1440px]">
            <div className="w-28">
              <img src={logo} alt="Logo" />
            </div>
            <button
              onClick={() => setShowRegister(true)}
              className="bg-primary text-white p-3 rounded-md flex items-center gap-2 font-semibold text-sm"
            >
              <img src={butIcon} />
              <p>Pre-register for 2024</p>
            </button>
          </div>
        </div>

        {/* body */}
        <div className="bg-black flex flex-col items-center">
          <div className="w-full px-6 py-10 md:pt-16 md:pb-10 md:px-16 lg:py-[5.5rem] max-w-[1440px]">
            <p className="text-white font-bold text-[2rem] md:text-[3rem] lg:text-[5rem] leading-none">
              “Empowering Africa&apos;s Healthcare Future: Uniting Visionaries,
              Innovators, and Leaders for Progress”
            </p>
            <p className="font-bold text-[2rem] md:text-[3rem] lg:text-[5rem] text-white">
              *<span className="text-secondary">Sept 24 - 25</span>*{" "}
              <span className="text-secondary">Lagos</span>
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6 text-nowrap mt-4 md:mt-2">
              <button
                onClick={() => setShowRegister(true)}
                className="bg-primary text-white p-3 rounded-md flex items-center gap-2 font-semibold text-sm md:text-base w-full md:w-fit justify-center"
              >
                Pre-register for 2024
              </button>
              <button
                onClick={() => setShowPartner(true)}
                className="bg-white text-black p-3 rounded-md flex items-center gap-2 font-semibold text-sm md:text-base w-full md:w-fit justify-center"
              >
                Partner with us
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-no-repeat bg-center bg-cover bg-doctorsBG h-64 md:h-[27rem] lg:h-[40rem] 2xl:h-[45rem] ">
          <div className="w-full flex justify-end max-w-[1440px]">
            <div className="bg-red p-1 md:p-3 flex items-center text-white text-sm md:text-3xl h-fit md:rounded-md gap-2 w-3/5 md:w-[58%] lg:w-[38rem] 2xl:w-[44rem]">
              <CiLocationOn />
              <p>
                Balmoral Convention Center
                <br />
                Federal Palace Hotel, Victoria Island, Lagos.
              </p>
            </div>
          </div>
        </div>
        <div id={"about"} className="flex flex-col items-center bg-white">
          <div className="flex flex-col px-6 py-10 md:px-24 md:py-12 lg:px-32 2xl:px-52 gap-16 lg:py-16 max-w-[1440px] w-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-16">
                <div className="flex flex-col gap-4 w-full lg:w-[38%]">
                  <p className="text-black font-bold text-2xl md:text-4xl">
                    About Future of Health Africa
                  </p>
                  <p className="text-[#646464]">
                    Join us at the forefront of change as we convene thought
                    leaders, industry experts, and advocates for a dynamic
                    exchange of ideas and insights. Together, we&apos;ll explore
                    innovative solutions, forge strategic partnerships, and
                    drive impactful initiatives to overcome healthcare
                    challenges and advance equitable access to quality care for
                    all Africans. Be part of the movement shaping the future of
                    healthcare in Africa - it&apos;s where progress meets
                    possibility.
                  </p>
                </div>
                <div className="bg-no-repeat bg-cover bg-panelBG bg-center rounded-lg h-64 md:h-96 2xl:h-[26rem] w-full lg:w-[55%]"></div>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0 md:justify-evenly">
                <div className="flex flex-col items-center gap-5">
                  <p className="font-bold text-[2.5rem] text-primary">220</p>
                  <p className="text-black">Speakers</p>
                </div>
                <div className="border-b border-[#DAD5D5] md:border-r"></div>
                <div className="flex flex-col items-center gap-5">
                  <p className="font-bold text-[2.5rem] text-secondary">
                    5,000
                  </p>
                  <p className="text-black">Attendees</p>
                </div>
                <div className="border-b border-[#DAD5D5] md:border-r"></div>
                <div className="flex flex-col items-center gap-5">
                  <p className="font-bold text-[2.5rem] text-red">120</p>
                  <p className="text-black">Exhibitors</p>
                </div>
                <div className="border-b border-[#DAD5D5] md:border-r"></div>
                <div className="flex flex-col items-center gap-5">
                  <p className="font-bold text-[2.5rem] text-black">15</p>
                  <p className="text-black">Tracks</p>
                </div>
              </div>
            </div>
            <div id="speakers" className="flex flex-col gap-8">
              <p className="w-[90%] md:w-3/5 lg:w-2/5 2xl:w-[30%] font-bold text-2xl md:text-4xl">
                Why Attend Future of Health?
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col px-6 py-3 bg-red rounded-lg gap-4 h-full justify-between">
                  <div className="flex flex-col gap-4 text-white">
                    <p className="font-medium text-[2.1rem]">
                      Insights & Trends
                    </p>
                    <p>
                      Stay ahead of the curve with the latest breakthroughs and
                      innovations shaping the future of health.
                    </p>
                  </div>
                  <div className="bg-no-repeat bg-cover bg-center bg-speakersBG w-full h-60 rounded-lg relative bottom-0"></div>
                </div>
                <div className="flex flex-col px-6 py-3 bg-secondary rounded-lg gap-4 h-full justify-between">
                  <div className="flex flex-col gap-4 text-white">
                    <p className="font-medium text-[2.1rem]">
                      Industry Experts
                    </p>
                    <p>
                      Join industry leaders and changemakers in shaping the
                      conversation around tomorrow&apos;s healthcare.
                    </p>
                  </div>
                  <div className="bg-no-repeat bg-cover w-full h-60 rounded-lg bg-expertsBG static bottom-0"></div>
                </div>
                <div className="flex flex-col px-6 py-3 bg-black rounded-lg gap-4 h-full justify-between">
                  <div className="flex flex-col gap-4 text-white">
                    <p className="font-medium text-[2.1rem] leading-none">
                      Networking Opportunities
                    </p>
                    <p>
                      Connect with fellow innovators and stakeholders who share
                      your passion for transforming healthcare.
                    </p>
                  </div>
                  <div className="bg-no-repeat bg-cover w-full h-60 rounded-lg bg-speakersBG static bottom-0"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
                <div className="flex flex-col px-6 py-3 bg-primary rounded-lg gap-4 h-fit">
                  <div className="flex flex-col gap-4 text-white">
                    <p className="font-medium text-[2.1rem]">
                      Product Showcase
                    </p>
                    <p>
                      Take advantage of exclusive opportunities to showcase your
                      products or services, pitch your ideas to investors, or
                      collaborate with other innovators in the healthcare space.
                    </p>
                  </div>
                  <div className="bg-no-repeat bg-cover bg-center bg-speakersBG w-full h-60 rounded-lg relative bottom-0"></div>
                </div>
                <div className="flex flex-col px-6 py-3 bg-green rounded-lg gap-4 h-fit">
                  <div className="flex flex-col gap-4 text-white">
                    <p className="font-medium text-[2.1rem]">
                      Product Showcase
                    </p>
                    <p>
                      Access a wealth of educational materials to help you
                      navigate the evolving healthcare landscape.
                    </p>
                  </div>
                  <div className="bg-no-repeat bg-cover bg-center bg-speakersBG w-full h-60 rounded-lg relative bottom-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-black">
          <div className="w-full max-w-[1440px] px-6 py-10 md:px-24 md:py-12 lg:px-32 2xl:px-52 lg:py-16 flex flex-col lg:flex-row items-center md:items-start lg:items-center gap-16">
            <div className="flex flex-col gap-4 md:w-4/5 ">
              <p className="font-bold text-4xl text-white">Get involved</p>
              <p className="text-white">
                Ready to shape the future of health? Become a member, explore
                sponsorship opportunities, or collaborate with us. Together,
                let&apos;s build a healthier, happier world for all.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-nowrap w-full lg:w-[45%]">
              <button
                onClick={() => setShowRegister(true)}
                className="bg-primary text-white p-3 rounded-md flex items-center gap-2 font-semibold text-sm md:text-base w-full md:w-fit justify-center"
              >
                Pre-register for 2024
              </button>
              <button
                onClick={() => setShowPartner(true)}
                className="bg-white text-black p-3 rounded-md flex items-center gap-2 font-semibold text-sm md:text-base w-full md:w-fit justify-center"
              >
                Partner with us
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="flex flex-col gap-20 px-6 py-10 md:px-24 md:py-12 lg:px-32 2xl:px-52 lg:py-16 max-w-[1440px] w-full">
            <div className="flex flex-col lg:flex-row justify-normal gap-10 md:justify-between">
              <div className="flex flex-col gap-4 w-full md:w-3/5 lg:w-1/3">
                <div className="w-32">
                  <img src={logo} alt="logo" />
                </div>
                <p className="font-semibold text-sm">
                  Stay up to date with our latest health events and updates!
                </p>
                <div className="gap-4 flex items-center h-12">
                  <input
                    placeholder="Enter your email"
                    className="w-3/5 h-full rounded-md placeholder:text-[#667085] placeholder:text-sm border border-[#D0D5DD] px-4"
                  />
                  <button className="bg-primary text-white py-3 px-5 h-full rounded-md flex items-center font-semibold text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                <div className="flex flex-col gap-4">
                  <p className="font-semibold text-[#0C1439]">Useful links</p>
                  <div className="flex flex-col gap-2 text-left">
                    <a href="#about" className="text-sm text-[#646464]">
                      About Future of Health
                    </a>
                    <button
                      onClick={() => setShowRegister(true)}
                      className="text-sm text-[#646464] text-left"
                    >
                      Pre-register for 2024
                    </button>
                    <button
                      onClick={() => setShowPartner(true)}
                      className="text-sm text-[#646464] text-left"
                    >
                      Partner with us
                    </button>
                    <a href="#speakers" className="text-sm text-[#646464]">
                      Speakers
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-semibold text-[#0C1439]">Contact Us</p>
                  <div className="flex flex-col gap-2">
                    <a href="/" className="text-sm text-[#646464]">
                      futureofhealth.com
                    </a>
                    <a
                      href="tel:+2348111122345"
                      className="text-sm text-[#646464]"
                    >
                      +234 811 112 2345
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-semibold text-[#0C1439]">Follow Us</p>
                  <div className="flex gap-4 text-[#646464]">
                    <FaLinkedinIn />
                    <FaXTwitter />
                    <FaFacebookF />
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnerModal show={showPartner} setShow={setShowPartner} />
      <RegisterModal show={showRegister} setShow={setShowRegister} />
    </div>
  );
};

export default LandingPage;

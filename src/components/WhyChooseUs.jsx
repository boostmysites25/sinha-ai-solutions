import React from "react";
import bgImg from "../assets/images/bg-img.webp";
// import bannerImg from "../assets/images/banner.webp";
import { ReactComponent as icon1 } from "../assets/svgs/Affordable & Time Efficient.svg";
import { ReactComponent as icon5 } from "../assets/svgs/End-to-End Solutions.svg";
import { ReactComponent as icon8 } from "../assets/svgs/SEO-Friendly.svg";
import { ReactComponent as icon2 } from "../assets/svgs/Mobile-First, Responsive Design.svg";

const content = [
  {
    icon: icon5,
    title: "Creativity",
    desc: "We think beyond limits, crafting bold ideas that break the mold and spark brand excitement.",
  },
  {
    icon: icon2,
    title: "Collaboration",
    desc: "We harness the power of teamwork and diverse insights to fuel meaningful, lasting results.",
  },
  {
    icon: icon1,
    title: "Impact",
    desc: "We build purpose-driven brands that inspire, influence, and leave a lasting impression.",
  },
  {
    icon: icon8,
    title: "Innovation",
    desc: "We leverage emerging trends and cutting-edge technology to keep your brand future-ready.",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="py-[5rem] relative bg-center bg-cover min-h-[50vh]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute top-0 w-full h-full bg-background/80"></div>
      <div data-aos="fade-up" className="max-w-7xl mx-auto">
        <div
          className="mx-5 rounded-xl overflow-hidden bg-right bg-cover relative"
          // style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="absolute top-0 w-full h-full bg-primary/5"></div>
          <div className="py-[3rem] px-5 bg-white/10 rounded-xl backdrop-blur-sm text-primary_text relative z-10">
            <h1
              data-aos="fade-up"
              className="heading-2 max-w-[60rem] mx-auto text-center"
            >
              The fire that fuels our passion.
            </h1>
            <h2 className="sub-heading text-center max-w-[60rem] mt-3 mx-auto">
              At Techno Rich, we believe in the power of:
            </h2>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 mt-10"
            >
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex shadow-inner shadow-primary/40 flex-col group items-center gap-1 bg-secondary/10 rounded-xl p-5 transition-all duration-200"
                >
                  <div className="flex justify-between items-center w-full">
                    <p className="text-center text-2xl mt-2 font-semibold text-primary">
                      {item.title}
                      <span className="text-5xl text-secondary">.</span>
                    </p>
                    <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-full bg-secondary">
                      <item.icon className="w-[2rem] fill-white h-[2rem] transition-all duration-200" />
                    </div>
                  </div>
                  <p className="text-start leading-tight mt-4 desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

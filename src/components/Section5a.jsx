import React from "react";
import { Slide, Fade } from "react-slideshow-image";


import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  color: "gray",
  background: "",
 
};

const divStyle = {
  display: "flex",
 
  justifyContent: "center",

};
const slides = [
  {
    url: "👩",
    caption:
    "Femme Fest is one of the most stressful events I’ve ever worked on till date. There were so many moving parts but with Tix, I didn’t have to worry about guests registration or onsite ticket validation.",
    fullname:  "Ayomide Dokunmu - Founder, Femme Digital",
    location: "Akure",
    
  },
  {
    url: "👨",
    caption:
      "Guyyyy! This! So so seamless! This whole wristband payment thing has to be the most ingenious thing I’ve seen in a while... I stan this level of excellence! 🙌🏽🙌🏽",
    fullname: "@roluwatomisin",
    location: "Lagos",
    
  },
  {
    url: "👩",
    caption: "I had been doing free yoga sessions for a while and the classes were never full. I decided to create and share a session on Tix. That has been the fullest class I’ve ever had. Thank you!",
    fullname: "Faith Onyesom, Lead Instructor, Good Faith Yoga",
    location: "Faith Onyesom, Lead Instructor, Good Faith Yoga",
    
  },
  {
    url: "🍹",
    caption: "Omo this payment was what saved my business when I came late. Once we arrived we fried all our small chops. There was already a long queue, and the queue disappeared under few minutes because of how fast payment was made. Thank you!",
    fullname: "@cocktailville_n_chops",
    location: "Faith Onyesom, Lead Instructor, Good Faith Yoga",
    
  }
];

const buttonStyle = {};

const properties = {
  prevArrow: (
    <button className="mt-[50%] md1:mt-[40%] ml-[74%] 2xl:mt-[20%] text-transparent xs:max-xs1:hidden ">
      <img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03IDFMMSA3TDcgMTMiIHN0cm9rZT0iIzJFMkUyRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="Chevron" />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }} className=" mt-[50%] md1:mt-[40%] 2xl:mt-[20%] mr-[20%] xs:max-xs1:hidden ">
      <img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNyA3TDEgMTMiIHN0cm9rZT0iIzJFMkUyRSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" alt="Chevron" />
    </button>
  ),
};

const Section5a = () => {
  return (
    <div className="bg-imgtest 2xl:mb-10 w-full md2:h-[400px] xs:max-md:h-[400px]  h-[550px] lg:h-[1000px] 2xl:h-[1300px] ">
       
      <Slide {...properties}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle }}
              className=""
            >
              <span
                style={spanStyle}
                className=" w-[90%] lg:w-[60%]   text-gray-600 lg:text-5xl 2xl:text-6xl h-[58%] 2xl:h-[600px]  mt-[16%] "
              >
                <h1 className="font-extrabold xs:max-lg:text-4xl 2xl:text-6xl text-gray-900 mb-4 block ">
                  
                  Testimonials
                
                </h1>
                <h1 className=" lg:text-2xl mb-2 mt-[14%] 2xl:mt-[10%] 4xl:mt-[4%] xs:max-md:mt-12 block  ">
                  "{slide.caption}"
                </h1>
                <div className="flex mt-[11%] lg:gap-10 md:text-2xl 3xl:mt-[4%] xs:max-md:mt-12  ">
                  <p className="  ">{slide.url}</p>
                  <p className=" orangetext  ">{slide.fullname}</p>
                </div>
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Section5a;

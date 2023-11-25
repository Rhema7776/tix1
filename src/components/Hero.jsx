import React from "react";
// import "./Hero.css";
import { Link } from "react-router-dom";
import stickyicon from "../assets/stickyroboticon.jpg"

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className=" lg:px-[10%] px-4  xs:max-sm:mt-[30%] mt-[12%] text-center flex flex-col items-center">
        <div className=" md:max-lg:w-[43%] md:max-lg:p-15 xs:max-sm:rounded-2xl
          sm:rounded-full lg:max-xl:w-[30%]  xl:w-[30%] sm:w-[52%] xs:max-sm:w-full
          xs:max-sm:pr-2 font-medium xs:max-sm:h-20 sm:h-10 md:h-8  py-1 pl-2  
          text-orange-500 flex items-center  bg-[rgba(252,100,53,0.1)] text-[14px]">
          <Link to="/" className=" ">
            <button className=" bg-white px-3 py-4 sm:py-1 lg:py-0 font-sm md:py-0  border border-none  text-center xs:max-sm:rounded-2xl orangetext rounded-full">
              New feature
            </button>
          </Link>
          <Link to="/Home2" className="flex  xs:max-sm:gap-1">
            <p className="ml-3 orangetext  text-sm text-start ">Check out box office</p>
            <img
              
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMzMzOTggNy45OTk2N0gxMi42NjczTTEyLjY2NzMgNy45OTk2N0w4LjAwMDY1IDMuMzMzMDFNMTIuNjY3MyA3Ljk5OTY3TDguMDAwNjUgMTIuNjY2MyIgc3Ryb2tlPSIjRkM2NDM1IiBzdHJva2Utd2lkdGg9IjEuMzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt="Arrow Right Icon"
              className="ml-1"
            />
          </Link>
          
        </div>
        <div className="px-[7%]">
          <h1 className="text-4xl lg:text-8xl mt-5 orangetext font-extrabold">
            Events Made Easy for Creators
          </h1>
          <p className="text-md lg:text-xl mt-7 text-gray-700 font-medium">
            Tix is an event ticketing platform for experiences in Africa. Create
            live or virtual events, sell tickets and collect payments from your
            mobile phone.
          </p>
        </div>
        <div className="md2:flex  md:gap-8  lg:w-[45%]  mt-14 font-semibold">
          <Link to="/" className="w-full">
            <button className="orangetext bg-[rgba(252,100,53,.1)] rounded-lg p-4 w-full ">
              Find your next event
            </button>
          </Link>
          <Link to="/" className="w-full">
            <button className="orangebutton rounded-lg text-white p-4 font-semibold w-full  xs:max-md2:mt-4 ">
              Create an event 
            </button>
          </Link>
          
        </div>
        
        
      </div>
      {/* <img src={stickyicon} alt="" className="sticky bottom-1 left-[96%]" /> */}
      <span className=" bottom-1 left-[80%] md:left-[90%] lg:left-[94%] orangebutton rounded-full p-3 fixed z-10 ">
        <span href="" className="stickyrobot "></span>
      </span>
      <img
          
          src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1671015152/website/homepage.png"
          alt="Picture of Tix Features"
          className=" mt-20 container mx-auto "
        />
    </div>
  );
};

export default Hero;

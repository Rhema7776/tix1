import React from "react";
import {
  CloudUplocation,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import './Hero.css';
import bgImg from "../assets/RheMartlogo.png";
import Card1 from "../assets/Card 1.png";
import Card2 from "../assets/Card 2.png";
import Group13 from "../assets/Group 13.png";


const Hero = () => {
  return (
    <div className="mt-[-6%]  h-screen px-4  w-full  md-container ">
      <div className="grid   md:grid-cols-2 mx-auto flex-col max-w-[2600px] ">
        <div
          className="md:py-[27%] lg:py-[25%]   2xl:py-56  3mxl:py-64 w-full 4xl:items-start 4xl:py-72 justify-center
             md:items-start md:w-[100%] px-2 py-8  lg:text-start text-center 3xl:text-center md:text-start"
        >
          <h1 className=" md:text-start md:text-[51px] xl:text-[78px] lg:text-[65px]  3xl:text-[100px] 3mxl:text-[116px] 4xl:text-[136px]  font-bold  lg:text-start text-center  sm:text-3xl text-5xl md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl">
            A special credit card made for Developers
          </h1>
          <p className="py-3  font-[Inter-400] text-16px xs:text-center md:text-start text-sm lg:text-md xl:text-lg 3xl:text-start 3xl:text-3xl 4xl:text-start 4xl:text-4xl  text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Non dfvfgb fbgfg bfgb ergsrdfv sdfsdfsd
          </p>
          <div className=" border font-normal  border-slate-300 xs:text-sm xs:w-[100%] sm:ml-[15%] md:ml-[0%] lg:ml-[0%] xl:ml-[0%] 2xl:ml-[0%] 3xl:ml-[0%] 4xl:ml-[0%] sm:w-[70%] md:py-[6%] lg:py-[1%] xl:py-[1%] 2xl:py-[1%] 3xl:py-[0%]  4xl:py-[1%] md:h-[16%] xl:p3 xl:w-[90%]   lg:h-[13%] lg:text-xl 3xl:h-[20%] 3mxl:h-[20%]  4xl:h-[15%]  md:w-[100%] rounded-xl bg-white flex items-center px-2 py-3 w-[200px]  lg:w-[500px]">
            <input
              type="text"
              className="bg-transparent  p-2 w-full focus:outline-none lg:text-sm  3xl:text-4xl 4xl:text-4xl "
              placeholder="Enter email address "
            />
            <button className="py-3 font-bold px-6 sm:w-[60%]  lg:text-sm   3xl:text-4xl 4xl:text-4xl ">
              Get Started
            </button>
          </div>

          <div className="flex xs:w-[60%]  xs:ml-[20%] sm:ml-[20%] md:ml-0 lg:ml-[0%] xl:ml-[0%] 2xl:ml-[0%] 3xl:ml-[0%] 4xl:ml-[0%] justify-between  sm:w-[60%] w-[80%] md:py-1 py-6 md:w-[100%] lg:w-[86%] xl:w-[85%] ">
            <div className="flex xs:flex-col  sm:flex-row   w-[42%]  items-center">
              <h1 className="font-medium text-3xl md:text-4xl  xl:text-6xl 3xl:text-7xl 4xl:text-8xl  mr-2">
                2943
              </h1>
              <p className=" text-slate-500 font-normal text-start  md:text-start py-3 text-[12px] md:text-sm lg:text-md xl:text-lg 3xl:text-3xl 4xl:text-4xl  ">
                Cards
                <br />
                Delivered
              </p>
            </div>
            <div className="flex xs:flex-col sm:flex-row   w-[50%] items-center">
              <h1 className="text-3xl md:text-4xl   xl:text-6xl mr-2 3xl:text-7xl  4xl:text-8xl">
                $1M+
              </h1>
              <p className="text-slate-500 font-normal  py-3 text-[12px] lg:text-md xl:text-lg  md:text-sm 3xl:text-3xl  4xl:text-4xl ">
                Transaction
                <br />
                Completed
              </p>
              
            </div>
          </div>
        </div>
        <div className="  items-start xs:items-center sm:items-center sm:text-center ">
         

          <img
            src={Group13}
            className=" absolute mt-0 xs:ml-[16%] xs:w-[79%] sm:w-[47%] sm:ml-[50%]  md:w-[44%] md:ml-[6%] lg:ml-[10%] lg:w-[40%] xl:w-[42%]   xl:ml-[8%] 2xl:w-[40%] 2xl:ml-[10%] 3xl:ml-[10%] 3xl:w-[40%] 4xl:w-[37%] 4xl:ml-[13%]  "
            alt=""
          />
          <img
            className=" absolute xs:w-[95%] xs:mt-[20%] sm:w-[50%] sm:mt-[20%]  sm:ml-40 md:mt-[22%]  xl:w-[33%]  xl:mt-[22%] xl:ml-[9%] md:ml-[8%] md:w-[35%] lg:ml-[11%] lg:mt-[20%] 2xl:ml-[10%] 2xl:mt-[20%] 3xl:w-[39%] 3xl:mt-[19%] 3xl:ml-[9%] 4xl:w-[39%] 4xl:ml-[11%] 4xl:mt-[18%]   "
            src={Card2}
            alt=""
          />
          <img
            className=" absolute xs:w-[95%] xs:mt-[15%] sm:w-[50%] sm:mt-[5%] sm:ml-20 xl:w-[36%] xl:mt-[9%] xl:ml-[-2%] md:mt-[10%] md:ml-[-3%] md:w-[35%] cursor-pointer lg:mt-[8%] 2xl:ml-[0%] 3xl:mt-[7%] 3xl:ml-[0%] 3xl:w-[39%] lg:ml-[1%] 4xl:w-[39%] 4xl:ml-[2%] 4xl:mt-[6%]  "
            src={Card1}
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;

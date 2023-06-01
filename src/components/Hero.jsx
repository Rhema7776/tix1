import React from "react";
import {
  CloudUplocation,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/RheMartlogo.png";
import Card1 from '../assets/Card 1.png';
import Card2 from '../assets/Card 2.png';
import Group13 from '../assets/Group 13.png'
import BG1 from '../assets/BG.png';
import BG2 from '../assets/BG2.png';
import Vector1 from '../assets/Vector (1).png';
import Vector5 from '../assets/Vector (5).png';
import Vector6 from '../assets/Vector (6).png';
import Vector7 from '../assets/Vector (7).png';
import Vector8 from '../assets/Vector (8).png';
import Vector9 from '../assets/Vector (9).png';
import Vector10 from '../assets/Vector (10).png';
import Vector11 from '../assets/Vector (11).png';
import Vector12 from '../assets/Vector (12).png';

import Vector2 from '../assets/Vector (2).png';

const Hero = () => {
  return (
    <div className="   h-screen px-4  md-container ">
      <div className="grid  md:grid-cols-2 bg-red-500  mx-auto flex-col max-w-[2600px] ">
        <div
          className="md:py-[26%] lg:py-44  2xl:py-52 3xl:py-72 w-full 4xl:items-start 4xl:py-72  bg-red-400 justify-center
             md:items-start w-full md:w-[100%] px-2 py-8  lg:text-start text-center 3xl:text-center md:text-start"
        >
          <h1 className=" 3xl:text-7xl 4xl:text-8xl  font-bold  lg:text-start text-center md:text-center sm:text-3xl text-5xl md:text-4xl lg:text-5xl xl:text-8xl 2xl:text-8xl">
            A special credit card  made for Developers
          </h1>
          <p className="py-3 text-sm lg:text-md xl:text-lg 3xl:text-start 4xl:text-start 4xl:text-4xl  text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            dfvfgb fbgfg bfgb ergsrdfv sdfsdfsd
          </p>
          <div className="w-full md:py-2 xl:p3 xl:w-[90%] lg:w-[95%] lg:text-xl  4xl:h-[30%] border-slate-600 md:w-[100%] sm:w-[100%] rounded-xl bg-white flex items-center px-2 py-3 w-[200px] sm:w-[400px] lg:w-[500px]">
            <input type="text" className="bg-transparent p-2 w-full focus:outline-none 4xl:text-4xl " placeholder="Enter email address " />
            <button className="py-3  px-6 sm:w-[60%] 4xl:text-4xl 4xl:h-[90%]">Get Started</button>
          </div>
          
          <div className="flex  justify-between xs:w-[100%]  sm:w-[60%] w-[80%] md:py-1 py-6 md:w-[100%] lg:w-[86%] xl:w-[85%] ">
            <div className="flex xs:flex-col sm:flex-row   w-[42%]  items-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 4xl:text-8xl  mr-2">2943</h1>
              <p className=" text-slate-500 py-3 text-[12px] md:text-sm lg:text-md xl:text-lg 4xl:text-4xl  ">Cards<br />Delivered</p>
            </div>
            <div className="flex xs:flex-col sm:flex-row   w-[50%] items-center">
              <h1 className="text-3xl md:text-4xl  lg:text-5xl xl:text-6xl mr-2 4xl:text-8xl">$1M+</h1>
              <p className="text-slate-500 py-3 text-[12px] lg:text-md xl:text-lg  md:text-sm  4xl:text-4xl ">Transaction<br />Completed</p>
              {/* md:text-lg */}
            </div>
          </div>
        </div>
        <div className="bg-indigo-500   items-start   h-full  ">    
          {/* 3xl:hidden md:hidden sm:hidden  */}
          {/* lg:w-4 xl:w-4  */}
          
          <img src={Group13} className=" absolute sm:w-56 md:w-[44%] md:ml-10 lg:w-[10%]   xl:ml-[55%] 2xl:w-[40%] 2xl:ml-[10%] 3xl:ml-[10%]  3xl:w-[40%] 4xl:w-[37%] 4xl:ml-[13%]  " alt="" />
          <img className=" absolute  xl:w-[33%]  xl:mt-[22%] xl:ml-[8%] md:mt-[22%] md:ml-[6%] md:w-[35%] 2xl:ml-[10%] 2xl:mt-[20%] 3xl:w-[25%] 3xl:mt-[15%] 3xl:ml-[9%] 4xl:w-[35%] 4xl:ml-[13%] 4xl:mt-[15%]   "  src={Card2} alt="" />
          <img className=" absolute xl:w-[36%] xl:mt-[9%] xl:ml-[-3%] md:mt-[10%] md:ml-[-3%] md:w-[35%] cursor-pointer lg:ml-[0%] 2xl:ml-[0%] 3xl:mt-[7%] 3xl:ml-[3%] 3xl:w-[25%] lg:ml-[0%] 4xl:w-[35%] 4xl:ml-[4%] 4xl:mt-[6%]  " src={Card1} alt="" />
         
         
        </div>
        
      </div>
    </div>
  );
};

export default Hero;


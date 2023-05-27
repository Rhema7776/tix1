import React from "react";
import {
  CloudUplocation,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/RheMartlogo.png";
import Card1 from '../assets/BG.png';
import Card2 from '../assets/BG2.png'

const Hero = () => {
  return (
    <div className="w-full py-[20%] h-screen bg-zinc-200 flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1600px] m-auto">
        <div
          className=" py-20 flex flex-col justify-center
             md:items-start w-full px-2 py-8 bg-red-200"
        >
          <h1 className=" font-bold  text-3xl md:text-5xl lg:text-7xl">
            A special credit <br /> card  made for <br /> Developers
          </h1>
          <p className="py-3 text-sm  text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Non
            dignissimos quo quaerat unde facilis 
          </p>
          <div className="w-full lg:w-[73%] md:w-[100%] sm:w-[100%] rounded-xl bg-white flex items-center px-2 py-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <input type="text" className="bg-transparent p-2 w-full focus:outline-none" placeholder="Enter email address " />
            <button className="py-3  px-6 sm:w-[60%]">Get Started</button>
          </div>
          
          <div className="flex  justify-between w-[100%] py-6 md:w-[70%] bg-blue-500">
                <div className="flex justify-between bg-red-300 w-[42%]  items-center">
                  <h1 className="text-4xl md:text-6xl">2943</h1>
                  <p className="py-3 text-[12px] md:text-sm md:text-lg  text-slate-500">Cards<br />Delivered</p>
                </div>
                <div className="flex justify-between  bg-blue-300 w-[50%] items-center">
                  <h2 className="text-4xl md:text-6xl">$1M+</h2>
                  <p className="py-3 text-[12px] md:text-sm md:text-lg text-slate-500 ">Transaction<br />Completed</p>
                </div>
          </div>
        </div>
        <div className="w-full  bg-violet-500 ">    
          <img className="absolute lg:w-[30%]  w-[70%] ml-[6%]  md:w-[30%] mt-[12%] md:ml-[16%] "  src={Card2} alt="" />
          <img className=" cursor-pointer lg:w-[30%]  absolute w-[70%] md:w-[30%]  md:mt-[1%] md:ml-[5%]" src={Card1} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;

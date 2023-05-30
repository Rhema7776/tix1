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
    <div className=" py-[25%]  h-screen px-4  md-container ">
      <div className="grid w-full md:grid-cols-2 bg-red-500   flex-col justify-between max-w-[2800px] ">
        <div
          className="sm:items-center   md:py-10 flex flex-col justify-center
             md:items-start w-full md:w-[100%] px-2 py-8 bg-red-200 lg:text-start text-center md:text-start"
        >
          <h1 className="  font-bold  lg:text-start text-center md:text-start sm:text-3xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            A special credit card  made for Developers
          </h1>
          <p className="py-3 text-sm lg:text-3xl  text-slate-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            dignissimos quo quaerat unde facilis 
          </p>
          <div className="w-full md:py-2 xl:w-[100%] lg:w-[95%] lg:text-2xl border-slate-600 md:w-[100%] sm:w-[100%] rounded-xl bg-white flex items-center px-2 py-3 w-[200px] sm:w-[400px] lg:w-[500px]">
            <input type="text" className="bg-transparent p-2 w-full focus:outline-none" placeholder="Enter email address " />
            <button className="py-3  px-6 sm:w-[60%]">Get Started</button>
          </div>
          
          <div className="flex  justify-between xs:w-[100%]  sm:w-[60%] w-[80%] md:py-1 py-6 md:w-[100%] lg:w-[86%] xl:w-[85%] bg-blue-500">
            <div className="flex xs:flex-col sm:flex-col lg:flex-row  bg-red-300 w-[42%]  items-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mr-2">2943</h1>
              <p className="py-3 text-[12px] md:text-sm lg:text-md xl:text-lg   text-slate-500">Cards<br />Delivered</p>
            </div>
            <div className="flex xs:flex-col sm:flex-col lg:flex-row   bg-blue-300 w-[50%] items-center">
              <h1 className="text-3xl md:text-4xl bg-slate-500 lg:text-5xl xl:text-6xl mr-2">$1M+</h1>
              <p className="py-3 text-[12px] lg:text-md xl:text-lg  md:text-sm text-slate-500 bg-red-500 ">Transaction<br />Completed</p>
              {/* md:text-lg */}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[98%] lg:ml-9 bg-violet-500 xs:h-[350px] sm:h-[400px] md:w-[100%] md:h-[570px] lg:h-[760px] sm:w-[725px]  ">    
         
         <img className="absolute sm:w-[40%] md:w-[269px] md:mt-[170px] xl:mt-[200px] xl:w-[25%] lg:w-[35%] lg:h-[350px] lg:mt-[200px] xl:h-[400px] md:h-[280px] w-[70%] md:ml-[10%] ml-[6%]  md:w-[40%] mt-[12%] "  src={Card2} alt="" />
         <img className=" cursor-pointer md:w-[269px] md:mt-5 xl:w-[25%] lg:w-[35%] lg:h-[350px] xl:h-[400px] md:h-[300px]  absolute w-[70%] md:w-[40%]  md:mt-[1%] " src={Card1} alt="" />
          
        </div>
        
      </div>
    </div>
  );
};

// const Hero = () => {
//   return (
//     <div className=" py-[25%]   h-screen px-4 items-center md-container ">
//       <div className="grid w-full  md:grid-cols-2 bg-red-500   flex-col justify-between max-w-[1600px] ">
//         <div
//           className=" sm:items-center  md:py-10 flex flex-col justify-center
//             md:items-start w-full md:w-[100%] px-2 py-8 bg-red-200 lg:text-start text-center md:text-start"
//         >
//           <h1 className="  font-bold sm:items-center  lg:text-start text-center md:text-start sm:text-3xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//             A special credit card  made for Developers
//           </h1>
//           <p className="py-3 text-sm lg:text-3xl  text-slate-500 ">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
//             dignissimos quo quaerat unde facilis 
//           </p>
//           <div className="w-full md:py-2 xl:w-[100%] lg:w-[95%] lg:text-2xl border-slate-600 md:w-[100%] sm:w-[100%] rounded-xl bg-white flex items-center px-2 py-3 w-[200px] sm:w-[400px] lg:w-[500px]">
//             <input type="text" className="bg-transparent p-2 w-full focus:outline-none" placeholder="Enter email address " />
//             <button className="py-3  px-6 sm:w-[60%]">Get Started</button>
//           </div>
          
//           <div className="flex   justify-between xs:w-[100%]   sm:w-[60%] w-[80%] md:py-1 py-6 md:w-[100%] lg:w-[86%] xl:w-[85%] bg-blue-500">
//             <div className="flex xs:flex-col sm:flex-col md:flex-row  bg-red-300 w-[42%]  items-center">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mr-2">2943</h1>
//               <p className="py-3 text-[12px] md:text-sm lg:text-md xl:text-lg   text-slate-500">Cards<br />Delivered</p>
//             </div>
//             <div className="flex xs:flex-col sm:flex-col md:flex-row  bg-blue-300 w-[50%] items-center">
//               <h1 className="text-3xl md:text-4xl bg-slate-500 lg:text-5xl xl:text-6xl mr-2">$1M+</h1>
//               <p className="py-3 text-[12px] lg:text-md xl:text-lg  md:text-sm text-slate-500 bg-red-500 ">Transaction<br />Completed</p>
//               {/* md:text-lg */}
//             </div>
//           </div>
//         </div>
//         <div className=" bg-violet-500 xs:h-[350px] sm:h-[400px] md:h-[530px] lg:h-[760px] sm:w-[725px] md:w-full lg:w-full ">    
//          fldvsdcsxz
//           {/* bg-violet-500 */}
//           <img className="sm:w-[40%] md:w-[270px] md:mt-[171px] xl:mt-[200px] xl:w-[25%] lg:w-[35%] lg:h-[350px] lg:mt-[200px] xl:h-[400px] md:h-[280px] w-[70%] md:ml-[7%] ml-[6%]  md:w-[40%] mt-[12%] "  src={Card2} alt="" />
//           <img className=" cursor-pointer md:w-[270px] md:mt-5 xl:w-[25%] lg:w-[35%] lg:h-[350px] xl:h-[400px] md:h-[300px]  absolute w-[70%] md:w-[40%]  md:mt-[1%] " src={Card1} alt="" />
//         </div>
        
//       </div>
//     </div>
//   );
// };

export default Hero;

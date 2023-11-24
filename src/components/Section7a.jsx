import React from 'react'
import twophones from "../assets/twophones.png"
import { Link } from "react-router-dom";
import playstore from "../assets/Mobile app store badge (1).svg";
import appstore from "../assets/Mobile app store badge.png";

const Section7a = () => {
  return (
    <div id="about" className="container mx-auto px-[5%] mt-5 xs:max-lg:px-3 ">
      {/* grid md:grid-cols-2 */}
      <div className=" mt-10 grid md2:grid-cols-2    gap-4 mx-auto ">
        <div className=" md2:w-[80%] xs:max-md2:items-center xs:max-md2:text-center flex flex-col justify-center">
            <div className="">
                <h1 className=" mb-8 font-extrabold orangetext text-4xl md2:text-6xl  ">
                    Download  the Tix App
                </h1>
                
            </div>
          <div className="lg:mt-0 mt-10 text-gray-600  ">
            <h1 className=" mb-2 text-xl block font-md">
                As an organiser — create, plan and manage your event onsite, right from your phone
            </h1>
            
          </div>
          <div className="mt-14 text-gray-600">
            <h1 className=" mb-2 text-xl block font-md">
                As a guest — discover events near you, purchase tickets, and get notifications so you don’t miss a thing.
            </h1>

          </div>
         <div className="mt-7 text-gray-500">
            <h1 className="mb-2 block text-xl text-gray-800 font-md">
                Download directly via:
            </h1>
         </div>
           
          <div className="flex  mt-2   md2:flex xs:max-md2:gap-28">
            

            <Link to="/" className=" ">
              <button className="border-none mr-4">
                <img src={appstore} alt="" />
              </button>
            </Link>
            <Link to="/">
              <button className="">
                <img src={playstore} alt="" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-end xs:max-md2:mt-20">
           <img src={twophones} alt="" />

        </div>
        
      </div>
    </div>
  )
}

export default Section7a

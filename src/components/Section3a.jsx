import React, {useState} from "react";
import { Link } from "react-router-dom";
import Ticketinghover from "../assets/Ticketinghover.jpg";

import Virtualhover from "../assets/Virtualhover.jpg";
import Cashlesshover from "../assets/Cashlesshover.jpg";
import Saleshover from "../assets/Saleshover.jpg";
import Boxhover from "../assets/Boxhover.jpg";
import Attendeehover from "../assets/Attendeehover.jpg";
import TicketIcon from "../assets/ticketingcard.png";
import 'animate.css';

const Section3a = () => {

    const [ticket, setTicket] = useState(false);
    const [virtual, setVirtual] = useState(false);
    const [cash, setCash] = useState(false);
    const [sales, setSales] = useState(false);
    const [box, setBox] = useState(false);
    const [attend, setAttend] = useState(false);

  
    const [showImage, setShowImage] = React.useState(false);


    const handleTicket = () => setTicket(!ticket);
    const handleVirtual = () => setVirtual(!virtual);
    const handleCash = () => setCash(!cash);
    const handleSales= () => setSales(!sales);
    const handleBox= () => setBox(!box);
    const handleAttend = () => setAttend(!attend);

  return (
    <div className="container px-[10%] text-center flex flex-col items-center  mx-auto">
      <h1 className="font-extrabold xs:max-md:text-4xl text-5xl text-gray-800 ">Tix Tools</h1>
      <p className="font-md text-md md:text-2xl text-gray-500 mt-7">
        Simple Tools for a Successful Event
      </p>
        
      <div className=" grid xsa:grid-rows-3 xsa:grid-cols-2 xsa:w-full xs1:grid-rows-2 xs1:grid-cols-3 lg:grid-rows-3 lg:grid-cols-2  md1:grid-cols-4 gap-10 flex-col mt-28  w-[72%] md1:max-lg:gap-4 md1:max-lg:w-full text-start">
            <a
            href="/product/ticketing"
            className="text-start "
            >
            {!ticket ? (
            <div  className="relative " 
            
              onMouseOver={handleTicket}  >
                <img className="2xl:w-full " src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646644774/website/ticketingcard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full   bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 xs:mt-16 ml-8 xsa:ml-4 xs:max-xsa:ml-4">Ticketing</p>
                </div> 
            </div>
            ) : (
                <div className="relative animate__animated animate__fadeIn " onMouseOut={handleTicket} >
                    <img src={Ticketinghover} alt="" className="bg-cover w-full transition duration-700 ease-in-out " />
                </div>
            )}
            </a>

            <a
            href="/product/ticketing"
            className="text-start"
            
            >
            {!virtual ? (
            <div   className="relative  " onMouseOver={handleVirtual} >
                <img className=" w-full" src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646646151/website/virtualeventscard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 xs:mt-9 ml-8 xsa:ml-4 xs:max-xsa:ml-4">Virtual Events</p>
                </div>
            </div>
            ) : (
                <div className="relative animate__animated animate__fadeIn " onMouseOut={handleVirtual}>
                    <img src={Virtualhover} alt="" className="bg-cover w-full " />
                </div>
            )}
            </a>

           <a
            href="/product/ticketing"
            className="text-start "
            >
            {!cash ? (
            <div  className="relative " onMouseOver={handleCash} >
               <img className="w-full"  src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646646173/website/cashlesscard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 md2:max-lg:mt-3 xs:mt-16 xs:max-xsa:ml-4 ml-8 xsa:ml-4 ">Cashless Payments</p>
                </div>
            </div>
            ) : (
                <div className="relative " onMouseOut={handleCash} >
                    <img src={Cashlesshover} alt="" className="bg-cover w-full animate__animated animate__fadeIn " />
                </div>
            )}
            </a>
            <a
            href="/product/ticketing"
            className="text-start   "
            >
            {!sales ? (
            <div  className="relative " onMouseOver={handleSales} >
                <img className="w-full"  src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646646394/website/dashboardcard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 xs:mt-9 ml-8 xsa:ml-4 xs:max-xsa:ml-4 ">Sales Dashboard</p>
                </div>
            </div>
            ) : (
                <div className="relative " onMouseOut={handleSales}>
                    <img src={Saleshover} alt="" className="bg-cover w-full animate__animated animate__fadeIn " />
                </div>
            )}
            </a>
            <a
            href="/product/ticketing"
            className="text-start md1:max-lg:hidden "
            >
            {!box ? (
            <div  className="relative " onMouseOver={handleBox} >
                <img className="w-full"  src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646646394/website/boxofficecard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 xs:mt-16 ml-8 xsa:ml-4 xs:max-xsa:ml-4 ">Box Office</p>
                </div>
            </div>
            ) : (
                <div className="relative  " onMouseOut={handleBox} >
                    <img src={Boxhover} alt="" className="bg-cover w-full animate__animated animate__fadeIn  " />
                </div>
            )}
            </a>
            
            <a
            href="/product/ticketing"
            className="text-start md1:max-lg:hidden "
            >
            {!attend ? (
            <div  className="relative " onMouseOver={handleAttend} >
               <img className="w-full"  src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646646394/website/marketingcard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 md2:max-lg:mt-[5%] xs:mt-9 ml-8 xs:max-xsa:ml-4 xsa:ml-4">Attendee Engagement</p>
                </div>
            </div>
            ) : (
                <div className="relative " onMouseOut={handleAttend}>
                    <img src={Attendeehover} alt="" className="bg-cover w-full animate__animated animate__fadeIn " />
                </div>
            )}
            </a>
        </div>
        <div className=" hidden md1:flex md1:flex-row md lg:hidden md1:w-[37%] md2:w-[38%] gap-4 absolute md1:top-[1470px] md2:top-[1600px] ">
        <a
            href="/product/ticketing"
            className="text-start  "
            >
            {!box ? (
            <div  className="relative " onMouseOver={handleBox} >
                <img className="w-full"  src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646646394/website/boxofficecard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 xs:mt-16 ml-8 xsa:ml-4 ">Box Office</p>
                </div>
            </div>
            ) : (
                <div className="relative  " onMouseOut={handleBox} >
                    <img src={Boxhover} alt="" className="bg-cover w-full animate__animated animate__fadeIn  " />
                </div>
            )}
            </a>
            
            <a
            href="/product/ticketing"
            className="text-start  "
            >
            {!attend ? (
            <div  className="relative " onMouseOver={handleAttend} >
               <img className="w-full"  src="https://res.cloudinary.com/tix-africa/image/upload/q_auto:low/v1646646394/website/marketingcard.png" alt="Product Images" />
                <div  className="absolute h-[94px] rounded-b-xl w-full bg-gradient-to-t from-black   bottom-0 ">
                    <p className="font-extrabold text-2xl text-white xs:max-lg:text-lg md:mt-10 md2:max-lg:mt-[6%] xs:mt-9 ml-8  xsa:ml-4">Attendee Engagement</p>
                </div>
            </div>
            ) : (
                <div className="relative " onMouseOut={handleAttend}>
                    <img src={Attendeehover} alt="" className="bg-cover w-full animate__animated animate__fadeIn " />
                </div>
            )}
            </a>
        </div>
       
        <Link to="/">
          <button className="mt-16 orangebutton rounded-lg text-white p-4 font-semibold md:w-60">
            View all Features
          </button>
        </Link>
    </div>
  );
};

export default Section3a;

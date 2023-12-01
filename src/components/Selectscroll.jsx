import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import { useScroll, useWindowScroll } from 'react-use';
import { motion } from "framer-motion"
import MultiSelect from './MultiSelect';

import './styles.css';


const Selectscroll = () => {
    const dropdownRef = useRef(null);
    const [prevScrollY, setPrevScrollY] = useState(0);
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollY ? 'down' : 'up';
  
      if (dropdownRef.current) {
        const scrollAmount = scrollDirection === 'down' ? 100 : -300;
        dropdownRef.current.scrollTop += scrollAmount;
      }
  
      setPrevScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]);
    
    return (
    <div className='app   mx-auto md2:mt-48  ' >
        
        <div   className="mb-[10px] w-full   justify-center flex flex-row font-extrabold orangetext text-2xl sm:text-3xl md2:text-6xl ">
        
        
        <div className='flex justify-end w-[90%]  items-center xs:max-md:pt-32'>
        
            <h1>
                Create your
            </h1>
        </div>
        <div className=' h-full blurred-container fading-container w-full'>
        
        <div ref={dropdownRef} className= "pt-96 sm:pt-48 lg:pt-[55%] md2:h-full xs:max-md:text-2xl  sm:text-3xl md:text-6xl scroll-container  xs:max-md:h-[450px] no-scroll md:h-[400px]  lg:h-[800px]  align-start"
         >
           
          
            <div className="content-box ">
                <h1> 
                  Influencer Hangout
                </h1>
            </div>
           
            <div className="content-box ">
                  <h1>
                      Pop-up
                  </h1>
            </div>
            <div className="content-box">
                  <h1>
                      Festival
                  </h1>
            </div>
            <div className="content-box">
                  <h1>
                      Dance Class
                  </h1>
            </div>
            <div className="content-box ">
                  <h1>
                      Virtual Event
                  </h1>
            </div>
            <div className="content-box ">
                  <h1> 
                      Influencer Hangout
                  </h1>
            </div>
           
            <div className="content-box ">
                  <h1>
                      Pop-up
                  </h1>
            </div>
            <div className="content-box xs:max-md:hidden ">
                  <h1>
                      Festival
                  </h1>
            </div>
            <div className="content-box xs:max-md:hidden">
                  <h1>
                      Dance Class
                  </h1>
            </div>
            <div className="content-box xs:max-md:hidden">
                  <h1>
                      Virtual Event
                  </h1>
            </div>
            <div className="content-box">
                <h1> 
                  Influencer Hangout
                </h1>
            </div>
           
            <div className="content-box">
                  <h1>
                      Pop-up
                  </h1>
            </div>
            <div className="content-box  ">
                  <h1>
                      Festival
                  </h1>
            </div>
            {/* only visible in xs - md */}
            <div className="content-box xs:max-md:hidden lg:hidden">
                  <h1>
                      Dance Class
                  </h1>
            </div>
            <div className="content-box xs:max-md:hidden lg:hidden">
                  <h1>
                      Virtual Event
                  </h1>
            </div>
            <div className="content-box xs:max-md:hidden lg:hidden">
                <h1> 
                  Influencer Hangout
                </h1>
            </div>
           
            <div className="content-box xs:max-md:hidden lg:hidden">
                  <h1>
                      Pop-up
                  </h1>
            </div> 
           
   
        </div>
        </div>
       
      </div>
    </div>
      
    );
}

export default Selectscroll

// function App() {
//   const scrollRef = React.useRef(null);
//   // const { y } = useScroll(scrollRef);

//   return (
//     <div className="app">
//       <div className="scroll-container" ref={scrollRef}>
//         {/* <div className="scroll-container"> */}
//         <div className="content-box" />
//         <MultiSelect scrollRef={scrollRef} />
//         <div className="content-box" />
//         <div className="content-box" />
//         <div className="content-box" />
//         <div className="content-box" />
//       </div>
//     </div>
//   );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

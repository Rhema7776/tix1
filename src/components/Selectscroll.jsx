import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useScroll, useWindowScroll } from 'react-use';
import { motion } from "framer-motion"
import MultiSelect from './MultiSelect';

import './styles.css';


const Selectscroll = () => {
    const selectRef = React.useRef(null);

    // const scrollRef = React.useRef(null);
    // const { y } = useScroll(scrollRef);

    useEffect(() => {
        const handleScroll = () => {
          // To Adjust the scrollTop of the select dropdown based on the window scroll position
          if (selectRef.current) {
            const windowScrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            selectRef.current.scrollTop = windowScrollTop;
          }
        };
    
        // To Attach the scroll event listener to the window
        window.addEventListener('scroll', handleScroll);
    
        // To Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    return (
        
      <div  className="app container  mx-auto justify-center flex flex-row font-extrabold orangetext text-xl sm:text-2xl md2:text-6xl md2:mt-[30%] mt-20 xs:max-xs1:mt-12 ">
        
        <div className='flex justify-end w-[90%] items-center '>
        
            <h1>
                Create your
            </h1>
        </div>
        <div className='fading-container h-full blurred-container fading-container w-full'>
        {/* ref={scrollRef} */}
        <div className="scroll-container   xs:max-md:h-[300px] no-scroll md:h-[400px] lg:h-[800px]  align-start"  ref={selectRef} >
            
            <div className="content-box content ">
                  <h1> 
                      
                  </h1>
            </div>
            
            <div className="content-box  ">
                  <h1> 
                      Influencer Hangout
                  </h1>
            </div>
           
            <div className="content-box">
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
            <div className="content-box">
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
            <div className="content-box">
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
            <div className="content-box">
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
            <div className="content-box">
                  <h1>
                      Virtual Event
                  </h1>
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

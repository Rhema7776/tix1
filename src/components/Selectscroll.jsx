import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import { useScroll, useWindowScroll } from 'react-use';
import { motion } from "framer-motion"
import MultiSelect from './MultiSelect';

import './styles.css';


const Selectscroll = () => {
    // const bodyRef = useRef(null);
    // const selectRef = React.useRef(null);

    // const [bodyScrollTop, setBodyScrollTop] = useState(0);
    // const [isSyncEnabled, setIsSyncEnabled] = useState(false);
    

    // useEffect(() => {
    //     const handleBodyScroll = () => {
    //         // if (bodyRef.current && selectRef.current) {
    //         //     const bodyScrollTop = bodyRef.current.scrollTop;
    //         //     const selectHeight = selectRef.current.clientHeight;
        
    //         //     // Adjust the select options based on the body scroll position
    //         //     const selectedIndex = Math.floor(bodyScrollTop / selectHeight);
    //         //     setBodyScrollTop(bodyScrollTop);
    //         //     // selectRef.current.scrollTop = windowScrollTop;
    //         //     selectRef.current.scrollTop = bodyScrollTop;
    //         // }

    //         const minScreenWidth = 960;
    //         const scrollSpeed = 1; // Adjust the scroll speed as needed
      
    //         if (window.innerWidth >= minScreenWidth) {
    //         //   // Slow down the scroll transition
    //         //   document.body.style.scrollBehavior = 'auto';
    //         //   window.scrollBy(0, scrollSpeed);
    //         //   document.body.style.scrollBehavior = 'smooth';
    //             if (selectRef.current) {
    //                 const scrollSpeed = 0.5; // Adjust the scroll speed as needed
    //                 selectRef.current.scrollTop += scrollSpeed;
    //             }
                
    //         }

            
    //     };
      
    //     // const handleScroll = () => {
            
    //     //   // To Adjust the scrollTop of the select dropdown based on the window scroll position
    //     //   if (selectRef.current) {
    //     //     const windowScrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            
    //     //   }

    //     // };
    //     // const handleWindowScroll = () => {
    //     //     const selectElement = document.getElementById('mySelect');

    //     //     const screenWidth = window.innerWidth;

    //     //     // Adjust the screen width threshold as needed
    //     //     const screenSizeThreshold = 768;

    //     //     // Enable sync when screen width is below the threshold
    //     //     setIsSyncEnabled(screenWidth < screenSizeThreshold);
        
    //     //     if (isSyncEnabled && selectElement) {
    //     //       selectElement.scrollTop = window.scrollY;
    //     //     }
    //     // };
    
    //     // To Attach the scroll event listener to the window
    //     // window.addEventListener('scroll', handleScroll);
    
    //     // To Cleanup the event listener on component unmount
    //     // return () => {
    //     // //   window.removeEventListener('scroll', handleScroll);
    //     //   document.body.removeEventListener('scroll', handleBodyScroll);
    //     // // Attach the scroll event listener to the window
    //     // window.addEventListener('scroll', handleWindowScroll);
    
    //     // // Cleanup the event listener on component unmount
    //     //   window.removeEventListener('scroll', handleWindowScroll);
    //     // };


    //     // // To Attach the scroll event listener to the body
    //     // document.body.addEventListener('scroll', handleBodyScroll);

    //     // //  Attach the scroll event listener to the window
    //     //  window.addEventListener('scroll', handleWindowScroll);
    
    //     // // Cleanup the event listener on component unmount
    //     // return () => {
    //     //   window.removeEventListener('scroll', handleWindowScroll);
    //     // };

    // }, [isSyncEnabled]);

    // useEffect(() => {
    //     // Attach the scroll event listener to the window
    //     window.addEventListener('scroll', handleWindowScroll);
    
    //     // Cleanup the event listener on component unmount
    //     return () => {
    //       window.removeEventListener('scroll', handleWindowScroll);
    //     };
    // }, [isSyncEnabled]);
    
    return (
    <div className='app container  mx-auto ' >
        {/* ref={bodyRef}  */}
        <div   className="justify-center flex flex-row font-extrabold orangetext text-xl sm:text-2xl md2:text-6xl md2:max-lg:mt-[30%]">
        {/* md2:mt-[30%] lg:mt-[4%] mt-20 xs:max-xs1:mt-12  */}
        
        <div className='flex justify-end w-[90%] items-center '>
        
            <h1>
                Create your
            </h1>
        </div>
        <div className=' h-full blurred-container fading-container w-full'>
        {/* ref={scrollRef} */}
        <div className="scroll-container    xs:max-md:h-[400px] no-scroll md:h-[400px] lg:h-[800px]  align-start"   >
            {/* ref={selectRef} */}
            
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

// import React from "react";

// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   batch,
//   Fade,
//   FadeIn,
//   FadeOut,
//   Move,
//   MoveIn,
//   MoveOut,
//   Sticky,
//   StickyIn,
//   StickyOut,
//   Zoom,
//   ZoomIn,
//   ZoomOut,
// } from "react-scroll-motion";
// import './App.css';

// const ScrollAnimation = () => {
// //   const { scrollYProgress } = useScroll();
//   return (
    
//     <ScrollContainer>
//       <ScrollPage page={0}>
//         <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
//             <h2>ERUCHFUD TYFTYDC DCSCSDCISD</h2>
//         </Animator>
//       </ScrollPage>

//       <ScrollPage page={1}>
//         <Animator animation={Zoom()}>
//             <h2>FaceUpScrollout</h2>
//         </Animator>
//       </ScrollPage>
//     </ScrollContainer>
    
    
//   );
// };

// export default ScrollAnimation;

// src/components/ScrollAnimation.js
import React, { useEffect, useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;

        if (isVisible) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-animation-section" ref={sectionRef}>
      <h2 className="text-4xl font-bold mb-4">Discover Upcoming Events</h2>
      <p className="text-gray-600 mb-8">
        Explore a variety of events happening near you. Find concerts, movies, and more.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explore Events
      </button>
      <h2 className="text-4xl font-bold mb-4">Discover Upcoming Events</h2>
      <p className="text-gray-600 mb-8">
        Explore a variety of events happening near you. Find concerts, movies, and more.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explore Events
      </button>
      <h2 className="text-4xl font-bold mb-4">Discover Upcoming Events</h2>
      <p className="text-gray-600 mb-8">
        Explore a variety of events happening near you. Find concerts, movies, and more.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explore Events
      </button>
      <h2 className="text-4xl font-bold mb-4">Discover Upcoming Events</h2>
      <p className="text-gray-600 mb-8">
        Explore a variety of events happening near you. Find concerts, movies, and more.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explore Events
      </button>
      <h2 className="text-4xl font-bold mb-4">Discover Upcoming Events</h2>
      <p className="text-gray-600 mb-8">
        Explore a variety of events happening near you. Find concerts, movies, and more.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Explore Events
      </button>
    </div>
  );
};

export default ScrollAnimation;



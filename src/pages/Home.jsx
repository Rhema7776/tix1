import React from 'react'
import Hero from '../components/Hero'
import Section3a from '../components/Section3a';
import Section4a from '../components/Section4a';
import Section7a from '../components/Section7a';
import Section8a from '../components/Section8a';
import Section5a from '../components/Section5a';
import Selectscroll from '../components/Selectscroll';
// import ScrollAnimation from '../components/ScrollAnimation';

export default function Home() {
   
  return (
    <>
      <Hero /> 
      <Section3a />
      <Section4a />
      {/* <ScrollAnimation /> */}
      <Section5a />
      <Selectscroll />      
      <Section7a />
      <Section8a />


      
    </>
  )
}

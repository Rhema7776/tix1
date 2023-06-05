import React from 'react'
import Navbar from '../components/Navbar'
import HeroProduct from '../components/Hero'
import HomeCategory from '../components/HomeCategory'
import useFetch from '../hooks/useFetch'
import FeatureProducts from '../components/FeatureProducts'
import Footer from '../components/Footer'



export default function Home() {
    const { error, loading, data} = useFetch(
        'https://ecommtest.onrender.com/products'
    )
  return (
    <>
        <Navbar />
        <HeroProduct error={error} data={data} loading={loading} />
        {/* <HomeCategory/> */}
        {/* <FeatureProducts error={error} data={data} loading={loading}/> */}
        <Footer />
    </>
  )
}

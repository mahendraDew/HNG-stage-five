import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/LandingPage - components/Hero'
import Features from '../../Components/LandingPage - components/Features'
import Works from '../../Components/LandingPage - components/Works'

const LandingPage = () => {
  return (
    <div className='bg-[#f4f6f8]'>
        <Header />
        <main className='lg:'>
          <Hero />
          <Features />
          <Works />
        </main>
        <Footer />
    </div>
  )
}

export default LandingPage
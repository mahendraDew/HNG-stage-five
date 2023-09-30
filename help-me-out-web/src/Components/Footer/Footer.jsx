import React from 'react'

const Footer = () => {
  return (
    <footer className='lg:px-[130px] lg:py-[98px] bg-primary-main flex justify-between'>
      <img className='self-start p-[10px]' src='/images/footerLogo.svg' alt='logo' />
      <article className='text-white flex gap-[220px]'>
        <div className='flex flex-col gap-[26px]'>
          <h2>Menu</h2>
          <span>Home</span>
          <span>Converter</span>
          <span>How it Works</span>
        </div>
        <div className='flex flex-col gap-[26px]'>
          <h2>About us</h2>
          <span>About</span>
          <span>Contact Us</span>
          <span>Privacy Policy</span>
        </div>
        <div className='flex flex-col gap-[26px]'>
          <h2>Screen Record</h2>
          <span>Browser Window</span>
          <span>Desktop</span>
          <span>Application</span>
        </div>
      </article>
    </footer>
  )
}

export default Footer
const Header = () => {
  return (
    <header className='lg:px-[100px] py-[12px] shadow top-0 bg-white'>
      <nav className="flex items-center justify-between">
        <img src="/images/logo.svg" alt="logo" />
        <div className="flex gap-[39px]">
          <span className='font-work font-medium'>Features</span>
          <span className='font-work font-medium'>How It Works</span>
        </div>
        <span className="font-sora font-semibold text-[18px] text-primary-main"><a href="/login">Get Started</a></span>
      </nav>
    </header>
  )
}

export default Header
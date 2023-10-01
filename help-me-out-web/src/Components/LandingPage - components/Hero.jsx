import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="lg:p-[100px] lg:flex items-center bg-white">
        <article className='flex flex-col gap-[48px]'>
            <div className='flex flex-col gap-[20px]'>
              <h1 className='lg:text-[64px] font-bold text-text-header font-sora'>Show Them <br /> Don't Just Tell</h1>
              <p className='text-text-grey font-work'>
                  Help your friends and loved ones by creating and sending videos on how to get things done on a website.
              </p>
            </div>
            <a className="font-work w-[239px] lg:px-[24px] lg:py-[22px] flex items-center gap-[12px] justify-center bg-primary-main rounded-lg text-white" href="https://github.com/mahendraDew/HNG-stage-five/tree/main/help-me-out-extension">
              Install HelpMeOut
              <BsArrowRight />
            </a>
        </article>
        <article>
            <img src="images/hero.svg" alt="hero image" />
        </article>
        {/* <a href=""></a> */}
    </section>
  )
}

export default Hero
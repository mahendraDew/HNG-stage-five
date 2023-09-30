const Features = () => {
  return (
    <section className="lg:p-[100px] flex flex-col items-center gap-[64px] bg-white my-[56px]">
      <header className="flex flex-col items-center gap-2">
        <h2 className="text-text-header text-[40px] font-bold font-sora">Features</h2>
        <span className="text-text-grey text-[20px] font-work">Key Highlights of our extension</span>
      </header>
      <article className="flex gap-14">
        <div className="flex flex-col gap-12">
          <div className="flex items-start gap-4">
            <img src="images/simple.svg" alt="simple icon" />
            <div>
              <h3 className="text-[28px] text-primary-400 font-semibold font-sora">Simple Screen Recording</h3>
              <p className="font-work text-text-grey text-[20px]">
                Effortless screen recording for everyone. Record with ease, no tech expertise required.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
          <img src="images/easy.svg" alt="easy icon" />
            <div>
              <h3 className="text-[28px] text-primary-400 font-semibold font-sora">Easy-to-share URL</h3>
              <p className="font-work text-text-grey text-[20px]">
                Share your recordings instantly with a single link. No attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
          <img src="images/revisit.svg" alt="revisit icon" />
            <div>
              <h3 className="text-[28px] text-primary-400 font-semibold font-sora">Revisit Recordings</h3>
              <p className="font-work text-text-grey text-[20px]">
                Access and review your past content effortlessly. Your recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img className="h-full w-full" src="images/videoRepo.svg" alt="features" />
        </div>
      </article>
    </section>
  )
}

export default Features
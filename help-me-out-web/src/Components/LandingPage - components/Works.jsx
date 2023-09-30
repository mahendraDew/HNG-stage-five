const Works = () => {
  return (
    <section className="lg:p-[100px] bg-white flex flex-col items-center gap-[59px]">
        <h1 className="text-text-header font-sora text-[40px]">How it works</h1>
        <article className="flex gap-[83px]">
            <div className="flex flex-col gap-7" >
                <div className="flex flex-col items-center gap-8 w-[358px]">
                    <div className="flex items-center justify-center text-[32px] font-bold font-sora rounded-full  text-white bg-primary-main w-[67px] h-[67px]">1</div>
                    <h3 className="font-work font-semibold text-[28px] text-primary-500">Record Screen</h3>
                    <p className="text-center text-text-grey font-work text-[20px]">
                        Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.
                    </p>
                </div>
                <img src="images/works.svg" alt="works illustration" />
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col items-center gap-8 w-[358px]">
                    <div className="flex items-center justify-center text-[32px] font-bold font-sora rounded-full  text-white bg-primary-main w-[67px] h-[67px]">2</div>
                    <h3 className="font-work font-semibold text-[28px] text-primary-500">Share Your Recording</h3>
                    <p className="text-center text-text-grey font-work text-[20px]">
                        We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
                    </p>
                </div>
                <img src="images/works.svg" alt="works illustration" />
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col items-center gap-8 w-[358px]">
                    <div className="flex items-center justify-center text-[32px] font-bold font-sora rounded-full  text-white bg-primary-main w-[67px] h-[67px]">3</div>
                    <h3 className="font-work font-semibold text-[28px] text-primary-500">Learn Effortlessly</h3>
                    <p className="text-center text-text-grey font-work text-[20px]">
                        Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
                    </p>
                </div>
                <img src="images/works.svg" alt="works illustration" />
            </div>
        </article>
    </section>
  )
}

export default Works
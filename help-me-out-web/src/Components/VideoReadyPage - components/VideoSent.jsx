import "./VideoSent.css";

function windowClose(){
    console.log("clicked")
    // document.getElementById('add_pin_modal_container').style.display = "none";
}

const VideoSent = () => {
    
    return (
        <div className="overlay-container">


            <div className="overlay">
                <div className="overlay-parent">
                    <div className="overlay-header">
                        <button onClick={() => setShowModel(false)}>
                        <img className="close-circle-icon" alt="" src="/icons/help_assets/close-circle.svg" />
                        </button>
                    </div>
                    <div className="success-kite-1-parent">
                        <img
                            className="success-kite-1-icon"
                            alt=""
                            src="/icons/help_assets/success-kite 1.svg"
                        />
                    </div>
                    <div className="your-video-link-container">
                        <span className="your-video-link-container1">
                            <span>{`Your video link has been sent to `}</span>
                            <span className="johnmarkgmailcom">johnmark@gmail.com</span>
                        </span>
                    </div>
                    <div className="frame-parent4">
                        <div className="would-you-need-to-view-this-vi-parent">
                            <div className="would-you-need">
                                Would you need to view this video later? Save to your account now!
                            </div>
                            <button className="frame-wrapper5" >Save Video</button>
                            {/* <div className="frame-wrapper5">
                                <div className="header-inner">
                                    <div className="header-inner">
                                        <div className="features">Save Video</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="dont-have-an-container1">
                            <span>
                                <span>Don’t have an account?</span>
                                <span className="span">{` `}</span>
                            </span>
                            <span className="span">
                                <span>Create account</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VideoSent;

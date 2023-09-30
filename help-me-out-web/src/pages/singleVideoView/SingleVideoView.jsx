import "./SingleVideoView.css";
import "../global.css"
import Footer from "../../Components/Footer/Footer";

const SingleVideoView = () => {
    return (
        <>
        <div className="video-repository-single-vide">
            <div className="nav">
                <div className="logo">
                    <div className="icon-7-1-parent">
                        <img className="icon-7-1" alt="" src="/icons/icons-pack/android-chrome-192x192.png" />
                        <b className="helpmeout">HelpMeOut</b>
                    </div>
                </div>
                <div className="profile-circle-parent">
                    <img
                        className="profile-circle-icon"
                        alt=""
                        src="/icons/help_assets/profile-circle.svg"
                    />
                    <div className="helpmeout">John Mark</div>
                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/arrow-down.png" />
                </div>
            </div>
            
            <div className="breadcrumbs">
                <div className="helpmeout">Home</div>
                <div className="helpmeout">/</div>
                <div className="helpmeout">{`Recent Videos `}</div>
                <div className="helpmeout">{`/ `}</div>
                <div className="how-to-create-container">
                    <span>How To Create A Facebook Ad Listing</span>
                    <span className="span">{` `}</span>
                </div>
            </div>
            <div className="topbar">
                <div className="video-title">
                    <div className="name">{`How To Create A Facebook Ad Listing `}</div>
                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/edit.svg" />
                </div>
                <div className="button">
                    <img className="copy-icon" alt="" src="/copy.svg" />
                    <div className="text2">Copy video URL</div>
                    <img className="circle-icon1" alt="" src="/circle1.svg" />
                </div>
            </div>
            <div className="SVV-web-card1">
                <div className="SVV-video-frame1">
                    <div className="SVV-video-duration1">
                        <div className="share-your-video">00:34</div>
                    </div>
                </div>
                <div className="SVV-details1">
                    <div className="SSV-titledate1">
                        <div className="SSV-title1">How to create Facebook Ad listing</div>
                        <div className="SSV-date1">SEPTEMBER 23, 2023</div>
                    </div>
                    <div className="icons1">
                        <img className="arrow-down-icon" alt="" src="/link1.svg" />
                        <img className="arrow-down-icon" alt="" src="/more.svg" />
                    </div>
                </div>
            </div>
            <div className="details2">
                <div className="top">
                    <div className="text-parent">
                        <div className="text3"><input type="text" name="" id="" placeholder="enter email of receiver" /></div>
                        <div className="button1">
                            <div className="text2"><button>send</button></div>
                            {/* <img className="circle-icon1" alt="" src="/circle2.svg" /> */}
                        </div>
                    </div>
                    <div className="text-group">
                        <div className="text5">
                            https://www.helpmeout/Untitled_Video_20232509
                        </div>
                        <div className="button2">
                            <button>
                            <img className="copy-icon" alt="" src="/icons/help_assets/copy.svg" />
                            <div className="text2">Copy URL</div>
                            {/* <img className="circle-icon1" alt="" src="/circle2.svg" /> */}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="share-group">
                    {/* <div className="sso1-parent">
                        <div className="sso1">
                            <div className="facebook-svg-parent">
                                <img
                                    className="facebook-svg-icon"
                                    alt=""
                                    src="/icons/help_assets/facebook-svg.svg"
                                />
                                <div className="facebook">Facebook</div>
                            </div>
                        </div>
                        <div className="sso1">
                            <div className="facebook-svg-parent">
                                <img className="vector-icon" alt="" src="/icons/help_assets/vector.svg" />
                                <div className="facebook">WhatsApp</div>
                            </div>
                        </div>
                        <div className="sso1">
                            <div className="facebook-svg-parent">
                                <img className="group-icon" alt="" src="/icons/help_assets/group.svg" />
                                <div className="facebook">Telegram</div>
                            </div>
                        </div>
                        <div className="sso1">
                            <div className="facebook-svg-group">
                                <img
                                    className="facebook-svg-icon"
                                    alt=""
                                    src="/facebook-svg.svg"
                                />
                                <div className="facebook">Twitter</div>
                            </div>
                        </div>
                    </div> */}
                    <div className="share-your-video-parent">
                        <div className="share-your-video">{`Share your video `}</div>
                        <div className="frame-parent">
                            <div className="facebook-svg-container">
                                <img
                                    className="facebook-svg-icon"
                                    alt=""
                                    src="/icons/help_assets/Facebook svg.svg"
                                />
                                <div className="facebook">Facebook</div>
                            </div>
                            <div className="facebook-svg-container">
                                <img className="vector-icon" alt="" src="/icons/help_assets/whatsapp.svg" />
                                <div className="facebook">WhatsApp</div>
                            </div>
                            <div className="facebook-svg-container">
                                <img className="group-icon" alt="" src="/icons/help_assets/telegram.svg" />
                                <div className="facebook">Telegram</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="transcript">
                <div className="titlebar">
                    <div className="share-your-video">Transcript</div>
                    <div className="language">
                        <div className="helpmeout">English</div>
                        <img className="arrow-down-icon1" alt="" src="/icons/help_assets/arrow-down.png" />
                    </div>
                </div>
                <div className="content">
                    <div className="text1">
                        <div className="parent">
                            <div className="div1">0.01</div>
                            <div className="first-step-open">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                        </div>
                        <div className="parent">
                            <div className="div1">0.15</div>
                            <div className="first-step-open">
                                First step. Open Facebook on your desktop or mobile device and
                                locate "Marketplace" in the left-hand menu or at the top of the
                                . Open Facebook on your desktop or mobile device and locate
                                "Marketplace" in the left-ha
                            </div>
                        </div>
                        <div className="container">
                            <div className="div1">0.30</div>
                            <div className="first-step-open">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                        </div>
                        <div className="group-div">
                            <div className="div1">1.00</div>
                            <div className="first-step-open3">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                        </div>
                    </div>
                    <div className="scroller">
                        <div className="scroller1" />
                        <div className="scroller2" />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default SingleVideoView;

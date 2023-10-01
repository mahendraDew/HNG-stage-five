import React, { useState } from 'react';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import "./VideoReadyPage.css";
import VideoSent from '../../Components/VideoReadyPage - components/VideoSent';

const VideoReadyPage = () => {
    const [showModel, setShowModel] = useState(false);
    const [frame, setFrame] = useState(false);

    return (
        <>
            <Header />
            <div className="VRP-your-recording-is-ready-1440">
                <div className="VRP-top-content">
                    <div className="VRP-top">
                        <div className={frame ? "frame open" : "frame"}>
                            <div className='close_icon' onClick={() => setFrame(false)}>X</div>
                            <VideoSent />
                        </div>
                        <div className="VRP-frame-parent">
                            <div className="VRP-frame-group">
                                <div className="VRP-your-video-is-ready-parent">
                                    <b className="VRP-your-video-is">Your video is ready!</b>
                                    <div className="VRP-content">
                                        <div className="VRP-details">
                                            <div className="VRP-name">Name</div>
                                            <div className="VRP-untitled-video-20232509-parent">
                                                <div className="VRP-video-url">{`Untitled_Video_20232509 `}</div>
                                                <img className="VRP-edit-icon" alt="" src="/icons/help_assets/edit.svg" />
                                            </div>
                                        </div>
                                        <div className="VRP-text-parent">
                                            <div className="VRP-text1"><input type="email" placeholder="enter email of receiver" /></div>
                                            {/* <div className="VRP-button"> */}
                                            <button className="VRP-button" onClick={() => setShowModel(true)}>Send</button>
                                            {/* <div className="VRP-text2">Send</div> */}
                                            {/* <img className="VRP-circle-icon1" alt="" src="copy.svg" /> */}
                                            {/* </div> */}
                                        </div>
                                        <div className="VRP-video-url-parent">
                                            <div className="VRP-video-url">Video Url</div>
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
                                </div>
                                <div className="VRP-divider" />
                            </div>
                            <div className="VRP-right-content">
                                <div className="VRP-video">
                                    <div className="VRP-video1">
                                        <div className="VRP-control">
                                            <div className="VRP-container">
                                                <div className="VRP-timeline">
                                                    <div className="VRP-total" />
                                                    <div className="VRP-current" />
                                                </div>
                                                <div className="VRP-menu">
                                                    <div className="VRP-name">0:30 / 3:00</div>
                                                    <div className="VRP-pauseplay-parent">
                                                        <div className="VRP-pauseplay">
                                                            <img
                                                                className="VRP-iconpauseplay"
                                                                alt=""
                                                                src="/icons/help_assets/play-circle.svg"
                                                            />
                                                            <div className="VRP-name">Play</div>
                                                        </div>
                                                        <div className="VRP-pauseplay">
                                                            <img
                                                                className="VRP-iconpauseplay"
                                                                alt=""
                                                                src="/icons/help_assets/volume-high.svg"
                                                            />
                                                            <div className="VRP-name">Volume</div>
                                                        </div>
                                                        <div className="VRP-pauseplay">
                                                            <img
                                                                className="VRP-iconpauseplay"
                                                                alt=""
                                                                src="/icons/help_assets/setting-2.svg"
                                                            />
                                                            <div className="VRP-name">Settings</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="VRP-transcript">
                                    <div className="VRP-transcript1">
                                        <div className="VRP-video-url">Transcript</div>
                                        <div className="VRP-language">
                                            <div className="VRP-your-video-is">English</div>
                                            <img
                                                className="VRP-arrow-down-icon"
                                                alt=""
                                                src="/icons/help_assets/arrow-down.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="VRP-texts">
                                        {/* <div className="VRP-parent">
                                            <div className="VRP-div1">0.01</div>
                                            <div className="VRP-first-step-open">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                                        </div> */}
                                        {/* <div className="VRP-group">
                                            <div className="VRP-div1">0.15</div>
                                            <div className="VRP-first-step-open">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                                        </div> */}
                                        <div className="VRP-group-div">
                                            <div className="VRP-div1">0.30</div>
                                            <div className="VRP-first-step-open">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                                        </div>
                                        <div className="VRP-group-div">
                                            <div className="VRP-div1">0.30</div>
                                            <div className="VRP-first-step-open">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                                        </div>


                                        <div className="VRP-parent1">
                                            <div className="VRP-div1">1.00</div>
                                            <div className="VRP-first-step-open3">{`First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the `}</div>
                                        </div>
                                        <div className="VRP-scroller">
                                            <div className="VRP-scroller1" />
                                            <div className="VRP-scroller2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="VRP-save-to-account-banner">
                    <div className="VRP-to-ensure-the-availability-and-parent">
                        <div className="VRP-to-ensure-the">
                            To ensure the availability and privacy of your video, we recommend
                            saving it to your account.
                        </div>
                        <button className=" VRP-frame-wrapper " >Save Video</button>

                        <div className="VRP-dont-have-an-container">
                            <span>{`Don’t have an account? `}</span>
                            <span className="VRP-create-account">Create account</span>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={event => event.target.className === 'overlay-container' ? setShowModel(false) : null} className="add_pin_modal_container" id='add_pin_modal_container'>
                {
                    // showModel ? <Modal add_pin={addPin} /> : null
                    showModel ? <VideoSent /> : null
                }
            </div>
            <Footer />

        </>
    );
};

export default VideoReadyPage;

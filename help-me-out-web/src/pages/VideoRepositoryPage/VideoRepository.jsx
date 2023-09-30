import { useCallback } from "react";
import "./VideoRepository.css";
import "../global.css"
import Footer from "../../Components/Footer/Footer";

const VideoRepository = () => {
    const onWEBCARDContainerClick = useCallback(() => {
        // Please sync "Video Repository > single video view" to the project
    }, []);

    return (
        <>
            <div className="video-repository">
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
                <div className="top-content">
                    <div className="salutation">
                        <b className="helpmeout">Hello, John Mark</b>
                        <div className="here-are-your">Here are your recorded videos</div>
                    </div>
                    <div className="search-bar">
                        <div className="inputfield">
                            <img
                                className="search-normal-icon"
                                alt=""
                                src="/icons/help_assets/search-normal.svg"
                            />
                            <div className="helpmeout"><input type="text" placeholder="Search for a particular video" /></div>
                        </div>
                    </div>
                </div>
                <div className="video-repository-child" />
                <div className="recent-videos">
                    <div className="timeline">Recent files</div>
                    <div className="videos">
                        <div className="web-card1" onClick={onWEBCARDContainerClick}>
                            <div className="video-frame1">
                                <div className="video-duration1">
                                    <div className="timeline">00:34</div>
                                </div>
                            </div>
                            <div className="details1">
                                <div className="titledate1">
                                    <div className="title1">How to create Facebook Ad listing</div>
                                    <div className="date1">SEPTEMBER 23, 2023</div>
                                </div>
                                <div className="icons1">
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/link.svg" />
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/more.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="web-card2">
                            <div className="video-frame2">
                                <div className="video-duration1">
                                    <div className="timeline">00:34</div>
                                </div>
                            </div>
                            <div className="details1">
                                <div className="titledate1">
                                    <div className="title1">How to create Facebook Ad listing</div>
                                    <div className="date1">SEPTEMBER 23, 2023</div>
                                </div>
                                <div className="icons1">
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/link.svg" />
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/more.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-videos1">
                    <div className="timeline">Files from last week</div>
                    <div className="videos">
                        <div className="web-card1" onClick={onWEBCARDContainerClick}>
                            <div className="video-frame3">
                                <div className="video-duration1">
                                    <div className="timeline">00:34</div>
                                </div>
                            </div>
                            <div className="details1">
                                <div className="titledate1">
                                    <div className="title1">How to create Facebook Ad listing</div>
                                    <div className="date1">SEPTEMBER 23, 2023</div>
                                </div>
                                <div className="icons1">
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/link.svg" />
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/more.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="web-card2">
                            <div className="video-frame4">
                                <div className="video-duration1">
                                    <div className="timeline">00:34</div>
                                </div>
                            </div>
                            <div className="details1">
                                <div className="titledate1">
                                    <div className="title1">How to create Facebook Ad listing</div>
                                    <div className="date1">SEPTEMBER 23, 2023</div>
                                </div>
                                <div className="icons1">
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/link.svg" />
                                    <img className="arrow-down-icon" alt="" src="/icons/help_assets/more.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroller">
                    <div className="whole-length" />
                    <div className="current-level" />
                </div>

            </div>
            <Footer />
        </>
    );
};

export default VideoRepository;

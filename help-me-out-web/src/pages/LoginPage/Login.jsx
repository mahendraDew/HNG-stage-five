import "./Login.css";
import "../global.css"


const Login = () => {
    return (
        <div className="sign-uplogin">
            <div className="nav">
                <div className="logo">
                    <div className="icon-7-1-parent">
                        <img className="icon-7-1" alt="" src="/icons/icons-pack/android-chrome-192x192.png" />
                        <b className="helpmeout">HelpMeOut</b>
                    </div>
                </div>

            </div>

            <div className="frame-container">
                <div className="log-in-or-sign-up-parent">
                    <b className="log-in-or w-color">Log in or Sign up</b>
                    <div className="join-millions-of-container">
                        <span className="join-millions-of">{`Join millions of others in sharing successful moves on `}</span>
                        <span className="helpmeout w-color">HelpMeOut</span>
                        <span className="join-millions-of">.</span>
                    </div>
                </div>
                <div className="login-sso1-parent">
                    <button className="login-sso1">
                        <img className="google-svg-icon" alt="" src="/icons/help_assets/Google svg.svg" />
                        <div className="continue-with-google w-color">Continue with Google</div>
                    </button>
                    <button className="login-sso1">
                        <img className="google-svg-icon" alt="" src="/icons/help_assets/Facebook svg.svg" />
                        <div className="continue-with-google w-color">Continue with Facebook</div>
                    </button>

                </div>
                <div className="vector-parent">
                    <img className="frame-child" alt="" src="/icons/help_assets/Line 18.svg" />
                    <div className="or-wrapper">
                        <div className="continue-with-google w-color"> or </div>
                    </div>
                    <img className="frame-child" alt="" src="/icons/help_assets/Line 18.svg" />
                </div>
                <div className="inputfield-parent">
                    <div className="login-inputfield">
                        <div className="baseinputfield2">
                            <div className="title2 w-color">Email</div>
                            <div className="user-container">
                                <img className="user-icon2" alt="" src="/user2.svg" />
                                <div className="input-text-here2"><input type="email" placeholder="Enter your email address"/></div>
                                <img className="user-icon2" alt="" src="/danger2.svg" />
                            </div>
                            {/* <div className="descriptive-text2 w-color">Descriptive text</div>
                            <div className="frame-div">
                                <div className="option-1-frame">
                                    <div className="option-12 w-color">Option 1</div>
                                </div>
                                <div className="option-2-frame">
                                    <div className="option-12">Option 2</div>
                                </div>
                                <div className="option-1-frame">
                                    <div className="option-12">Option 3</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="login-inputfield">
                        <div className="baseinputfield2">
                            <div className="title2 w-color">Password</div>
                            <div className="user-container">
                                <img className="user-icon2" alt="" src="/user2.svg" />
                                <div className="input-text-here2"><input type="email" placeholder="Enter your Password"/></div>
                                <img className="user-icon2" alt="" src="/danger2.svg" />
                            </div>
                            {/* <div className="descriptive-text2 w-color">Descriptive text</div>
                            <div className="frame-div">
                                <div className="option-1-frame">
                                    <div className="option-12">Option 1</div>
                                </div>
                                <div className="option-2-frame">
                                    <div className="option-12">Option 2</div>
                                </div>
                                <div className="option-1-frame">
                                    <div className="option-12">Option 3</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="frame-wrapper">
                    <div className="sign-up-wrapper">
                        {/* <div className="sign-up-wrapper"> */}
                            <button className="sign-up">Sign Up</button>
                            {/* <div className="sign-up">Sign Up</div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;

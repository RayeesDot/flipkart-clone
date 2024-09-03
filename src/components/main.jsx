import React, { useState } from "react";
import '../assets/css/main.css';
import backgroundImg from '../assets/images/login_img_c4a81e.png';
import LoginComponent from "./athContent/LoginComponent";
import SignupComponent from "./athContent/SignupComponent";

const Main = () => {

    const [action, setAction] = useState("Login")
    const [subtitle, setSubtitle] = useState("Get access to your Orders, Wishlist and Recommendations")

    // const handleActionClick = () => {
    //     setAction("Sign Up")
    //     setSubtitle("Sign up with your mobile number to get started")
    // }

    return (
        <main className="bg-cus-ff p-3 d-flex justify-content-center">
            <div className="d-flex box-height">
                <div className="bg-primary col-5 pad d-flex flex-column justify-content-between">
                    <div>
                        <h3 className="text-white">{action}</h3>
                        <p className="font-size mt-4">{subtitle}</p>
                    </div>
                    <img className="" src={backgroundImg} alt="backgroundImg" />
                </div>
                <div className="bg-cus-white col-7 pad-2 d-flex flex-column justify-content-between">
                    
                    {action === 'Login' && <LoginComponent />}
                    {action === 'Sign up' && <SignupComponent />}


                    <div className="text-center">
                        <p>
                            {action === 'Login' && 
                            <div onClick={() => setAction('Sign up') + setSubtitle('Sign up with your mobile number to get started')}>
                                <span className="text-primary cursor-pointer">New to Flipkart?</span>

                                <span className="text-primary cursor-pointer" >Create an account</span>
                            </div>
                            }
                            {action === 'Sign up' &&
                                <span className="text-primary cursor-pointer" onClick={() => setAction('Login')+setSubtitle('Get access to your Orders, Wishlist and Recommendations')}>Login to your account</span>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Main;

'use client'
import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,

} from "@material-tailwind/react";

type userDetails = {

    email: string,

    password: string


}
export default function LoginSingup() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);


    const userRegister = async () => {
        try {

        } catch (error) {

        }
    }




    const [userDetails, setUserDetails] = useState<userDetails>({

        email: '',

        password: ' ',

    })


    return (
        <>
            <button onClick={handleOpen} className="text-gray-50">
                Sign Up
            </button>
            <Dialog open={open} handler={handleOpen} className="bg-transparent">
                <DialogHeader>Its a simple dialog.</DialogHeader>
                <DialogBody>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close"  onClick={handleOpen} data-dismiss="modal">
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Login html code */}
                            <div className="login_view">
                                <div className="actions_bin">
                                    {" "}
                                    {/*<a href="#" class="pocket_violetBtn theme_radius">View full screen</a>*/}
                                    <button type="button" className="close"  onClick={handleOpen}>
                                        {" "}
                                        <span className="close_visitor">×</span>{" "}
                                    </button>
                                </div>
                                <div className="user_info theme_radius">
                                    <h4>Sign in to your account!</h4>
                                    <p>
                                        Get access to exclusive deals, save travellers’ details for quicker
                                        bookings and manage your upcoming bookings with ease!
                                    </p>
                                </div>
                                <h4 className="user_enroll">Sign in using your</h4>
                                <div className="field_carton">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            {" "}
                                            <a
                                                className="nav-link active"
                                                data-toggle="tab"
                                                href="#emailloginForm"
                                            >
                                                <img src="images/mail_icon.svg" />
                                                Email Address
                                            </a>{" "}
                                        </li>
                                        <li className="nav-item">
                                            {" "}
                                            <a className="nav-link" data-toggle="tab" href="#mobileloginForm">
                                                <img src="images/mobile_icon.svg" />
                                                Mobile Number
                                            </a>{" "}
                                        </li>
                                    </ul>
                                    {/* Tab panes */}
                                    <div className="tab-content formGrid">
                                        <div id="emailloginForm" className="tab-pane active">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input
                                                        onChange={(e) => setUserDetails({ ...userDetails, [e.target.name]: e.target.value })}
                                                        name="email"
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input
                                                        onChange={(e) => setUserDetails({ ...userDetails, [e.target.name]: e.target.value })}
                                                        name="password"
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn formbtn_gradient btn_grid btn-block"
                                                >
                                                    Sign In
                                                </button>
                                            </form>
                                        </div>
                                        <div id="mobileloginForm" className="tab-pane fade">
                                            <form>
                                                <div className="w-100">
                                                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                                                    <div className="form-group form_phone">
                                                        <div className="hmcode hasDownArrow position-relative">
                                                            <select className="form-control">
                                                                <option>+965</option>
                                                                <option>+9652</option>
                                                                <option>+91</option>
                                                                <option>+935</option>
                                                                <option>+9656</option>
                                                            </select>
                                                        </div>
                                                        <div className="hmPhonenbr">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Phone Number"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn formbtn_gradient btn_grid btn-block"
                                                >
                                                    Sign In
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="reg_with_us">
                                    <p className="boundary_marge">
                                        <a
                                            data-toggle="modal"
                                            data-target="#forget"
                                            href="#showFgtPswd"
                                            id="showFgtPswd"
                                            className="pocket_blueBtn"
                                        >
                                            Forgot your password?
                                        </a>
                                    </p>
                                    <p className="boundary_marge">
                                        Don’t have an account?{" "}
                                        <a
                                            data-toggle="modal"
                                            data-target="#register"
                                            href="#showRegister"
                                            id="showRegister"
                                            className="pocket_blueBtn cursor_default"
                                        >
                                            Register Now
                                        </a>
                                    </p>
                                    <div className="orSignup">
                                        <div className="orMsg">or</div>
                                    </div>
                                    <div className="media_login">
                                        <a href="#">
                                            <img src="images/facebook_login.svg" />
                                        </a>
                                        <a href="#">
                                            <img src="images/google_plus_login.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Login html code ends */}
                        </div>
                    </div>



                </DialogBody>

            </Dialog>
        </>



    )
}
import React, { Fragment, useEffect, useState } from 'react'
import Button from '../../commonComponents/Button'
import OtpInput from 'react-otp-input';

export default function OtpBox({userDetails, onNextClick, otp, setOtp}) {
    const [counter, setCounter] = useState(24);

    let inputStyles = {
      width: "49px",
      marginBottom: "10px",
      height: "49px",
      backgroundColor: "transparent",
      outline: "none",
      borderRadius: "4px",
      border: "1px solid #AAA",
      color: "#242424",
      fontFamily: "Poppins",
      fontSize: "20px",
      fontWeight: "600",
      UserSelect:"none",
    //   borderColor: "#EB5757"
    };

    let seperatorStyles = {
      fontSize: "7px",
      marginLeft: "9px",
      marginRight: "9px",
    };


    useEffect(() => {
        if (counter > 0) {
          const timer = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
          }, 1000);
    
          // Clean up the interval on component unmount
          return () => clearInterval(timer);
        }
      }, [counter]);


    return (
        <Fragment>
            <p className='signupLoginTopContent' >We have sent OTP to <span>{userDetails.email}</span></p>

            <label className='loginSignupInputLable'>Enter OTP <span className="requiredStar">*</span></label>

            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span style={seperatorStyles}>{" "}</span>}
                inputStyle={inputStyles}
                renderInput={(props) => <input {...props} />}
            />

            {counter > 0 ?
            <p className='otpResendText'>resend otp in {counter} sec</p>
            :
            <Button
                buttonId="resendOtp"
                containerClassName="resendOtpBtnCon"
                buttonClassName="resendOtpBtn"
                onSubmit={()=>("")}
                title="resend otp"
                name="submit"
            />
            }

            <Button
                buttonId="verifyOTP"
                containerClassName="loginSignupBtnCon"
                buttonClassName="loginSignupBtn"
                onSubmit={()=>onNextClick()}
                title="Verify OTP"
                name="submit"
                type="submit"
            />
        </Fragment>
    )
}

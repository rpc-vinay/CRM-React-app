import React, { useState } from 'react';
import UserIdBlock from './UserIdBlock';
import { backIcon, getHelp } from '../../commonComponents/icons';
import RegisterForm from './RegisterForm';
import OtpBox from './OtpBox';
import Button from '../../commonComponents/Button';
import { signupLoginValidation } from './signupValidations';

export default function LoginAndSignupBlock() {

    const [page, setPage] = useState("login");
    const [step, setStep] = useState(0);
    const [userDetails, setUserDetails] = useState({});
    const [errorIds, setErrorIds] = useState([]);
    const [otp, setOtp] = useState("");

    const maxSteps = page === "login" ? 2 : 3;

    const onNextClick = () => {

        if(step === 0){
            if(signupLoginValidation(userDetails, setErrorIds, "userId")){
                setStep(prev => prev + 1);
                console.log(userDetails);
            };
        };

        if(step === 1 && page === "signup"){
            if(signupLoginValidation(userDetails, setErrorIds, "register")){
                setStep(prev => prev + 1);
                console.log(userDetails);
            };
        };

        if(step === 2 || (page === "login" && step === 1)){
            if(otp !== "" && otp.length === 4 ){
                console.log(otp);
            }else{
                console.log("OTP Empty", otp);
            }
        };  

    };

    const onValueChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let prevErrorIds = [...errorIds];
        if(prevErrorIds.includes(name)){
            let newArray = prevErrorIds.filter(eachId=>eachId !== name);
            setErrorIds(newArray);
        }

        setUserDetails(prev => ({...prev, [name]: value}));
        
    };

    const onChangngType = () => {
        setStep(0);
        setUserDetails({});
        setPage(page === "login" ? "signup" : "login");
    }

    return (
        <div className='loginAndSignupBlock'>
            {step !== 0 &&
            <Button
                buttonId="loginSignupBackBtn"
                containerClassName="loginSignupBackBtnCon"
                buttonClassName="loginSignupBackBtn"
                onSubmit={()=>setStep(prev => prev - 1)}
                title="Back"
                icon={backIcon}
                name="back"
                type="submit"
            />
            }

            <h2 className='signupLoginHeading'>{page === "login" ? "LOGIN" : "Sign Up"}</h2>

            {step === 0 &&
            <UserIdBlock userDetails={userDetails} onValueChange={onValueChange} onNextClick={onNextClick} errorIds={errorIds} />
            }

            {step === 1 && page === "signup" &&
            <RegisterForm userDetails={userDetails} onValueChange={onValueChange} onNextClick={onNextClick} errorIds={errorIds}  />
            }

            {(step === 2 || (page === "login" && step === 1)) &&
            <OtpBox 
                userDetails={userDetails} 
                onValueChange={onValueChange} 
                onNextClick={onNextClick}  
                otp={otp} 
                setOtp={setOtp}
                errorIds={errorIds}
            />
            }

            {page === "login" &&
            <p className='redirectLoginText' >
                Already have an account. <span onClick={()=>onChangngType()}>Login</span>
            </p>
            }

            {page !== "login" &&
            <p className='redirectLoginText' >
                Create an account. <span onClick={()=>onChangngType()}>Sign Up</span>
            </p>
            }
            
            <p className='loginGetHelpText'>{getHelp} Get help Signup ?</p>
        </div>
    )
}

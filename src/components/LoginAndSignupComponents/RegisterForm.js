import React, { Fragment } from 'react'
import Button from '../../commonComponents/Button'
import Input from '../../commonComponents/Input'

export default function RegisterForm({userDetails, onValueChange, onNextClick, errorIds}) {
  return (
    <Fragment>
        <p className='signupLoginTopContent' >Please fill ou the account detail for account</p>

        <Input
            inputId="name"
            name="name"
            required={true}
            onChange={(e)=>onValueChange(e)}
            placeholder="Enter Full Name"
            type="text"
            value={userDetails.name && userDetails.name !== "" ? userDetails.name : "" }
            className={`loginSignupInputField ${errorIds.includes("name") ? "errorInputBorder" : ""}`}
            containerClassName="loginSignupInputFieldCon"
            label = "Full Name"
            labelClassName="loginSignupInputLable"
            inputmode="text"
            errMsg={errorIds.includes("name") ? "Please add Full Name" : ""}
        />

        <Input
            inputId="userId"
            name="email"
            required={true}
            onChange={(e)=>onValueChange(e)}
            placeholder="eg. arushi@rpclan.com"
            type="email"
            value={userDetails.email && userDetails.email !== "" ? userDetails.email : "" }
            className={`loginSignupInputField ${errorIds.includes("email") ? "errorInputBorder" : ""}`}
            containerClassName="loginSignupInputFieldCon"
            label = "User Id"
            labelClassName="loginSignupInputLable"
            inputmode="email"
            disabled={true}
            errMsg={errorIds.includes("email") ? "Please add User Id" : ""}
        />

        <Input
            inputId="companyName"
            name="companyName"
            required={false}
            onChange={(e)=>onValueChange(e)}
            placeholder="Enter Company Name"
            type="text"
            value={userDetails.companyName && userDetails.companyName !== "" ? userDetails.companyName : "" }
            className="loginSignupInputField"
            containerClassName="loginSignupInputFieldCon"
            label = "Company Name (optional)"
            labelClassName="loginSignupInputLable"
            inputmode="text"
        />

        <Input
            inputId="mobile"
            name="mobile"
            required={true}
            onChange={(e)=>onValueChange(e)}
            placeholder="Enter Phone Number"
            type="number"
            value={userDetails.mobile && userDetails.mobile !== "" ? userDetails.mobile : "" }
            className={`loginSignupInputField ${errorIds.includes("mobile") ? "errorInputBorder" : ""}`}
            containerClassName="loginSignupInputFieldCon"
            label = "Phone Number"
            labelClassName="loginSignupInputLable"
            inputmode="numeric"
            errMsg={errorIds.includes("mobile") ? "Please add Phone Number" : ""}
        />

        <Input
            inputId="gstin"
            name="gstin"
            required={true}
            onChange={(e)=>onValueChange(e)}
            placeholder="Enter GSTIn Number"
            type="text"
            value={userDetails.gstin && userDetails.gstin !== "" ? userDetails.gstin : "" }
            className={`loginSignupInputField ${errorIds.includes("gstin") ? "errorInputBorder" : ""}`}
            containerClassName="loginSignupInputFieldCon"
            label = "GSTIN Number (optional)"
            labelClassName="loginSignupInputLable"
            inputmode="text"
            errMsg={errorIds.includes("gstin") ? "Please add GSTIN Number" : ""}
        />

        <Button
            buttonId="loginSignupSubmitBtn"
            containerClassName="loginSignupBtnCon"
            buttonClassName="loginSignupBtn"
            onSubmit={()=>onNextClick()}
            title="Continue"
            name="submit"
            type="submit"
        />
    </Fragment>
  )
}

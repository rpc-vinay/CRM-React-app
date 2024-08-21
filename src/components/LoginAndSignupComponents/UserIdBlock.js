import React, { Fragment } from 'react'
import Button from '../../commonComponents/Button'
import Input from '../../commonComponents/Input'

export default function UserIdBlock({userDetails, onValueChange, onNextClick, errorIds}) {
  return (
    <Fragment>
        <p className='signupLoginTopContent' >Lorem ipsum dolor sit amet</p>

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
            errMsg={errorIds.includes("email") ? "Please add User Id" : ""}
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

import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../api/auth_service'
import FeedbackInput from './FeedbackInput'
import Validators from '../js/Validators'

export default function ResetPassword(){
    const [password, setPassword] = useState("")
    const [feedbackInfoForPassword, setFeedbackInfoForPassword] = useState("")

    const [submitting, setSubmitting] = useState(false)

    async function submittingResetDetails(event){
        event.preventDefault()
        setSubmitting(true)
        const data = await AuthService.reset(password)
        console.log(data)
        alert(data)
        setSubmitting(false)
    }

    return (<>
        <div id='form_container'>
            <div id='form_and_contents'>
                <h1>Reset password</h1>

                <h2>enter a new password</h2>
                <h2>in order to reset it</h2>

                {submitting ? <h3 id='submitting_message'>submitting...</h3> : ""}

                <form id='form_to_be_submitted' method='post' onSubmit={(event) => {submittingResetDetails(event)}}>

                    <FeedbackInput value={password} data='password' setValue={(event)=>{setPassword(event.target.value)}} validator={(event)=>{Validators.passwordValidator(event, setFeedbackInfoForPassword)}} info={feedbackInfoForPassword} />

                    <button type='submit'>Submit</button>
                </form>

                <h3>want to go back to login page?</h3>

                <NavLink to='/login'>
                    <h3>login to your account...</h3>
                </NavLink>
            </div>
        </div>
    </>)
}
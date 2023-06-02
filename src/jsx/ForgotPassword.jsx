import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../api/auth_service'
import FeedbackInput from './FeedbackInput'
import Validators from '../js/Validators'

export default function ForgotPassword(){

    const [email, setEmail] = useState("")
    const [feedbackInfoForEmail, setFeedbackInfoForEmail] = useState("")

    const [submitting, setSubmitting] = useState(false)

    async function submittingForgotDetails(event){
        event.preventDefault()
        setSubmitting(true)
        const data = await AuthService.forgot(email)
        console.log(data)
        alert(data)
        setSubmitting(false)
    }

    return (<>
    <div id='form_wrapper'>
        <h1>Enter your email address</h1>

        <h2>to reset your password</h2>

        {submitting ? <h3>submitting...</h3> : ""}

        <form className='login_form' method='post' onSubmit={(event) => {submittingForgotDetails(event)}}>

            <FeedbackInput value={email} data='email' setValue={(event)=>{setEmail(event.target.value)}} validator={(event)=>{Validators.emailValidator(event, setFeedbackInfoForEmail)}} info={feedbackInfoForEmail} type="email"/>

            <button type='submit'>reset</button>
        </form>

        <h3>Want to go back to login page?</h3>

        <NavLink to='/login'>
            <h3>login to your account...</h3>
        </NavLink>
    </div>
    </>)
}
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../api/auth_service'
import FeedbackInput from './FeedbackInput'
import Validators from '../js/Validators'

export default function Signin(){
    const [id, setId] = useState("")
    const [feedbackInfoForId, setFeedbackInfoForId] = useState("")

    const [password, setPassword] = useState("")
    const [feedbackInfoForPassword, setFeedbackInfoForPassword] = useState("")

    const [email, setEmail] = useState("")
    const [feedbackInfoForEmail, setFeedbackInfoForEmail] = useState("")

    const [submitting, setSubmitting] = useState(false)

    async function submittingSigninDetails(event){
        event.preventDefault()
        setSubmitting(true)
        const data = await AuthService.signin(id, email, password)
        console.log(data)
        alert(data)
        setSubmitting(false)
    }

    return (<>
        <h1>Signin</h1>

        <h2>to create your account</h2>

        {submitting ? <h3>submitting...</h3> : ""}

        <form className='login_form' method='post' onSubmit={(event) => {submittingSigninDetails(event)}}>

            <FeedbackInput value={id} data='id' setValue={(event)=>{setId(event.target.value)}} validator={(event)=>{Validators.idValidator(event, setFeedbackInfoForId)}} info={feedbackInfoForId} />

            <FeedbackInput value={password} data='password' setValue={(event)=>{setPassword(event.target.value)}} validator={(event)=>{Validators.passwordValidator(event, setFeedbackInfoForPassword)}} info={feedbackInfoForPassword} />

            <FeedbackInput value={email} data='email' setValue={(event)=>{setEmail(event.target.value)}} validator={(event)=>{Validators.emailValidator(event, setFeedbackInfoForEmail)}} info={feedbackInfoForEmail} type="email"/>

            <button type='submit'>Signin</button>
        </form>

        <h3>have an account already?</h3>

        <NavLink to='/login'>
            <h3>login to your account...</h3>
        </NavLink>

        <h3>forgot your password?</h3>

        <NavLink to='/forgot'>
            <h3>reset your login password...</h3>
        </NavLink>
    </>)
}
import React from 'react'
import { useState } from 'react'
import AuthService from '../api/auth_service'
import FeedbackInput from './FeedbackInput'
import Validators from './Validators'
import { NavLink } from 'react-router-dom'

export default function Login(){
    const [id, setId] = useState("")
    const [feedbackInfoForId, setFeedbackInfoForId] = useState("")

    const [password, setPassword] = useState("")
    const [feedbackInfoForPassword, setFeedbackInfoForPassword] = useState("")

    const [submitting, setSubmitting] = useState(false)

    async function submittingLoginDetails(){
        setSubmitting(true)
        const data = await AuthService.login(id, password)
        setSubmitting(false)
        alert(data)
    }

    return (<>
        <h1>Login</h1>

        <h2>to access your account</h2>

        {submitting ? <h3>submitting...</h3> : ""}

        <form className='login_form' method='post'>

            <FeedbackInput value={id} data='id' setValue={(event)=>{setId(event.target.value)}} validator={(event)=>{Validators.idValidator(event, setFeedbackInfoForId)}} info={feedbackInfoForId} />

            <FeedbackInput value={password} data='password' setValue={(event)=>{setPassword(event.target.value)}} validator={(event)=>{Validators.passwordValidator(event, setFeedbackInfoForPassword)}} info={feedbackInfoForPassword} />

            <button type='submit' onSubmit={submittingLoginDetails}>Login</button>
        </form>

        <h3>don't have an account?</h3>

        <NavLink to='/sigin'>
            <h3>signin now to get your account...</h3>
        </NavLink>
    </>)
}
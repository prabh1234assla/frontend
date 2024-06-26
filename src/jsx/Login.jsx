import React from 'react'
import { useState } from 'react'
import AuthService from '../api/auth_service'
import FeedbackInput from './FeedbackInput'
import Validators from '../js/Validators'
import { NavLink } from 'react-router-dom'

export default function Login(){
    const [id, setId] = useState("")
    const [feedbackInfoForId, setFeedbackInfoForId] = useState("")

    const [password, setPassword] = useState("")
    const [feedbackInfoForPassword, setFeedbackInfoForPassword] = useState("")

    const [submitting, setSubmitting] = useState(false)

    async function submittingLoginDetails(event){
        event.preventDefault()
        setSubmitting(true)
        const data = await AuthService.login(id, password)
        console.log(data)
        alert(data)
        setSubmitting(false)
    }

    return (<>
        <div id='form_container'>
            <div id='form_and_contents'>
                <h1>Login</h1>

                <h2>to access your account</h2>

                {submitting ? <h3 id='submitting_message'>submitting...</h3> : ""}

                <form id='form_to_be_submitted' method='post' onSubmit={(event) => {submittingLoginDetails(event)}}>

                    <FeedbackInput value={id} data='id' setValue={(event)=>{setId(event.target.value)}} validator={(event)=>{Validators.idValidator(event, setFeedbackInfoForId)}} info={feedbackInfoForId} />

                    <FeedbackInput value={password} data='password' setValue={(event)=>{setPassword(event.target.value)}} validator={(event)=>{Validators.passwordValidator(event, setFeedbackInfoForPassword)}} info={feedbackInfoForPassword} />

                    <button type='submit'>Login</button>
                </form>

                <h3>don't have any account?</h3>

                <NavLink to='/sigin'>
                    <h3>signup now to get your account...</h3>
                </NavLink>
            </div>
        </div>
    </>)
}
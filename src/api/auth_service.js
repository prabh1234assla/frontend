import axios from "axios"
import AuthHeader from "./auth_header"
import { useNavigate } from "react-router-dom"

function errorHandlingLogin(error){
    if(error.response) {
        // request was made and server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)

        if(error.response.data.code === 400 || error.response.data.error === 'Bad payload syntax')
            alert("Invalid data!")
        else if(error.response.data.code === 400 || !error.response.data.error)
            alert("Insufficient data!")
        else if(error.response.data.code === 409 || error.response.data.error === 'Userid is already taken!')
            alert("Userid already exists!")
        else if(error.response.data.code === 409 || error.response.data.error === 'Email is already in use!')
            alert("Email already exists!")
        else if(error.response.data.code === 500)
            alert("Oops seems like a server error!")
        else
            alert("unknown issue is being faced, wait a sec!")

    } 
    else if(error.request) {
        // request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        alert("Oops seems like no response has been received!")
        console.log(error.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        alert("Response not properly triggered!")
        console.log('Error', error.message);
    }

    console.log(error.config)
}

function errorHandlingSignup(error){
    if(error.response) {
        // request was made and server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)

        if(error.response.data.code === 400 || error.response.data.error === 'Bad payload syntax')
            alert("Invalid data!")
        else if(error.response.data.code === 400 || !error.response.data.error)
            alert("Insufficient data!")
        else if(error.response.data.code === 401 || error.response.data.error === 'Bad credentials')
            alert("Invalid Credentials!")
        else if(error.response.data.code === 500)
            alert("Oops seems like a server error!")
        else
            alert("unknown issue is being faced, wait a sec!")

    } 
    else if(error.request) {
        // request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        alert("Oops seems like no response has been received!")
        console.log(error.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        alert("Response not properly triggered!")
        console.log('Error', error.message);
    }

    console.log(error.config)
}

function errorHandlingReset(error){
    if(error.response) {
        // request was made and server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)

        if(error.response.data.code === 400 || error.response.data.error === 'Bad payload syntax')
            alert("Invalid data!")
        else if(error.response.data.code === 400 || !error.response.data.error)
            alert("Insufficient data!")
        else if(error.response.data.code === 400 || error.response.data.error === "Required request parameter 'token' for method parameter type String is not present")
            alert("Bearer Token is empty!")
        else if(error.response.data.code === 404 || error.response.data.error === 'Oops! This is an invalid password reset link.')
            alert("Either reset link has expired or Bearer Token no longer exists!")
        else if(error.response.data.code === 500)
            alert("Oops seems like a server error!")
        else
            alert("unknown issue is being faced, wait a sec!")

    } 
    else if(error.request) {
        // request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        alert("Oops seems like no response has been received!")
        console.log(error.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        alert("Response not properly triggered!")
        console.log('Error', error.message);
    }

    console.log(error.config)
}

function errorHandlingForgot(error){
    if(error.response) {
        // request was made and server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)

        if(error.response.data.code === 400 || error.response.data.error === 'Bad payload syntax')
            alert("Invalid data!")
        else if(error.response.data.code === 404 || error.response.data.error === 'No user found for that e-mail address')
            alert("No such email exists!")
        else if(error.response.data.code === 500)
            alert("Oops seems like a server error!")
        else
            alert("unknown issue is being faced, wait a sec!")

    } 
    else if(error.request) {
        // request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        alert("Oops seems like no response has been received!")
        console.log(error.request)
    } else {
        // Something happened in setting up the request that triggered an Error
        alert("Response not properly triggered!")
        console.log('Error', error.message);
    }

    console.log(error.config)
}

const signup = (id, email, password) => {
    return axios.
        post(import.meta.env.API_URL_DEV + import.meta.env.SIGNUP_ENDPOINT, ({
            id,
            email,
            password
        })).
        then((response) => {
            alert('User has been successfully created!')
            alert(response.data)
            console.log(response.data)
        }).
        catch((error) => errorHandlingSignup(error)).
        finally(()=>{
            console.log("sigin request has been made!")
        })

}

const login = (id, password) => {
    
    return axios.
        post(import.meta.env.API_URL_DEV + import.meta.env.LOGIN_ENDPOINT, {
            id,
            password
        }).
        then((response) => {
            alert('Login was successful!')
            alert(response.data)
            console.log(response.data)
            if (response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        }).
        catch((error) => errorHandlingLogin(error)).
        finally(()=>{
            console.log("login request has been made!")
        })

}

const forgot = (email) => {
    const navigate = useNavigate()

    return axios.
        post(import.meta.env.API_URL_DEV + import.meta.env.FORGOT_ENDPOINT, ({
            email
        })).
        then((response) => {
            alert(response.status)
            alert(response.data)
            console.log(response.data)
                if(response?.status == 200)
                    navigate('/reset')
        }).
        catch((error) => errorHandlingForgot(error)).
        finally(()=>{
            console.log("forgot password request has been made!")
        })

}

const reset = (password) => {

    return axios.
        patch(import.meta.env.API_URL_DEV + import.meta.env.RESET_ENDPOINT, ({
            password
        }), { headers: AuthHeader() }).
        then((response) => {
            alert('You have successfully reset your password. You may now login.')
            alert(response.data)
            console.log(response.data)
        }).
        catch((error) => errorHandlingReset(error)).
        finally(()=>{
            console.log("sigin request has been made!")
        })

}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
  signup,
  login,
  forgot,
  reset,
  logout,
  getCurrentUser
}

export default AuthService

import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

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

function errorHandlingSignin(error){
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

const signin = (id, email, password) => {

    return axios.
        post(API_URL + "signup", {
            id,
            email,
            password
        }).
        then((response) => {
            alert(response.data)
        }).
        catch((error) => errorHandlingSignin(error)).
        finally(()=>{
            console.log("sigin request has been made!")
        })

}

const login = (id, password) => {

    return axios.
        post(API_URL + "signin", {
            id,
            password
        }).
        then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data
        }).
        catch((error) => errorHandlingLogin(error)).
        finally(()=>{
            console.log("login request has been made!")
        })
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
  signin,
  login,
  logout,
  getCurrentUser
}

export default AuthService

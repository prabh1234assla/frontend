import React from "react"
import { NavLink } from "react-router-dom"
import '../css/PageNotFound.css'

export default function PageNotFound(){
    return (<>
    <div id='pageNotFound'>
        <h1>OOPS!</h1>

        <h2>404: page not found</h2>

        <h3>the page you have been trying to access might have been deleted or the url you typed might be wrong or there might be some DNS settings issue, caching problem or missing assets</h3>
        
        <NavLink to='/sigin' id='fourOfourError'>go to sigin page</NavLink>
    </div>
    </>)
}
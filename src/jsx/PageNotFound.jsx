import React from "react"
import { NavLink } from "react-router-dom"

export default function PageNotFound(){
    return (<>
    <div id='pageNotFound'>
        <h1 id='oops'>OOPS!</h1>

        <h2 id='error_msg_404'>404: page not found</h2>

        <h3 id='error_msg_description'>the page you have been trying to access might have been deleted or the url you typed might be wrong or there might be some DNS settings issue, caching problem or missing assets</h3>
        
        <NavLink to='/sigin' id='four_o_four_error'>go to sigin page</NavLink>
    </div>
    </>)
}
import React from "react"
import { useState, useEffect } from "react"

export default function FeedbackInput({data, value, setValue, _type, info, validator}){
    const [typing, setTyping] = useState(false)
    const [proper, setProper] = useState(false)

    useEffect(()=>{
        if(["username is available", "password is valid", "email is available"].includes(info))
            setProper(true)
        else
            setProper(false)
    }, [info])

    let _ID = null

    function typingProcess(){
        setTyping(true)
        clearTimeout(_ID)

        _ID = setTimeout(()=>{
            setTyping(false)
        }, 200)
    }

    return (<>
    <div id="wrapper_input_box">

        {proper ?
            <div> 
                <svg id='tick' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#19671d" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg> 
            </div> 
            : 
            <div> 
                <svg id='cross' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#ac2a20" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"/><path fill="#ac2a20" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"/></svg>
            </div>
        }

        <label htmlFor={data}> {`${data.charAt(0).toUpperCase()+data.slice(1)} :`} </label>

        <br />

        <input id={data} name={data} onInput={(event)=>{setValue(event); validator(event); typingProcess()}} value={value} type={_type || "text"}/>

        {typing ? <div id='loading' style={{width: "24px", height: "24px", margin: "2% 0%"}}></div> : <div style={{width: "24px", height: "24px", margin: "2% 0%"}}></div>}

        {!proper ? <div id='bad_message' style={{padding: info.length ? "1% 0%" : "0%"}}>{info}</div> : <div id='good_message' style={{padding: info.length ? "1% 0%" : "0%"}}>{info}</div>}

    </div>
    </>)
}
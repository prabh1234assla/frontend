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
        {proper ? <div id='tick'>✓</div> : <div id='cross'>×</div>}

        <label htmlFor={data}> {`${data.charAt(0).toUpperCase()+data.slice(1)} :`} </label>

        <input id={data} name={data} onInput={(event)=>{setValue(event); validator(event); typingProcess()}} value={value} type={_type || "text"}/>

        {!proper ? <div id='bad_message'>{info}</div> : <div id='good_message'>{info}</div>}

        {typing ? <div id='loading'>↻</div> : ""}
    </>)
}
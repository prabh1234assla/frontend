function idValidator(event, setFeedbackInfo){
    if(!event.target.value.length)
        setFeedbackInfo("username cannot be empty")
    
    else if(!(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_]+$/.test(event.target.value)))
        setFeedbackInfo("username must contain atleast one letter, one digit, at least a length of one character and at least one underscore or alphanumeric character")

    else if(event.target.value.length <= 6)
        setFeedbackInfo("username cannot be smaller than 6 letters")

    else if(event.target.value.length >= 20)
        setFeedbackInfo("username cannot be larger than 20 letters")

    else
        setFeedbackInfo("username is available")
}

function passwordValidator(event, setFeedbackInfo){
    if(!event.target.value.length)
        setFeedbackInfo("password cannot be empty")
    
    else if(!(/^(?=.*\d)(?=.*[_!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])$/.test(event.target.value)))
        setFeedbackInfo("password must contain atleast one digit, one special character from _!@#$%^&*, one uppercase and one lowercase letter")

    else if(event.target.value.length <= 6)
        setFeedbackInfo("password cannot be smaller than 6 letters")

    else if(event.target.value.length >= 20)
        setFeedbackInfo("password cannot be larger than 20 letters")

    else
        setFeedbackInfo("password is valid")
}

function emailValidator(event, setFeedbackInfo){
    if(!event.target.value.length)
        setFeedbackInfo("email cannot be empty")

    else if(!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value)))
        setFeedbackInfo("email address doesn't exist")

    else
        setFeedbackInfo("email is available")
}

const Validators = {
    idValidator,
    passwordValidator,
    emailValidator
}

export default Validators
function idValidator(event, setFeedbackInfo){
    if(!event.target.value.length)
        setFeedbackInfo("username cannot be empty")
    
    else if(!(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9_]+$/.test(event.target.value)))
        setFeedbackInfo("username must contain atleast one letter, one digit and can contain alphanumeric characters and underscores")

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
    
    else if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9_!@#$%^&*]+$/.test(event.target.value)))
        setFeedbackInfo("password must contain atleast one digit, one special character from !@#$%^&*, one uppercase and one lowercase letter and can contain underscores, listed special characters and alphanumeric characters")

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
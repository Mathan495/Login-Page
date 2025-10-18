const form = document.querySelector('#form')
    const names = document.getElementById("username")
    const pwd = document.getElementById("password")
    const mail = document.getElementById("email")
    const cpwd = document.getElementById("cpassword")

    form.addEventListener("submit", (e) => {
        
        if(!validateInputs()){
            e.preventDefault();
        };
    })

    function validateInputs() {
        const usernam = names.value.trim();
        const passd = pwd.value.trim();
        const mailid = mail.value.trim();
        const conpsd = cpwd.value.trim();
        let success = true;
        let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(usernam === ''){
            success = false;
            setError(names, "username is required")
        }
        else{
            setSuccess(names)
        }

        if(mailid === ''){
            success = false;
            setError(mail, 'Email is required')
        }
        else if(pattern.test(mailid) === ''){
            setError(mail, 'please enter valid mail')
        }
        else{
            setSuccess(mail)
        }

        if(passd === ''){
            success = false;
            setError(pwd, 'password is required')
        }
        else if(passd.length < 8){
            success = false;
            setError(pwd,'password must be 8 char long')
        }
        else{
            setSuccess(pwd)
        }
        if(conpsd === ''){
            success = false;
            setError(cpwd, 'confirm psd is required')
        }
        else if(conpsd!==passd){
            success = false;
            setError(cpwd,'password does not match')
        }
        else{
            setSuccess(cpwd)
        }
        return success;
    }

    function setError(element, message) {
        const labelinp = element.parentElement;
        const errorelem = labelinp.querySelector(".error")

        errorelem.innerText = message;
        labelinp.classList.add("error")
        labelinp.classList.remove("correct")
    }

    function setSuccess(element) {
        const labelinp = element.parentElement;
        const errorelem = labelinp.querySelector(".error")

        errorelem.innerText = '';
        labelinp.classList.remove("error")
        labelinp.classList.add("correct")
    }
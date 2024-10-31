const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PassewordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //infos factices, il faudra ici appeler l'API pour verif les credentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        //il faudra recuperer le vrai token
        const token = "fldkshfsdùlqghksùqlgkh";
        setToken(token);
        //placer ce token en cookie

        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}
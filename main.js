const formEl=document.getElementById('form')
const usernameEl=document.getElementById('username')
const passwordEl=document.getElementById('password')
const emaileEl = document.getElementById('email')
const confirmpasswordEl = document.getElementById('password2')



function showError(qutu,mesaj) {
    const formControl = qutu.parentElement
    formControl.className = "form-control error"
    const small=formControl.querySelector('small');
    small.innerText=mesaj
}
showError(usernameEl,"!")
showError(emaileEl,"!")


function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = "form-control success"
}
showSuccess(confirmpasswordEl,".")
showSuccess(passwordEl,'.')

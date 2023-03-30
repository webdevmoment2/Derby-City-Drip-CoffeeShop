const username = document.getElementById('contactformname');
const email = document.getElementById('contactformemail');
const emailErr = document.getElementById('emailerror');

email.addEventListener('input', function(emailInput) {
    var acceptedEmail = /^[\w, @ , .]{8,99}$/;
    var currentEmail = emailInput.target.value;
    var validEmail = acceptedEmail.test(currentEmail);

    if (validEmail){
        emailErr.style.display = 'none'
    } else {
        emailErr.style.display = 'block'
    }}
    )
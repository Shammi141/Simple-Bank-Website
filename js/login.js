// -------------work of submit button-------------

//step1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //console.log('submit button clicked');

// step2: get email address inside the email field
//always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);

//step3: get password
//3.a: set id in html element
//3.b: get the element
//3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(email, password);

// Don't verify email, password on the client side. Now it's just for learning purpose
//step4: verify email, password
    if(email == 'shammi@gmail.com' && password == 'Shammi'){
        console.log('Valid user');
    }
    else{
        console.log('Invalid user');
    }

});
document.getElementById('btn-submit').addEventListener('click', function () {
    // user email

    const user_email = document.getElementById('user-name');
    const email = user_email.value;

    // user password 

    const user_password = document.getElementById('password');
    const UserPassword = user_password.value;

    // verify email

    if (email == 'sontan@baap.com' && UserPassword == 'secret') {
        document.location.href = 'bank.html';
    }
})
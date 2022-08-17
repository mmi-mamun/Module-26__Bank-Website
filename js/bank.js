console.log("ASSALAMU ALAIKUM");

document.getElementById('log-in').addEventListener('click', function () {
    const EmailField = document.getElementById('Username');
    const email = EmailField.value;

    const passwordField = document.getElementById('Password');
    const password = passwordField.value;
    console.log(email, password);


    if (email === 'musafir@gmail.com') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid email or password');

    }
})
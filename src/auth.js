

//Get current user
var user = firebase.auth().currentUser;
if (user) {
    console.log(user);
} else {
    console.log("No user signed in");
};

//Create user
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const verifyPassword = signupForm['verify-password'].value;

    if (password === verifyPassword) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                db.collection('users').doc(auth.user.uid).set({
                    name: signupForm['signup-name'].value
                })
            })
            .then(signupForm.reset())
            .then(console.log('Usuario creado'))
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            })
    } else {
        alert('Por favor revisa tus datos y vuelve a intentarlo.');
    }
});

//Logout
const logout = document.querySelector('#logoutButton');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    console.log('Sesión cerrada');
});

//Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            console.log('Sesión iniciada');
        }).then(loginForm.reset())
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        })
});

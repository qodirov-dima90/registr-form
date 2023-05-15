const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs()
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDispley = inputControl.querySelector('.error');

    errorDispley.innerText = message
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const  setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDispley = inputControl.querySelector('.error');

    errorDispley.innerText  = ''
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValideEmail = email => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    console.log(password2Value);

    if(usernameValue === ''){
        setError(username, 'Iltimos user nomingizni kiriting');
    } else {
        setSuccess(username)
    } 
    if(emailValue === ''){
        setError(email, 'Iltimos emailingizni kiriting');
    } else if (!isValideEmail(emailValue)){
        setError(email, 'Haqiqiy email adresingizni kiriting.');
    } else {
        setSuccess(email)
    }
    if(passwordValue === ''){
        setError(password, 'Iltimos porolingizni kiriting')
    } else if(passwordValue.length < 8){
        setError(password, 'Kiritgan porolingiz 8 ta belgidan kam boshqatdan kiriting')
    } else {
        setSuccess(password);
    };
    if (password2Value === ''){
        setError(password2, 'Iltimos kiritgan porolingizni yana birmarta kiriting')
    } else if (password2Value !== passwordValue){ 
        setError(password2, 'Kiritgan porolingiz oldingi porolingiz bilan mos kelmayapdi')
    } else {
        setSuccess(password2)
    }
};

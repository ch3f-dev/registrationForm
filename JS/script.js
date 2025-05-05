const mainWrapper = document.querySelector('.mainWrapper');
// mainWrapper.classList.add('bg-blue-300');


const register = document.createElement('form');
register.classList.add('flex', 'flex-col')
const labelFN = document.createElement('label');
labelFN.innerText = 'fullname'
labelFN.htmlFor = 'fullname';
const inputFN = document.createElement('input');
inputFN.id = 'fullname';
inputFN.type = 'text';
inputFN.placeholder = 'Dev Meshak';
inputFN.classList.add('border');


const labelEM = document.createElement('label');
labelEM.innerText = 'email'
labelEM.htmlFor = 'email';
const inputEM = document.createElement('input');
inputEM.id = 'email';
inputEM.type = 'email';
inputEM.placeholder = 'devmeshak@example.com';
inputEM.classList.add('border');


const labelPN = document.createElement('label');
labelPN.innerText = 'phone number'
labelPN.htmlFor = 'phoneNumber';
const inputPN = document.createElement('input');
inputPN.id = 'phoneNumber';
inputPN.type = 'number';
inputPN.placeholder = 'enter your phone number';
inputPN.classList.add('border');


const labelDOB = document.createElement('label');
labelDOB.innerText = 'Date of Birth'
labelDOB.htmlFor = 'dateOfBirth';
const inputDOB = document.createElement('input');
inputDOB.id = 'dateOfBirth';
inputDOB.type = 'date';


const labelPW = document.createElement('label');
labelPW.innerText = 'password'
labelPW.htmlFor = 'passWord';
const inputPW = document.createElement('input');
inputPW.id = 'passWord';
inputPW.type = 'password';
inputPW.placeholder = 'enter your password';
inputPW.classList.add('border');









register.appendChild(labelFN);
register.appendChild(inputFN);
register.appendChild(labelEM);
register.appendChild(inputEM);
register.appendChild(labelPN);
register.appendChild(inputPN);
register.appendChild(labelDOB);
register.appendChild(inputDOB);
register.appendChild(labelPW);
register.appendChild(inputPW);





const submitBut = document.createElement('button');
submitBut.innerText = 'submit';
submitBut.type = 'submit';
submitBut.classList.add('border', 'bg-blue-200', 'font-bold', 'w-20', 'h-12', 'rounded-md')


register.appendChild(submitBut);
mainWrapper.appendChild(register);


register.addEventListener('submit', function validate(event) {
    event.preventDefault();
    const fullName = inputFN.value.trim();
    const email = inputEM.value.trim();
    const phone = inputPN.value.trim();
    const dob = inputDOB.value;
    const password = inputPW.value;

    if (fullName.length < 2) {
        alert('please enter full name');
        return;
    };

    if (!email.includes('@') || email.length < 5) {
        alert('please enter a valid email address');
        return;
    };

    if (phone.length < 11) {
        alert('please enter a valid phone number');
        return;
    };

    if (!dob) {
        alert('please select your date of birth');
        return;
    };

    // to check the age of the user and validate that they are 18yrs 
    const birthDate = new Date(dob);
    const todayDate = new Date();

    let age = todayDate.getFullYear - birthDate.getFullYear;
    let month = today.getMonth - birthDate.getMonth;
    if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
        age--;
    };

    if (age < 18) {
        alert('You must be 18 years and above');
    };


    if (password.length < 6) {
        alert('password must be atleast 6 characters long');
    };

    // this is to validate password characters

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const number = /\d/;
    const symbol = /[!@#$%^&*(),.?":{}|<>]/;

    if (!password.contains(upperCase) || !password.contains(lowerCase) || !password.contains(number) || !password.contains(symbol)) {
        alert('password must constain one uppercase, one lowercase, one number and one special characters');
    }



    alert('Registered Successfully');
    register.reset();
})



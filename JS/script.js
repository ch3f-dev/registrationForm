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

    if (!dob || dob < ) {
        alert('please select your date of birth');
        return;
    }

    if (password.length < 6) {
        alert('passwprd must be atleast 6 characters long')
    };

    alert('Registered Successfully');
    register.reset();
})



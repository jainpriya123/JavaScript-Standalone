let fullName = document.getElementById('fullname');
let contact = document.getElementById('phoneNo');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submitButton = document.getElementById('submitButton');
let isSubmitButtonEnabled = false;

let isFullName = false;
let isContact = false;
let isEmail = false;
let isMessage = false;

checkIsSubmitEnabled();

function checkIsSubmitEnabled() {
    isSubmitButtonEnabled = isContact && isEmail && isFullName && isMessage;
    if (!isSubmitButtonEnabled) {
        submitButton.setAttribute("disabled", isSubmitButtonEnabled);
        submitButton.classList.add("isDisabled");
        submitButton.classList.remove("isEnabled");
    }
    else {
        submitButton.removeAttribute("disabled");
        submitButton.classList.add("isEnabled");
        submitButton.classList.remove("isDisabled");
    }
}

fullName.addEventListener('blur', (event) => {
    event.preventDefault();
    let fullNameID = document.getElementById('fullName-id');
    let nameErrorId = document.getElementById('name-error-icon');
    if (fullName.value === '') {
        fullNameID.textContent = 'Required field';
        nameErrorId.classList.add('error');
    }
    else {
        nameErrorId.classList.add('success');
        isFullName = true;
        checkIsSubmitEnabled();
    }

});

fullName.addEventListener('input', (event) => {
    event.preventDefault();
    if (fullName.value !== '') {
        let fullNameID = document.getElementById('fullName-id');
        let nameErrorId = document.getElementById('name-error-icon');

        fullNameID.textContent = '';
        nameErrorId.classList.remove('error');
        nameErrorId.classList.remove('success');
    }

});

contact.addEventListener('blur', (event) => {
    event.preventDefault();
    let phoneNoId = document.getElementById('phoneNo-id');
    let contactErrorId = document.getElementById('contact-error-icon');

    if (contact.value === '') {
        phoneNoId.textContent = 'Required field';
        contactErrorId.classList.add('error');
    }
    else {
        contactErrorId.classList.add('success');
        isContact = true;
        checkIsSubmitEnabled();
    }

});

contact.addEventListener('input', (event) => {
    event.preventDefault();
    let phoneNoId = document.getElementById('phoneNo-id');
    let contactErrorId = document.getElementById('contact-error-icon');
    if (contact.value !== '') {
        phoneNoId.textContent = '';
        contactErrorId.classList.remove('error');
        contactErrorId.classList.remove('success');
    }

});

email.addEventListener('blur', (event) => {
    event.preventDefault();
    let emailID = document.getElementById('email-id');
    let emailErrorId = document.getElementById('email-error-icon');

    if (email.value === '') {
        emailID.textContent = 'Required field';
        emailErrorId.classList.add('error');
    }
    else {
        emailErrorId.classList.add('success');
        isEmail = true;
        checkIsSubmitEnabled();
    }

});

email.addEventListener('input', (event) => {
    event.preventDefault();
    let emailID = document.getElementById('email-id');
    let emailErrorId = document.getElementById('email-error-icon');

    if (email.value !== '') {
        emailID.textContent = '';
        emailErrorId.classList.remove('error');
        emailErrorId.classList.remove('success');
    }

});

message.addEventListener('blur', (event) => {
    event.preventDefault();
    let messageNameID = document.getElementById('message-id');
    let messageErrorId = document.getElementById('message-error-icon');
    if (message.value === '') {
        messageNameID.textContent = 'Required field';
        messageErrorId.classList.add('error');
    }
    else {
        messageErrorId.classList.add('success');
        isMessage = true;
        checkIsSubmitEnabled();
    }
});

message.addEventListener('input', (event) => {
    event.preventDefault();
    let messageNameID = document.getElementById('message-id');
    let messageErrorId = document.getElementById('message-error-icon');
    if (message.value !== '') {
        messageNameID.textContent = '';
        messageErrorId.classList.remove('error');
        messageErrorId.classList.remove('success');
    }
});

submitButton.addEventListener('submit', (event) => {
    event.preventDefault();
    // alert('submitted');
});
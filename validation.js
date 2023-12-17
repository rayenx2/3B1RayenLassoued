
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
});

function validateForm(event) {
    event.preventDefault(); 

    const nounInput = document.getElementById('noun');
    const prenounInput = document.getElementById('prenoun');
    const idNumberInput = document.getElementById('idNumber');
    const emailInput = document.getElementById('email');


    if (!isValidCIN(idNumberInput.value)) {
        alert('Please enter a valid CIN number (up to 8 digits).');
        return;
    }

    if (!isValidName(nounInput.value) || !isValidName(prenounInput.value)) {
        alert('Noun and prenoun should contain only letters');
        return;
    }

    alert('Form submitted successfully!');
    form.submit();
}

function isValidCIN(cin) {
    return /^\d{1,8}$/.test(cin);
}

function isValidName(name) {
    return /^[a-zA-Z]+$/.test(name);
}

const STORAGE_KEY = 'feedback-form-state';


const form = document.querySelector('.feedback-form');

//прослуховування кнопки та інпута
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onInputData);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
    formData = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function reloadPage() {
    if (formData) {
        email.value = formData.email || '';
        message.value = formData.message || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value });

    if (email.value === '' || message.value === '') {
        return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
    }
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
    formData = {};
}
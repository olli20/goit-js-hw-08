import throttle from 'lodash.throttle'

refs = {
    form: document.querySelector('.feedback-form'),
};

const catchedInputData = {};

const getFromStorage = () => {
    return JSON.parse(localStorage.getItem("feedback-form-state"));
};

const onPageLoad = () => {
    if (getFromStorage()) {
        catchedInputData = getFromStorage();
        console.log(catchedInputData);
    }
};

onPageLoad();

const saveToStorage = () => {           
    localStorage.setItem("feedback-form-state", JSON.stringify(catchedInputData));
}

const cleanStorge = () => {
    localStorage.removeItem("feedback-form-state");
}


const onSubmit = (event) => {
    event.preventDefault();

    const {
        elements: { email, message }
    } = event.currentTarget;

    console.log("Email:", email.value);
    console.log("Message:", message.value);

    event.currentTarget.reset();
    cleanStorge();
};

const onInput = (event) => {
    if (event.target.name === "message") {
        catchedInputData.message = event.target.value;
        saveToStorage();
    } else if (event.target.name === "email") {
        catchedInputData.email = event.target.value;
        saveToStorage();
    } 
}

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
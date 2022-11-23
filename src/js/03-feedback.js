import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
};

let catchedInputData = {};

const getFromStorage = () => {
    return JSON.parse(localStorage.getItem("feedback-form-state"));
};

const onPageLoad = () => {
    if (getFromStorage()) {
        catchedInputData = getFromStorage();
        
        if (catchedInputData.email) {
            refs.form.elements.email.value = catchedInputData.email;
        }

        if (catchedInputData.message) {
            refs.form.elements.message.value = catchedInputData.message;
        }
    }
};

onPageLoad();

const saveToStorage = () => {
    localStorage.setItem("feedback-form-state", JSON.stringify(catchedInputData));
};

const cleanStorge = () => {
    localStorage.removeItem("feedback-form-state");
};

const handleSubmit = (event) => {
    event.preventDefault();

    const {
        elements: { email, message }
    } = event.currentTarget;

    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    //simple validation
    if (emailValue === "" && messageValue === "") {
        alert('Please, write your e-mail and message');
    } else if (emailValue === "") {
        alert('Please, write your e-mail');
    } else if (messageValue === "") {
        alert('Please, write your message');
    } else {
        //console log
        console.log("Email:", emailValue);
        console.log("Message:", messageValue);

        event.currentTarget.reset();
        cleanStorge();
    }   
};

const handleInput = (event) => {
    if (event.target.name === "message") {
        catchedInputData.message = event.target.value.trim();
        saveToStorage();
    } else if (event.target.name === "email") {
        catchedInputData.email = event.target.value.trim();
        saveToStorage();
    }
};

refs.form.addEventListener('submit', handleSubmit);
refs.form.addEventListener('input', throttle(handleInput, 500));
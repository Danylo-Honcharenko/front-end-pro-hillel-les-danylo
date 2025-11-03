const form = document.querySelector("#messageForm");

const validExpressionName = /\w+/;
const validExpressionMessage = /\w{5,}/;
const validExpressionPhoneNumber = /\+380\d+/;
const validExpressionEmail = /\w+@\w+\.\w+/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formObj = new FormData(event.target);
    const result = {};

    const clientName = formObj.get("name");
    const message = formObj.get("message");
    const phoneNumber = formObj.get("phone-number");
    const email = formObj.get("email");

    const nameValidateRule = {
        field: clientName,
        expression: validExpressionName,
        errorMsg: "Name is required!",
        getErrorMsgField: () => document.querySelector("#error-message-name")
    };

    const messageValidateRule = {
        field: message,
        expression: validExpressionMessage,
        errorMsg: "Min 5!",
        getErrorMsgField: () => document.querySelector("#error-message-message")
    };

    const phoneNumberValidateRule = {
        field: phoneNumber,
        expression: validExpressionPhoneNumber,
        errorMsg: "The phone number must start with +380!",
        getErrorMsgField: () => document.querySelector("#error-message-phone-number")
    };

    const emailValidateRule = {
        field: email,
        expression: validExpressionEmail,
        errorMsg: "Email must follow the structure test@test.com",
        getErrorMsgField: () => document.querySelector("#error-message-email")
    };

    if (validateField(nameValidateRule)) return;
    if (validateField(messageValidateRule)) return;
    if (validateField(phoneNumberValidateRule)) return;
    if (validateField(emailValidateRule)) return;

    formObj.entries().forEach((item) => result[item[0]] = item[1]);

    console.log(result);
});

function validateField(rule) {
    const errorMsgField = rule.getErrorMsgField();
    if (rule.field !== null && rule.expression.test(rule.field)) {
        errorMsgField.textContent = "";
        return false;
    }
    errorMsgField.textContent = rule.errorMsg;
    return true;
}
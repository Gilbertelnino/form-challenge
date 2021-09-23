const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const resetBtn = document.getElementById("reset-val");
const form = document.getElementById("form");
const errorMessage = document.querySelectorAll(".invalid-feedback");

const resetField = (e) => {
  e.preventDefault();
  username.placeholder = "name";
  email.placeholder = "Email";
  phone.placeholder = "phone";
  company.placeholder = "company";
  message.placeholder = "Your message";

  username.classList.remove("error-message");
  email.classList.remove("error-message");
  phone.classList.remove("error-message");
  company.classList.remove("error-message");
  message.classList.remove("error-message");
  document.querySelector(".invalid-feedback-change").style.display = "none";

  username.classList.remove("error");
  email.classList.remove("error");
  phone.classList.remove("error");
  company.classList.remove("error");
  message.classList.remove("error");
  return form.reset();
};

const validateForm = (e) => {
  e.preventDefault();
  const usernameVal = username.value;
  const emailVal = email.value;
  const phoneVal = phone.value;
  const companyVal = company.value;
  const messageVal = message.value;
  if (!usernameVal && !emailVal && !phoneVal && !companyVal && !messageVal) {
    showErrorMessage();
  } else if (!emailVal) {
    email.placeholder = "Write an email (example@example.com)";
    email.classList.add("error-message");
    email.classList.add("error");
  } else if (!usernameVal) {
    username.placeholder = "Write your name and username";
    username.classList.add("error-message");
    username.classList.add("error");
  } else if (!phoneVal) {
    phone.placeholder = "Write your phone number";
    phone.classList.add("error-message");
    phone.classList.add("error");
  } else if (!companyVal) {
    company.placeholder = "Write your company name";
    company.classList.add("error-message");
    company.classList.add("error");
  } else if (!messageVal) {
    message.placeholder = "Write your message";
    message.classList.add("error-message");
    message.classList.add("error");
  } else {
    if (!validateEmail(email.value)) {
      email.placeholder = "Write an email (example@example.com)";
      email.classList.add("error-message");
      email.classList.add("error");
      email.value = "";
    } else {
      alert("Submitted");
    }
  }
};

const usernameChange = () => {
  if (username.value.length > 0) {
    // document.querySelector(".username-feedback").style.display = "none";
    username.classList.remove("error");
  } else if (username.getAttribute("placeholder") === "name") {
    username.classList.remove("error");
  } else {
    username.classList.add("error");
  }
};

const phoneChange = () => {
  if (
    phone.value.length > 0 &&
    phone.value.length < 8 &&
    validatePhone(phone.value)
  ) {
    document.querySelector(".invalid-feedback-change").style.display = "block";
    phone.classList.add("error");
  } else if (
    phone.value.length >= 8 &&
    phone.value.length < 11 &&
    validatePhone(phone.value)
  ) {
    document.querySelector(".invalid-feedback-change").style.display = "none";
    phone.classList.remove("error");
  } else if (phone.value.length === 0) {
    phone.placeholder = "Write your phone number";
    phone.classList.add("error-message");
    phone.classList.add("error");
    document.querySelector(".invalid-feedback-change").style.display = "none";
  } else {
    document.querySelector(".invalid-feedback-change").style.display = "block";
    phone.classList.add("error");
  }
};

const companyChange = () => {
  if (company.value.length > 0) {
    company.classList.remove("error");
  } else if (company.getAttribute("placeholder") === "company") {
    company.classList.remove("error");
  } else {
    company.classList.add("error");
  }
};

const messageChange = () => {
  if (message.value.length > 0) {
    message.classList.remove("error");
  } else if (message.getAttribute("placeholder") === "Your message") {
    message.classList.remove("error");
  } else {
    message.classList.add("error");
  }
};

username.addEventListener("input", usernameChange);
email.addEventListener("input", () => {
  console.log("email: ", email.getAttribute("placeholder"));
  if (email.value.length > 0) {
    email.classList.remove("error");
  } else if (email.getAttribute("placeholder") === "Email") {
    email.classList.remove("error");
  } else {
    email.classList.add("error");
  }
});
phone.addEventListener("input", phoneChange);
company.addEventListener("input", companyChange);
message.addEventListener("input", messageChange);

const validateEmail = (validemail) => {
  const email_reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_reg.test(validemail);
};

const validatePhone = (number) => {
  const regex = /^[0-9]+$/;

  return number.match(regex);
};

const showErrorMessage = () => {
  // add error message
  username.placeholder = "Write your name and username";
  username.classList.add("error-message");

  email.placeholder = "Write an email (example@example.com)";
  email.classList.add("error-message");

  phone.placeholder = "Write your phone number";
  phone.classList.add("error-message");

  company.placeholder = "Write your company name";
  company.classList.add("error-message");

  message.placeholder = "Write your message";
  message.classList.add("error-message");

  // message.removeAttribute("placeholder");
  // errorMessage.forEach((err) => {
  //   err.style.display = "block";
  // });
  username.classList.add("error");
  email.classList.add("error");
  phone.classList.add("error");
  company.classList.add("error");
  message.classList.add("error");
};

resetBtn.addEventListener("click", resetField);
sendBtn.addEventListener("click", validateForm);

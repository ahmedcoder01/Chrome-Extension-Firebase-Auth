import loginForm from "./login";
import { createElement, render } from "../../utils";
import "./form.css"
import welcome from "../welcome";

export default function SignupForm() {
  // signup with firebase

  const Form = createElement({ id: "signup-form", className: "extension__form", tag:"form" });
  Form.addEventListener("submit", signupHandler);

  let displayName = createElement({
    tag: "input",
    id: "signup-name-input",
    className: "extension-input",
    type: "text",
    placeholder: "Name",
    append: Form,
  });
  let emailInput = createElement({
    tag: "input",
    id: "signup-email-input",
    className: "extension-input",
    type: "email",
    placeholder: "Email",
    append: Form,
  });
  let passwordInput = createElement({
    tag: "input",
    id: "signup-password-input",
    type: "password",
    className: "extension-input",
    placeholder: "Password",
    append: Form,
  });
  let submitButton = createElement({
    tag: "button",
    id: "signup-submit-button",
    textContent: "Sign Up",
    append: Form,
  });
  let signinButton = createElement({id: "signup__btn", tag: "button",  textContent:  `Already have an account? Log In`, append: Form})
  signinButton.addEventListener('click', () => {
    render(loginForm());
  })

  return Form;

  function signupHandler(e) {
    e.preventDefault();

    if (!emailInput.value || !passwordInput.value || !displayName.value) return;


    chrome.runtime.sendMessage({type: "SIGNUP", email: emailInput.value, password: passwordInput.value, displayName: displayName.value}, (res) => {
      if(res.status === "success") {
        render(welcome())
      }
      else if (res.status === "fail") {

      }

    })

  }
}

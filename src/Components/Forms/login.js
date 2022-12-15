import { createElement, render } from "../../utils";
import welcome from "../welcome";
import signupForm from '../Forms/signup'
import "./form.css"


export default function loginForm() {
  // login with firebase

  const Form = createElement({ id: "login-form", tag: "form", className: "extension__form" });
  Form.addEventListener("submit", signinHandler);

  let emailInput = createElement({
    tag: "input",
    id: "login-email-input",
    className: "extension-input",
    type: "email",
    placeholder: "Email",
    append: Form,
  });
  let passwordInput = createElement({
    tag: "input",
    id: "login-password-input",
    type: "password",
    className: "extension-input",
    placeholder: "Password",
    append: Form,
  });
  let submitButton = createElement({
    tag: "button",
    id: "login-submit-button",
    textContent: "Log In",
    append: Form,
  });
  let signupButton = createElement({id: "signup__btn", tag: "button",  textContent:  `Don't have an account yet? Sign Up`, append: Form})
  signupButton.addEventListener('click', () => {
    render(signupForm());
  })

  return Form;

  function signinHandler(e) {
    e.preventDefault();
    if (!emailInput.value || !passwordInput.value) return;

    chrome.runtime.sendMessage({type: "LOGIN", email: emailInput.value, password: passwordInput.value}, (res) => {
      if (res.status == "success") {

        // render welcome component
        render(welcome());

      }
    })


  }
}

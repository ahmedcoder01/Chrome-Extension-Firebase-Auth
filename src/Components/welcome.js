import { createElement, render } from "../utils";
import loginForm from "./Forms/login";
import "./welcome.css"

export default  function welcome() {

 function logoutHandler() {
  chrome.runtime.sendMessage({type: "LOGOUT"}, (res) => {
    if (res.status == "success") {
      render(loginForm())
    }
  })
 }



    const WelcomeModal = createElement({tag: "div", id: "welcome__msg"});
  const welcomeMsg = createElement({
    tag: "p",
    textContent: "Welcome, You're logged in",
    append: WelcomeModal,
  });
  const logoutBtn = createElement({
    tag: "button",
    textContent: "Log Out",
    append: WelcomeModal,
  });
  logoutBtn.addEventListener("click", logoutHandler)

  return  WelcomeModal;



}

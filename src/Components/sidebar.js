import { createElement } from "../utils";
import welcomeModal from "./welcome";
import signinForm from "./Forms/login";
import "./sidebar.css";


chrome.runtime.sendMessage({ type: "CHECK_AUTH"}, (res) => {
  populate(res.isAuth)
});


 function populate(isAuth) {

  if (isAuth) {
     createSidebar( welcomeModal());
  } else {
    createSidebar(signinForm());
  }

   function createSidebar(Component) {
    console.log(Component);
    const overlay = createElement({id: "extension__overlay", tag: "div"})
    //! this id is the root element that will render all changes
    const sidebar = createElement({id:"div",  id: "extension__root" });
    sidebar.appendChild( Component);
    overlay.appendChild(sidebar)
    document.body.appendChild(overlay);
  }

}

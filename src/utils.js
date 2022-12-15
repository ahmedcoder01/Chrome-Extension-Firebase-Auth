export function createElement({ tag = "div", append = null, ...props }) {
  let e = document.createElement(tag);

  for (let key in props) {
    e[key] = props[key];
  }

  if (append) append.append(e);

  return e;
}


export  function render(Component) {

  let root = document.querySelector('#extension__root');
   root.textContent = "";

  root.append(Component);

}

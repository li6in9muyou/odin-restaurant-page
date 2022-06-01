import { Home } from "./home";
import { Menu } from "./menu";
import { Contact } from "./contact";

function _Link(text, component) {
  const link = document.createElement("a");
  link.href = "";
  link.dataset.navLink = null;
  link.appendChild(document.createTextNode(text));
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    document
      .querySelector("[data-router-outlet]")
      .replaceChildren(...component());
  });
  return link;
}

const Link = (...args) => li(_Link(...args));

function li(node) {
  const tmp = document.createElement("li");
  tmp.appendChild(node);
  return tmp;
}

export function Nav() {
  const ul = document.createElement("ul");
  ul.dataset.nav = null;
  ul.append(Link("home", Home), Link("menu", Menu), Link("contact", Contact));

  window.addEventListener("load", () =>
    document.querySelector("[data-nav-link]").click()
  );

  const nav = document.createElement("nav");
  nav.appendChild(ul);
  return nav;
}

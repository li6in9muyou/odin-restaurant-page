function Home() {
  const tmp = document.createElement("h1");
  tmp.append(document.createTextNode("Some Doggy Friendly Restaurant"));
  const img = document.createElement("img");
  img.src = "https://images.dog.ceo/breeds/terrier-irish/n02093991_3952.jpg";

  return [tmp, img];
}

document.querySelector("[data-nav-home]").addEventListener("click", (ev) => {
  ev.preventDefault();
  document.querySelector("#content").replaceChildren(...Home());
});

window.addEventListener("load", () =>
  document.querySelector("[data-nav-home]").click()
);

function Menu() {
  const tmp = document.createElement("h1");
  tmp.append(document.createTextNode("Some meals"));
  const menu = document.createElement("ul");
  const menuItem = (name) => {
    const item = document.createElement("li");
    item.append(document.createTextNode(name));
    return item;
  };
  menu.append(
    menuItem("meal one"),
    menuItem("meal two"),
    menuItem("meal three"),
    menuItem("meal FOUR")
  );

  return [tmp, menu];
}

document.querySelector("[data-nav-menu]").addEventListener("click", (ev) => {
  ev.preventDefault();
  document.querySelector("#content").replaceChildren(...Menu());
});

function Contact() {
  const tmp = document.createElement("h1");
  tmp.append(document.createTextNode("Some Contact Infomation"));
  return [tmp, document.createTextNode("tel: 1234567890123")];
}

document.querySelector("[data-nav-contact]").addEventListener("click", (ev) => {
  ev.preventDefault();
  document.querySelector("#content").replaceChildren(...Contact());
});

export function Menu() {
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

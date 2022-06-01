export function Contact() {
  const tmp = document.createElement("h1");
  tmp.append(document.createTextNode("Some Contact Infomation"));
  return [tmp, document.createTextNode("tel: 1234567890123")];
}

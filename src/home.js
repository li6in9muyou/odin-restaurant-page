export function Home() {
  const tmp = document.createElement("h1");
  tmp.append(document.createTextNode("Some Doggy Friendly Restaurant"));
  const img = document.createElement("img");
  img.src = "https://images.dog.ceo/breeds/terrier-irish/n02093991_3952.jpg";

  return [tmp, img];
}

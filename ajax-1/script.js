let isContentVisible = false;

async function fetchData() {
  const divPoke = document.getElementById("pokemon");
  const buttonText = document.getElementById("button-text");

  isContentVisible = !isContentVisible;

  if (isContentVisible) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
      method: "GET",
    });

    const json = await response.json();
    let id = json.id;
    let name = json.name;
    let image = json.sprites.front_default;
    let types = json.types[0].type.name;

    let p1 = document.createElement("p");
    p1.innerHTML = `${id} : ${name}`;
    let img = document.createElement("img");
    img.src = `${image}`;
    let p2 = document.createElement("p");
    p2.innerHTML = `type: ${types}`;

    divPoke.innerHTML = "";
    divPoke.append(p1, img, p2);

    buttonText.innerText = "Hide";
  } else {
    divPoke.innerHTML = "";

    buttonText.innerText = "Get!";
  }
}

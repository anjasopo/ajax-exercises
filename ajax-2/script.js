let isContentVisible = false;

async function toggleData() {
  const divPoke = document.getElementById("pokemon");
  const button = document.querySelector("button");

  isContentVisible = !isContentVisible;

  if (isContentVisible) {
    button.innerText = "Hide";

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
      method: "GET",
    });

    const json = await response.json();
    const results = json.results;

    divPoke.innerHTML = "";

    results.forEach((e) => {
      let hasil = fetch(e.url, { method: "GET" })
        .then((res) => res.json())
        .then((res) => {
          let div = document.createElement("div");
          let p1 = document.createElement("p");
          p1.innerHTML = `${res.id} : ${res.name}`;
          let img = document.createElement("img");
          img.src = `${res.sprites.front_default} `;
          let p2 = document.createElement("p");
          p2.innerHTML = `type: ${res.types[0].type.name}`;

          div.append(p1, img, p2);
          divPoke.append(div);

          div.className = res.types[0].type.name;
        });
    });
  } else {
    button.innerText = "Get!";
    divPoke.innerHTML = "";
  }
}

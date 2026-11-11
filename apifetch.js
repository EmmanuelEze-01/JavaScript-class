 // an API (Application Programming Interface) is a set of rules and protocols that allows software applications to communoicate and exchange data with each other

// fetch = Function for making HTTP requests to fetch resources.
// (JSON style data, images, files)
//              simplifies asynchrinius data fecthing in javascript and used for interacting with APIs to retrieve and send data asynchronously over the web
// fetch(url, {method:  "GET" - (the default get resource)
//                      "POST" - (send data)
//                      "PUT"  -  (replace data)
//                      "DELETE" - (delete data)
//        })

// const apiKey = "1d823332c0fa7bbf93469a368458e118";
// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${apiKey}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("https://rickandmortyapi.com/api/character/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data.name));

//   .then((res) => res.json())
//   .then((data) => {
//     const character = data.results[3];

//     document.getElementById("name").textContent = character.name;
//     document.getElementById("location").textContent = character.location.name;
//     document.getElementById("img").src = character.image;
//   });

// async function getInfo() {
//   try {
//     const response = await fetch("https://rickandmortyapi.com/api/character/");

//     const data = await response.json();
//     const character = data.results[17];

//     document.getElementById("name").textContent = character.name;
//     document.getElementById("location").textContent = character.location.name;
//     document.getElementById("img").src = character.image;
//   } catch (err) {
//     console.log(err);
//   }
// }

// getInfo();

async function getPokemon(name) {
  try {
    let name = name;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Could find a Pokemon named ${name}, try a different name`,
      );
    }

    document.getElementById("pokemonName").textContent = data.name;
    document.getElementById("img2").src = data.sprites.front_default;
  } catch (err) {
    console.log(err);
  }
}

getPokemon();

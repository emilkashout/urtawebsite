//using urlparams so that from each piece we can go to its own page
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//ading id of one piece
const url = "https://keammd22-d907.restdb.io/rest/urtawebsite/" + id;
console.log(url);

//using apikey
const options = {
  headers: {
    "x-apikey": "6290d0e9ccc2033946f4ab72",
  },
};

//fetching data using url and apikey for access
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showPiece(data));

//creating a function so that our content is dynamic
function showPiece(piece) {
  console.log(piece);
  document.querySelector(".goldphoto").src = piece.url_gold_image;
  document.querySelector(".silverphoto").src = piece.url_silver_image;
  document.querySelector(".name").textContent = piece.name;
  document.querySelector(".category").textContent = piece.category;
  document.querySelector(".price_gold").textContent = "€" + piece.price_gold;
  document.querySelector(".paragraph_info").textContent = piece.paragraph_info;
  document.querySelector(".silver").textContent = "SILVER: " + piece.silver;
  document.querySelector(".gold_plated").textContent =
    "GOLD PLATED:" + piece.gold_plated;
  document.querySelector(".gold").textContent = "GOLD: " + piece.gold;
  document.querySelector(".circuit").textContent = "CIRCUIT: " + piece.circuit;
  document.querySelector(".weight").textContent = "WEIGHT: " + piece.weight;
}

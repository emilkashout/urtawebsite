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
}

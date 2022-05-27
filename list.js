const url = "https://keammd22-d907.restdb.io/rest/urtawebsite";

//using an apikey to acces all the data
const options = {
  headers: {
    "x-apikey": "6290d0e9ccc2033946f4ab72",
  },
};

//fetching data from url from restdb.io using apikey
fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    //console.log(data);
    handleData(data);
  });

function handleData(pieces) {
  pieces.forEach((piece) => {
    console.log(piece);
    //make a template - done
    //grab the template
    const template = document.querySelector(".onepiece").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("img").src = piece.url_gold_image;
    copy.querySelector("h2").textContent = piece.name;
    copy.querySelector("h3").textContent = piece.category;
    copy.querySelector("h4").textContent = "€" + piece.price_gold;
    //grab parent
    const parent = document.querySelector("main");
    //append it
    parent.appendChild(copy);
  });
}

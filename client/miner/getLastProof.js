const axios = require("axios");
const { devinToken, sethToken, nazifaToken } = require("../utils/tokens.js");

function getLastProof(authToken) {
  //initialize
  axios({
    method: "get",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/bc/last_proof/",
    headers: {
      Authorization: `Token ${authToken}`
    }
  })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.Error));
}

if (process.argv[2] === "devin") {
  getLastProof(devinToken);
}

if (process.argv[2] === "seth") {
  getLastProof(sethToken);
}

if (process.argv[2] === "nazifa") {
  getLastProof(nazifaToken);
}

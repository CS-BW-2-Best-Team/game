
def get(authToken, itemName) {
  //initialize
  axios({
    method: "post",
    url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/take/",
    headers: {
      Authorization: `Token ${authToken}`
    },
    data: {
      name: itemName
    }
  })
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err.Error));
}

async function pickUp(authToken, itemName) {
  const result = await get(authToken, itemName);
  await sleep(result.cooldown * 1000);
  return result;
}

module.exports = { pickUp };

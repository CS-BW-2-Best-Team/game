//name location by room number then bfs on map to get list of direction, then set interval with list of directions
//[{next_room_id: blah, direction: blah}]
//set interval with a faster cooldown.
const { devinToken, sethToken, nazifaToken } = require("../utils/tokens.js");
const axios = require("axios");
const { map } = require("../utils/map.js");

function goToGetDirections(startingRoomNumber, target) {
  //bfs to find directions using map
  let queue = [{ roomNumber: startingRoomNumber, directions: [] }];
  let roomSet = new Set();
  let directions;
  while (queue.length > 0) {
    let current = queue.shift();

    if (current.roomNumber === target) {
      directions = current.directions;
      break;
    }

    //mark it as visited
    roomSet.add(current.roomNumber);

    let mapCurrent = map[current.roomNumber];

    //add unvisted neighbors to queue - exits: {n: blah}
    for (let exit in mapCurrent.exits) {
      //if exit from current's exits is not visited ie not in set
      if (!roomSet.has(mapCurrent.exits[exit])) {
        queue.push({
          roomNumber: mapCurrent.exits[exit],
          directions: [...current.directions, exit]
        });
      }
    }
  }
  return directions;
}

function goToRoom(currentRoomNumber, directions, authToken) {
  let timeOutAmount = 15000;
  //Waiting the desired amount before our next request
  let intervalId = setInterval(() => {
    console.log(
      "starting room",
      currentRoomNumber,
      "starting directions",
      directions
    );
    console.log(map[currentRoomNumber].exits[directions[0]]);
    console.log(directions[0]);
    //make the request
    axios({
      method: "post",
      url: "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
      headers: {
        Authorization: `Token ${authToken}`
      },
      data: {
        next_room_id: `${map[currentRoomNumber].exits[directions[0]]}`,
        direction: directions[0]
      }
    })
      .then(res => {
        console.log("RESRESRES", res.data);
        //get next room Number
        currentRoomNumber = res.data.room_id;

        directions.shift();
        //change timeOutAmount due to cooldown
        timeOutAmount = (res.data.cooldown + 0.5) * 1000;
      })
      .catch(err => console.log(err));
  }, timeOutAmount);
}

// let startingRoomNumber = getStartingRoom(authToken);
// console.log(startingRoomNumber);

if (process.argv[2] === "devin") {
  let startingRoomNumber = Number(process.argv[3]);
  let targetRoomNumber = Number(process.argv[4]);
  console.log(startingRoomNumber, targetRoomNumber);
  let currentDirections = goToGetDirections(
    startingRoomNumber,
    targetRoomNumber
  );
  console.log(currentDirections);
  goToRoom(startingRoomNumber, currentDirections, devinToken);
}

if (process.argv[2] === "seth") {
  let startingRoomNumber = Number(process.argv[3]);
  let targetRoomNumber = Number(process.argv[4]);
  console.log(startingRoomNumber, targetRoomNumber);
  let currentDirections = goToGetDirections(
    startingRoomNumber,
    targetRoomNumber
  );
  console.log(currentDirections);
  goToRoom(startingRoomNumber, currentDirections, sethToken);
}

if (process.argv[2] === "nazifa") {
  let startingRoomNumber = Number(process.argv[3]);
  let targetRoomNumber = Number(process.argv[4]);
  console.log(startingRoomNumber, targetRoomNumber);
  let currentDirections = goToGetDirections(
    startingRoomNumber,
    targetRoomNumber
  );
  console.log(currentDirections);
  goToRoom(startingRoomNumber, currentDirections, nazifaToken);
}

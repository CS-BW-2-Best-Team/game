import json
from move import move
from get_current_location import get_current_location
import sys
sys.path.insert(1, "../utils")
from save_map import save_map
import time
import datetime

def reverseDirection(direction):
  if direction == "n":
    return "s"
  elif direction == "s": 
    return "n"
  elif direction == "e": 
    return "w"
  elif direction == "w": 
    return "e"
  else: 
    return "Incorrect Direction yo!"
  
def formatExits(exitsArray): 
  exitsObject = {}
  for e in exitsArray:
    exitsObject[e] = "?"
  return exitsObject


def create_map(authToken):
  start_time = time.time() 
  #set some global variables
  startingInfo = get_current_location(authToken)
  currentRoomNumber = startingInfo["room_id"]

  _map = {}
  visitedRooms = set()
  currentDirections = []
  direction = ""
  nextRoomObject = {}

  #Adding first room to map and modifying the exits accordinly
  _map[currentRoomNumber] = {**startingInfo}
  _map[currentRoomNumber]["exits"] = formatExits(startingInfo["exits"])

  #add room to visited rooms
  visitedRooms.add(currentRoomNumber)

  #blank if we don't know the room
  nextRoomObject = {}

  #setting exits to current exits so short writing
  exits = _map[currentRoomNumber]["exits"]

  if "n" in exits and exits["n"] == "?": 
    currentDirections.append("n")
    nextDirection = "n"
  elif "s" in exits and exits["s"] == "?": 
    currentDirections.append("s")
    nextDirection = "s"
  elif "e" in exits and exits["e"] == "?": 
    currentDirections.append("e")
    nextDirection = "e"
  elif "w" in exits and exits["w"] == "?": 
    currentDirections.append("w")
    nextDirection = "w"
  else:
    lastDirection = currentDirections.pop()
    nextDirection = reverseDirection(lastDirection)
  
  while (len(visitedRooms) < 500):
    nextRoomData = move(authToken, nextDirection, nextRoomObject)
    newRoomID = nextRoomData["room_id"]

    if (newRoomID not in _map): 
      # initializing room in map
      _map[newRoomID] =  {**nextRoomData} 

      # ["n", "s"] => "n": "?"
      _map[newRoomID]["exits"] = formatExits(_map[newRoomID]["exits"])

    # add this new room to the old room's exits
    _map[newRoomID]["exits"][reverseDirection(nextDirection)] = currentRoomNumber

    # add the old room to the new room's exits
    _map[currentRoomNumber]["exits"][nextDirection] = newRoomID
    
    currentRoomNumber = newRoomID

    #add room to visited rooms
    visitedRooms.add(currentRoomNumber)

    #blank if we don't know the room
    nextRoomObject = {}

    #setting exits to current exits so short writing
    exits = _map[currentRoomNumber]["exits"]

    if "n" in exits and exits["n"] == "?": 
      currentDirections.append("n")
      nextDirection = "n"
    elif "s" in exits and exits["s"] == "?": 
      currentDirections.append("s")
      nextDirection = "s"
    elif "e" in exits and exits["e"] == "?": 
      currentDirections.append("e")
      nextDirection = "e"
    elif "w" in exits and exits["w"] == "?": 
      currentDirections.append("w")
      nextDirection = "w"
    else: 
      lastDirection = currentDirections.pop()
      nextDirection = reverseDirection(lastDirection)

      nextRoomObject = {"next_room_id": str(_map[currentRoomNumber]["exits"][nextDirection])}
    
    save_map(_map)
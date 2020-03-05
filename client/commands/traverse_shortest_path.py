import sys
from move import move
from get_current_location import get_current_location
sys.path.append("../utils/")
from find_shortest_path import find_shortest_path

def traverse_shortest_path(_map, token, target_room_number):
    #get current room number
    current_room_number = get_current_location(token)["room_id"]
    
    #find shortest path to 467
    directions = find_shortest_path(_map, current_room_number, target_room_number)

    #go that path
    while len(directions) > 0:
        next_direction = directions.pop(0)
        next_room_data = move(token, next_direction, {"next_room_id": str(_map[current_room_number]["exits"][next_direction])})
        current_room_number = next_room_data["room_id"]
    
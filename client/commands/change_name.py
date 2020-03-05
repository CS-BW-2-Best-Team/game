import requests
import time
import json
import sys
from move import move
from get_current_location import get_current_location
sys.path.append("../utils/")
from find_shortest_path import find_shortest_path
from tokens import devinToken
from _map import _map

def change_name_request(token, name):
    r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'}, json={'name':f'{name}','confirm':'aye'})
    
    data = r.json()

    time.sleep(data["cooldown"])
    return data

def change_name(_map, token, name):
    #get current room number
    current_room_number = get_current_location(token)["room_id"]
    
    #find shortest path to 467
    directions = find_shortest_path(_map, current_room_number, 467)

    #go that path
    while len(directions) > 0:
        next_direction = directions.pop(0)
        next_room_data = move(token, next_direction, {"next_room_id": str(_map[current_room_number]["exits"][next_direction])})
        current_room_number = next_room_data["room_id"]
    
    #send request
    return change_name_request(token, name)

print(change_name(_map, devinToken, "The Chicken Killer"))
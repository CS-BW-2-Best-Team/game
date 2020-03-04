#for now use map from map.py
import sys
import random
from move import move
from check_inventory import check_inventory
from get_current_location import get_current_location
from pick_up import pick_up
from sell_items import sell_items
sys.path.append("../utils/")
from _map import _map
from find_shortest_path import find_shortest_path
from tokens import nazifaToken

#helper function findShortestPathInDirections(startingRoom, targetRoom < 200)
print(find_shortest_path(_map, 1, 100))

def get_items_worth(items_list):
    items_dict = {
        "small treasure": 200,
        "tiny treasure": 100,
        "shiny treasure": 300,
        "great treasure": 400,
        "amazing treasure": 500
    }

    worth = 0

    for item in items_list:
        worth += items_dict[item]
    return worth

def get_gold(authToken, amount=1000):
    #get items first
    my_items = check_inventory(authToken)["inventory"]
    
    #get starting room
    current_room = get_current_location(authToken)["room_id"]
    
    directions = find_shortest_path(_map, current_room, random.randint(1,200))
    
    while get_items_worth(my_items) < amount:
        print(my_items)
        if len(directions) == 0:
            directions = find_shortest_path(_map, current_room, random.randint(1,200))

        #move
        next_direction = directions.pop(0)
        current_room_data = move(authToken, next_direction, {"next_room_id": str(_map[current_room]["exits"][next_direction])})
        
        current_room = current_room_data["room_id"]
        current_room_items = current_room_data["items"]

        #if items pick up
        for item in current_room_items:
            pick_up_data = pick_up(authToken, item)
            my_items.append(item)

    directions_to_shop = find_shortest_path(_map, current_room, 1)
    #go to shop
    while len(directions_to_shop) != 0:
        print("going to shop!")
        next_direction = directions_to_shop.pop(0)
        move_to_shop_data = move(authToken, next_direction, {"next_room_id": str(_map[current_room]["exits"][next_direction])})
        current_room = move_to_shop_data["room_id"]

    sell_items(authToken, my_items)

    print(check_inventory(authToken))

    

get_gold(nazifaToken)
import requests
import time
import json
import sys
from move import move
from get_current_location import get_current_location
from traverse_shortest_path import traverse_shortest_path
sys.path.append("../utils/")
from tokens import nazifaToken
from _map import _map

def change_name_request(token, name):
    r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'}, json={'name':f'{name}','confirm':'aye'})
    
    data = r.json()

    time.sleep(data["cooldown"])
    return data

def change_name(_map, token, name):
    traverse_shortest_path(_map, token, 467)
    
    #send request
    return change_name_request(token, name)


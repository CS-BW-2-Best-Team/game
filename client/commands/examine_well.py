import requests
import time
import json
from traverse_shortest_path import traverse_shortest_path
import sys
sys.path.append("../utils/")
from tokens import nazifaToken
from _map import _map

def examine_request(token):
    r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'}, json={"name": "well"})
    
    data = r.json()

    time.sleep(data["cooldown"])
    return data

def examine_well(_map, token):
  #traverse shortest path to 55
  traverse_shortest_path(_map, token, 55)

  #examine request and return data
  return examine_request(token)

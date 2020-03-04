import requests
import time
import json

def sell_items(token):
    r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/", headers={'Content-Type': 'application/json',
               'Authorization': f'Token {token}'}, data = {'name': 'tiny treasuer', 'confirm':'yes'})
    
    data = r.json()

    time.sleep(data["cooldown"])
    return data


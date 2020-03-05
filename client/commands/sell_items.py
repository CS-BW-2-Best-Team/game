import requests
import time
import json

def sell_items(token, items):
    for item in items:
        r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'}, json={'name': f'{item}', 'confirm':'yes'})
        
        data = r.json()

        time.sleep(data["cooldown"])
    


import requests
import time
import json

def check_inventory(token):
    r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/status/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'})
    data = r.json()

    time.sleep(data["cooldown"])
    return data


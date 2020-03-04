import requests
import time
import json

def examine(token):
    r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/examine/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'}, json={
      name: "well"
    })
    
    data = r.json()

    time.sleep(data["cooldown"])
    return data


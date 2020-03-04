import requests
import time
import json

def change_name(token):
    r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/change_name/", headers={'Content-Type': 'application/json',
               'Authorization': f'Token {token}'}, data = {'confirm':'aye'})
    
    data = r.json()

    time.sleep(data["cooldown"])
    return data


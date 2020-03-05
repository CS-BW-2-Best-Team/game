import requests
import time
import json

def get_current_location(token):
    try:
        r = requests.get("https://lambda-treasure-hunt.herokuapp.com/api/adv/init/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'})
    except requests.exceptions.RequestException as e:  # This is the correct syntax
        print(e)
    
    data = r.json()

    time.sleep(data["cooldown"])
    return data


import requests, time, json

def move(authToken, direction, nextRoomObject):
    try:
        r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", headers={'Content-Type': 'application/json',
               'Authorization': f'Token {authToken}'}, json={"direction": direction, **nextRoomObject})
    except requests.exceptions.RequestException as e:  # This is the correct syntax
        print(e)
    
    data = r.json()
    print(f"sleeping for {data['cooldown']}")
    time.sleep(data["cooldown"])
    return data
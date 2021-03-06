import requests, time, json

def move(authToken, direction, nextRoomObject):
    try:
        r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", headers={'Content-Type': 'application/json','Authorization': f'Token {authToken}'}, json={"direction": direction, **nextRoomObject})
    except requests.exceptions.RequestException as e:  # This is the correct syntax
        print(e)
    try:
        data = r.json()
    except:
        print("data can't convert to json")
        print("data is ", data)
    
    time.sleep(data["cooldown"])
    return data
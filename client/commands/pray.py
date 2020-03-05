import requests, time, json

def pray(token):
    try:
        r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/pray/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'})
    except requests.exceptions.RequestException as e:  # This is the correct syntax
        print(e)
    
    try:
        data = r.json()
    except:
        print("data can't convert to json")
        print("data is ", data)
    
    time.sleep(data["cooldown"])
    return data
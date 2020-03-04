import requests, json, time
def pick_up(authToken, itemName):
  r = requests.post("https://lambda-treasure-hunt.herokuapp.com/api/adv/take/", headers={'Content-Type': 'application/json',
               'Authorization': f'Token {authToken}'}, json={"name": itemName})
  
  data = r.json()
  
  time.sleep(data["cooldown"])
  return data
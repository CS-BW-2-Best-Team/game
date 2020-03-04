import requests, json, time

def get_coin_balance(authToken):
  r = requests.get("https://lambda-treasure-hunt.herokuapp.com/api/bc/get_balance/", headers={'Content-Type': 'application/json','Authorization': f'Token {token}'})

  data = r.json()

  time.sleep(data["cooldown"])
  return data
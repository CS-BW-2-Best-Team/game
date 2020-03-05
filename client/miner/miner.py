import hashlib
import requests
from requests.auth import HTTPBasicAuth
import sys
import json
import random
import time

def proof_of_work(last_proof, difficulty):
    proof = 0
    while valid_proof(last_proof, proof, difficulty) is False:
        proof += random.randint(1,100)
    return proof
    
def valid_proof(last_proof, proof, difficulty):
    guess = f"{last_proof}{proof}".encode()
    guess_hash = hashlib.sha256(guess).hexdigest()

    return guess_hash[:difficulty] == "0" * difficulty
    

def mine_coin(token):
    node = "https://lambda-treasure-hunt.herokuapp.com/api/bc/"

    # Run forever until interrupted
    while True:
        r = requests.get(url=node + "last_proof/", headers={'Content-Type': 'application/json',"Authorization":f"Token {token}"})

        try:
            data = r.json()
            print(data)
        except ValueError:
            print("Error:  Non-json response")
            print("Response returned:")
            print(r)
            break

        time.sleep(data["cooldown"])
        
        
        start_time = time.time()
        new_proof = proof_of_work(data["proof"], int(data["difficulty"]))

        r = requests.post(url=node + "mine/", headers={'Content-Type': 'application/json',"Authorization":f"Token {token}"}, json={"proof":new_proof})
        
        try:
            data = r.json()
            print("data from mining", data)
            time.sleep(data["cooldown"])

        except ValueError:
            print("Error:  Non-json response")
            print("Response returned:")
            print(r)

        if data["messages"][0] == "New Block Forged":
            print("GOT YOUR COIN")
            break
        

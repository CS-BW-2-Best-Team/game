import json
from create_map import create_map
import sys
sys.path.insert(1, "../utils")
from save_map import save_map
from tokens import sethToken

def get_map(authToken):
    #get map file - return map as dictionary
    try:
        with open("../utils/map.txt") as json_file:
            print("the file exists!")
            data = json.load(json_file)
            return data
    except FileNotFoundError:
        print("that file doesn't exist!")
        #do all the stuff to make a map
        #return map from explore function or read from here after exploring
        create_map(authToken)
        get_map(authToken)

get_map(sethToken)
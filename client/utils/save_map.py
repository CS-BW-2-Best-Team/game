import json

def save_map(_map):
    with open("../utils/map.txt", "w") as outfile:
        json.dump(_map, outfile)

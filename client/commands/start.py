from get_map import get_map
from get_gold import get_gold
from change_name import change_name
from examine_well import examine_well
#testing below
import sys
import time
import datetime
from get_coin_balance import get_coin_balance
from traverse_shortest_path import traverse_shortest_path
sys.path.append("../utils/")
from tokens import sethToken
sys.path.append("../cpu/")
from get_room_from_message import get_room_from_message
sys.path.append("../miner/")
from miner import mine_coin

def get_coin(token, new_name):
    start_time = time.time()
    print("Building the map!")
    _map = get_map(token)
    print("Getting Gold!")
    get_gold(token, amount=1000)
    print("Changing my Name!")
    change_name(_map, token, new_name)
    print("Getting the message!")
    message = examine_well(_map, token)["description"]
    print("Decrypting the message!")
    room_number = get_room_from_message(message)
    print("Moving the room to mine!")
    traverse_shortest_path(_map, token, int(room_number))
    print("Mining!")
    mine_coin(token)
    print(f"It took us {datetime.timedelta(seconds=(time.time() - start_time))} to mine one coin from start to finish!")

print(get_coin_balance(sethToken))
get_coin(sethToken, "The Cajoling Man")
print(get_coin_balance(sethToken))
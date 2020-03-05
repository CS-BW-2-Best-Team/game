import json
def write_to_ls8(message):
    with open("../cpu/message.ls8", "w") as f:
        f.write(message)


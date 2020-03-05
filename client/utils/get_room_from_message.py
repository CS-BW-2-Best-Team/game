from io import StringIO
import sys
import re
sys.path.append("../cpu/")
from cpu import CPU
from write_to_ls8 import write_to_ls8

def get_room_from_message(message):
    stdout = sys.stdout
    s = StringIO()
    sys.stdout = s
    
    #write message to ls8
    write_to_ls8(message)

    #print stuff via cpu
    cpu = CPU()
    cpu.load("../cpu/message.ls8")
    cpu.run()
    
    #getting string from print
    sys.stdout = stdout
    s.seek(0)
    #get room number from string
    joined_string = "".join(s.read().split("\n"))
    return re.search(r'([0-9]+)',joined_string).group(0)
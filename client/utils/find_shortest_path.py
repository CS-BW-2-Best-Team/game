def find_shortest_path(_map, start, end):
  #bfs to find directions using map
  queue = [{ "roomNumber": start, "directions": [] }]
  roomSet = set()
  while (len(queue) >  0): 
    current = queue.pop(0)

    if current["roomNumber"] == end:
      directions = current["directions"]
      break
    
    #mark it as visited
    roomSet.add(current["roomNumber"])

    mapCurrent = _map[current["roomNumber"]]

    # add unvisted neighbors to queue - exits: {n: blah}
    for e in mapCurrent["exits"]:
    #  if exit from current's exits is not visited ie not in set
      if mapCurrent["exits"][e] not in roomSet:
        queue.append({
          "roomNumber": mapCurrent["exits"][e],
          "directions": [*current["directions"], e]
        })
      
  return directions
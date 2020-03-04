let map = {
  "0": {
    title: "A brightly lit room",
    exits: { n: 10, s: 2, e: 4, w: 1 },
    description:
      "You are standing in the center of a brightly lit room. You notice a shop to the west andexits to the north, south and east."
  },
  "1": {
    title: "Shop",
    exits: { e: 0 },
    description:
      "You are standing in a small shop. A signbehind the mechanical shopkeeper says 'WILL PAY FOR TREASURE'."
  },
  "2": {
    title: "A misty room",
    exits: { n: 0, s: 6, e: 3 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "3": {
    title: "Mt. Holloway",
    exits: { s: 9, e: 5, w: 2 },
    description: "You are at the base of a large, looming mountain."
  },
  "4": {
    title: "A misty room",
    exits: { n: 23, e: 13, w: 0 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "5": {
    title: "A misty room",
    exits: { w: 3 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "6": {
    title: "A misty room",
    exits: { n: 2, w: 7 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "7": {
    title: "A misty room",
    exits: { n: 8, e: 6, w: 56 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "8": {
    title: "A misty room",
    exits: { s: 7, w: 16 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "9": {
    title: "Mt. Holloway",
    exits: { n: 3, s: 12, e: 11 },
    description: "You are on the side of a steep incline."
  },
  "10": {
    title: "A misty room",
    exits: { n: 19, s: 0, w: 43 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "11": {
    title: "Mt. Holloway",
    exits: { e: 17, w: 9 },
    description: "You are at the base of a large, looming mountain."
  },
  "12": {
    title: "Mt. Holloway",
    exits: { n: 9, s: 18, e: 14, w: 21 },
    description: "You are on the side of a steep incline."
  },
  "13": {
    title: "A misty room",
    exits: { e: 15, w: 4 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "14": {
    title: "Mt. Holloway",
    exits: { s: 34, e: 37, w: 12 },
    description: "You are on the side of a steep incline."
  },
  "15": {
    title: "A misty room",
    exits: { w: 13 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "16": {
    title: "A misty room",
    exits: { n: 58, e: 8, w: 67 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "17": {
    title: "A misty room",
    exits: { n: 24, e: 42, w: 11 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "18": {
    title: "Mt. Holloway",
    exits: { n: 12, s: 22, w: 25 },
    description: "You are on the side of a steep incline."
  },
  "19": {
    title: "A misty room",
    exits: { n: 20, s: 10, w: 77 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "20": {
    title: "A misty room",
    exits: { n: 63, s: 19, e: 27, w: 46 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "21": {
    title: "Mt. Holloway",
    exits: { e: 12, w: 29 },
    description: "You are on the side of a steep incline."
  },
  "22": {
    title: "The Peak of Mt. Holloway",
    exits: { n: 18, s: 78, w: 36 },
    description:
      "You are standing at the zenith of Mt. Holloway. You see before you a holy shrine erectedin the image of a magnificent winged deity."
  },
  "23": {
    title: "A misty room",
    exits: { s: 4, e: 26 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "24": {
    title: "A misty room",
    exits: { s: 17 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "25": {
    title: "Mt. Holloway",
    exits: { e: 18 },
    description: "You are on the side of a steep incline."
  },
  "26": {
    title: "A misty room",
    exits: { e: 55, w: 23 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "27": {
    title: "A misty room",
    exits: { n: 40, s: 28, e: 30, w: 20 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "28": {
    title: "A misty room",
    exits: { n: 27 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "29": {
    title: "Mt. Holloway",
    exits: { s: 45, e: 21, w: 49 },
    description: "You are at the base of a large, looming mountain."
  },
  "30": {
    title: "A misty room",
    exits: { s: 31, e: 32, w: 27 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "31": {
    title: "A misty room",
    exits: { n: 30, e: 33 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "32": {
    title: "A misty room",
    exits: { n: 39, e: 54, w: 30 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "33": {
    title: "A misty room",
    exits: { e: 38, w: 31 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "34": {
    title: "Mt. Holloway",
    exits: { n: 14, s: 50, e: 35 },
    description: "You are at the base of a large, looming mountain."
  },
  "35": {
    title: "A misty room",
    exits: { s: 52, w: 34 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "36": {
    title: "Mt. Holloway",
    exits: { s: 48, e: 22, w: 60 },
    description: "You are on the side of a steep incline."
  },
  "37": {
    title: "Mt. Holloway",
    exits: { w: 14 },
    description: "You are at the base of a large, looming mountain."
  },
  "38": {
    title: "A misty room",
    exits: { s: 59, e: 66, w: 33 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "39": {
    title: "A misty room",
    exits: { n: 53, s: 32, e: 51, w: 41 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "40": {
    title: "A misty room",
    exits: { s: 27 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "41": {
    title: "A misty room",
    exits: { e: 39 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "42": {
    title: "A misty room",
    exits: { n: 44, s: 80, e: 118, w: 17 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "43": {
    title: "A misty room",
    exits: { e: 10, w: 47 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "44": {
    title: "A misty room",
    exits: { s: 42 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "45": {
    title: "Mt. Holloway",
    exits: { n: 29, s: 60 },
    description: "You are on the side of a steep incline."
  },
  "46": {
    title: "A misty room",
    exits: { e: 20, w: 62 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "47": {
    title: "A misty room",
    exits: { n: 71, e: 43 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "48": {
    title: "Mt. Holloway",
    exits: { n: 36, s: 105, w: 149 },
    description: "You are on the side of a steep incline."
  },
  "49": {
    title: "A misty room",
    exits: { s: 79, e: 29, w: 136 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "50": {
    title: "A misty room",
    exits: { n: 34, s: 89 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "51": {
    title: "A misty room",
    exits: { n: 69, e: 57, w: 39 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "52": {
    title: "A misty room",
    exits: { n: 35, s: 68, e: 75 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "53": {
    title: "A misty room",
    exits: { n: 95, s: 39, w: 88 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "54": {
    title: "A misty room",
    exits: { w: 32 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "55": {
    title: "Wishing Well",
    exits: { w: 26 },
    description:
      "You are standing besides a large well. Asign next the well reads 'EXAMINE WELL, FIND WEALTH'."
  },
  "56": {
    title: "A misty room",
    exits: { e: 7, w: 61 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "57": {
    title: "A misty room",
    exits: { e: 145, w: 51 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "58": {
    title: "A misty room",
    exits: { s: 16, w: 65 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "59": {
    title: "A misty room",
    exits: { n: 38, s: 104, e: 92 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "60": {
    title: "Mt. Holloway",
    exits: { n: 45, e: 36, w: 70 },
    description: "You are on the side of a steep incline."
  },
  "61": {
    title: "A misty room",
    exits: { e: 56, w: 171 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "62": {
    title: "A misty room",
    exits: { n: 64, e: 46, w: 84 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "63": {
    title: "A misty room",
    exits: { n: 72, s: 20, w: 73 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "64": {
    title: "A misty room",
    exits: { s: 62, w: 82 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "65": {
    title: "A misty room",
    exits: { n: 74, e: 58, w: 139 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "66": {
    title: "A misty room",
    exits: { n: 169, e: 123, w: 38 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "67": {
    title: "A misty room",
    exits: { e: 16, w: 162 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "68": {
    title: "A misty room",
    exits: { n: 52, e: 100 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "69": {
    title: "A misty room",
    exits: { n: 94, s: 51, e: 103 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "70": {
    title: "Mt. Holloway",
    exits: { s: 163, e: 60, w: 98 },
    description: "You are on the side of a steep incline."
  },
  "71": {
    title: "A misty room",
    exits: { s: 47 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "72": {
    title: "A misty room",
    exits: { s: 63, w: 76 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "73": {
    title: "A misty room",
    exits: { e: 63 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "74": {
    title: "A misty room",
    exits: { n: 87, s: 65, w: 161 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "75": {
    title: "A misty room",
    exits: { e: 85, w: 52 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "76": {
    title: "A misty room",
    exits: { n: 83, e: 72, w: 110 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "77": {
    title: "A misty room",
    exits: { e: 19 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "78": {
    title: "Mt. Holloway",
    exits: { n: 22, s: 108 },
    description: "You are on the side of a steep incline."
  },
  "79": {
    title: "A misty room",
    exits: { n: 49 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "80": {
    title: "A misty room",
    exits: { n: 42, s: 81, e: 86 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "81": {
    title: "A misty room",
    exits: { n: 80 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "82": {
    title: "A misty room",
    exits: { n: 191, e: 64 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "83": {
    title: "A misty room",
    exits: { s: 76, e: 130, w: 125 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "84": {
    title: "A misty room",
    exits: { e: 62, w: 91 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "85": {
    title: "A misty room",
    exits: { e: 154, w: 75 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "86": {
    title: "A misty room",
    exits: { s: 96, e: 90, w: 80 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "87": {
    title: "A misty room",
    exits: { s: 74 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "88": {
    title: "A misty room",
    exits: { e: 53, w: 122 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "89": {
    title: "Mt. Holloway",
    exits: { n: 50, s: 93 },
    description: "You are at the base of a large, looming mountain."
  },
  "90": {
    title: "A misty room",
    exits: { e: 178, w: 86 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "91": {
    title: "A misty room",
    exits: { n: 180, s: 101, e: 84, w: 99 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "92": {
    title: "A misty room",
    exits: { w: 59 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "93": {
    title: "Mt. Holloway",
    exits: { n: 89, w: 108 },
    description: "You are on the side of a steep incline."
  },
  "94": {
    title: "A misty room",
    exits: { n: 152, s: 69 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "95": {
    title: "A misty room",
    exits: { n: 119, s: 53, w: 115 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "96": {
    title: "A misty room",
    exits: { n: 86, e: 97 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "97": {
    title: "A misty room",
    exits: { e: 181, w: 96 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "98": {
    title: "Mt. Holloway",
    exits: { n: 102, s: 126, e: 70, w: 109 },
    description: "You are at the base of a large, looming mountain."
  },
  "99": {
    title: "A misty room",
    exits: { n: 190, e: 91, w: 146 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "100": {
    title: "A misty room",
    exits: { s: 106, e: 112, w: 68 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "101": {
    title: "A misty room",
    exits: { n: 91, w: 113 },
    description:
      "You are standing on grass and surrounded by a dense mist. You can barely make out the exits in any direction."
  },
  "102": {
    title: "A misty room",
    exits: { s: 98, w: 142 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "103": {
    title: "A misty room",
    exits: { n: 160, w: 69 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "104": {
    title: "A misty room",
    exits: { n: 59, e: 107 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exi ts in any direction."
  },
  "105": {
    title: "Mt. Holloway",
    exits: { n: 48, w: 202 },
    description: "You are on the side of a steep incline."
  },
  "106": {
    title: "A misty room",
    exits: { n: 100, s: 111, w: 135 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "107": {
    title: "A misty room",
    exits: { s: 120, e: 121, w: 104 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "108": {
    title: "Mt. Holloway",
    exits: { n: 78, s: 117, e: 93 },
    description: "You are on the side of a steep incline."
  },
  "109": {
    title: "A misty room",
    exits: { s: 185, e: 98, w: 175 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "110": {
    title: "A misty room",
    exits: { e: 76 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "111": {
    title: "A misty room",
    exits: { n: 106, s: 367, e: 158 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "112": {
    title: "A misty room",
    exits: { s: 141, e: 140, w: 100 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "113": {
    title: "A misty room",
    exits: { s: 114, e: 101 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "114": {
    title: "A misty room",
    exits: { n: 113, w: 176 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "115": {
    title: "A misty room",
    exits: { n: 116, e: 95 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "116": {
    title: "A misty room",
    exits: { n: 132, s: 115 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "117": {
    title: "Mt. Holloway",
    exits: { n: 108, s: 131, e: 166, w: 133 },
    description: "You are on the side of a steep incline."
  },
  "118": {
    title: "A misty room",
    exits: { e: 137, w: 42 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "119": {
    title: "A misty room",
    exits: { n: 134, s: 95 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "120": {
    title: "A misty room",
    exits: { n: 107, e: 127 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "121": {
    title: "A misty room",
    exits: { n: 128, e: 143, w: 107 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "122": {
    title: "A misty room",
    exits: { n: 124, e: 88 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "123": {
    title: "A misty room",
    exits: { w: 66 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "124": {
    title: "A misty room",
    exits: { n: 157, s: 122 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "125": {
    title: "A misty room",
    exits: { n: 165, e: 83, w: 237 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "126": {
    title: "A misty room",
    exits: { n: 98, s: 129 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "127": {
    title: "A misty room",
    exits: { e: 184, w: 120 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "128": {
    title: "A misty room",
    exits: { s: 121, e: 189 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "129": {
    title: "A misty room",
    exits: { n: 126, e: 194, w: 170 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "130": {
    title: "A misty room",
    exits: { w: 83 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "131": {
    title: "Mt. Holloway",
    exits: { n: 117, s: 244, w: 138 },
    description: "You are at the base of a large, looming mountain."
  },
  "132": {
    title: "A misty room",
    exits: { s: 116 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "133": {
    title: "Mt. Holloway",
    exits: { e: 117, w: 173 },
    description: "You are at the base of a large, looming mountain."
  },
  "134": {
    title: "A misty room",
    exits: { n: 147, s: 119, e: 144 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "135": {
    title: "A misty room",
    exits: { s: 150, e: 106 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "136": {
    title: "A misty room",
    exits: { e: 49, w: 148 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "137": {
    title: "A misty room",
    exits: { w: 118 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "138": {
    title: "A misty room",
    exits: { s: 211, e: 131, w: 195 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "139": {
    title: "A misty room",
    exits: { e: 65, w: 188 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "140": {
    title: "A misty room",
    exits: { w: 112 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "141": {
    title: "A misty room",
    exits: { n: 112, e: 156 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "142": {
    title: "A misty room",
    exits: { e: 102, w: 159 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "143": {
    title: "A misty room",
    exits: { e: 212, w: 121 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "144": {
    title: "A misty room",
    exits: { e: 155, w: 134 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "145": {
    title: "A misty room",
    exits: { n: 174, e: 220, w: 57 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "146": {
    title: "A misty room",
    exits: { n: 215, s: 177, e: 99, w: 257 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "147": {
    title: "A misty room",
    exits: { n: 200, s: 134, e: 153, w: 151 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "148": {
    title: "A misty room",
    exits: { e: 136, w: 292 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "149": {
    title: "Mt. Holloway",
    exits: { e: 48 },
    description: "You are on the side of a steep incline."
  },
  "150": {
    title: "A misty room",
    exits: { n: 135, w: 166 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "151": {
    title: "A misty room",
    exits: { n: 172, e: 147, w: 207 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "152": {
    title: "A misty room",
    exits: { s: 94 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "153": {
    title: "A misty room",
    exits: { e: 329, w: 147 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "154": {
    title: "A misty room",
    exits: { e: 193, w: 85 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "155": {
    title: "A misty room",
    exits: { s: 187, e: 316, w: 144 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "156": {
    title: "A misty room",
    exits: { s: 168, e: 164, w: 141 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "157": {
    title: "A misty room",
    exits: { n: 210, s: 124, w: 182 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "158": {
    title: "A misty room",
    exits: { s: 167, w: 111 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "159": {
    title: "A misty room",
    exits: { e: 142, w: 196 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "160": {
    title: "A misty room",
    exits: { s: 103 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "161": {
    title: "A misty room",
    exits: { e: 74 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "162": {
    title: "A misty room",
    exits: { e: 67 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "163": {
    title: "Mt. Holloway",
    exits: { n: 70 },
    description: "You are at the base of a large, looming mountain."
  },
  "164": {
    title: "A misty room",
    exits: { n: 217, e: 298, w: 156 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "165": {
    title: "A misty room",
    exits: { n: 203, s: 125, w: 204 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "166": {
    title: "Mt. Holloway",
    exits: { s: 198, e: 150, w: 117 },
    description: "You are at the base of a large, looming mountain."
  },
  "167": {
    title: "A misty room",
    exits: { n: 158, s: 262, e: 260 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "168": {
    title: "A misty room",
    exits: { n: 156, e: 340 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "169": {
    title: "A misty room",
    exits: { s: 66, e: 186 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "170": {
    title: "A misty room",
    exits: { e: 129 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "171": {
    title: "A misty room",
    exits: { e: 61 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "172": {
    title: "A misty room",
    exits: { n: 267, s: 151 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "173": {
    title: "A misty room",
    exits: { e: 133, w: 214 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "174": {
    title: "A misty room",
    exits: { n: 192, s: 145, e: 224 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "175": {
    title: "A misty room",
    exits: { s: 183, e: 109, w: 179 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "176": {
    title: "A misty room",
    exits: { e: 114, w: 402 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "177": {
    title: "A misty room",
    exits: { n: 146, w: 346 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "178": {
    title: "A misty room",
    exits: { n: 209, e: 243, w: 90 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "179": {
    title: "A misty room",
    exits: { s: 233, e: 175, w: 213 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "180": {
    title: "A misty room",
    exits: { s: 91 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "181": {
    title: "A misty room",
    exits: { w: 97 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "182": {
    title: "A misty room",
    exits: { e: 157, w: 208 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "183": {
    title: "A misty room",
    exits: { n: 175, s: 229 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "184": {
    title: "A misty room",
    exits: { e: 221, w: 127 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "185": {
    title: "A misty room",
    exits: { n: 109 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "186": {
    title: "A misty room",
    exits: { e: 205, w: 169 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "187": {
    title: "A misty room",
    exits: { n: 155 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "188": {
    title: "A misty room",
    exits: { e: 139, w: 335 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "189": {
    title: "A misty room",
    exits: { e: 255, w: 128 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "190": {
    title: "A misty room",
    exits: { s: 99 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "191": {
    title: "A misty room",
    exits: { s: 82 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "192": {
    title: "A misty room",
    exits: { n: 201, s: 174, e: 223 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "193": {
    title: "A misty room",
    exits: { e: 251, w: 154 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "194": {
    title: "A misty room",
    exits: { s: 214, w: 129 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "195": {
    title: "A misty room",
    exits: { s: 228, e: 138, w: 225 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "196": {
    title: "A misty room",
    exits: { n: 222, e: 159, w: 197 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "197": {
    title: "A misty room",
    exits: { n: 232, e: 196, w: 276 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "198": {
    title: "A misty room",
    exits: { n: 166, s: 239, e: 199 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "199": {
    title: "A misty room",
    exits: { s: 230, w: 198 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "200": {
    title: "A misty room",
    exits: { n: 227, s: 147, e: 206 },
    description:
      "You are standing on grass and surroundexid by a dense mist. You can barely make out the exits in any direction."
  },
  "201": {
    title: "A misty room",
    exits: { s: 192 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "202": {
    title: "Mt. Holloway",
    exits: { e: 105 },
    description: "You are at the base of a large, looming mountain."
  },
  "203": {
    title: "A misty room",
    exits: { n: 268, s: 165, e: 299 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "204": {
    title: "A misty room",
    exits: { n: 219, e: 165, w: 216 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "205": {
    title: "A misty room",
    exits: { s: 241, e: 479, w: 186 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "206": {
    title: "A misty room",
    exits: { n: 288, e: 380, w: 200 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "207": {
    title: "A misty room",
    exits: { n: 231, e: 151, w: 290 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "208": {
    title: "A misty room",
    exits: { e: 182 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "209": {
    title: "A misty room",
    exits: { s: 178 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "210": {
    title: "A misty room",
    exits: { s: 157 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "211": {
    title: "A misty room",
    exits: { n: 138 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "212": {
    title: "A misty room",
    exits: { w: 143 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "213": {
    title: "A misty room",
    exits: { e: 179, w: 420 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "214": {
    title: "A misty room",
    exits: { n: 194, e: 173, w: 226 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "215": {
    title: "A misty room",
    exits: { n: 246, s: 146 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "216": {
    title: "A Dark Cave",
    exits: { n: 234, e: 204, w: 218 },
    description: "You are standing in a dark cave."
  },
  "217": {
    title: "A misty room",
    exits: { s: 164, e: 247 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "218": {
    title: "A Dark Cave",
    exits: { s: 263, e: 216, w: 242 },
    description: "You are standing in a dark cave."
  },
  "219": {
    title: "A misty room",
    exits: { s: 204 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "220": {
    title: "A misty room",
    exits: { w: 145 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "221": {
    title: "A misty room",
    exits: { s: 253, e: 240, w: 184 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "222": {
    title: "A misty room",
    exits: { n: 305, s: 196 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "223": {
    title: "A misty room",
    exits: { n: 283, w: 192 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "224": {
    title: "A misty room",
    exits: { w: 174 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "225": {
    title: "A misty room",
    exits: { s: 278, e: 195 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "226": {
    title: "A misty room",
    exits: { s: 300, e: 214 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "227": {
    title: "A misty room",
    exits: { n: 269, s: 200 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "228": {
    title: "A misty room",
    exits: { n: 195, s: 281 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "229": {
    title: "A misty room",
    exits: { n: 183, s: 250, w: 236 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "230": {
    title: "A misty room",
    exits: { n: 199, s: 307, e: 297 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "231": {
    title: "A misty room",
    exits: { s: 207, w: 248 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "232": {
    title: "A misty room",
    exits: { n: 272, s: 197, w: 235 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "233": {
    title: "A misty room",
    exits: { n: 179, w: 238 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "234": {
    title: "A Dark Cave",
    exits: { n: 368, s: 216, w: 252 },
    description: "You are standing in a dark cave."
  },
  "235": {
    title: "A misty room",
    exits: { n: 330, e: 232, w: 355 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "236": {
    title: "A misty room",
    exits: { s: 264, e: 229 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "237": {
    title: "A misty room",
    exits: { e: 125, w: 245 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "238": {
    title: "A misty room",
    exits: { e: 233 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "239": {
    title: "A misty room",
    exits: { n: 198, w: 244 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "240": {
    title: "A misty room",
    exits: { n: 249, e: 386, w: 221 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "241": {
    title: "A misty room",
    exits: { n: 205, e: 266 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "242": {
    title: "A Dark Cave",
    exits: { n: 287, s: 259, e: 218, w: 275 },
    description: "You are standing in a dark cave."
  },
  "243": {
    title: "A misty room",
    exits: { s: 293, e: 256, w: 178 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "244": {
    title: "A misty room",
    exits: { n: 131, e: 239 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "245": {
    title: "A misty room",
    exits: { s: 254, e: 237 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "246": {
    title: "A misty room",
    exits: { s: 215 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "247": {
    title: "A misty room",
    exits: { e: 261, w: 217 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "248": {
    title: "A misty room",
    exits: { n: 296, e: 231, w: 280 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "249": {
    title: "A misty room",
    exits: { n: 265, s: 240, e: 282 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "250": {
    title: "A misty room",
    exits: { n: 229, s: 294, e: 289 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "251": {
    title: "A misty room",
    exits: { e: 315, w: 193 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "252": {
    title: "A Dark Cave",
    exits: { n: 284, e: 234 },
    description: "You are standing in a dark cave."
  },
  "253": {
    title: "A misty room",
    exits: { n: 221, e: 258 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "254": {
    title: "A misty room",
    exits: { n: 245, w: 314 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "255": {
    title: "A misty room",
    exits: { w: 189 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "256": {
    title: "A misty room",
    exits: { s: 360, e: 327, w: 243 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "257": {
    title: "A misty room",
    exits: { n: 320, e: 146, w: 364 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "258": {
    title: "A misty room",
    exits: { e: 306, w: 253 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "259": {
    title: "A Dark Cave",
    exits: { n: 242, w: 310 },
    description: "You are standing in a dark cave."
  },
  "260": {
    title: "A misty room",
    exits: { w: 167 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "261": {
    title: "A misty room",
    exits: { s: 277, e: 322, w: 247 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "262": {
    title: "A misty room",
    exits: { n: 167, s: 370, e: 358 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "263": {
    title: "A Dark Cave",
    exits: { n: 218 },
    description: "You are standing in a dark cave."
  },
  "264": {
    title: "A misty room",
    exits: { n: 236, s: 274, w: 273 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "265": {
    title: "A misty room",
    exits: { n: 279, s: 249, e: 270 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "266": {
    title: "A misty room",
    exits: { w: 241 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "267": {
    title: "A misty room",
    exits: { n: 285, s: 172, w: 271 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "268": {
    title: "A misty room",
    exits: { s: 203, e: 411, w: 312 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "269": {
    title: "A misty room",
    exits: { n: 319, s: 227 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "270": {
    title: "A misty room",
    exits: { n: 416, e: 338, w: 265 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "271": {
    title: "A misty room",
    exits: { n: 337, e: 267 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "272": {
    title: "A misty room",
    exits: { n: 295, s: 232 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "273": {
    title: "A misty room",
    exits: { n: 343, e: 264 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "274": {
    title: "A misty room",
    exits: { n: 264, w: 308 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "275": {
    title: "A misty room",
    exits: { e: 242, w: 456 },
    description:
      "You are standing on grass and surroundedby a dense mist. You notice a cave entrance to the east and cliffside landmark to the west."
  },
  "276": {
    title: "A misty room",
    exits: { e: 197, w: 419 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "277": {
    title: "A misty room",
    exits: { n: 261, e: 323 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "278": {
    title: "A misty room",
    exits: { n: 225 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "279": {
    title: "A misty room",
    exits: { s: 265 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "280": {
    title: "A misty room",
    exits: { n: 325, e: 248 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "281": {
    title: "A misty room",
    exits: { n: 228, s: 318, e: 309, w: 317 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "282": {
    title: "A misty room",
    exits: { w: 249 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "283": {
    title: "A misty room",
    exits: { n: 331, s: 223, e: 313 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "284": {
    title: "A Dark Cave",
    exits: { n: 302, s: 252, w: 303 },
    description: "You are standing in a dark cave."
  },
  "285": {
    title: "A misty room",
    exits: { n: 286, s: 267 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "286": {
    title: "A misty room",
    exits: { n: 336, s: 285, w: 291 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "287": {
    title: "A Dark Cave",
    exits: { s: 242, w: 339 },
    description: "You are standing in a dark cave."
  },
  "288": {
    title: "A misty room",
    exits: { s: 206 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "289": {
    title: "A misty room",
    exits: { w: 250 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "290": {
    title: "A misty room",
    exits: { e: 207 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "291": {
    title: "A misty room",
    exits: { n: 410, e: 286, w: 347 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "292": {
    title: "A misty room",
    exits: { n: 301, e: 148 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "293": {
    title: "A misty room",
    exits: { n: 243 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "294": {
    title: "A misty room",
    exits: { n: 250, s: 334 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "295": {
    title: "A misty room",
    exits: { s: 272 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "296": {
    title: "A misty room",
    exits: { s: 248 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "297": {
    title: "A misty room",
    exits: { w: 230 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "298": {
    title: "A misty room",
    exits: { s: 324, w: 164 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "299": {
    title: "A misty room",
    exits: { e: 311, w: 203 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "300": {
    title: "A misty room",
    exits: { n: 226, s: 377, w: 389 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "301": {
    title: "A misty room",
    exits: { n: 304, s: 292 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "302": {
    title: "A Dark Cave",
    exits: { n: 422, s: 284 },
    description: "You are standing in a dark cave."
  },
  "303": {
    title: "A Dark Cave",
    exits: { n: 361, e: 284, w: 405 },
    description: "You are standing in a dark cave."
  },
  "304": {
    title: "A misty room",
    exits: { s: 301 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "305": {
    title: "A misty room",
    exits: { n: 365, s: 222 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "306": {
    title: "A misty room",
    exits: { e: 397, w: 258 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "307": {
    title: "A misty room",
    exits: { n: 230, s: 373, e: 371, w: 321 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "308": {
    title: "A misty room",
    exits: { e: 274 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "309": {
    title: "A misty room",
    exits: { s: 333, e: 326, w: 281 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "310": {
    title: "A Dark Cave",
    exits: { e: 259, w: 412 },
    description: "You are standing in a dark cave."
  },
  "311": {
    title: "A misty room",
    exits: { w: 299 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "312": {
    title: "A misty room",
    exits: { n: 328, e: 268 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "313": {
    title: "A misty room",
    exits: { w: 283 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "314": {
    title: "A misty room",
    exits: { e: 254 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "315": {
    title: "A misty room",
    exits: { w: 251 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "316": {
    title: "A misty room",
    exits: { n: 344, w: 155 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "317": {
    title: "A misty room",
    exits: { s: 387, e: 281, w: 409 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "318": {
    title: "A misty room",
    exits: { n: 281, s: 487 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "319": {
    title: "A misty room",
    exits: { n: 359, s: 269, e: 345 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "320": {
    title: "A misty room",
    exits: { n: 348, s: 257 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "321": {
    title: "A misty room",
    exits: { s: 413, e: 307 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "322": {
    title: "A misty room",
    exits: { n: 382, e: 435, w: 261 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "323": {
    title: "A misty room",
    exits: { e: 433, w: 277 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "324": {
    title: "A misty room",
    exits: { n: 298, s: 349, e: 354 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "325": {
    title: "A misty room",
    exits: { n: 353, s: 280, w: 374 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "326": {
    title: "A misty room",
    exits: { s: 342, w: 309 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "327": {
    title: "A misty room",
    exits: { e: 427, w: 256 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "328": {
    title: "A misty room",
    exits: { n: 332, s: 312, e: 357, w: 363 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "329": {
    title: "A misty room",
    exits: { w: 153 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "330": {
    title: "A misty room",
    exits: { n: 369, s: 235, w: 383 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "331": {
    title: "A misty room",
    exits: { s: 283, e: 446 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "332": {
    title: "A misty room",
    exits: { n: 350, s: 328 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "333": {
    title: "A misty room",
    exits: { n: 309, s: 378 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "334": {
    title: "A misty room",
    exits: { n: 294, s: 393, e: 341, w: 391 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "335": {
    title: "A misty room",
    exits: { e: 188, w: 366 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "336": {
    title: "A misty room",
    exits: { s: 286 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "337": {
    title: "A misty room",
    exits: { s: 271 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "338": {
    title: "A misty room",
    exits: { s: 379, w: 270 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "339": {
    title: "A Dark Cave",
    exits: { e: 287, w: 445 },
    description: "You are standing in a dark cave."
  },
  "340": {
    title: "A misty room",
    exits: { w: 168 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "341": {
    title: "A misty room",
    exits: { s: 449, w: 334 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "342": {
    title: "A misty room",
    exits: { n: 326, s: 432 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "343": {
    title: "A misty room",
    exits: { s: 273, w: 351 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "344": {
    title: "A misty room",
    exits: { n: 392, s: 316, e: 390 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "345": {
    title: "A misty room",
    exits: { s: 375, w: 319 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "346": {
    title: "A misty room",
    exits: { e: 177 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "347": {
    title: "A misty room",
    exits: { n: 452, s: 442, e: 291 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "348": {
    title: "A misty room",
    exits: { s: 320 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "349": {
    title: "A misty room",
    exits: { n: 324, s: 352, e: 384, w: 356 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "350": {
    title: "A misty room",
    exits: { n: 436, s: 332, e: 404 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "351": {
    title: "A misty room",
    exits: { s: 491, e: 343, w: 478 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "352": {
    title: "A misty room",
    exits: { n: 349, s: 362, e: 485 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "353": {
    title: "A misty room",
    exits: { s: 325 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "354": {
    title: "A misty room",
    exits: { w: 324 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "355": {
    title: "A misty room",
    exits: { e: 235 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "356": {
    title: "A misty room",
    exits: { e: 349 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "357": {
    title: "A misty room",
    exits: { w: 328 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "358": {
    title: "A misty room",
    exits: { e: 401, w: 262 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "359": {
    title: "A misty room",
    exits: { s: 319 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "360": {
    title: "A misty room",
    exits: { n: 256, e: 398 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "361": {
    title: "A Dark Cave",
    exits: { n: 408, s: 303 },
    description: "You are standing in a dark cave."
  },
  "362": {
    title: "A misty room",
    exits: { n: 352, s: 399, w: 463 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "363": {
    title: "A misty room",
    exits: { n: 372, e: 328 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "364": {
    title: "A misty room",
    exits: { n: 429, s: 381, e: 257, w: 448 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "365": {
    title: "A misty room",
    exits: { s: 305 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "366": {
    title: "A misty room",
    exits: { e: 335 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "367": {
    title: "A misty room",
    exits: { n: 111 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "368": {
    title: "A Dark Cave",
    exits: { s: 234 },
    description: "You are standing in a dark cave."
  },
  "369": {
    title: "A misty room",
    exits: { n: 400, s: 330, w: 376 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "370": {
    title: "A misty room",
    exits: { n: 262, s: 434, e: 407 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "371": {
    title: "A misty room",
    exits: { s: 475, w: 307 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "372": {
    title: "A misty room",
    exits: { n: 441, s: 363 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "373": {
    title: "A misty room",
    exits: { n: 307, s: 480 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "374": {
    title: "Fully Shrine",
    exits: { e: 325 },
    description:
      "Here lies a shrine for Full-lifey, who captured the golden snitch and gained the power to warp between worlds with some help from his team and a solitary spy."
  },
  "375": {
    title: "A misty room",
    exits: { n: 345, e: 385 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "376": {
    title: "A misty room",
    exits: { e: 369 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "377": {
    title: "A misty room",
    exits: { n: 300 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "378": {
    title: "A misty room",
    exits: { n: 333 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "379": {
    title: "A misty room",
    exits: { n: 338, e: 395 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "380": {
    title: "A misty room",
    exits: { n: 424, w: 206 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "381": {
    title: "A misty room",
    exits: { n: 364, w: 394 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "382": {
    title: "A misty room",
    exits: { s: 322, e: 388 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "383": {
    title: "A misty room",
    exits: { e: 330, w: 495 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "384": {
    title: "A misty room",
    exits: { w: 349 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "385": {
    title: "A misty room",
    exits: { w: 375 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "386": {
    title: "A misty room",
    exits: { e: 414, w: 240 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "387": {
    title: "A misty room",
    exits: { n: 317, s: 417, w: 431 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "388": {
    title: "A misty room",
    exits: { e: 477, w: 382 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "389": {
    title: "A misty room",
    exits: { e: 300 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "390": {
    title: "A misty room",
    exits: { w: 344 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "391": {
    title: "A misty room",
    exits: { s: 396, e: 334, w: 428 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "392": {
    title: "A misty room",
    exits: { s: 344, e: 462 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "393": {
    title: "A misty room",
    exits: { n: 334, s: 482 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "394": {
    title: "A misty room",
    exits: { e: 381 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "395": {
    title: "A misty room",
    exits: { s: 403, e: 421, w: 379 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "396": {
    title: "A misty room",
    exits: { n: 391 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "397": {
    title: "A misty room",
    exits: { w: 306 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "398": {
    title: "A misty room",
    exits: { e: 438, w: 360 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "399": {
    title: "A misty room",
    exits: { n: 362, s: 467 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "400": {
    title: "A misty room",
    exits: { s: 369 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "401": {
    title: "A misty room",
    exits: { w: 358 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "402": {
    title: "A misty room",
    exits: { e: 176, w: 451 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "403": {
    title: "A misty room",
    exits: { n: 395 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "404": {
    title: "A misty room",
    exits: { n: 481, w: 350 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "405": {
    title: "A Dark Cave",
    exits: { n: 406, e: 303 },
    description: "You are standing in a dark cave."
  },
  "406": {
    title: "A Dark Cave",
    exits: { s: 405, w: 415 },
    description: "You are standing in a dark cave."
  },
  "407": {
    title: "A misty room",
    exits: { s: 496, w: 370 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "408": {
    title: "A Dark Cave",
    exits: { n: 458, s: 361, w: 423 },
    description: "You are standing in a dark cave."
  },
  "409": {
    title: "A misty room",
    exits: { e: 317 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "410": {
    title: "A misty room",
    exits: { s: 291 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "411": {
    title: "A misty room",
    exits: { w: 268 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "412": {
    title: "A Dark Cave",
    exits: { s: 488, e: 310 },
    description: "You are standing in a dark cave."
  },
  "413": {
    title: "A misty room",
    exits: { n: 321 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "414": {
    title: "A misty room",
    exits: { w: 386 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "415": {
    title: "A Dark Cave",
    exits: { e: 406, w: 418 },
    description: "You are standing in a dark cave."
  },
  "416": {
    title: "A misty room",
    exits: { s: 270 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "417": {
    title: "A misty room",
    exits: { n: 387 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "418": {
    title: "A Dark Cave",
    exits: { n: 425, s: 474, e: 415 },
    description: "You are standing in a dark cave."
  },
  "419": {
    title: "A misty room",
    exits: { e: 276 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "420": {
    title: "A misty room",
    exits: { s: 444, e: 213, w: 437 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "421": {
    title: "A misty room",
    exits: { n: 440, w: 395 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "422": {
    title: "A Dark Cave",
    exits: { n: 426, s: 302 },
    description: "You are standing in a dark cave."
  },
  "423": {
    title: "A Dark Cave",
    exits: { e: 408, w: 454 },
    description: "You are standing in a dark cave."
  },
  "424": {
    title: "A misty room",
    exits: { s: 380, e: 473 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "425": {
    title: "A Dark Cave",
    exits: { s: 418, w: 469 },
    description: "You are standing in a dark cave."
  },
  "426": {
    title: "A Dark Cave",
    exits: { n: 457, s: 422 },
    description: "You are standing in a dark cave."
  },
  "427": {
    title: "A misty room",
    exits: { e: 430, w: 327 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "428": {
    title: "A misty room",
    exits: { e: 391 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "429": {
    title: "A misty room",
    exits: { s: 364 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "430": {
    title: "A misty room",
    exits: { n: 443, e: 439, w: 427 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "431": {
    title: "A misty room",
    exits: { e: 387, w: 492 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "432": {
    title: "A misty room",
    exits: { n: 342 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "433": {
    title: "A misty room",
    exits: { s: 455, e: 460, w: 323 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "434": {
    title: "A misty room",
    exits: { n: 370 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "435": {
    title: "A misty room",
    exits: { w: 322 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "436": {
    title: "A misty room",
    exits: { s: 350 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "437": {
    title: "A misty room",
    exits: { e: 420, w: 497 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "438": {
    title: "A misty room",
    exits: { e: 465, w: 398 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "439": {
    title: "A misty room",
    exits: { w: 430 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "440": {
    title: "A misty room",
    exits: { s: 421, w: 476 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "441": {
    title: "A misty room",
    exits: { s: 372 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "442": {
    title: "A misty room",
    exits: { n: 347 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "443": {
    title: "A misty room",
    exits: { s: 430, e: 471 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "444": {
    title: "A misty room",
    exits: { n: 420, w: 490 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "445": {
    title: "A Dark Cave",
    exits: { n: 447, e: 339, w: 450 },
    description: "You are standing in a dark cave."
  },
  "446": {
    title: "A misty room",
    exits: { e: 466, w: 331 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "447": {
    title: "A Dark Cave",
    exits: { s: 445 },
    description: "You are standing in a dark cave."
  },
  "448": {
    title: "A misty room",
    exits: { e: 364 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "449": {
    title: "A misty room",
    exits: { n: 341 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "450": {
    title: "A Dark Cave",
    exits: { e: 445 },
    description: "You are standing in a dark cave."
  },
  "451": {
    title: "A misty room",
    exits: { e: 402, w: 453 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "452": {
    title: "A misty room",
    exits: { s: 347 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "453": {
    title: "A misty room",
    exits: { s: 464, e: 451 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "454": {
    title: "A Dark Cave",
    exits: { n: 470, e: 423 },
    description: "You are standing in a dark cave."
  },
  "455": {
    title: "A misty room",
    exits: { n: 433 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "456": {
    title: "A misty room",
    exits: { e: 275, w: 499 },
    description:
      "You are standing on grass and surroundedby a dense mist. You notice a cave entrance to the east and cliffside landmark to the west."
  },
  "457": {
    title: "A Dark Cave",
    exits: { n: 461, s: 426 },
    description: "You are standing in a dark cave."
  },
  "458": {
    title: "A Dark Cave",
    exits: { s: 408, w: 459 },
    description: "You are standing in a dark cave."
  },
  "459": {
    title: "A Dark Cave",
    exits: { e: 458 },
    description: "You are standing in a dark cave."
  },
  "460": {
    title: "A misty room",
    exits: { w: 433 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "461": {
    title: "Linh's Shrine",
    exits: { s: 457 },
    description:
      "You are standing before a glowing shrineto a Linh, the Swift. She looks quite fast."
  },
  "462": {
    title: "A misty room",
    exits: { w: 392 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "463": {
    title: "A misty room",
    exits: { s: 468, e: 362 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "464": {
    title: "A misty room",
    exits: { n: 453 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "465": {
    title: "A misty room",
    exits: { e: 498, w: 438 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "466": {
    title: "A misty room",
    exits: { s: 486, e: 472, w: 446 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "467": {
    title: "Pirate Ry's",
    exits: { n: 399 },
    description:
      "You see a sign before you that reads:\n\n'You have found Pirate Ry's. Send a `change_name` request and I'll change your identity to whatever you wish... for a price.'"
  },
  "468": {
    title: "A misty room",
    exits: { n: 463 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "469": {
    title: "A Dark Cave",
    exits: { e: 425 },
    description: "You are standing in a dark cave."
  },
  "470": {
    title: "A Dark Cave",
    exits: { s: 454 },
    description: "You are standing in a dark cave."
  },
  "471": {
    title: "A misty room",
    exits: { w: 443 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "472": {
    title: "A misty room",
    exits: { w: 466 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "473": {
    title: "A misty room",
    exits: { e: 494, w: 424 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "474": {
    title: "A Dark Cave",
    exits: { n: 418 },
    description: "You are standing in a dark cave."
  },
  "475": {
    title: "A misty room",
    exits: { n: 371, s: 484 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "476": {
    title: "A misty room",
    exits: { e: 440 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "477": {
    title: "A misty room",
    exits: { e: 483, w: 388 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "478": {
    title: "A misty room",
    exits: { e: 351 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "479": {
    title: "A misty room",
    exits: { w: 205 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "480": {
    title: "A misty room",
    exits: { n: 373 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "481": {
    title: "A misty room",
    exits: { s: 404 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "482": {
    title: "A misty room",
    exits: { n: 393 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "483": {
    title: "A misty room",
    exits: { w: 477 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "484": {
    title: "A misty room",
    exits: { n: 475 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "485": {
    title: "A misty room",
    exits: { w: 352 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "486": {
    title: "Arron's Athenaeum",
    exits: { n: 466 },
    description:
      "Before you lies a radiant book of knowledge, on a pedestal inlaid with Lambda Coins. Below, a plaque reads:  Herin exists knowledge gathered by Arron of Web19/CS21. Always seek to learn. Ask questions. Don't panic, bring a towel."
  },
  "487": {
    title: "A misty room",
    exits: { n: 318, s: 489 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "488": {
    title: "A Dark Cave",
    exits: { n: 412 },
    description: "You are standing in a dark cave."
  },
  "489": {
    title: "A misty room",
    exits: { n: 487 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "490": {
    title: "A misty room",
    exits: { e: 444, w: 493 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "491": {
    title: "A misty room",
    exits: { n: 351 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "492": {
    title: "Sandofsky's Sanctum",
    exits: { e: 431 },
    description:
      'Before you stands a statue of Sandofsky,musclebound hero from times of old: Cold as iceand twice as smooth. You feel a chill as thoughts of algorithms fill the air. Before the statue, a plaque reads, "Being a Hero, sometimes you must Recall to Zero."'
  },
  "493": {
    title: "A misty room",
    exits: { e: 490 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "494": {
    title: "A misty room",
    exits: { w: 473 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "495": {
    title: "The Transmogriphier",
    exits: { e: 383 },
    description:
      'A strange machine stands in this room.  There is a large opening on the top.  A placard reads, "Test your luck!  One item and one Lambdacoin!"'
  },
  "496": {
    title: "A misty room",
    exits: { n: 407 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "497": {
    title: "A misty room",
    exits: { e: 437 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "498": {
    title: "A misty room",
    exits: { w: 465 },
    description:
      "You are standing on grass and surroundedby a dense mist. You can barely make out the exits in any direction."
  },
  "499": {
    title: "Glasowyn's Grave",
    exits: { e: 456 },
    description:
      "You see a moss-topped gravestone which reads: 'Here lies Glasowyn of Web17/Labs12/CS18,who was crushed under the weight of her own gold.' There doesn't seem to be any gold around, but marks in the dirt suggest that someone has knelt there, perhaps in prayer."
  }
};

module.exports = { map };

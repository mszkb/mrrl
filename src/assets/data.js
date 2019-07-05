// Mapping - https://www.wowhead.com/guides/mrrls-trading-game-obtaining-crimson-tidestallion
//
// Ghost Food - Curious Murloc Horn 6x
// Particularly Dense Rock - Bag of Who-Knows-What 3x,  Jar of Fish Faces x3
// Smelly Pile of Gloop - Just Regular Butter x2
// Healthy Murloc Lunch - Curious Murloc Horn x5,
// Extra-Slimy Snail - Disintegrating Sand Sculpture x5
// Sea Giant Foot Dust - Clean Murloc Sock x3
//
// Bag of Who-Knows-What - Flatulent Fish x2
// Just Regular Butter - Sweet Sea Vegetable x4
// Disintegrating Sand Sculpture - Sweet Sea Vegetable x4
// Jar of Fish Faces - Flatulent Fish x5
// Dirty Murloc Sock - Unidentified Mass x6
// Curious Murloc Horn - Slimy Naga Eyeball x3
//
// 1 Flrgrrl - Unidentified Mass
// 2 Mrrglrlr - Slimy Naga Eyeball
// 3 Hurlgrl - Sweet Sea Vegetable
// 4 Grrmrlg - Flatulent Fish

export const final = [
  {
    "itemname": "Ghost Food",
    "itemid": 167909,
    "vendorid": 1,
    "need": ["Curious Murloc Horn"],
    "needitemid": [167905],
    "amount": [6],
    "icon": "1_blue1"
  },
  {
    "itemname": "Particularly Dense Rock",
    "itemid": 167902,
    "vendorid": 2,
    "need": ["Bag of Who-Knows-What", "Jar of Fish Faces"],
    "needitemid": [167910, 167914],
    "amount": [3, 3],
    "icon": "2_blue1"
  },
  {
    "itemname": "Smelly Pile of Gloop",
    "itemid": 167904,
    "vendorid": 2,
    "need": ["Just Regular Butter "],
    "needitemid": [167911],
    "amount": [2],
    "icon": "2_blue2"
  },
  {
    "itemname": "Healthy Murloc Lunch",
    "itemid": 167913,
    "vendorid": 3,
    "need": ["Curious Murloc Horn"],
    "needitemid": [167905],
    "amount": [5],
    "icon": "3_blue1"
  },
  {
    "itemname": "Extra-Slimy Snail",
    "itemid": 167907,
    "vendorid": 4,
    "need": ["Disintegrating Sand Sculpture"],
    "needitemid": [167903],
    "amount": [5],
    "icon": "4_blue1"
  },
  {
    "itemname": "Sea Giant Foot Dust",
    "itemid": 167908,
    "vendorid": 4,
    "need": ["Dirty Murloc Sock"],
    "needitemid": [167916],
    "amount": [3],
    "icon": "4_blue2"
  },
]

export const mapping = {
  167905: {
    "itemname": "Curious Murloc Horn",
    "vendorid": 4,
    "need": ["Slimy Naga Eyeball"],
    "needitemid": [167896],
    "amount": [3],
    "icon": "4_green1"
  },
  167910: {
    "itemname": "Bag of Who-Knows-What",
    "vendorid": 1,
    "need": ["Flatulent Fish"],
    "needitemid": [167906],
    "amount": [2],
    "icon": "1_green1"
  },
  167911: {
    "itemname": "Just Regular Butter",
    "vendorid": 1,
    "need": ["Sweet Sea Vegetable"],
    "needitemid": [167915],
    "amount": [4],
    "icon": "1_green2"
  },
  167903: {
    "itemname": "Disintegrating Sand Sculpture",
    "vendorid": 2,
    "need": ["Sweet Sea Vegetable"],
    "needitemid": [167915],
    "amount": [4],
    "icon": "2_green1"
  },
  167914: {
    "itemname": "Jar of Fish Faces",
    "vendorid": 3,
    "need": ["Flatulent Fish"],
    "needitemid": [167906],
    "amount": [5],
    "icon": "3_green1"
  },
  167916: {
    "itemname": "Dirty Murloc Sock",
    "vendorid": 3,
    "need": ["Unidentified Mass"],
    "needitemid": [167912],
    "amount": [6],
    "icon": "3_green2"
  },
  
  167912: {
    "itemname": "Unidentified Mass",
    "vendorid": 1,
    "icon": "1_white1"
  },
  167896: {
    "itemname": "Slimy Naga Eyeball",
    "vendorid": 2,
    "icon": "2_white1"
  },
  167915: {
    "itemname": "Sweet Sea Vegetable",
    "vendorid": 3,
    "icon": "3_white1"
  },
  167906: {
    "itemname": "Flatulent Fish",
    "vendorid": 4,
    "icon": "4_white1"
  },
}

export const vendor = {
  1: {
    "name": "Flrgrrl",
    "id": 151952
  },
  2: {
    "name": "Mrrglr",
    "id": 151950
  },
  3: {
    "name": "Hurlgrl",
    "id": 151953
  },
  4: {
    "name": "Grrmrlg",
    "id": 151951
  },
}

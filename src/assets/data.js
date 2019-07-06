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
    "needitemid": [167905],
    "amount": [6],
    "icon": "1_blue1"
  },
  {
    "itemname": "Particularly Dense Rock",
    "itemid": 167902,
    "vendorid": 2,
    "needitemid": [167910, 167914],
    "amount": [3, 3],
    "icon": "2_blue1"
  },
  {
    "itemname": "Smelly Pile of Gloop",
    "itemid": 167904,
    "vendorid": 2,
    "needitemid": [167911],
    "amount": [2],
    "icon": "2_blue2"
  },
  {
    "itemname": "Healthy Murloc Lunch",
    "itemid": 167913,
    "vendorid": 3,
    "needitemid": [167905],
    "amount": [5],
    "icon": "3_blue1"
  },
  {
    "itemname": "Extra-Slimy Snail",
    "itemid": 167907,
    "vendorid": 4,
    "needitemid": [167903],
    "amount": [5],
    "icon": "4_blue1"
  },
  {
    "itemname": "Sea Giant Foot Dust",
    "itemid": 167908,
    "vendorid": 4,
    "needitemid": [167916],
    "amount": [3],
    "icon": "4_blue2"
  },
]

export const special = [
  {
    "itemname": "Beckoner's Rosetta Stone",
    "itemid": 169782,
    "vendorid": 1,
    "needitemid": [167904, 167902],
    "amount": [2, 9],
    "icon": "1_epic1"
  },
  {
    "itemname": "Pulsating Blood Stone",
    "itemid": 169780,
    "vendorid": 2,
    "needitemid": [167908, 167913],
    "amount": [8, 7],
    "icon": "2_epic1"
  },
  {
    "itemname": "Cultist Pinky Finger",
    "itemid": 169783,
    "vendorid": 3,
    "needitemid": [167904, 167909],
    "amount": [4, 7],
    "icon": "3_epic1"
  },
  {
    "itemname": "Overwhelmingly-Alluring Idol",
    "itemid": 169781,
    "vendorid": 4,
    "needitemid": [167913, 167909],
    "amount": [8, 4],
    "icon": "4_epic1"
  },
]

export const m = {
  167909: {
    "itemname": "Ghost Food",
    "itemid": 167909,
    "vendorid": 1,
    "needitemid": [167905],
    "amount": [6],
    "icon": "1_blue1",
    "type": "rare"
  },
  167902: {
    "itemname": "Particularly Dense Rock",
    "itemid": 167902,
    "vendorid": 2,
    "needitemid": [167910, 167914],
    "amount": [3, 3],
    "icon": "2_blue1",
    "type": "rare"
  },
  167904: {
    "itemname": "Smelly Pile of Gloop",
    "itemid": 167904,
    "vendorid": 2,
    "needitemid": [167911],
    "amount": [2],
    "icon": "2_blue2",
    "type": "rare"
  },
  167913: {
    "itemname": "Healthy Murloc Lunch",
    "itemid": 167913,
    "vendorid": 3,
    "needitemid": [167905],
    "amount": [5],
    "icon": "3_blue1",
    "type": "rare"
  },
  167907: {
    "itemname": "Extra-Slimy Snail",
    "itemid": 167907,
    "vendorid": 4,
    "needitemid": [167903],
    "amount": [5],
    "icon": "4_blue1",
    "type": "rare"
  },
  167908: {
    "itemname": "Sea Giant Foot Dust",
    "itemid": 167908,
    "vendorid": 4,
    "needitemid": [167916],
    "amount": [3],
    "icon": "4_blue2",
    "type": "rare"
  },
  167905: {
    "itemname": "Curious Murloc Horn",
    "itemid": 167905,
    "vendorid": 4,
    "needitemid": [167896],
    "amount": [3],
    "icon": "4_green1",
    "type": "green"
  },
  167910: {
    "itemname": "Bag of Who-Knows-What",
    "itemid": 167910,
    "vendorid": 1,
    "needitemid": [167906],
    "amount": [2],
    "icon": "1_green1",
    "type": "green"
  },
  167911: {
    "itemname": "Just Regular Butter",
    "itemid": 167911,
    "vendorid": 1,
    "needitemid": [167915],
    "amount": [4],
    "icon": "1_green2",
    "type": "green"
  },
  167903: {
    "itemname": "Disintegrating Sand Sculpture",
    "itemid": 167903,
    "vendorid": 2,
    "needitemid": [167915],
    "amount": [4],
    "icon": "2_green1",
    "type": "green"
  },
  167914: {
    "itemname": "Jar of Fish Faces",
    "itemid": 167914,
    "vendorid": 3,
    "needitemid": [167906],
    "amount": [5],
    "icon": "3_green1",
    "type": "green"
  },
  167916: {
    "itemname": "Dirty Murloc Sock",
    "itemid": 167916,
    "vendorid": 3,
    "needitemid": [167912],
    "amount": [6],
    "icon": "3_green2",
    "type": "green"
  },
  
  167912: {
    "itemname": "Unidentified Mass",
    "itemid": 167912,
    "vendorid": 1,
    "icon": "1_white1",
    "type": "white"
  },
  167896: {
    "itemname": "Slimy Naga Eyeball",
    "itemid": 167896,
    "vendorid": 2,
    "icon": "2_white1",
    "type": "white"
  },
  167915: {
    "itemname": "Sweet Sea Vegetable",
    "itemid": 167915,
    "vendorid": 3,
    "icon": "3_white1",
    "type": "white"
  },
  167906: {
    "itemname": "Flatulent Fish",
    "itemid": 167906,
    "vendorid": 4,
    "icon": "4_white1",
    "type": "white"
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

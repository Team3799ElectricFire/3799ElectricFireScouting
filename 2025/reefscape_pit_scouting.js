var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
      { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
   { "name": "Max Groundspeed<br>fps",
      "code": "mgs",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
   { "name": "Coral Pickup",
      "code": "cpu",
      "type": "radio",
      "choices": {
        "fd": "Feeder<br>",
        "fl": "Floor<br>",
        "b": "Both<br>",
        "x": "Cannot<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Algae Pickup",
      "code": "apu",
      "type": "radio",
      "choices": {
        "r": "Reef<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Cannot<br>"
      },
      "defaultValue":"x"
    },
     { "name": "L1 Coral",
      "code": "l1c",
      "type": "bool"
    },
     { "name": "L2 Coral",
      "code": "l2c",
      "type": "bool"
    },
     { "name": "L3 Coral",
      "code": "l3c",
      "type": "bool"
    },
     { "name": "L4 Coral",
      "code": "l4c",
      "type": "bool"
    },
     { "name": "Score Processor",
      "code": "scp",
      "type": "bool"
    },
     { "name": "Score Net",
      "code": "scn",
      "type": "bool"
    },
     { "name": "Hang Cage",
      "code": "hgc",
      "type": "radio",
      "choices": {
        "s": "Shallow (high)<br>",
        "d": "Deep (low)<br>",
        "b": "Both<br>",
        "x": "Cannot<br>"
      },
      "defaultValue":"x"
    },
      { "name": "Has Auto",
      "code": "hau",
      "type": "bool"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Programming Lang",
      "code": "pgl",
      "type": "radio",
      "choices": {
        "j": "Java<br>",
        "c": "C++<br>",
        "l": "LabVIEW<br>",
        "p": "Python<br>"
      },
      },
       { "name": "RoboRio",
      "code": "rio",
      "type": "radio",
      "choices": {
        "1": "RIO 1<br>",
        "2": "RIO 2<br>",
        "u": "IDK<br>"
      },
      },
     { "name": "# of Camaras",
      "code": "noc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Vision Pipeline",
      "code": "vsp",
      "type": "radio",
      "choices": {
        "p": "Photon Vision<br>",
        "l": "Limelight<br>",
        "o": "Other<br>",
        "n": "No Vision"
      },
      },
       { "name": "Vision Coprocessor",
      "code": "vsc",
      "type": "radio",
      "choices": {
        "r": "Raspberry Pi 5<br>",
        "o": "Orange Pi<br>",
        "t": "Other<br>",
        "n": "No Vision"
      },
      },
        { "name": "Vision Comments",
      "code": "vco",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
      { "name": "Current Mgmt<br>Preventing Brownout",
      "code": "cmg",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
     { "name": "Current Mgmt?<br>Preventing Brownout",
      "code": "cmg",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Wiring Hacks?<br>Quick/Easy/Better",
      "code": "wrh",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
     { "name": "Load Test Batteries?",
      "code": "ltb",
      "type": "bool"
    },
     { "name": "How do you quantify<br>Your Outreach Impact?",
      "code": "qoi",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;

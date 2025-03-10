var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
      { "name": "Scout Initials",
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
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025nyro",
      "required": "true"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "min": 0,
      "max": 48,
      "defaultValue": "0",
      "tooltip": "Robot width in inches"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "min": 0,
      "max": 125,
      "defaultValue": "0",
      "tooltip": "Weight without bumpers or battery"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "m": "Mechanum<br>",
        "o": "Other(Specify)"
      },
      "defaultValue": "o"
    },
    { "name": "Swerve Module",
      "code": "svm",
      "type": "radio",
      "choices": {
        "s": "SDS<br>",
        "r": "REV<br>",
        "w": "WCP/SWERVE X<br>",
        "x": "Not Swerve<br>",
        "o": "Other(Specify)"
      },
      "defaultValue": "x"
    },
       { "name": "Drive Wheels",
      "code": "dvw",
      "type": "radio",
      "choices": {
        "c": "Colson<br>",
        "t": "Traction<br>",
        "g": "Grip Lock<br>",
        "o": "Other(Specify)"
      },
      "defaultValue": "o"
    },
   { "name": "Max speed (fps)",
      "code": "mgs",
      "type": "number",
      "min": 0,
      "max": 30,
      "defaultValue": "0",
      "tooltip": "Max speed in Feet Per Second"

    },
    { "name": "Drivetrain Notes",
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
        "x": "Cannot"
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
        "x": "Cannot"
      },
      "defaultValue":"x"
    },
     { "name": "Score L1 Coral",
      "code": "l1c",
      "type": "bool"
    },
     { "name": "Score L2 Coral",
      "code": "l2c",
      "type": "bool"
    },
     { "name": "Score L3 Coral",
      "code": "l3c",
      "type": "bool"
    },
     { "name": "Score L4 Coral",
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
        "x": "Cannot"
      },
      "defaultValue":"x"
    },
      { "name": "Has Auto",
      "code": "hau",
      "type": "bool"
    },
     { "name": "Auto Coral Qty.",
      "code": "acq",
      "type": "number",
      "min": 0,
      "max": 10,
      "defaultValue": "0"
    },
    { "name": "Auto Comments",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
     { "name": "Driving Hours",
      "code": "dvh",
      "type": "number",
      "defaultValue": "0"
    },
   { "name": "Programming Lang",
      "code": "pgl",
      "type": "radio",
      "choices": {
        "j": "Java<br>",
        "c": "C++<br>",
        "l": "LabVIEW<br>",
        "p": "Python"
      },
      "defaultValue": "j"
    },
    { "name": "RoboRio",
      "code": "rio",
      "type": "radio",
      "choices": {
        "1": "RIO 1<br>",
        "2": "RIO 2<br>",
        "u": "IDK"
      },
       "defaultValue":"u"
    },
     { "name": "# of Camaras",
      "code": "noc",
      "type": "number",
      "min": 0,
      "max": 10,
      "defaultValue": "0",
      "tooltip": "Number of cameras on robot"
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
       "defaultValue":"n"
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
        "defaultValue":"n"
      },
        { "name": "Vision Notes",
      "code": "vco",
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
      "type": "bool",
      "tooltip": "Does the team load test all of their batteries?"
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

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
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
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
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
     { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
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

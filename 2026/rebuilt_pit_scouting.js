var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "pitConfig": "true",
  "prematch": [
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
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other",
        "t": "Testing"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
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
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "# of fuel that robot can carry",
      "code": "mnf",
      "type": "number",
      "min": 0,
      "max": 8,
      "disabled": "false",
      "defaultValue": 0
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel",
      "code": "opu",
      "type": "bool"
    },
    { "name": "role preference",
      "code": "mrb",
      "type": "radio",
      "choices": {
        "a": "Offensive",
        "b": "Defensive",
        "c": "neither/both"
      },
       "defaultValue": "a"
    },
    { "name": "Climb level L1",
      "code": "mc",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Climb level L2",
      "code": "mc",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Climb level L3",
      "code": "mc",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Can pass from opp alliance zone",
      "code": "mc",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Can pass from nuetral zone",
      "code": "mc",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
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

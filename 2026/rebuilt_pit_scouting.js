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
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026nyro",
      "required": "true"
    },

    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Height",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "# of Team Members",
      "code": "mem",
      "type": "number",
      "min": 0,
      "max": 200,
      "defaultValue": "0",
      "tooltip": "Number of cameras on robot"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
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
    { "name": "# of fuel that robot can carry",
      "code": "fpc",
      "type": "number",
      "min": 0,
      "max": 100,
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
    { "name": "# of Balls Per Second",
      "code": "bas",
      "type": "number",
      "min": 0,
      "max": 20,
      "defaultValue": "0",
      "tooltip": "Number of cameras on robot"
    },
    { "name": "Auto Aim",
      "code": "aim",
      "type": "bool"
    },
    { "name": "Shoot On The Go",
      "code": "sog",
      "type": "bool"
    },
    { "name": "Turret",
      "code": "tur",
      "type": "bool"
    },
    { "name": "Bump",
      "code": "bum",
      "type": "bool"
    },
    { "name": "Trench",
      "code": "tre",
      "type": "bool"
    },
    { "name": "role preference",
      "code": "rpg",
      "type": "radio",
      "choices": {
        "o": "offensive<br>",
        "d": "defensive<br>",
        "x": "neither/both"
      },
      "defaultValue": "x"
    },  
    { "name": "Climb level L1",
      "code": "mc1",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Climb level L2",
      "code": "mc2",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Climb level L3",
      "code": "mc3",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Climb Front",
      "code": "mcf",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Climb Side",
      "code": "mcs",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Can pass from nuetral zone",
      "code": "pnz",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Can pass from opp alliance zone",
      "code": "pop",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
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
        "p": "Python"
      },
      "defaultValue": "j"
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
      { "name": "Vision Notes",
      "code": "vco",
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

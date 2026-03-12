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
    { "name": "# of Team Members",
      "code": "mem",
      "type": "number",
      "min": 0,
      "max": 200,
      "defaultValue": "0",
      "tooltip": "Number of students on the teamt"
    },
    { "name": "Narrow Width With Bumper (in)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Height (in)",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight (lb)",
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
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo Vortex<br>",
        "f": "Falcon<br>",
        "k": "Kracken<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Ground Speed (fps)",
      "code": "gsp",
      "type": "number",
      "min": 0,
      "max": 100,
      "defaultValue": 0
    },
    { "name": "Intake Roller Construction",
      "code": "irc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot (floor) pickup",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost (Human Player) pickup",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Fuel Capacity",
      "code": "fpc",
      "type": "number",
      "min": 0,
      "max": 100,
      "defaultValue": 0
    },
    { "name": "Balls Per Second",
      "code": "bas",
      "type": "number",
      "min": 0,
      "max": 80,
      "defaultValue": "0"
    },
    { "name": "Auto Aim",
      "code": "aim",
      "type": "bool"
    },
    { "name": "Shoot On The Go",
      "code": "sog",
      "type": "bool"
    },
    { "name": "Pass from nuetral zone",
      "code": "pnz",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Pass from opp alliance zone",
      "code": "pop",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Turret",
      "code": "tur",
      "type": "bool"
    },
     { "name": "Adj Hood",
      "code": "ahd",
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
        { "name": "Auto Climb",
      "code": "ac1",
      "type": "checkbox",
      "tooltip": "Put help or more descriptive text here"
    },
    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Prefered Start Pos",
      "code": "psp",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "role preference",
      "code": "rpg",
      "type": "radio",
      "choices": {
        "o": "offensive<br>",
        "d": "defensive<br>",
        "f": "feeder<br>",
        "x": "Any"
      },
      "defaultValue": "x"
    },
    { "name": "Hrs. of Drive Practice",
      "code": "hdp",
      "type": "number",
      "min": 0,
      "max": 200,
      "defaultValue": "0",
      "tooltip": "Hours driving with this years robot"
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

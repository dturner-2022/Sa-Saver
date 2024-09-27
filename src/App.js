import React from "react";
import { useState, useEffect } from "react";
import { GiStarShuriken } from "react-icons/gi";

const App = () =>  {
  //Bgs  for teams
  const [teamBg, setTeamBg] = useState("bleach20");

  //Idea for allocating bleach bg images into an array
  const bleachBgs = [
    {
      src: "Bleach0",
    },
    {
      src: "Bleach1",
    },
    {
      src: "Bleach2",
    },
    {
      src: "Bleach3",
    },
    {
      src: "Bleach4",
    },
    {
      src: "Bleach5",
    },
    {
      src: "Bleach6",
    },
    {
      src: "Bleach7",
    },
    {
      src: "Bleach8",
    },
    {
      src: "Bleach9",
    },
    {
      src: "Bleach10",
    },
    {
      src: "Bleach11",
    },
    {
      src: "Bleach12",
    },
    {
      src: "Bleach13",
    },
    {
      src: "Bleach14",
    },
    {
      src: "Bleach15",
    },
    {
      src: "Bleach16",
    },
    {
      src: "Bleach17",
    },
    {
      src: "Bleach18",
    },
    {
      src: "Bleach19",
    },
    {
      src: "Bleach20",
    },
    {
      src: "Bleach21",
    },
    {
      src: "Bleach22",
    },
    {
      src: "Bleach23",
    },
    {
      src: "Bleach24",
    },
    {
      src: "Bleach25",
    },
    {
      src: "Bleach26",
    },
    {
      src: "Bleach27",
    },
    {
      src: "Bleach28",
    },
    {
      src: "Bleach29",
    },
    {
      src: "Bleach30",
    },
    {
      src: "Bleach31",
    },
    {
      src: "Bleach32",
    },
    {
      src: "Bleach33",
    },
    {
      src: "Bleach34",
    },
    {
      src: "Bleach35",
    },
    {
      src: "Bleach36",
    },
    {
      src: "Bleach37",
    },
    {
      src: "Bleach38",
    },
    {
      src: "Bleach39",
    },
    {
      src: "Bleach40",
    },
    {
      src: "Bleach41",
    },
    {
      src: "Bleach42",
    },
    {
      src: "Bleach43",
    },
    {
      src: "Bleach44",
    },
    {
      src: "Bleach46",
    },
    {
      src: "Bleach47",
    },
    {
      src: "Bleach48",
    },
    {
      src: "Bleach49",
    },
    {
      src: "Bleach50",
    },
    {
      src: "Bleach51",
    },
    {
      src: "Bleach52",
    },
    {
      src: "Bleach53",
    },
    {
      src: "Bleach54",
    },
    {
      src: "Bleach55",
    },
    {
      src: "Bleach56",
    },
    {
      src: "Bleach57",
    },
    {
      src: "Bleach59",
    },    {
      src: "Bleach60",
    },    {
      src: "Bleach61",
    },    {
      src: "Bleach62",
    },    {
      src: "Bleach63",
    },    {
      src: "Bleach64",
    }, 
    {
      src: "Bleach65",
    }, 
    {
      src: "Bleach66",
    }, 
    {
      src: "Bleach67",
    }, 
    {
      src: "Bleach68",
    }, 
    {
      src: "Bleach69",
    }, 
    {
      src: "Bleach70",
    }, 
    {
      src: "Bleach71",
    }, 
    {
      src: "Bleach72",
    }, 
    {
      src: "Bleach73",
    }, 
    {
      src: "Bleach74",
    }, 
  ];

  //Idea for allocating character images into an array
  const charImages = [    {
    "charName": "Kurosaki-Ichigo",
"charId": 0
},
{
    "charName": "Kuchiki-Rukia",
    "charId": 1
},
{
    "charName": "Inoue-Orihime",
    "charId": 2
},
{
    "charName": "Arisawa-Tatsuki",
    "charId": 3
},
{
    "charName": "Yasutora-Sado",
    "charId": 4
},
{
    "charName": "Kurosaki-Yuzu",
    "charId": 5
},
{
    "charName": "Kurosaki-Karin",
    "charId": 6
},
{
    "charName": "Kon",
    "charId": 7
},
{
    "charName": "Don-Kanonji",
    "charId": 8
},
{
    "charName": "Ishida-Uryuu",
    "charId": 9
},
{
    "charName": "Hinakari-Jinta",
    "charId": 10
},
{
    "charName": "Tsumugiya-Ururu",
    "charId": 11
},
{
    "charName": "Tsukabishi-Tessai",
    "charId": 12
},
{
    "charName": "Menos-Grande",
    "charId": 13
},
{
    "charName": "Shrieker",
    "charId": 14
},
{
    "charName": "Numb-Chandelier",
    "charId": 15
},
{
    "charName": "Grand-Fisher",
    "charId": 16
},
{
    "charName": "Metastacia",
    "charId": 17
},
{
    "charName": "Runuganga",
    "charId": 18
},
{
    "charName": "Hooleer",
    "charId": 19
},
{
    "charName": "Shiba-Ganju",
    "charId": 20
},
{
    "charName": "Shiba-Kuukaku",
    "charId": 21
},
{
    "charName": "Ikkanzaka-Jidanbou",
    "charId": 22
},
{
    "charName": "Ikkanzaka-Jiroubou",
    "charId": 23
},
{
    "charName": "Kotetsu-Kiyone",
    "charId": 24
},
{
    "charName": "Yamada-Hanatarou",
    "charId": 25
},
{
    "charName": "Ayasegawa-Yumichika",
    "charId": 26
},
{
    "charName": "Madarame-Ikkaku",
    "charId": 27
},
{
    "charName": "Sasakibe-Choujirou",
    "charId": 28
},
{
    "charName": "Omaeda-Marechiyo",
    "charId": 29
},
{
    "charName": "Kira-Izuru",
    "charId": 30
},
{
    "charName": "Kotetsu-Isane",
    "charId": 31
},
{
    "charName": "Hinamori-Momo",
    "charId": 32
},
{
    "charName": "Abarai-Renji",
    "charId": 33
},
{
    "charName": "Iba-Tetsuzaemon",
    "charId": 34
},
{
    "charName": "Ise-Nanao",
    "charId": 35
},
{
    "charName": "Hisagi-Shuhei",
    "charId": 36
},
{
    "charName": "Matsumoto-Rangiku",
    "charId": 37
},
{
    "charName": "Kurotsuchi-Nemu",
    "charId": 38
},
{
    "charName": "Shiba-Kaien",
    "charId": 39
},
{
    "charName": "Yamamoto-Genryuusai",
    "charId": 40
},
{
    "charName": "Soifon",
    "charId": 41
},
{
    "charName": "Ichimaru-Gin",
    "charId": 42
},
{
    "charName": "Unohana-Retsu",
    "charId": 43
},
{
    "charName": "Aizen-Sousuke",
    "charId": 44
},
{
    "charName": "Kuchiki-Byakuya",
    "charId": 45
},
{
    "charName": "Komamura-Sajin",
    "charId": 46
},
{
    "charName": "Kyouraku-Shunsui",
    "charId": 47
},
{
    "charName": "Tousen-Kaname",
    "charId": 48
},
{
    "charName": "Hitsugaya-Toushirou",
    "charId": 49
},
{
    "charName": "Zaraki-Kenpachi",
    "charId": 50
},
{
    "charName": "Kurotsuchi-Mayuri",
    "charId": 51
},
{
    "charName": "Ukitake-Joushiro",
    "charId": 52
},
{
    "charName": "Final-Form Uryuu",
    "charId": 53
},
{
    "charName": "Urahara-Kisuke",
    "charId": 54
},
{
    "charName": "Shihouin-Yoruichi",
    "charId": 55
},
{
    "charName": "Ishida-Ryuuken",
    "charId": 56
},
{
    "charName": "Shikai-Rukia",
    "charId": 57
},
{
    "charName": "Demon-Sado",
    "charId": 58
},
{
    "charName": "Sparrow-Uryuu",
    "charId": 59
},
{
    "charName": "Kidou-Kira",
    "charId": 60
},
{
    "charName": "Kidou-Momo",
    "charId": 61
},
{
    "charName": "Hueco-Mundo Byakuya",
    "charId": 62
},
{
    "charName": "Bankai-Ichigo",
    "charId": 63
},
{
    "charName": "Bankai-Ikkaku",
    "charId": 64
},
{
    "charName": "Bankai-Renji",
    "charId": 65
},
{
    "charName": "Bankai-Soifon",
    "charId": 66
},
{
    "charName": "Bankai-Gin",
    "charId": 67
},
{
    "charName": "Bankai-Byakuya",
    "charId": 68
},
{
    "charName": "Bankai-Komamura",
    "charId": 69
},
{
    "charName": "Bankai-Hitsugaya",
    "charId": 70
},
{
    "charName": "Bankai-Mayuri",
    "charId": 71
},
{
    "charName": "Armored-Yoruichi",
    "charId": 72
},
{
    "charName": "Kidou-Urahara",
    "charId": 73
},
{
    "charName": "Kurosaki-Isshin",
    "charId": 74
},
{
    "charName": "Yylfordt-Granz",
    "charId": 75
},
{
    "charName": "Edrad-Liones",
    "charId": 76
},
{
    "charName": "Shawlong-Qufang",
    "charId": 77
},
{
    "charName": "Demoura-Zodd",
    "charId": 78
},
{
    "charName": "Aisslinger-Wernarr",
    "charId": 79
},
{
    "charName": "Menoly-Mallia",
    "charId": 80
},
{
    "charName": "Loly-Aivirrne",
    "charId": 81
},
{
    "charName": "Tesla-Lindocruz",
    "charId": 82
},
{
    "charName": "Dondochakka-Bilstin",
    "charId": 83
},
{
    "charName": "Pesche-Guatiche",
    "charId": 84
},
{
    "charName": "Sun-Sun",
    "charId": 85
},
{
    "charName": "Mila-Rose",
    "charId": 86
},
{
    "charName": "Apacci",
    "charId": 87
},
{
    "charName": "Dark-Rukia",
    "charId": 88
},
{
    "charName": "Senna",
    "charId": 89
},
{
    "charName": "Bankai-Unohana",
    "charId": 90
},
{
    "charName": "Bankai-Kenpachi",
    "charId": 91
},
{
    "charName": "Charlotte-Cuuhlhourne",
    "charId": 92
},
{
    "charName": "Avirama-Redder",
    "charId": 93
},
{
    "charName": "Findorr-Calius",
    "charId": 94
},
{
    "charName": "Ggio-Vega",
    "charId": 95
},
{
    "charName": "Lilynette-Gingerbuck",
    "charId": 96
},
{
    "charName": "Gantebainne-Mosqueda",
    "charId": 97
},
{
    "charName": "Yammy-Riyalgo",
    "charId": 98
},
{
    "charName": "Resurreccion-Yammy",
    "charId": 99
},
{
    "charName": "Hollow-Ichigo",
    "charId": 100
},
{
    "charName": "Cirucci-Sanderwicci",
    "charId": 101
},
{
    "charName": "Don-Panini",
    "charId": 102
},
{
    "charName": "Ayon",
    "charId": 103
},
{
    "charName": "Rudbornn-Chelute",
    "charId": 104
},
{
    "charName": "Wonderweiss-Margela",
    "charId": 105
},
{
    "charName": "Aaroniero-Arruruerie",
    "charId": 106
},
{
    "charName": "Szayel-Aporro Granz",
    "charId": 107
},
{
    "charName": "Zommari-Leroux",
    "charId": 108
},
{
    "charName": "Luppi-Antenor",
    "charId": 109
},
{
    "charName": "Grimmjow-Jaegerjaquez",
    "charId": 110
},
{
    "charName": "Nnoitra-Jiruga",
    "charId": 111
},
{
    "charName": "Ulquiorra-Cifer",
    "charId": 112
},
{
    "charName": "Tia-Harribel",
    "charId": 113
},
{
    "charName": "Barragan-Luisenbarn",
    "charId": 114
},
{
    "charName": "Coyote-Starrk",
    "charId": 115
},
{
    "charName": "Resurreccion-Szayel",
    "charId": 116
},
{
    "charName": "Resurreccion-Grimmjow",
    "charId": 117
},
{
    "charName": "Resurreccion-Ulquiorra",
    "charId": 118
},
{
    "charName": "Segunda-Ulquiorra",
    "charId": 119
},
{
    "charName": "Resurreccion-Harribel",
    "charId": 120
},
{
    "charName": "Resurreccion-Barragan",
    "charId": 121
},
{
    "charName": "Resurreccion-Starrk",
    "charId": 122
},
{
    "charName": "Resurreccion-Wonderweiss",
    "charId": 123
},
{
    "charName": "Child-Nel",
    "charId": 124
},
{
    "charName": "Nelliel-Tu Odelschwanck",
    "charId": 125
},
{
    "charName": "Hollow-Tousen",
    "charId": 126
},
{
    "charName": "Resurreccion-Tousen",
    "charId": 127
},
{
    "charName": "Inner-Ichigo",
    "charId": 128
},
{
    "charName": "Zangetsu",
    "charId": 129
},
{
    "charName": "Pre-Ascension-Aizen",
    "charId": 130
},
{
    "charName": "Koutotsu",
    "charId": 131
},
{
    "charName": "Vizard-Ichigo",
    "charId": 132
},
{
    "charName": "Yadomaru-Lisa",
    "charId": 133
},
{
    "charName": "Kuna-Mashiro",
    "charId": 134
},
{
    "charName": "Sarugaki-Hiyori",
    "charId": 135
},
{
    "charName": "Ushoda-Hachigen",
    "charId": 136
},
{
    "charName": "Otoribashi-Rojuro",
    "charId": 137
},
{
    "charName": "Aikawa-Love",
    "charId": 138
},
{
    "charName": "Muguruma-Kensei",
    "charId": 139
},
{
    "charName": "Hirako-Shinji",
    "charId": 140
},
{
    "charName": "Suzumebachi",
    "charId": 141
},
{
    "charName": "Tenken",
    "charId": 142
},
{
    "charName": "Sode-no Shirayuki",
    "charId": 143
},
{
    "charName": "Kazeshini",
    "charId": 144
},
{
    "charName": "Ashisogi-Jizo",
    "charId": 145
},
{
    "charName": "Gonryomaru",
    "charId": 146
},
{
    "charName": "Koga-Kuchiki",
    "charId": 147
},
{
    "charName": "Arturo-Plateado",
    "charId": 148
},
{
    "charName": "Senbonzakura",
    "charId": 149
},
{
    "charName": "Ruri-Iro Kujaku",
    "charId": 150
},
{
    "charName": "Hozukimaru",
    "charId": 151
},
{
    "charName": "Haineko",
    "charId": 152
},
{
    "charName": "Saru",
    "charId": 153
},
{
    "charName": "Hebi",
    "charId": 154
},
{
    "charName": "Muramasa",
    "charId": 155
},
{
    "charName": "Wabisuke",
    "charId": 156
},
{
    "charName": "Tobiume",
    "charId": 157
},
{
    "charName": "Sogyo-no Kotowari",
    "charId": 158
},
{
    "charName": "Ryujin-Jakka",
    "charId": 159
},
{
    "charName": "Gegetsuburi",
    "charId": 160
},
{
    "charName": "Kyokotsu",
    "charId": 161
},
{
    "charName": "Katen",
    "charId": 162
},
{
    "charName": "Broly",
    "charId": 163
},
{
    "charName": "Hyorinmaru",
    "charId": 164
},
{
    "charName": "Hisagomaru",
    "charId": 165
},
{
    "charName": "Narunosuke",
    "charId": 166
},
{
    "charName": "Kyoko-Haida",
    "charId": 167
},
{
    "charName": "Kirikaze",
    "charId": 168
},
{
    "charName": "Hollow-Muramasa",
    "charId": 169
},
{
    "charName": "Sasori-of the Red Sand (S)",
    "charId": 170
},
{
    "charName": "Fullbringer-Orihime",
    "charId": 171
},
{
    "charName": "Fullbringer-Sado",
    "charId": 172
},
{
    "charName": "Uryuu-(TLA)",
    "charId": 173
},
{
    "charName": "Tsukishima",
    "charId": 174
},
{
    "charName": "Dangai-Ichigo",
    "charId": 175
},
{
    "charName": "Chrysalis-Aizen",
    "charId": 176
},
{
    "charName": "Ascended-Aizen",
    "charId": 177
},
{
    "charName": "Butterfly-Aizen",
    "charId": 178
},
{
    "charName": "Final-Aizen",
    "charId": 179
},
{
    "charName": "Hueco-Mundo Kenpachi",
    "charId": 180
},
{
    "charName": "Hakuda-Yamamoto",
    "charId": 181
},
{
    "charName": "Yachiru-Kusajishi",
    "charId": 182
},
{
    "charName": "Choe-Neng Poww",
    "charId": 183
},
{
    "charName": "Nirgge-Parduoc",
    "charId": 184
},
{
    "charName": "Di-Roy Rinker",
    "charId": 185
},
{
    "charName": "Ashido-Kano",
    "charId": 186
},
{
    "charName": "Fullbringer-Ichigo-lvl-1",
    "charId": 187
},
{
    "charName": "Yukio-Vorarlberna",
    "charId": 188
},
{
    "charName": "Ginjo-Kugo",
    "charId": 189
},
{
    "charName": "Riruka-Dokugamine",
    "charId": 190
},
{
    "charName": "Moe-Shishigawara",
    "charId": 191
},
{
    "charName": "Gengar",
    "charId": 192
},
{
    "charName": "Ben-10",
    "charId": 193
},
{
    "charName": "Yin-and Yang",
    "charId": 194
},
{
    "charName": "Jackie-Tristian",
    "charId": 195
},
{
    "charName": "Giriko-Kutzusawa",
    "charId": 196
},
{
    "charName": "Fullbringer-Ichigo-lvl-2",
    "charId": 197
},
{
    "charName": "Fullbringer-Ichigo-lvl-3",
    "charId": 198
},
{
    "charName": "Traitor-Ginjo",
    "charId": 199
},
{
    "charName": "Byakuya-(TLA)",
    "charId": 200
},
{
    "charName": "Ebern-Asguiaro",
    "charId": 201
},
{
    "charName": "Quilge-Opie",
    "charId": 202
},
{
    "charName": "Isshin-Shiba",
    "charId": 203
},
{
    "charName": "Kurosaki-Masaki",
    "charId": 204
},
{
    "charName": "As-Nodt",
    "charId": 205
},
{
    "charName": "Mahito",
    "charId": 206
}

,
  ];
  //Spring method to fade in the entire app over .5 seconds on lunach

  //Test function for the character images being clicked to alert the img info
  //Stores teams data as objects into the local storage if present if not sets to empty array
  const data = JSON.parse(window.localStorage.getItem("Your_Teams") || "[]");
  const teamCount = parseInt(
    window.localStorage.getItem("Teams_Created") || parseInt(0)
  );

  const [selectedChars, setSelectedChars] = useState([" ", " ", " "]);

  //OnClick function for backgrounds removes Bleach text from the img src
  function handleBgSelection(bg) {
    setTeamBg(bg);
  }

  function isBgSelected(bg) {
    if (bg.src === teamBg) {
      return "bgSample selected " + bg.src;
    } else {
      return "bgSample ";
    }
  }
  // function to use when character clicked
  function handleSelectCharacter(char) {
    const arrayCopy = [...selectedChars];
    //Checks to see if selected character is already in the array if so do nothing
    //else add character to the array, reaching 3 characters update teammember state with the names
    //when reaching 3 character additional clicks will remove 0 index char and add latest click as
    //at index 2
    if (arrayCopy.includes(char.charID)) {
      const index = arrayCopy.findIndex((num) => num === char.charID);
      if (index !== -1) arrayCopy.splice(index, 1);
    } else {
      if (arrayCopy.length === 3) {
        arrayCopy.shift();
        setSelectedChars(arrayCopy);
      }
      arrayCopy.push(char.charName);
    }
    setTeamMembers(arrayCopy);
  }

  function highlightChar(i) {
    if (selectedChars.includes(i)) {
      return "selected";
    } else {
      return "charImage";
    }
  }

  //   const toggleClass = (name, id) => {
  //     //If the character is already in remove from array
  //     if (newArr.includes(name)) {
  //       let removed = newArr.findIndex(name);
  //       alert("NewArr " + newArr + " Removing :" + name + " Removed" + removed);
  //       return;
  //     }
  //     //Highlight and add to selectedChar and team arrays 3 distinct clicked on chars
  //     if (i.current < 3 && !newArr.includes(name)) {
  //       newArr2.push(id);
  //       newArr.push(name);
  //     }

  //   //After 3 chars names and ids are added set the states for team members and highlight chars
  //   if (newArr.length === 3) {
  //     const [n1, n2, n3] = newArr;
  //     setTeamMembers(() => n1 + " " + n2 + " " + n3);
  //     selectChar({ ...charImages, selectedChar: teamMembers});
  //     setSelectedChars({ ...charImages, selectedChar: teamMembers });
  //   }
  // };
  //On click for char image adds 3 distinct names as strings into an array upon completion fills the input
  //Figure out a way to remove ',' format must be NAME_NAME_NAME for the add team button to work
  // const addMember = (name, index) => {
  //   if (i.current < 3 && !newArr.includes(name)) {
  //     newArr.push(name);
  //     // toggleClass(index);
  //     // setCounter(newArr.length);
  //     // console.log(newArr);
  //   } else {
  //     return;
  //   }
  //   //Afer obtaining 3 distinct chars deconstuct the array adding space for quick team add and
  //   //setting team members as the team
  //   if (newArr.length === 3) {
  //     const [n1, n2, n3] = newArr;
  //     setTeamMembers(() => [n1 + " " + n2 + " " + n3]);
  //   }
  // };

  //Set intial teams array with 1 object containing a name, id, members array,
  //img src array and member id array
  const [teams, setTeams] = useState(data || []);
  //Get teams form previous visit if data is present.
  // useEffect(() => {
  //   data = window.localStorage.getItem("Your_Teams");
  //   data?setTeams(JSON.parse(data)) : alert("No previous teams...");
  // }, []);

  //Set intial team members
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamName, setTeamName] = useState("Streak");
  const [numOfTeams, setNumOfTeams] = useState(teams.length);
  const [teamNumber, setTeamNumber] = useState(teamCount);
  const [teamStars, setTeamStars] = useState(0);

  function addTeam() {
    //If no team name is given the button does nothing
    //For some reason does not work with newArr.length < 1-3
    if (!teamName) {
      return;
    }
    //Adding new teams information and setting it to the proper keys then adding
    //team content into the main div to be displayed
    const newTeam = {
      ID: teamMembers + " " + teamName,
      TeamNumber: teamNumber,
      Name: teamName,
      Background: teamBg,
      memberID: [1, 2, 3],
      Members: teamMembers,
      starNum: teamStars,
      imgSrc: [
        require("./char_images/" + teamMembers[0] + ".webp"),
        require("./char_images/" + teamMembers[1] + ".webp"),
        require("./char_images/" + teamMembers[2] + ".webp"),
      ],
    };
    //Adds newly created team into the teams array.
    //Increases total number of teams
    //Increases team number aka id
    //Splits team members into a size 3 array
    //Empty input name field cause its annoying having to delete
    setTeams((oldTeams) => [...oldTeams, newTeam]);
    setNumOfTeams(numOfTeams + 1);
    setTeamName(teamName);
    setTeamBg(teamBg);
    setTeamNumber(teamNumber + 1);
    setTeamName("Team" + numOfTeams);
    setTeamStars(0);
  }

  const StarRating = (props) => {
    const [hover, setHover] = useState(null);
    return (
      <div className="starHolder">
        {[...Array(10)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input 
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setTeamRating(props.team, ratingValue)}
              />
              <GiStarShuriken key={index}
                color={
                  ratingValue <= (hover || props.stars) ? "red" : "silver "
                }
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                className={props.stars > 6 ? "highRated" : " "}
              />
            </label>
          );
        })}
      </div>
    );
  };

  function removeTeam(id) {
    //Remove button logic looks for id that matches the clicked removed id and
    //removes the team with that id. If multiple teams get deleted
    //check to make sure the teamNumber is increasing correclty.
    const newTeams = teams.filter((team) => team.ID !== id);
    //Future idea to readjust team id's example delete team 2/4 and change 3 and 4 id by -1.
    // if (id < numOfTeams) {
    //  alert("Move higher numbers down by -1");
    //} else {
    //  alert("You removed a team = or lower than the max change no numbers");
    //}
    setTeams(newTeams);
  }

  function setTeamRating(id, stars) {
    const target = teams.findIndex((team) => team.TeamNumber === id);
    teams[target].starNum = stars;
    setTeamStars(stars);
  }

  function deleteAll() {
    localStorage.clear();
    setTeams([]);
    window.localStorage.setItem("Teams_Created", parseInt(0));
  }

  //Update number of teams when a team is added or removed.
  //Output just for testing purposes.
  useEffect(() => {
    setTeamStars(0);
    // console.log("Number of teams", numOfTeams);
    // console.log("Team Name", teamName);
    // console.log("Team members", teamMembers);
    // console.log("Team number", teamNumber);
    // console.log("Img src ", teamNumber);
    window.localStorage.setItem("Your_Teams", JSON.stringify(teams));
    window.localStorage.setItem("Teams_Created", teamNumber);
  }, [teams, teamNumber, teamStars, setTeamStars ]);
  // componentDidMount();
  //console.log("Selected Chars " + selectedChars);
  return (
    <div className="App">
      <div className="charImageHolder">
        {" "}
        {charImages.map((charPic,index) => {
          return (
            <img
              key={index}
              loading="lazy"
              draggable="true"
              //className={highlightChar(charPic.charID)}
              className={highlightChar(charPic.charName)}
              id={charPic.charID}
              alt={charPic.charName}
              src={require("./char_images/" + charPic.charName + ".webp")}
              //For some reason this onClick only highlights with  charID not charName
              onClick={() => handleSelectCharacter(charPic)}
              //onClick={() => toggleClass(charPic.charName, charPic.charID)}
              // onClick={() => addMember(charPic.charName, charPic.charID)}
            />
          );
        })}
      </div>
      {/* <Spring 
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={{delay: 1200 , duration: 3000}}
        />  */}
      <div className="teamsSettingsHolder">
        <div className="teamSettings">
          <div className="nameCreate">
            <input
              label="Team Name"
              type="text"
              placeholder="Enter team name..."
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <input
              label="Team Members"
              type="text"
              placeholder="Enter 3 names or click 3 characters..."
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
            />
            <p className="important">Select Background: {teamBg}</p>

            <br></br>
            <button className="btn add" onClick={() => addTeam()}>
              Add Team
            </button>

            <button className="btn delete" onClick={() => deleteAll()}>
              !DELETE ALL!
            </button>

            <p className="important">
              Select 3 characters, a background and "Add Team". Name required.
            </p>
            <p className="important">
              <span className="important">You have {numOfTeams} team(s)!</span>
            </p>
            <div className="bgsHolder">
              {" "}
              {bleachBgs.map((bg) => {
                return (
                  <div
                    key={bg.src + "key"}
                    draggable="true"
                    className={isBgSelected(bg) + " " + bg.src}
                    loading="lazy"
                    onClick={() => handleBgSelection(bg.src)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="teamsHolder">
        <div className="mainTeamHolder">
          {teams.map((team,index) => {
            return (
              <>
                <div
                  key={index}
                  className={"teamBox bleachbg " + team.Background}
                >
                  <p key={index} className="teamInfo" >
                    Name: {team.Name} <br />
                    <StarRating stars={team.starNum} team={team.TeamNumber} />
                    Members: {team.Members + " "}
                  </p>
                  {/* MemberID {team.memberID} */}
                  <img 
                    // onClick={() => speak(team.Members)}
                    loading="lazy"
                    src={team.imgSrc[0]}
                    alt={team.Members[0]}
                  />
                  <img
                    // onClick={() => speak(team.Name)}
                    loading="lazy"
                    src={team.imgSrc[1]}
                    alt={team.Members[1]}
                  />
                  <img
                    // onClick={() => speak(team.ID)}
                    loading="lazy"
                    src={team.imgSrc[2]}
                    alt={team.Members[2]}
                  />

                  <button
                    className="btn remove"
                    onClick={() => removeTeam(team.ID)}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
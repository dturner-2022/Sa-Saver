// import React, { Component, createElement } from "react";
import { useState, useEffect, useRef } from "react";

const App = () => {
  //Database crequest to grab images but fails err blocked by CORS no access control allow
  // function componentDidMount() {
  //   fetch("https://sainfo.me/display.php")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log("Error Reading data Google harder you cow" + err);
  //     });
  // }
  // const sizes = {
  //   sm: "640px",
  //   md: "768px",
  //   lg: "1024px",
  //   xl: "1280px",
  //   "2xl": "1536px",
  // };
  let newArr = [];
  let newArr2 = [];
  //Bgs for teams
  const [teamBg, setTeamBg] = useState("Bleach20");

  //Idea for allocating Bleach bg images into an array
  const [bleachBgs, setBleachBg] = useState({
    imgs: [
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
    ],
  });

  //Idea for allocating character images into an array
  const [charImages, selectChar] = useState({
    selectedChar: [],
    chars: [
      {
        charName: "Kurosaki-Ichigo",
        charID: 0,
      },
      {
        charName: "Kuchiki-Rukia",
        charID: 1,
      },
      {
        charName: "Inoue-Orihime",
        charID: 2,
      },
      {
        charName: "Arisawa-Tatsuki",
        charID: 3,
      },
      {
        charName: "Yasutora-Sado",
        charID: 4,
      },
      {
        charName: "Kurosaki-Yuzu",
        charID: 5,
      },
      {
        charName: "Kurosaki-Karin",
        charID: 6,
      },
      {
        charName: "Kon",
        charID: 7,
      },
      {
        charName: "Don-Kanonji",
        charID: 8,
      },
      {
        charName: "Ishida-Uryuu",
        charID: 9,
      },
      {
        charName: "Hinakari-Jinta",
        charID: 10,
      },
      {
        charName: "Tsumugiya-Ururu",
        charID: 11,
      },
      {
        charName: "Tsukabishi-Tessai",
        charID: 12,
      },
      {
        charName: "Menos-Grande",
        charID: 13,
      },
      {
        charName: "Shrieker",
        charID: 14,
      },
      {
        charName: "Numb-Chandelier",
        charID: 15,
      },
      {
        charName: "Grand-Fisher",
        charID: 16,
      },
      {
        charName: "Metastacia",
        charID: 17,
      },
      {
        charName: "Runuganga",
        charID: 18,
      },
      {
        charName: "Hooleer",
        charID: 19,
      },
      {
        charName: "Shiba-Ganju",
        charID: 20,
      },
      {
        charName: "Shiba-Kuukaku",
        charID: 21,
      },
      {
        charName: "Ikkanzaka-Jidanbou",
        charID: 22,
      },
      {
        charName: "Ikkanzaka-Jiroubou",
        charID: 23,
      },
      {
        charName: "Kotetsu-Kiyone",
        charID: 24,
      },
      {
        charName: "Yamada-Hanatarou",
        charID: 25,
      },
      {
        charName: "Ayasegawa-Yumichika",
        charID: 26,
      },
      {
        charName: "Madarame-Ikkaku",
        charID: 27,
      },
      {
        charName: "Sasakibe-Choujirou",
        charID: 28,
      },
      {
        charName: "Omaeda-Marechiyo",
        charID: 29,
      },
      {
        charName: "Kira-Izuru",
        charID: 30,
      },
      {
        charName: "Kotetsu-Isane",
        charID: 31,
      },
      {
        charName: "Hinamori-Momo",
        charID: 32,
      },
      {
        charName: "Abarai-Renji",
        charID: 33,
      },
      {
        charName: "Iba-Tetsuzaemon",
        charID: 34,
      },
      {
        charName: "Ise-Nanao",
        charID: 35,
      },
      {
        charName: "Hisagi-Shuhei",
        charID: 36,
      },
      {
        charName: "Matsumoto-Rangiku",
        charID: 37,
      },
      {
        charName: "Kurotsuchi-Nemu",
        charID: 38,
      },
      {
        charName: "Shiba-Kaien",
        charID: 39,
      },
      {
        charName: "Yamamoto-Genryuusai",
        charID: 40,
      },
      {
        charName: "Soifon",
        charID: 41,
      },
      {
        charName: "Ichimaru-Gin",
        charID: 42,
      },
      {
        charName: "Unohana-Retsu",
        charID: 43,
      },
      {
        charName: "Aizen-Sousuke",
        charID: 44,
      },
      {
        charName: "Kuchiki-Byakuya",
        charID: 45,
      },
      {
        charName: "Komamura-Sajin",
        charID: 46,
      },
      {
        charName: "Kyouraku-Shunsui",
        charID: 47,
      },
      {
        charName: "Tousen-Kaname",
        charID: 48,
      },
      {
        charName: "Hitsugaya-Toushirou",
        charID: 49,
      },
      {
        charName: "Zaraki-Kenpachi",
        charID: 50,
      },
      {
        charName: "Kurotsuchi-Mayuri",
        charID: 51,
      },
      {
        charName: "Ukitake-Joushiro",
        charID: 52,
      },
      {
        charName: "Final-Form-Uryuu",
        charID: 53,
      },
      {
        charName: "Urahara-Kisuke",
        charID: 54,
      },
      {
        charName: "Shihouin-Yoruichi",
        charID: 55,
      },
      {
        charName: "Ishida-Ryuuken",
        charID: 56,
      },
      {
        charName: "Shikai-Rukia",
        charID: 57,
      },
      {
        charName: "Demon-Sado",
        charID: 58,
      },
      {
        charName: "Sparrow-Uryuu",
        charID: 59,
      },
      {
        charName: "Kidou-Kira",
        charID: 60,
      },
      {
        charName: "Kidou-Momo",
        charID: 61,
      },
      {
        charName: "Hueco-Mundo-Byakuya",
        charID: 62,
      },
      {
        charName: "Bankai-Ichigo",
        charID: 63,
      },
      {
        charName: "Bankai-Ikkaku",
        charID: 64,
      },
      {
        charName: "Bankai-Renji",
        charID: 65,
      },
      {
        charName: "Bankai-Soifon",
        charID: 66,
      },
      {
        charName: "Bankai-Gin",
        charID: 67,
      },
      {
        charName: "Bankai-Byakuya",
        charID: 68,
      },
      {
        charName: "Bankai-Komamura",
        charID: 69,
      },
      {
        charName: "Bankai-Hitsugaya",
        charID: 70,
      },
      {
        charName: "Bankai-Mayuri",
        charID: 71,
      },
      {
        charName: "Armored-Yoruichi",
        charID: 72,
      },
      {
        charName: "Kidou-Urahara",
        charID: 73,
      },
      {
        charName: "Kurosaki-Isshin",
        charID: 74,
      },
      {
        charName: "Yylfordt-Granz",
        charID: 75,
      },
      {
        charName: "Edrad-Liones",
        charID: 76,
      },
      {
        charName: "Shawlong-Qufang",
        charID: 77,
      },
      {
        charName: "Demoura-Zodd",
        charID: 78,
      },
      {
        charName: "Aisslinger-Wernarr",
        charID: 79,
      },
      {
        charName: "Menoly-Mallia",
        charID: 80,
      },
      {
        charName: "Loly-Aivirrne",
        charID: 81,
      },
      {
        charName: "Tesla-Lindocruz",
        charID: 82,
      },
      {
        charName: "Dondochakka-Bilstin",
        charID: 83,
      },
      {
        charName: "Pesche-Guatiche",
        charID: 84,
      },
      {
        charName: "Sun-Sun",
        charID: 85,
      },
      {
        charName: "Mila-Rose",
        charID: 86,
      },
      {
        charName: "Apacci",
        charID: 87,
      },
      {
        charName: "Dark-Rukia",
        charID: 88,
      },
      {
        charName: "Senna",
        charID: 89,
      },
      {
        charName: "Bankai-Unohana",
        charID: 90,
      },
      {
        charName: "Bankai-Kenpachi",
        charID: 91,
      },
      {
        charName: "Charlotte-Cuuhlhourne",
        charID: 92,
      },
      {
        charName: "Avirama-Redder",
        charID: 93,
      },
      {
        charName: "Findorr-Calius",
        charID: 94,
      },
      {
        charName: "Ggio-Vega",
        charID: 95,
      },
      {
        charName: "Lilynette-Gingerbuck",
        charID: 96,
      },
      {
        charName: "Gantebainne-Mosqueda",
        charID: 97,
      },
      {
        charName: "Yammy-Riyalgo",
        charID: 98,
      },
      {
        charName: "Resurreccion-Yammy",
        charID: 99,
      },
      {
        charName: "Hollow-Ichigo",
        charID: 100,
      },
      {
        charName: "Cirucci-Sanderwicci",
        charID: 101,
      },
      {
        charName: "Don-Panini",
        charID: 102,
      },
      {
        charName: "Ayon",
        charID: 103,
      },
      {
        charName: "Rudbornn-Chelute",
        charID: 104,
      },
      {
        charName: "Wonderweiss-Margela",
        charID: 105,
      },
      {
        charName: "Aaroniero-Arruruerie",
        charID: 106,
      },
      {
        charName: "Szayel-Aporro-Granz",
        charID: 107,
      },
      {
        charName: "Zommari-Leroux",
        charID: 108,
      },
      {
        charName: "Luppi-Antenor",
        charID: 109,
      },
      {
        charName: "Grimmjow-Jaegerjaquez",
        charID: 110,
      },
      {
        charName: "Nnoitra-Jiruga",
        charID: 111,
      },
      {
        charName: "Ulquiorra-Cifer",
        charID: 112,
      },
      {
        charName: "Tia-Harribel",
        charID: 113,
      },
      {
        charName: "Barragan-Luisenbarn",
        charID: 114,
      },
      {
        charName: "Coyote-Starrk",
        charID: 115,
      },
      {
        charName: "Resurreccion-Szayel",
        charID: 116,
      },
      {
        charName: "Resurreccion-Grimmjow",
        charID: 117,
      },
      {
        charName: "Resurreccion-Ulquiorra",
        charID: 118,
      },
      {
        charName: "Segunda-Ulquiorra",
        charID: 119,
      },
      {
        charName: "Resurreccion-Harribel",
        charID: 120,
      },
      {
        charName: "Resurreccion-Barragan",
        charID: 121,
      },
      {
        charName: "Resurreccion-Starrk",
        charID: 122,
      },
      {
        charName: "Resurreccion-Wonderweiss",
        charID: 123,
      },
      {
        charName: "Child-Nel",
        charID: 124,
      },
      {
        charName: "Nelliel-Tu-Odelschwanck",
        charID: 125,
      },
      {
        charName: "Hollow-Tousen",
        charID: 126,
      },
      {
        charName: "Resurreccion-Tousen",
        charID: 127,
      },
      {
        charName: "Inner-Ichigo",
        charID: 128,
      },
      {
        charName: "Zangetsu",
        charID: 129,
      },
      {
        charName: "Pre-Ascension-Aizen",
        charID: 130,
      },
      {
        charName: "Koutotsu",
        charID: 131,
      },
      {
        charName: "Vizard-Ichigo",
        charID: 132,
      },
      {
        charName: "Yadomaru-Lisa",
        charID: 133,
      },
      {
        charName: "Kuna-Mashiro",
        charID: 134,
      },
      {
        charName: "Sarugaki-Hiyori",
        charID: 135,
      },
      {
        charName: "Ushoda-Hachigen",
        charID: 136,
      },
      {
        charName: "Otoribashi-Rojuro",
        charID: 137,
      },
      {
        charName: "Aikawa-Love",
        charID: 138,
      },
      {
        charName: "Muguruma-Kensei",
        charID: 139,
      },
      {
        charName: "Hirako-Shinji",
        charID: 140,
      },
      {
        charName: "Suzumebachi",
        charID: 141,
      },
      {
        charName: "Tenken",
        charID: 142,
      },
      {
        charName: "Sode-no-Shirayuki",
        charID: 143,
      },
      {
        charName: "Kazeshini",
        charID: 144,
      },
      {
        charName: "Ashisogi-Jizo",
        charID: 145,
      },
      {
        charName: "Gonryomaru",
        charID: 146,
      },
      {
        charName: "Koga-Kuchiki",
        charID: 147,
      },
      {
        charName: "Arturo-Plateado",
        charID: 148,
      },
      {
        charName: "Senbonzakura",
        charID: 149,
      },
      {
        charName: "Ruri-Iro-Kujaku",
        charID: 150,
      },
      {
        charName: "Hozukimaru",
        charID: 151,
      },
      {
        charName: "Haineko",
        charID: 152,
      },
      {
        charName: "Saru",
        charID: 153,
      },
      {
        charName: "Hebi",
        charID: 154,
      },
      {
        charName: "Muramasa",
        charID: 155,
      },
      {
        charName: "Wabisuke",
        charID: 156,
      },
      {
        charName: "Tobiume",
        charID: 157,
      },
      {
        charName: "Sogyo-no-Kotowari",
        charID: 158,
      },
      {
        charName: "Ryujin-Jakka",
        charID: 159,
      },
      {
        charName: "Gegetsuburi",
        charID: 160,
      },
      {
        charName: "Kyokotsu",
        charID: 161,
      },
      {
        charName: "Katen",
        charID: 162,
      },
      {
        charName: "Broly",
        charID: 163,
      },
      {
        charName: "Hyorinmaru",
        charID: 164,
      },
      {
        charName: "Hisagomaru",
        charID: 165,
      },
      {
        charName: "Narunosuke",
        charID: 166,
      },
      {
        charName: "Kyoko-Haida",
        charID: 167,
      },
      {
        charName: "Kirikaze",
        charID: 168,
      },
      {
        charName: "Hollow-Muramasa",
        charID: 169,
      },
      {
        charName: "Sasori-of-the-Red-Sand-(S)",
        charID: 170,
      },
      {
        charName: "Fullbringer-Orihime",
        charID: 171,
      },
      {
        charName: "Fullbringer-Sado",
        charID: 172,
      },
      {
        charName: "Uryuu-(TLA)",
        charID: 173,
      },
      {
        charName: "Tsukishima",
        charID: 174,
      },
      {
        charName: "Dangai-Ichigo",
        charID: 175,
      },
      {
        charName: "Chrysalis-Aizen",
        charID: 176,
      },
      {
        charName: "Ascended-Aizen",
        charID: 177,
      },
      {
        charName: "Butterfly-Aizen",
        charID: 178,
      },
      {
        charName: "Final-Aizen",
        charID: 179,
      },
      {
        charName: "Hueco-Mundo-Kenpachi",
        charID: 180,
      },
      {
        charName: "Hakuda-Yamamoto",
        charID: 181,
      },
      {
        charName: "Yachiru-Kusajishi",
        charID: 182,
      },
      {
        charName: "Choe-Neng-Poww",
        charID: 183,
      },
      {
        charName: "Nirgge-Parduoc",
        charID: 184,
      },
      {
        charName: "Di-Roy-Rinker",
        charID: 185,
      },
      {
        charName: "Ashido-Kano",
        charID: 186,
      },
      {
        charName: "Fullbringer-Ichigo-lvl-1",
        charID: 187,
      },
      {
        charName: "Yukio-Vorarlberna",
        charID: 188,
      },
      {
        charName: "Ginjo-Kugo",
        charID: 189,
      },
      {
        charName: "Riruka-Dokugamine",
        charID: 190,
      },
      {
        charName: "Moe-Shishigawara",
        charID: 191,
      },
      {
        charName: "Gengar",
        charID: 192,
      },
      {
        charName: "Ben-10",
        charID: 193,
      },
    ],
  });
  //Spring method to fade in the entire app over .5 seconds on lunach

  //Test function for the character images being clicked to alert the img info
  //Stores teams data as objects into the local storage if present if not sets to empty array
  const data = JSON.parse(window.localStorage.getItem("Your_Teams") || "[]");

  let i = useRef(0);

  const [selectedChars, setSelectedChars] = useState([" ", " ", " "]);

  //OnClick function for backgrounds removes Naruto text from the img src
  function handleBgSelection(bg) {
    setTeamBg(bg);
  }

  function isBgSelected(bg){
    if (bg.src === teamBg) {
      return "bgSample selected " + bg.src;
    }
    else{
      return "bgSample " ;
    }
  
  }
  const arrayCopy = [...selectedChars];
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
  const [teams, setTeams] = useState(data);
  //Get teams form previous visit if data is present.
  // useEffect(() => {
  //   data = window.localStorage.getItem("Your_Teams");
  //   data?setTeams(JSON.parse(data)) : alert("No previous teams...");
  // }, []);

  //Set intial team members
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamName, setTeamName] = useState("Streak");
  const [numOfTeams, setNumOfTeams] = useState(teams.length);
  const [teamNumber, setTeamNumber] = useState(teams.length);

  function addTeam() {
    //If no team name is given the button does nothing
    //For some reason does not work with newArr.length < 1-3
    if (!teamName) {
      return;
    }
    //Adding new teams information and setting it to the proper keys then adding
    //team content into the main div to be displayed
    const newTeam = {
      ID: teamNumber,
      Name: teamName,
      Background: teamBg,
      memberID: [1, 2, 3],
      Members: teamMembers,
      imgSrc: [
        require("./" + "char_images/" + teamMembers[0] + ".png"),
        require("./" + "char_images/" + teamMembers[1] + ".png"),
        require("./" + "char_images/" + teamMembers[2] + ".png"),
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
    setTeamNumber(teamName.concat(teamNumber));
    setTeamName("Team" + numOfTeams);
  }

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

  //Update number of teams when a team is added or removed.
  //Output just for testing purposes.
  useEffect(() => {
    setNumOfTeams(teams.length);
    setTeamName(teamName);
    setTeamNumber(teamNumber);
    // console.log("Number of teams", numOfTeams);
    // console.log("Team Name", teamName);
    // console.log("Team members", teamMembers);
    // console.log("Team number", teamNumber);
    // console.log("Img src ", teamNumber);
    window.localStorage.setItem("Your_Teams", JSON.stringify(teams));
  }, [teams, setTeams, selectChar]);
  // componentDidMount();
  //console.log("Selected Chars " + selectedChars);
  return (
    <div className="App">
      <div className="charImageHolder">
        {" "}
        {charImages.chars.map((charPic) => {
          return (
            <img
              key={charPic.charID}
              draggable="true"
              //className={highlightChar(charPic.charID)}
              className={highlightChar(charPic.charName)}
              id={charPic.charID}
              alt={charPic.charName}
              src={require("./char_images/" + charPic.charName + ".png")}
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
              lable="Team Name"
              type="text"
              placeholder="Enter team name..."
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <input
              lable="Team Members"
              type="text"
              placeholder="Enter 3 names or click 3 characters..."
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
            />
            <p className="important">Select Background: {teamBg}</p>

            <br></br>
            <button className="btn" onClick={() => addTeam()}>
              Add Team
            </button>
            <p className="important">
              Select 3 characters, a background and then "Add Team". Team name
              required.
            </p>
            <p className="important">
              <span className="important">You have {numOfTeams} team(s)!</span>
            </p>
            <div>
              {" "}
              {bleachBgs.imgs.map((bg) => {
                return (
                  <div
                    key={bg.src + "key"}
                    className={isBgSelected(bg) + " " + bg.src}
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
          {teams.map((team) => {
            return (
              <>
                <div className={"teamBox Bleachbg " + team.Background}>
                  <p className="teamInfo" key={team.ID}>
                    Name: {team.Name} <br />
                    Members: {team.Members + " "}
                  </p>
                  {/* MemberID {team.memberID} */}
                  <img
                    // onClick={() => speak(team.Members)}
                    src={team.imgSrc[0]}
                    alt={team.Members[0]}
                  />
                  <img
                    // onClick={() => speak(team.Name)}
                    src={team.imgSrc[1]}
                    alt={team.Members[1]}
                  />
                  <img
                    // onClick={() => speak(team.ID)}
                    src={team.imgSrc[2]}
                    alt={team.Members[2]}
                  />
                  <button className="btn remove" onClick={() => removeTeam(team.ID)}>
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

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
  const [teamBg, setTeamBg] = useState();

  //Idea for allocating character images into an array
  const [charImages, selectChar] = useState({
    selectedChar: [4, 5, 6],
    chars: [
      {
        charName: "Ichigo",
        charID: 0,
      },
      {
        charName: "Rukia",
        charID: 1,
      },
      {
        charName: "Orihime",
        charID: 2,
      },
      {
        charName: "Tatsuki",
        charID: 3,
      },
      {
        charName: "Chad",
        charID: 4,
      },
      {
        charName: "Yuzu",
        charID: 5,
      },
      {
        charName: "Kon",
        charID: 6,
      },
      {
        charName: "Don",
        charID: 7,
      },
      {
        charName: "Uryuu",
        charID: 8,
      },
      {
        charName: "Jinta",
        charID: 9,
      },
      {
        charName: "Ururu",
        charID: 10,
      },
      {
        charName: "Tessai",
        charID: 11,
      },
      {
        charName: "Menos",
        charID: 12,
      },
      {
        charName: "Shrieker",
        charID: 13,
      },
      {
        charName: "Numb",
        charID: 14,
      },
      {
        charName: "Fisher",
        charID: 15,
      },
      {
        charName: "Metastacia",
        charID: 16,
      },
      {
        charName: "Breadhime",
        charID: 17,
      },
      {
        charName: "Hooleer",
        charID: 18,
      },
      {
        charName: "Ganju",
        charID: 19,
      },
      {
        charName: "Kuukaku",
        charID: 20,
      },
      {
        charName: "Jidanbou",
        charID: 21,
      },
      {
        charName: "Jiroubou",
        charID: 22,
      },
      {
        charName: "Kiyone",
        charID: 23,
      },
      {
        charName: "Hanatarou",
        charID: 24,
      },
      {
        charName: "Yumichika",
        charID: 25,
      },
      {
        charName: "Ikkaku",
        charID: 26,
      },
      {
        charName: "Choujirou",
        charID: 27,
      },
      {
        charName: "Omaeda",
        charID: 28,
      },
      {
        charName: "Isane",
        charID: 29,
      },
      {
        charName: "Momo",
        charID: 30,
      },
      {
        charName: "Renji",
        charID: 31,
      },
      {
        charName: "Iba",
        charID: 32,
      },
      {
        charName: "Nanao",
        charID: 33,
      },
      {
        charName: "Hisagi",
        charID: 34,
      },
      {
        charName: "Rangiku",
        charID: 35,
      },
      {
        charName: "Nemu",
        charID: 36,
      },
      {
        charName: "Kaien",
        charID: 37,
      },
      {
        charName: "Yamamoto",
        charID: 38,
      },
      {
        charName: "Soifon",
        charID: 39,
      },
      {
        charName: "Gin",
        charID: 40,
      },
      {
        charName: "Retsu",
        charID: 41,
      },
      {
        charName: "Aizen",
        charID: 42,
      },
      {
        charName: "Byakuya",
        charID: 43,
      },
      {
        charName: "Sajin",
        charID: 44,
      },
      {
        charName: "Shunsui",
        charID: 45,
      },
      {
        charName: "Tousen",
        charID: 46,
      },
      {
        charName: "Toushirou",
        charID: 47,
      },
      {
        charName: "Kenpachi",
        charID: 48,
      },
      {
        charName: "Mayuri",
        charID: 49,
      },
      {
        charName: "Ukitake",
        charID: 50,
      },
      {
        charName: "Finalformuryuu",
        charID: 51,
      },
      {
        charName: "Kisuke",
        charID: 52,
      },
      {
        charName: "Yoruichi",
        charID: 53,
      },
      {
        charName: "Ryuuken",
        charID: 54,
      },
      {
        charName: "Shikairukia",
        charID: 55,
      },
      {
        charName: "Demonsado",
        charID: 56,
      },
      {
        charName: "Sparrowuryuu",
        charID: 57,
      },
      {
        charName: "Kidokira",
        charID: 58,
      },
      {
        charName: "Kidomomo",
        charID: 59,
      },
      {
        charName: "Huecomundobyakuya",
        charID: 60,
      },
      {
        charName: "Bankaiichigo",
        charID: 61,
      },
      {
        charName: "Bankaiikkaku",
        charID: 62,
      },
      {
        charName: "Bankairenji",
        charID: 63,
      },
      {
        charName: "Bankaisoifon",
        charID: 64,
      },
      {
        charName: "Bankaigin",
        charID: 65,
      },
      {
        charName: "Bankaibyakuya",
        charID: 66,
      },
      {
        charName: "Bankaisajin",
        charID: 67,
      },
      {
        charName: "Bankaitoshirou",
        charID: 68,
      },
      {
        charName: "Bankaimayuri",
        charID: 69,
      },
      {
        charName: "Armoredyoruichi",
        charID: 70,
      },
      {
        charName: "Kidokisuke",
        charID: 71,
      },
      {
        charName: "Yylfordt",
        charID: 72,
      },
      {
        charName: "Edrad",
        charID: 73,
      },
      {
        charName: "Shawlong",
        charID: 74,
      },
      {
        charName: "Demoura",
        charID: 75,
      },
      {
        charName: "Aisslinger",
        charID: 76,
      },
      {
        charName: "Menoly",
        charID: 77,
      },
      {
        charName: "Loly",
        charID: 78,
      },
      {
        charName: "Tesla",
        charID: 79,
      },
      {
        charName: "Dondochakka",
        charID: 80,
      },
      {
        charName: "Pesche",
        charID: 81,
      },
      {
        charName: "Sunsun",
        charID: 82,
      },
      {
        charName: "Mila",
        charID: 83,
      },
      {
        charName: "Apacci",
        charID: 84,
      },
      {
        charName: "Charlotte",
        charID: 85,
      },
      {
        charName: "Redder",
        charID: 86,
      },
      {
        charName: "Findorr",
        charID: 87,
      },
      {
        charName: "Vega",
        charID: 88,
      },
      {
        charName: "Lilynette",
        charID: 89,
      },
      {
        charName: "Mosqueda",
        charID: 91,
      },
      {
        charName: "Cirucci",
        charID: 92,
      },
      {
        charName: "Panini",
        charID: 93,
      },
      {
        charName: "Ayon",
        charID: 94,
      },
      {
        charName: "Rudbornn",
        charID: 95,
      },
      {
        charName: "Wonderweiss",
        charID: 96,
      },
      {
        charName: "Yammy",
        charID: 97,
      },
      {
        charName: "Aaroniero",
        charID: 98,
      },
      {
        charName: "Szayel",
        charID: 99,
      },
      {
        charName: "Zommari",
        charID: 100,
      },
      {
        charName: "Luppi",
        charID: 101,
      },
      {
        charName: "Grimmjow",
        charID: 102,
      },
      {
        charName: "Nnoitra",
        charID: 103,
      },
      {
        charName: "Ulquiorra",
        charID: 104,
      },
      {
        charName: "Harribel",
        charID: 105,
      },
      {
        charName: "Barragan",
        charID: 106,
      },
      {
        charName: "Starrk",
        charID: 107,
      },
      {
        charName: "Reswonderweiss",
        charID: 108,
      },
      {
        charName: "Resszayel",
        charID: 109,
      },
      {
        charName: "Resgrimmjow",
        charID: 110,
      },
      {
        charName: "Resulquiorra",
        charID: 111,
      },
      {
        charName: "Segundaulquiorra",
        charID: 112,
      },
      {
        charName: "Childnel",
        charID: 113,
      },
      {
        charName: "Adultnel",
        charID: 114,
      },
      {
        charName: "Resharribel",
        charID: 115,
      },
      {
        charName: "Resbarragan",
        charID: 116,
      },
      {
        charName: "Resstarrk",
        charID: 117,
      },
      {
        charName: "Resyammy",
        charID: 118,
      },
      {
        charName: "Hollowtousen",
        charID: 119,
      },
      {
        charName: "Restousen",
        charID: 120,
      },
      {
        charName: "Vizardichigo",
        charID: 121,
      },
      {
        charName: "Lisa",
        charID: 122,
      },
      {
        charName: "Mashiro",
        charID: 123,
      },
      {
        charName: "Hiyori",
        charID: 124,
      },
      {
        charName: "Hachigen",
        charID: 125,
      },
      {
        charName: "Rojuro",
        charID: 126,
      },
      {
        charName: "Love",
        charID: 127,
      },
      {
        charName: "Kensei",
        charID: 128,
      },
      {
        charName: "Shinji",
        charID: 129,
      },
      {
        charName: "Hollowichigo",
        charID: 130,
      },
      {
        charName: "Innerichigo",
        charID: 131,
      },
      {
        charName: "Zangetsu",
        charID: 132,
      },
      {
        charName: "Preascensionaizen",
        charID: 133,
      },
      {
        charName: "Koutotsu",
        charID: 134,
      },
      {
        charName: "Senna",
        charID: 135,
      },
      {
        charName: "Darkrukia",
        charID: 136,
      },
      {
        charName: "Suzumebachi",
        charID: 137,
      },
      {
        charName: "Kazeshini",
        charID: 138,
      },
      {
        charName: "Sodenoshirayuki",
        charID: 139,
      },
      {
        charName: "Tenken",
        charID: 140,
      },
      {
        charName: "Ashisogijizo",
        charID: 141,
      },
      {
        charName: "Gonryomaru",
        charID: 142,
      },
      {
        charName: "Kogakuchiki",
        charID: 143,
      },
      {
        charName: "Arturoplateado",
        charID: 144,
      },
      {
        charName: "Senbonzakura",
        charID: 145,
      },
      {
        charName: "Ruriirokujaku",
        charID: 146,
      },
      {
        charName: "Hozukimaru",
        charID: 147,
      },
      {
        charName: "Haineko",
        charID: 148,
      },
      {
        charName: "Saru",
        charID: 149,
      },
      {
        charName: "Hebi",
        charID: 150,
      },
      {
        charName: "Muramasa",
        charID: 151,
      },
      {
        charName: "Wabisuke",
        charID: 152,
      },
      {
        charName: "Tobiume",
        charID: 153,
      },
      {
        charName: "Sogyonokotowari",
        charID: 154,
      },
      {
        charName: "Gegetsuburi",
        charID: 155,
      },
      {
        charName: "Ryujinjakka",
        charID: 156,
      },
      {
        charName: "Katen",
        charID: 157,
      },
      {
        charName: "Kyokotsu",
        charID: 158,
      },
      {
        charName: "Hyorinmaru",
        charID: 159,
      },
      {
        charName: "Broly",
        charID: 160,
      },
      {
        charName: "Hisagomaru",
        charID: 161,
      },
      {
        charName: "Narunosuke",
        charID: 162,
      },
      {
        charName: "Kyoko",
        charID: 163,
      },
      {
        charName: "Kirikaze",
        charID: 164,
      },
      {
        charName: "Hollowmuramasa",
        charID: 165,
      },
      {
        charName: "Sasori",
        charID: 166,
      },
      {
        charName: "Fullbringerorihime",
        charID: 167,
      },
      {
        charName: "Fullbringersado",
        charID: 168,
      },
      {
        charName: "Uryuutla",
        charID: 169,
      },
      {
        charName: "Tsukishima",
        charID: 170,
      },
      {
        charName: "Dangaiichigo",
        charID: 171,
      },
      {
        charName: "Chrysalisaizen",
        charID: 172,
      },
      {
        charName: "Ascendedaizen",
        charID: 173,
      },
      {
        charName: "Butterflyaizen",
        charID: 174,
      },
      {
        charName: "Finalaizen",
        charID: 175,
      },
      {
        charName: "Huecomundokenpachi",
        charID: 176,
      },
      {
        charName: "Hakudayamamoto",
        charID: 177,
      },
      {
        charName: "Yachiru",
        charID: 178,
      },
      {
        charName: "Choe",
        charID: 179,
      },
      {
        charName: "Diroyrinker",
        charID: 180,
      },
      {
        charName: "Ashido",
        charID: 181,
      },
      {
        charName: "Fullbringerichigolvl1",
        charID: 182,
      },
      {
        charName: "Yukio",
        charID: 183,
      },
      {
        charName: "Ginjo",
        charID: 184,
      },
      {
        charName: "Riruka",
        charID: 185,
      },
      {
        charName: "Moe",
        charID: 186,
      },
      {
        charName: "Gengar",
        charID: 187,
      },
      {
        charName: "Ben10",
        charID: 188,
      },
    ],
  });
  //Spring method to fade in the entire app over .5 seconds on lunach
 
  //Test function for the character images being clicked to alert the img info
  //Stores teams data as objects into the local storage if present if not sets to empty array
  const data = JSON.parse(window.localStorage.getItem("Your_Teams") || "[]");

  let i = useRef(0);

  function highlightChar(num) {
    if (charImages.selectedChar.includes(num)) {
      return "selected";
    } else {
      return "charImage";
    }
  }

  const toggleClass = (name, id) => {
    //If the character is already in remove from array
    if (newArr.includes(name)) {
      let removed = newArr.findIndex(name);
      alert("NewArr " + newArr + " Removing :" + name + " Removed" + removed);
      return;
    }
    //Highlight and add to selectedChar and team arrays 3 distinct clicked on chars
    if (i.current < 3 && !newArr.includes(name)) {
      newArr2.push(id);
      newArr.push(name);
    }

    //After 3 chars names and ids are added set the states for team members and highlight chars
    if (newArr.length === 3) {
      const [n1, n2, n3] = newArr;
      setTeamMembers(() => n1 + " " + n2 + " " + n3);
      selectChar({ ...charImages, selectedChar: newArr2 });
    }
  };
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
  const [teamMembers, setTeamMembers] = useState([
    "Ichigo ",
    "Orihime ",
    "Chad ",
  ]);
  const [teamName, setTeamName] = useState("");
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
      Members: teamMembers.split(" ", teamMembers.length),
      Background: teamBg,
      imgSrc: [
        require("./" + "char_images/" + teamMembers.split(" ", 1)[0] + ".jpg"),
        require("./" + "char_images/" + teamMembers.split(" ", 2)[1] + ".jpg"),
        require("./" + "char_images/" + teamMembers.split(" ", 3)[2] + ".jpg"),
      ],
      memberID: [1, 2, 3],
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
    setTeamMembers([teamMembers.split(" ", 3)]);
    setTeamName("Deafult");
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
    console.log("Number of teams", numOfTeams);
    console.log("ID", teamNumber);
    console.log("Number of teams", numOfTeams);
    console.log("Team Name", teamName);
    console.log("Team members", teamMembers);
    console.log("Team number", teamNumber);
    window.localStorage.setItem("Your_Teams", JSON.stringify(teams));
  }, [teams, setTeams, selectChar]);
  // componentDidMount();

  return (
    <div class="App">
        <div className="charImageHolder">
          {" "}
          {charImages.chars.map((charPic) => {
            return (
              <img
                key={charPic.charID}
                draggable="true"
                className={highlightChar(charPic.charID)}
                id={charPic.charID}
                alt={charPic.charName}
                src={require("./char_images/" + charPic.charName + ".jpg")}
                onClick={() => toggleClass(charPic.charName, charPic.charID)}
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
        <div className="teamsHolder">
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
              <p>Select Background: {teamBg}</p>
              <input
                label ="Background"
                placeholder="0"
                title="BG"
                type="list"
                min="0"
                max="9"
                value={teamBg}
                className="cells-range"
                name="searacher"
                onChange={(e) => setTeamBg(e.target.value)}
              />
              <br></br>
              <button className="btn" onClick={() => addTeam()}>
                Add Team
              </button>
              <p className="important">
                Select 3 characters then click the button. Team name required.
              </p>
              <p className="important">
                Team Members :
                <span className="charTeamOutput">{teamMembers} </span>
              </p>
              <div>
                <section>
                  <div className="bleach0 bgSample">
                    <p>0</p>
                  </div>
                  <div className="bleach1 bgSample">
                    <p>1</p>
                  </div>
                  <div className="bleach2 bgSample">
                    <p>2</p>
                  </div>
                  <div className="bleach3 bgSample">
                    <p>3</p>
                  </div>
                  <div className="bleach4 bgSample">
                    <p>4</p>
                  </div>
                  <div className="bleach5 bgSample">
                    <p>5</p>
                  </div>
                  <div className="bleach6 bgSample">
                    <p>6</p>
                  </div>
                  <div className="bleach7 bgSample">
                    <p>7</p>
                  </div>
                  <div className="bleach8 bgSample">
                    <p>8</p>
                  </div>
                  <div className="bleach9 bgSample">
                    <p>9</p>
                  </div>
                  <div className="bleach10 bgSample">
                    <p>10</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
         
          <div className=" ">
            {teams.map((team) => {
              return (
                <>
                  <div className={"teamBox bleach" + team.Background}>
                    <p className="teamInfo" key={team.ID}>
                      Name: {team.Name} <br />
                      ID: {team.ID} <br />
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
                    <button className="btn" onClick={() => removeTeam(team.ID)}>
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

// import React, { Component, createElement } from "react";
import { useState, useEffect, useRef } from "react";
import { Spring } from "react-spring";
import {animated,useSpring} from "react-spring";

const  App=()=> {
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

  //Idea for allocating character images into an array
  const charImages = [
    "Ichigo",
    "Rukia",
    "Orihime",
    "Tatsuki",
    "Chad",
    "Yuzu",
    "Kon",
    "Don",
    "Uryuu",
    "Jinta",
    "Ururu",
    "Tessai",
    "Menos",
    "Shrieker",
    "Numb",
    "Fisher",
    "Metastacia",
    "Breadhime",
    "Hooleer",
    "Ganju",
    "Kuukaku",
    "Jidanbou",
    "Jiroubou",
    "Kiyone",
    "Hanatarou",
    "Yumichika",
    "Ikkaku",
    "Choujirou",
    "Omaeda",
    "Isane",
    "Momo",
    "Renji",
    "Iba",
    "Nanao",
    "Hisagi",
    "Rangiku",
    "Nemu",
    "Kaien",
    "Yamamoto",
    "Soifon",
    "Gin",
    "Retsu",
    "Aizen",
    "Byakuya",
    "Sajin",
    "Shunsui",
    "Tousen",
    "Toushirou",
    "Kenpachi",
    "Mayuri",
    "Ukitake",
    "Finalformuryuu",
    "Kisuke",
    "Yoruichi",
    "Ryuuken",
    "Shikairukia",
    "Demonsado",
    "Sparrowuryuu",
    "Kidokira",
    "Kidomomo",
    "Huecomundobyakuya",
    "Bankaiichigo",
    "Bankaiikkaku",
    "Bankairenji",
    "Bankaisoifon",
    "Bankaigin",
    "Bankaibyakuya",
    "Bankaisajin",
    "Bankaitoshirou",
    "Bankaimayuri",
    "Armoredyoruichi",
    "Kidokisuke",
    "Yylfordt",
    "Edrad",
    "Shawlong",
    "Demoura",
    "Aisslinger",
    "Menoly",
    "Loly",
    "Tesla",
    "Dondochakka",
    "Pesche",
    "Sunsun",
    "Mila",
    "Apacci",
    "Charlotte",
    "Redder",
    "Findorr",
    "Vega",
    "Lilynette",
    "Mosqueda",
    "Cirucci",
    "Panini",
    "Ayon",
    "Rudbornn",
    "Wonderweiss",
    "Yammy",
    "Aaroniero",
    "Szayel",
    "Zommari",
    "Luppi",
    "Grimmjow",
    "Nnoitra",
    "Ulquiorra",
    "Harribel",
    "Barragan",
    "Starrk",
    "Reswonderweiss",
    "Resszayel",
    "Resgrimmjow",
    "Resulquiorra",
    "Segundaulquiorra",
    "Childnel",
    "Adultnel",
    "Resharribel",
    "Resbarragan",
    "Resstarrk",
    "Resyammy",
    "Hollowtousen",
    "Restousen",
    "Vizardichigo",
    "Lisa",
    "Mashiro",
    "Hiyori",
    "Hachigen",
    "Rojuro",
    "Love",
    "Kensei",
    "Shinji",
    "Hollowichigo",
    "Innerichigo",
    "Zangetsu",
    "Preascensionaizen",
    "Koutotsu",
    "Senna",
    "Darkrukia",
    "Suzumebachi",
    "Kazeshini",
    "Sodenoshirayuki",
    "Tenken",
    "Ashisogijizo",
    "Gonryomaru",
    "Kogakuchiki",
    "Arturoplateado",
    "Senbonzakura",
    "Ruriirokujaku",
    "Hozukimaru",
    "Haineko",
    "Saru",
    "Hebi",
    "Muramasa",
    "Wabisuke",
    "Tobiume",
    "Sogyonokotowari",
    "Gegetsuburi",
    "Ryujinjakka",
    "Katen",
    "Kyokotsu",
    "Hyorinmaru",
    "Broly",
    "Hisagomaru",
    "Narunosuke",
    "Kyoko",
    "Kirikaze",
    "Hollowmuramasa",
    "Sasori",
    "Fullbringerorihime",
    "Fullbringersado",
    "Uryuutla",
    "Tsukishima",
    "Dangaiichigo",
    "Chrysalisaizen",
    "Ascendedaizen",
    "Butterflyaizen"
  ];
  const fade = useSpring({
    from: { opacity : 0},
    opacity: 1
    });
  //Test function for the character images being clicked to alert the img info
  //Stores teams data as objects into the local storage if present if not sets to empty array
  const data = JSON.parse(window.localStorage.getItem("Your_Teams") || "[]");
  let newArr = [];
  const i = useRef(0);

  //On click for char image adds 3 distinct names as strings into an array upon completion fills the input
  //Figure out a way to remove ',' format must be NAME_NAME_NAME for the add team button to work
  const addMember = (name) => {
    if (i.current < 3 && !newArr.includes(name)) {
      newArr.push(name);
      // setCounter(newArr.length);
      // console.log(newArr);
    } else {
      return;
    }
    //Afer obtaining 3 distinct chars deconstuct the array adding space for quick team add and
    //setting team members as the team
    if (newArr.length === 3) {
      const [n1, n2, n3] = newArr;
      setTeamMembers(() => n1 + " " + n2 + " " + n3);
    }
  };

  //Set intial teams array with 1 object containing a name, id, members array,
  //img src array and member id array
  const [teams, setTeams] = useState(

      data
    
  );
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
    // if (!teamName) {
    //   return;
    // }

    //Adding new teams information and setting it to the proper keys then adding
    //team content into the main div to be displayed
    const newTeam = {
      ID: teamNumber,
      Name: teamName,
      Members: teamMembers.split(" ", teamMembers.length),
      imgSrc: [
        require("./" + "char_images/" + teamMembers.split(" ", 1)[0] + ".jpg"),
        require("./" + "char_images/" + teamMembers.split(" ", 2)[1] + ".jpg"),
        require("./" + "char_images/" + teamMembers.split(" ", 3)[2] + ".jpg")
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
    setTeamNumber(teamName.concat(teamNumber));
    setTeamMembers([teamMembers.split(" ", 3)]);
    setTeamName("");
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
    //console.log("Number of teams", numOfTeams);
    //console.log("ID", teamNumber);
    //console.log("Number of teams", numOfTeams);
    //console.log("Team Name", teamName);
    //console.log("Team members", teamMembers);
    //console.log("Team number", teamNumber);
 window.localStorage.setItem("Your_Teams", JSON.stringify(teams));
},[teams, setTeams]);
  // componentDidMount();

  return (
    <div className="App">
      <animated.div style={fade} className="wrapper">
        <div className="charImageHolder">
          {" "}
          {charImages.map((charPic) => {
            return (
              <img
                draggable="true"
                className="charIamge"
                alt={charPic}
                src={require("./char_images/" + charPic + ".jpg")}
                onClick={() => addMember(charPic)}
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
          <div className="nameCreate">
            <input
              type="text"
              placeholder="Enter team name..."
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
             />
            <input
              type="text"
              placeholder="Enter 3 names or click 3 chars..."
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
            />
            <button className="btn" onClick={() => addTeam()}>
              Add Team
            </button>
          </div>
          <img
            className="charIamge"
            alt="image"
            src={require("./char_images/Breadhime.jpg")}
          />
          <div>
            <p className="important">Team Members {teamMembers} </p>
            <p className="important">Click 3 chars then clicky teh button name not needed</p>
          </div>

          <h1> Team List</h1>
          <h3> Number of teams {teams.length}</h3>
          <div>
            {teams.map((team) => {
              return (
                <>
                  <div className="teamBox">
                    <p key={team.Number}>
                      Name {team.Name} <br />
                      {/* ID {team.ID} <br /> */}
                      Members {team.Members + " "}
                      <br />
                      {/* MemberID {team.memberID} */}
                      <img
                        // onClick={() => speak(team.Members)}
                        src={team.imgSrc[0]}
                        alt={team.Members[0] + "img"}
                      />
                      <img
                        // onClick={() => speak(team.Name)}
                        src={team.imgSrc[1]}
                        alt={team.Members[1] + "img"}
                      />
                      <img
                        // onClick={() => speak(team.ID)}
                        src={team.imgSrc[2]}
                        alt={team.Members[2] + "img"}
                      />
                    </p>
                    <button className="btn" onClick={() => removeTeam(team.ID)}>
                      Remove
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </animated.div>
    </div>
  );
}
export default App;

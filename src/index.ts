import "./style.css";

window.onload = function() {
  //player start stats
  var playerNameField: any = document.querySelector("#playerName");
  var playerStrengthField: any = document.querySelector("#playerStrength");
  var playerHealthField: any = document.querySelector("#playerHealth");

  var player: any = document.querySelector("#playerData");
  playerNameField.value = player.dataset.name;
  playerStrengthField.value = player.dataset.strength;
  playerHealthField.value = player.dataset.health;

  //monster list + getting the values from the first monster
  var monsterList: any = document.querySelectorAll("#monsters > *");
  var monsterNameField: any = document.querySelector("#monsterName");
  var monsterStrengthField: any = document.querySelector("#monsterStrength");
  var monsterHealthField: any = document.querySelector("#monsterHealth");

  monsterNameField.value = monsterList[0].dataset.name;
  monsterStrengthField.value = monsterList[0].dataset.strength;
  monsterHealthField.value = monsterList[0].dataset.health;

  //lägga in funktion "load monster"! där första monstret hämtas i listan - sen
  var count = 0;

  var fightButton: any = document.querySelector("#fight");

  var consoleInformation = document.querySelector("#console");
  const addInput = function(Textinput: string) {
    let action = document.createElement("li");
    action.innerHTML = Textinput;
    let actionlist = document.querySelector("#ActionList");
    actionlist.appendChild(action);
  };

  fightButton.onclick = function(event: string) {
    if (count % 2 == 0) {
      console.log(monsterHealthField);
      monsterHealthField.value -= player.dataset.strength;
      addInput("You hit the monster!");
    } else {
      playerHealthField.value -= monsterList[0].dataset.strength;
      addInput("The monster hit you!");
    }
    count++;
    if (playerHealthField.value <= 0) {
      addInput("You lost! :( ");
    }
    // monsterList = Array.from(monsterList);

    if (monsterHealthField.value < 1 && monsterList.length > 1) {
      addInput("A monster died!");
      monsterList.shift();
      monsterNameField.value = monsterList[0].dataset.name;
      monsterStrengthField.value = monsterList[0].dataset.strength;
      monsterHealthField.value = monsterList[0].dataset.health;
    } else if (monsterHealthField.value < 1) {
      monsterHealthField.value = "0";
      addInput("A monster died!");
      addInput("You win!! :)");
      fightButton.attributes.disabled = "disabled";
    }
  };
};

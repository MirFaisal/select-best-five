function playerSelect() {
  //   selected button
  const selectButton = event.target;

  // check select button is btn-select
  if (selectButton.classList.contains("btn-select")) {
    const playername = selectButton.parentNode.firstElementChild.innerText;

    // checking lenghtn players seleted list
    const selectedplayersList = document.querySelectorAll(".p-item");
    if (selectedplayersList.length < 5) {
      setSelectPlayer(playername);
      selectButton.classList.add("disabled");

      // cheacking for user over selectded
      if (selectedplayersList.length == 4) {
        const allButton = document.querySelectorAll(".players .btn-select");
        for (let btn of allButton) {
          btn.classList.add("disabled");
        }
      }
    }
  }
}

//function for get selected player name
function setSelectPlayer(pName) {
  const selectedPlayers = document.getElementById("selected-players");

  // creating a new li element
  const li = document.createElement("li");
  li.classList.add("p-item");
  li.innerText = pName;
  selectedPlayers.appendChild(li);
}

//Player Expense calculation
function calculatePlayesCost() {
  const selectedplayersList = document.querySelectorAll(".p-item");

  const perPlayeBudget = parseInt(
    document.getElementById("per-player-budget").value
  );
  const playersExpense = (document.getElementById("player-expenses").innerText =
    perPlayeBudget * selectedplayersList.length);

  return playersExpense;
}

//total budget
function total() {
  console.log();
  const managerBudget = parseInt(
    document.getElementById("manager-budget").value
  );
  const coachBudget = parseInt(document.getElementById("coach-budget").value);

  const playersExpense = calculatePlayesCost();
  const total = playersExpense + managerBudget + coachBudget;

  document.getElementById("total-amount").innerText = total;
}

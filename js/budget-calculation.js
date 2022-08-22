console.log("budgets");
function updatePlayerList(playerListName) {
  const listContainer = document.getElementById("list-container");
  const li = document.createElement("li");
  li.innerText = playerListName;
  li.classList.add("item");
  listContainer.appendChild(li);
}
const selectButtons = document.querySelectorAll(".pN");
const playerNames = document.querySelectorAll(".item");
// console.log(selectButtons);
let count = 0;
for (let button = 0; button < selectButtons.length; button++) {
  selectButtons[button].addEventListener("click", function (event) {
    //disable selected button

    //get player names
    count++;
    const playerListName = playerNames[button].innerText;
    selectButtons[button].setAttribute("disabled", "");
    //create a list item
    if (count <= 5) {
      updatePlayerList(playerListName);
    } else {
      alert("Player Limit Exceded");
    }
  });
}
/*
function totalPlayerCost() {
  const playerCost = document.getElementById("total-expense");
  const playerCostString = playerCost.innerText;
  const totalPlayerOfCost = parseFloat(playerCostString);
  console.log(totalPlayerOfCost);
  return totalPlayerOfCost;
}
*/
//get the text value
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}
//set the value of element
function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
//get the input value
function getinputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}
// calculate total expense
document.getElementById("calculate").addEventListener("click", function () {
  // get the input value
  //   const inputPrice = document.getElementById("input-price");
  //   const inputPriceString = inputPrice.value;
  //   const inputPlayerPrice = parseFloat(inputPriceString);
  //   console.log(inputPlayerPrice);
  //   inputPrice.value = "";
  const inputPlayerPrice = getinputFieldValueById("input-price");
  //calculate the total cost of selected player
  const totalExpenseOfPlayer = count * inputPlayerPrice;
  //   console.log(totalExpenseOfPlayer);

  //   update the expense total
  setTextElementValueById("total-expense", totalExpenseOfPlayer);

  //   calculate the amount cost
});
//calulate total

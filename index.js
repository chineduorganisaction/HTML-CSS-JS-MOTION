var addText = document.getElementById("input").value;
var newText = document.createTextNode(addText);
var newList = document.createElement("li");
var table = document.getElementById('table');
var newButton = document.getElementById("enter")

//condition
var listElement = newList.appendChild(newText);
var newTable = table.appendChild(listElement);

//controller
function buttonClick(){
    table.appendChild(listElement);
}
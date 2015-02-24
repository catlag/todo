var myForm = document.getElementById("toDoForm");
var list = document.getElementById("toDoList");

// Adds eventlistener to submit button
myForm.addEventListener("submit", function (event) {
	event.preventDefault();	
	var title = this.title.value;

// creates list, text, and buttons
	var listItem = document.createElement("li");
	var buttonDiv = document.createElement("div");
	var row = document.createElement("div")
	var text = document.createTextNode(title);
	var btn1 = document.createElement("button");
	var btn2 = document.createElement("button");

// sets the text and class of buttons and list items
	btn1.innerText="Done";
	btn1.className = "check";
	btn2.innerText="Delete";
	btn2.className = "delete";
	row.className = "row";
	buttonDiv.className = "buttonDiv";
	listItem.className = "noStrike";

// Adds list items and buttons to the list
	listItem.appendChild(text);
	buttonDiv.appendChild(btn1);
	buttonDiv.appendChild(btn2);
	row.appendChild(listItem);
	row.appendChild(buttonDiv);
	
	list.appendChild(row);
	

	this.title.value ="";
	 dList();
	 chkList();
 


});

// adds an event listener to all buttons with the class of delete
var dList = function(){
  var rmbutton = document.querySelectorAll(".delete");
  for (var i = 0; i < rmbutton.length; i++) {
    rmbutton[i].addEventListener("click", rmList); 

  }
};
// deletes the list item 
var rmList = function() {
	console.log(this.parentNode.parentNode);
	this.parentNode.parentNode.remove();
	
	
	
};


// adds an event listener to all buttons with the class of check
var chkList = function(){
  var donebutton = document.querySelectorAll(".check");
  for (var i = 0; i < donebutton.length; i++) {
    donebutton[i].addEventListener("click", crssList); 

  }
};

// switched between button classes and button name


crssList = function() {
	
	if (this.parentNode.parentNode.firstChild.className === "noStrike") {
		this.parentNode.parentNode.firstChild.className = "strike";
		this.innerText = "Undo";
	}else  if (this.parentNode.parentNode.firstChild.className === "strike") {
		this.parentNode.parentNode.firstChild.className = "noStrike";
		this.innerText = "Done";
	}
	};
	












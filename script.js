//your JS code here. If required.
// check if there are saved details
if(localStorage.getItem("username") && localStorage.getItem("password")){
	// show login button for existing user
	var existingBtn = document.createElement("button");
	existingBtn.id = "existing";
	existingBtn.textContent = "Login as existing user";
	document.body.appendChild(existingBtn);

	existingBtn.addEventListener("click", function(){
		alert("Logged in as " + localStorage.getItem("username"));
	});
}

// add event listener to form submission
var form = document.querySelector("form");
form.addEventListener("submit", function(event){
	event.preventDefault();

	var username = document.querySelector("#username").value;
	var password = document.querySelector("#password").value;
	var remember = document.querySelector("#remember").checked;

	if(remember){
		// save details to local storage
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
	} else {
		// remove saved details from local storage
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}

	alert("Logged in as " + username);
});

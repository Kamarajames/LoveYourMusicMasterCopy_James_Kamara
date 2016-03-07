//Enter JavaScript form validation scripts here



/*Place the function to test your email here*/
function validateEmail(){
	var emailID = document.queryForm.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");
	// the 3 conditions you are testing
	if (atpos < 1 || ( dotpos - atpos < 2) || dotpos+2 >= emailID.length)
	{
		
		alert("Please enter email in the format something@mail.com");
		document.queryForm.email.focus();
		return false;
	}
		return (true) ;
    }// end function ValidateEmail


function formValidate(){
	
// checks for no space in first name field
	
	
	if( document.queryForm.firstname.value == ""){
		
		alert("Please provide your first name!");
		document.queryForm.firstname.focus();
		return false;
		
	}
	//test() method tests for a match in a string, returns true if matched, vaidates for a-z and A-Z and white space (\s)
	// validate the letters in name are correct and between min 6 max 30 characters
	var letters = /^[A-Za-z\s]{2,4}$/;
	// alert("Please use alphabet characters only between 3 to 30 letters maximum to spell your full name!");
	if (!letters.test( document.queryForm.firstname.value)){
		
		alert("Please provide your first name with valid alphabet characters between 3 to 30 letters maximum only!");
		document.queryForm.firstname.focus();
		return false;
		
	}
	
	
	
	if( document.queryForm.lastname.value == ""){
		
		alert("Please provide your surname name!");
		document.queryForm.lastname.focus();
		return false;
		
	}
	
	//test() method tests for a match in a string, returns true if matched, vaidates for a-z and A-Z and white space (\s)
	// validate the letters in name are correct and between min 6 max 30 characters
	var letters1 = /^[A-Za-z\s]{2,4}$/;
	// alert("Please use alphabet characters only between 3 to 30 letters maximum to spell your full name!");
	if (!letters1.test( document.queryForm.lastname.value)){
		
		alert("Please provide your surname with valid alphabet characters between 3 to 30 letters maximum only!");
		document.queryForm.lastname.focus();
		return false;
		
	}
	
	// check for no email entered
	if( document.queryForm.email.value == ""){
		
		alert("Please provide your email!");
		document.queryForm.email.focus();
		return false;
		
	}
	else{
	// put extra check for data format
		var ret = validateEmail();
		if( ret == false)
		{
			return false;
		}
      }
	
	// validate the email format is correct
	//var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; version 1 and version 2 below
	  var mailformat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	  if (!mailformat.test( document.queryForm.email.value)){
		
		alert("Please provide your email in the correct format something@mail.com please!");
		document.queryForm.email.focus();
		return false;
		
	}
	
	// code to check the music boxes are checked
	var musicChoice = document.getElementById("priority-low").checked;
	var musicChoice1 = document.getElementById("priority-normal").checked;
	var musicChoice2 = document.getElementById("priority-high").checked;
	
	if((musicChoice=="")&&(musicChoice1=="")&&(musicChoice2==""))
		
	{
		alert("Please select at least one music check box or more boxes provided!");
		return false;
	}
	
	
	// code to check the gender dropdown list was selected
	 var genderChoice = document.getElementById("Gender").value;
	 if(genderChoice=="select")
	 {
		 alert("Please select your gender thank you!");
		 return false;
	 }
	 
	  // check for robot tick
	 var tickRobot = document.getElementById("human").checked;
	 if(tickRobot=="")
		 
	 {
		alert("Please confirm you are not a robot!");
		return false;
	 }
	  
		// check for age group
	  var ageRange = document.getElementById("Age Group").value;
	  if(ageRange=="Select Age Group")
	 {
		 alert("Please select your age group range thank you!");
		 return false;
	 }
	  
	if( document.queryForm.message.value == ""){
		
		alert("Please enter your message!");
		document.queryForm.message.focus();
		return false;
		
	}
	return true;
	
}// end formValidation function




















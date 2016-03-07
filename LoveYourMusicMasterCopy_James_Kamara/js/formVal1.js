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
	
// validation function on submit from index.html

function formValidate()
{   // password and username example needs a revamp
	//var username = document.getElementById("username").value;
	//var password = document.getElementById("password").value;
    //if ( username == "" || password == ""){
    //alert ("Login unsuccessfull, please fill in all fields")
	//return false;
    //}
	// check username filled
	if( document.queryForm.username.value == ""){
		
		alert("Please provide your username!");
		document.queryForm.username.focus();
		return false;
	}
	
	// checks for username format numbers and letters between 3 to 20 max in number
	var uname = /^[A-Za-z0-9_]{3,20}$/;
	if (!uname.test( document.queryForm.username.value)){
	alert("Username must use alphabet characters, numbers and underscores only between 3 to 20 characters max!");
	document.queryForm.username.focus();
	return false;
	}
	
	// check password filled
	if( document.queryForm.password.value == ""){
		
		alert("Please provide your password!");
		document.queryForm.password.focus();
		return false;
	}
	// checks for password format and length min 6 max 20
	var pword = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
	// alert("Password invalid must use correct format and a minimum 6 to max of 20 characters!");
	if (!pword.test( document.queryForm.password.value)){
		
		alert("Password invalid must use correct format and a minimum 6 to max of 20 characters!");
		document.queryForm.password.focus();
		return false;
		
	}
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
	
	// checks for no space in last name field
	
	if( document.queryForm.lastname.value == ""){
		
		alert("Please provide your surname name!");
		document.queryForm.lastname.focus();
		return false;
		
	}
	//test() method tests for a match in a string, returns true if matched, vaidates for a-z and A-Z and white space (\s)
	// validate the letters in name are correct and between min 6 max 30 characters
	var letters = /^[A-Za-z\s]{2,4}$/;
	// alert("Please use alphabet characters only between 3 to 30 letters maximum to spell your full name!");
	if (!letters.test( document.queryForm.lasttname.value)){
		
		alert("Please provide your first name with valid alphabet characters between 3 to 30 letters maximum to spell your surname name only!");
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
	/*validate the URL if needed
		var theurl=document.queryForm.submit.value;
		var tomatch= /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/
		if (tomatch.test(theurl))
		{
			window.alert("URL OK.");
			return true;
		}else{
			 window.alert("URL invalid. Try again.");
			 return false;
		}*/
	
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
}//end function




	
	

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
	if( document.queryForm.cpassword.value == ""){
		
		alert("Your confirm Password is empty please confirm your password!");
		document.queryForm.password.focus();
		return false;
	}
	var password1 = document.queryForm.password.value;
	var password2 = document.queryForm.cpassword.value;
	if( password1 == password2){
		
		return true;
	}else{
		
		alert("Your passwords do not match please re-try again");
		return false;
	}
	
	
}//end function




	
	




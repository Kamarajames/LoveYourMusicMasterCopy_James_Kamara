/*How would we set those validations

We will create JavaScript functions (one for each input field whose value is to validated) 
which checks whether a value submitted by user passes the validation.

All those functions are called into another function.

It sets the focus to the input field until the user supplies a valid value.

When user does so, they may proceed and can supply value to the next available field.

The later JavaScript function created is called on onsubmit event of the form*/



// ..................................................userid	
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
// ............................................userpassword
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
// ........................................users full name
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}

}
// ...........................................email format
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

// need code here for music choice check box

// .....................................dropdown menu for gender
function genderselect(ugender)
{
if(ucountry.value == "Default")
{
alert('Select your gender from the list');
ugender.focus();
return false;
}
else
{
return true;
}
}
 // need code here for robot check box

 // ................................dropdown menu for age group
 
function ageselect(uage)
{
if(uage.value == "Default")
{
alert('Select where your age falls between the ranges listed here');
ugender.focus();
return false;
}
else
{
return true;
}
}

//......address use for message box? check letters and numbers only

function alphanumeric(umessage)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(umessage.value.match(letters))
{
return true;
}
else
{
alert('Your text must have alphanumeric characters only');
umessage.focus();
return false;
}





function formValidation()  
{
var uid = document.ContactFeedbackForm.userid.value;  // userid
var passid = document.ContactFeedbackForm.passid.value; // userpassword 
var uname = document.ContactFeedbackForm.username.value; // users full name
var uemail = document.ContactFeedbackForm.email.value;  // email format
var umusic = document.ContactFeedbackForm.music_choice.value; // use for music choice..........need code
var ugender = document.ContactFeedbackForm.value; // dropdown menu for gender
var urobot = document.ContactFeedbackForm.robot.value; // use for robot tick...................need code
var uage = document.ContactFeedbackForm.value; // dropdown menu for age group 
var umessage = document.ContactFeedbackForm.message.value;  // var uadd......address use for message box? check letters and numbers only

if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(ValidateEmail(uemail))
{
if(validumusic(um1,um2,um3))// no code yet for check box
{
if(genderselect(ugender))  
{
if(validrobot(urobot))// no code for check box
{
if(ageselect(uage))
{
if(alphanumeric(umessage))
{
}	
}
}
}
}
}
}
}
}
return false;
}














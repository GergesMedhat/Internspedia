
function idValidation(){ //id validation
    let idValue = document.getElementById('userId').value;
    if (idValue.length >= 5 && idValue.length<=12) {
       
      return true; 
    }
    else{
        
        return false;
    }
};
function passwordValid(){ //password validation
let passValue = document.getElementById('password').value;
if (passValue.length >= 7 && passValue.length<=12) {
    
  return true; 
}
else{
    
    return false;
}
};

function onlyLetters() { //name validation
  const name=document.getElementById("Name");
  const letters = /^[A-Za-z]+$/;
  if(name.value.match(letters))
    {
     return true;
    }
  else
    {
    return false;
    }
};

function checkCountry(){ //country validation
  var e=document.getElementById("Country");
  var countryValue=e.value;
  if(countryValue==''){
    return false
  }
  else{
    return true;
  }
};

function zipValid(){  //zip validation
  var zip=document.getElementById("ZipCode").value;
  if(zip==''){
    return false;
  }
  else{
    return true;
  }
};

function validEmail() //email validation
{
  let email=document.getElementById("email");

  if (!email.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      
       return false;
  }
  else{
  
  return true;
  }
};


function checkGender(){ //gender validation
  const male=document.getElementById('male');
  const female=document.getElementById('female');
  if(male.checked==false&&female.checked==false){
    return false;
  }
  else{
    return true;
  }
};


function checkLanguage(){ //language validation
  const lang1=document.getElementById('check1');
  const lang2=document.getElementById('check2');
  if(lang1.checked==false&&lang2.checked==false){
    return false;
  }
  else{
    return true;
  }
};


function validateForm() {  //check validation form
  let idValid = idValidation();
  let passValid = passwordValid();
  let nameValid = onlyLetters();
  let countryValid=checkCountry();
  let zipVal=zipValid();
  let emailValid=validEmail();
  let genderValid=checkGender();
  let checkLang=checkLanguage();
  const userId=document.getElementById('userId');
  const passUser=document.getElementById('password');
  const userName=document.getElementById('Name');
  const ZIP=document.getElementById('ZipCode');
  const email =document.getElementById('email');
  const country=document.getElementById('Country');
  

  if (idValid == false||passValid==false||nameValid==false||emailValid==false||genderValid==false||checkLang==false||countryValid==false||zipVal==false) {
  
    if(idValid==false){
      userId.focus();
      alert("ID required and must be of length 5 to 12");
    }
    else if(passValid==false) {
      passUser.focus();
      alert("Password required and must be of length 7 to 12");  
    }
    else if(nameValid==false) {
      userName.focus();
      alert("Name required alphabates only");
    }
    else if(countryValid==false) {
      country.focus();
      alert( "Please provide your country!" );
    }
    else if(zipVal==false) {
      ZIP.focus();
      alert("Zip Code required and must be numeric only");
    }
    else if(emailValid==false) {
      email.focus();
      alert("Invalid email!");
    }
    else if(genderValid==false) {
      alert("Gender is required");
    }
    else if(checkLang==false) {
      alert("Language is required");
    }
   
    return false;
    
  }
  else{
    alert("success!");
    return true;
  } 
}

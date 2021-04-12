let email = document.getElementById("email");
let error = document.getElementById("error");
let phoneno = document.getElementById("phoneno");
let errorphone = document.getElementById("errorphone");
let password = document.getElementById("pwd");
let errorpsw = document.getElementById("errorpswd");
let confirmpwd = document.getElementById("confirmpwd");
let errorconfirmpwd = document.getElementById("errorconfirmpwd");

function checkStrength(){
  let pwd = document.getElementById("pwd");
  var format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  var medium = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{3,7}$/
  password.style.border = "4px solid red";
  errorpswd.innerHTML = "weak";
  errorpswd.style.color = "red";                       
  var strength = "weak";
  if(medium.test(pwd.value)){
    strength = "medium"
    password.style.border = "4px solid orange";
    errorpswd.innerHTML = "medium";
    errorpswd.style.color = "orange";  
  }
  if(format.test(pwd.value)){
    strength = "strong";
    password.style.border = "4px solid green";
    errorpswd.innerHTML = "strong";
    errorpswd.style.color = "green"; 
  }
 
}



function validate(){
   
    let regexp = /^([A-Za-z0-9\.-])+@([A-Za-z0-9\-])+\.([a-z]{2,3})(.[a-z]{2,3})?$/
    let phonenoexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    let pswdexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,25}$/;
    var validation;
    var phonevalidation;
    var passswordvalidation;
    var mismatch = false;
    if(regexp.test(email.value)){
        error.innerHTML = "valid";
        error.style.color = "green";
        validation = true;
    }
    else{
       error.innerHTML = "Invalid";
       error.style.color = "red";
       validation = false;
    }
    if(phonenoexp.test(phoneno.value)){
        errorphone.innerHTML = "valid";
        errorphone.style.color = "green";
        phonevalidation = true;
    }
    else{
        errorphone.innerHTML = "Invalid";
        errorphone.style.color = "red";
        phonevalidation = false;
    }

    if(pswdexp.test(password.value)){
      errorpsw.innerHTML = "valid";
      errorpsw.style.color = "green";
      passswordvalidation = true;
      if(password.value != confirmpwd.value){
        errorconfirmpwd.innerHTML = "Password Missmatch";
        errorconfirmpwd.style.color = "Red";
        mismatch = true;
    }
    else{
      errorconfirmpwd.innerHTML = "";
    }
    }
    else{
      errorpsw.innerHTML = "Invalid";
      errorpsw.style.color = "red";
      passswordvalidation = false;
    }
    
  
    if(validation && phonevalidation && passswordvalidation && !mismatch){
        return true;
    }
    else{
        return false;
    }
}











 // let regexp = /^[A-Za-z0-9]+(['\.-]?[A-Za-z0-9]+?)*@[A-Za-z0-9]+([\.-]?[A-Za-z0-9]+)*(\.[A-Za-z0-9]{2,3})+$/
// // function validatephone(){
//     let phonenoexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     if(phonenoexp.test(phoneno.value)){
//         errorphone.innerHTML = "valid";
//         errorphone.style.color = "green";
//         return true;
//     }
//     else{
//         errorphone.innerHTML = "Invalid";
//         errorphone.style.color = "red";
//         return false;
//     }
// }

// function submit(){
//     debugger;
//     let phone = validatephone();
//     let email = validate();
//     console.log(phone);
//     console.log(email);
//     if((phone==true) && (email==true))
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
/* Include all scripts required for common.html */

function showSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
  }
  
function hideSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
  }
  
function showSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
  }
  
function hideSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
  }

window.addEventListener('click' , function(event) {
    var signinmodal = document.getElementById("signin-modal");
    var signupmodal = document.getElementById("signup-modal");
    if (event.target == signinmodal) {
      signinmodal.style.display = "none";
    }
    if (event.target == signupmodal) {
        signupmodal.style.display = "none";
      }
  });

/* End of common.js scripts */
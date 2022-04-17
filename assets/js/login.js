/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})

/* Validating the credentials */
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "abhiram prints" && password == "ap2020"){
        alert ("Welcome to the world of ABHIRAM PRINTS\nRegards, K Abhiram");
        window.location = "home.html"; // Redirecting to other page.
        return false;
    }
    
    else{
        attempt --;// Decrementing by one.
        alert("You have left with "+attempt+" attempt\nTry again");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            alert("You missed all three chances, please refresh to get it back\nRegards, ABHIRAM PRINTS");
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
        document.getElementById("form_id").reset();
    }
}
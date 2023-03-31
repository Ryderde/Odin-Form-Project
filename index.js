//var pass = (document.querySelector("#pwd").value)
let element = document.querySelectorAll("input[type='password']");
function validate() {
    let pwd=document.querySelector("#pwd");
    let cpwd = document.getElementById("cpwd");

   
   if (pwd.value===cpwd.value) {
       element.disabled=false;
   }
   else {
     element[0].style.borderColor="red";
     element[1].style.borderColor="red";
     document.querySelector("span").className="error";
   }
}

function validation(){

var Firstname=document.getElementById("Fn");

var Lastname=document.getElementById("Ln");

var Address=document.getElementById("Ad");

var Password=document.getElementById("Ps");

if(Firstname.value=="" || Lastname.value=="" || Address.value=="" || Password.value==""){
   alert("Null fields cannot access");
   return false;

}

else{

 true;

}
}
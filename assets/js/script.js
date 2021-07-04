 // var x =  document.forms["foname"]["fname"];

 function allLetter(inputtxt)
 {
  var letters = /^[A-Za-z]+$/;
  if(inputtxt.value.match(letters))
   {
     return true;
   }
 else
   {
   return false;
   }
}




 function VALIDATE(){
  var x =  document.forms["foname"]["fname"];
  var u =  document.forms["foname"]["midname"];
  var y =  document.forms["foname"]["lname"];
  var v =  document.forms["foname"]["username"];
  var z = document.forms["foname"]["phone"];
  var q = document.forms["foname"]["email"];
  var w = document.forms["foname"]["password"];
  var f = document.forms["foname"]["file"];


    if(allLetter(x)== false || x.value == ""){
        alert("first name must be filled correctly");
        document.forms["foname"]["fname"].focus();
        return false;
      }
     if(allLetter(u)== false || u.value == ""){
       alert("Middle name must be filled correctly");
        document.forms["foname"]["lname"].focus();
        return false;
       }
       if(allLetter(y)== false || y.value == ""){
       alert("last name must be filled correctly");
        document.forms["foname"]["lname"].focus();
        return false;
       }
       if(allLetter(v)== false || v.value == ""){
       alert("Username name must be filled correctly");
        document.forms["foname"]["lname"].focus();
        return false;
       }
     if(z.value == "" ){
       alert("age must be filled");
        document.forms["foname"]["phone"].focus();
        return false;
       }
      if(isNaN(z.value)||z.value<1||z.value>100){
       alert("tel should be a number");
       document.forms["foname"]["age"].focus();
       return false;
      }
      if(q.value == ""){
       alert("email must be filled");
        document.forms["foname"]["email"].focus();
        return false;
       }   
      if(w.value == ""){
       alert("password must be filled");
        document.forms["foname"]["password"].focus();
        return false;
       }
       if(f.value == ""){
       alert("File must be choosen");
        document.forms["foname"]["file"].focus();
        return false;
       }
           
       }
     
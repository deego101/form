function selectu(){
    var selectBox=document.getElementById("uni");
    var userInput=selectBox.options[selectBox.selectedIndex].value;
    
    if(userInput=="others"){
        document.getElementById("univ").style.visibility='visible';
        document.getElementById("univ").style.margin='15px';
    }
    else{
         document.getElementById("univ").style.visibility='hidden';
         
    }
}

function selectf(){
    var selectBox=document.getElementById("fac");
    var userInput=selectBox.options[selectBox.selectedIndex].value;
    
    if(userInput=="others"){
        document.getElementById("faculty").style.visibility='visible';
        document.getElementById("faculty").style.margin='15px';
    }
    else{
         document.getElementById("faculty").style.visibility='hidden';
    }
}


function check(){
    
    checkName();
    checkNumber();
    checkEmail();
    form.focus();
}

function checkName(){
    var name=[];
    var lname=[]
   
     name=document.getElementById("fname").value;
    
    for(i=0;i<=name.length;i++){
     if(name[i]==1||name[i]==2||name[i]==3||name[i]==4||name[i]==5||name[i]==6||name[i]==7||name[i]==8||name[i]==9||name[i]==0){
         alert("first name cant contain numbers");
     }
    }
    if(name==""){
        alert("first name is empty");
    }
    

     lname=document.getElementById("lname").value;
    
    for(i=0;i<=lname.length;i++){
     if(lname[i]==1||lname[i]==2||lname[i]==3||lname[i]==4||lname[i]==5||lname[i]==6||lname[i]==7||lname[i]==8||lname[i]==9||lname[i]==0){
         alert("last name cant contain numbers");
     }
    }
    if(lname==""){
        alert("last name is empty");
    }
}


function checkNumber(){
    
    var mobile=document.getElementById("mobile").value;
    if(mobile.length>11){
        alert("phone number is morre than 11 digits");
        document.getElementById("mobile").focus();
    }
    if(isNaN(mobile)){
        alert("phone number can not contain letters");
        document.getElementById("mobile").focus();
        mobile.focus();
    }
    if(mobile==""){
        alert("phone number is empty");
    }
}

function checkEmail(){
    var email=document.getElementById("email").value;
    if(email==""){
        alert("email is empty");
        email.focus();
    }
}
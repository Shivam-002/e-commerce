function validation() {
    var number = document.getElementById('n1').value
    if (number.length>1&& number.length<10 || number.length>10) {
        alert("please enter correct number")
    }
    if(number==""){
        alert("please enter number")
    }
    var  name1= document.getElementById('n2').value;
    var letter= /^[A-Za-z]+$/;
    if(name1.match(letter)){
        alert("correct");
    }
    else{
        alert("please enter valid first name");
    }   
    var  name2= document.getElementById('n3').value;
    var letter1= /^[A-Za-z]+$/;
    if(name2.match(letter1)){
        alert("correct");
    }
    else{
        alert("please enter valid last name");
    }
    var number1 = document.getElementById('n1').value
    if (number1.length>1&& number1.length<10 || number1.length>10) {
        alert("please enter correct number")
    }
    if(number1==""){
        alert("please enter number")
    }
    var  city= document.getElementById('n7').value;
    var letter= /^[A-Za-z]+$/;
    if(city.match(letter)){
        alert("correct");
    }
    else{
        alert("please enter valid  city ");
    }
    var code = document.getElementById('n8').value
    if (code.length>1&& code.length<6 || number.length>6) {
        alert("please enter correct postal code ")
    }
    if(code==""){
        alert("please enter code")
    }



 
    
}




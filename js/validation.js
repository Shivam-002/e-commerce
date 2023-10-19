function validation() {
    var number = document.getElementById('n1').value
    if (number.length>1&& number.length<10 || number.length>10) {
        alert("please enter correct number")
    }
    if(number==""){
        alert("please enter number")
    }
    
}




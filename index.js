let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd() {
    output.innerHTML = String(Number(one.value) + Number(two.value));
    if(Number(output.innerHTML) <0){
        // output.innerHTML="&#127773;";
        output.style.color="red";
    }
    else{
        output.style.color= "darkmagenta";
    }
}
function doSubtract() {
    output.innerHTML = String(Number(one.value) - Number(two.value));
    if(Number(output.innerHTML) <0){
        // output.innerHTML="&#127773;";
        output.style.color="red";
    }
    else{
        output.style.color= "darkmagenta";
    }
}
function doMultiply() {
    output.innerHTML = String(Number(one.value) * Number(two.value)); if(Number(output.innerHTML) <0){
        // output.innerHTML="&#127773;";
        output.style.color="red";
    }
    else{
        output.style.color= "darkmagenta";
    }
}
function doMultiply() {
    output.innerHTML = String(Number(one.value) * Number(two.value));
    if(Number(output.innerHTML) <0){
        // output.innerHTML="&#127773;";
        output.style.color="red";
    }
    else{
        output.style.color= "darkmagenta";
    }
}
function doDivide() {
    output.innerHTML = String(Number(one.value) / Number(two.value));
    if(Number(output.innerHTML) <0){
        // output.innerHTML="&#127773;";
        output.style.color="red";
    }    else{
        output.style.color= "darkmagenta";
    }
}
function doPower() {
    let result= 1;
    for (let i=0; i<Number(two.value); i++){
        result*=Number(one.value);
    }
    output.innerHTML= String(result);
    if(Number(output.innerHTML) <0){
        // output.innerHTML="&#127773;";
        output.style.color="red";
    }
    else{
        output.style.color= "darkmagenta";
    }
}

function doClear(){
    one.value="";
    two.value="";
    output.innerHTML="";
}


function showName(){
    //DOM element(myName) INPUT by ID
    const myName = document.getElementById('myName');
    // DOM element SPAN by ID
    const spanElement = document.getElementById('nameHere');
    if(myName.value === '') {
        spanElement.innerHTML = `Miguel`;
    } else {
        spanElement.innerHTML = `Hi there $(myName.value)`;
    }
    
    // Send value of INPUT (myName) to SPAN element
    spanElement.innerHTML = myName.value; 
}

function switchLightOn() {
    const imgElement= document.getElementById('imageOff')
    imgElement.src = './lighton.png';
}


function displayContent() {
    const paraElement = document.getElementById('displayPara');
    paraElement.innerHTML = 'Its over Anakin I have the high ground! You underestimate my power! Dont try it, I told you not to try it!';
}

//Exercise 4
function stopTrafficLight() {
    const divStop = document.getElementById('Stop');
    divStop.style.backgroundColor= #ff0000;
}
    

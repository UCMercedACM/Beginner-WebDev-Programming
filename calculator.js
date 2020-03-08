var currentString = "";
function readKey(key){
    var screen = document.getElementById("screen");
    if(screen.value === "HELLO :D")
        screen.value = "";
    if(key === 'c'){
        clear(screen);
        return;
    }
    if(key === '='){
        getOutput(screen);
        return;
    }
    currentString = currentString + key;
    screen.value = currentString;
}

function clear(screen){
    screen.value = "";
    currentString = "";
}

function getOutput(screen){
    var nums = screen.value.split("+");
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum += parseInt(nums[i]);
    }
    screen.value = sum;
    currentString = sum;
}
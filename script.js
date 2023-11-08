gsap.from(".container", {
    opacity:0,
    scale:0,
    duration:1
});

const inputBox = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let string = '';

buttons.forEach(element => {
    element.addEventListener("click", (e) =>{
        if(e.target.innerText == "="){
            string = String(eval(string));
            inputBox.value = string;
        }
        else if(e.target.innerText == "AC"){
            string = '';
            inputBox.value = string;
        }
        else if(e.target.innerText == "DEL"){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        }
        else if(e.target.innerText == "%"){
            let inputValue = parseFloat(inputBox.value);
            if(!isNaN(inputValue)){
                let result = inputValue/100;
                inputBox.value = result;
            }
        }
     else{
        string += e.target.innerText;
        inputBox.value = string;
     }   
    })
});
document.addEventListener("keydown", (e) => {
    const key = e.key;
    const keyMap = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0",
        ".": ".",
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/",
        "%": "%",
        Enter: "=",
        Backspace: "DEL",
        Delete: "AC",
    };
    if (keyMap.hasOwnProperty(key)) {
        const button = document.querySelector(`button[data-value="${keyMap[key]}"]`);
        if (button) {
            button.click();
        }
    }
});


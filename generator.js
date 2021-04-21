let userForm = document.getElementById("userForm");

let HTMLCheck = document.getElementById("HTML-box");
let HTMLView = document.getElementById("sec-HTML");

let warningDiv = document.getElementById("warning");

let inputDivs = document.getElementById("inputs").getElementsByClassName("input");

let hasSelect = false;
let selectLoc = 0;

/*constructor*/
function User(){

}

let user = new User();

/* Update Text */
function updateText(){
    document.getElementById("preview").innerHTML = emailTemplate(user);
    document.getElementById("previewHTML").innerText = emailTemplate(user);
}

userForm.addEventListener("input", function(event) {
    let input = event.target;
    let name = input.name;
    let value = input.value;
    let valueOrig = value;

    if(name === "userPhone" || name === "userOffice" || name === "userMobile" || name === "userFax" || name === "userDirect"){
        event.target.value = numFormatterInput(value, event.target.id);
    }


    user[name] = valueOrig;
    updateText();
});

/*calls the Template from external js file*/
emailTemplate;

/* copies to clipboard */

function checkForInputs(){
    for(let i = 0; i < inputDivs.length; i++){
        if(inputDivs[i].offsetHeight !== 0){
            if(inputDivs[i].lastElementChild.value === ""){
                return false;
            }
        }
    }
    return true;
}

function checkSelect(){
    if(hasSelect){
        if(inputDivs[selectLoc].offsetHeight !== 0){
            if(inputDivs[selectLoc].lastElementChild.value === "0"){
                return false;
            }
        }
    }
    return true;
}

function copyToClip(item){

    showRequiredFields();

    if(checkForInputs() && checkSelect()){
        let selection = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(item.previousElementSibling);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");

        warningDiv.innerText = "Copied!";
        warningDiv.style.backgroundColor = "#86BD40";
        warningDiv.style.color = "#33234B";
        warningDiv.style.display = "block";
        setTimeout(function(){ warningDiv.style.display="none" }, 4000);
     } else {
        warningDiv.innerText = "*Please Fill Out All of the Required Input Fields*"; 
        warningDiv.style.backgroundColor = "#EF3A2F";
        warningDiv.style.fontSize = "24px";
        warningDiv.style.color = "#33234B";
        warningDiv.style.display = "block";
        setTimeout(function(){ warningDiv.style.display="none" }, 4000);
     }
 }

function showRequiredFields(){
    for(let i = 0; i < inputDivs.length; i++){
        if(inputDivs[i].offsetHeight !== 0){
            if(inputDivs[i].lastElementChild.value === ""){
                inputDivs[i].lastElementChild.style.border = "2px solid #EF3A2F";
            } else {
                inputDivs[i].lastElementChild.style.border = "1px solid black";
            }

            if(inputDivs[i].lastElementChild.tagName === "SELECT"){
                hasSelect = true;
                selectLoc = i;
                if(hasSelect){
                    if(inputDivs[selectLoc].lastElementChild.value === "0"){
                        inputDivs[selectLoc].lastElementChild.style.border = "2px solid #EF3A2F";
                    } else {
                        inputDivs[selectLoc].lastElementChild.style.border = "1px solid black";
                    }
                }
            }
        }
    }
}

/* Show HTML Preview on Toggle */
function showHTML(item){
    if(item.checked === true){
        HTMLView.style.display = "initial";
    } else {
        HTMLView.style.display = "none";
    }
}

// formats numbers
function numFormatterInput(obj, objId , value){
    let connect = "";
    let type = 0;

    if(objId.includes("Period")){
        connect = ".";
        type = 1;
    }
    if(objId.includes("Dash")){
        connect = "-";
        type = 1;
    }
    if(objId.includes("LongP")){
        connect = ".";
        type = 2;
    }
    if(objId.includes("DPar")){
        connect = "-"
        type = 3;
    }

    if(type === 1){
        if(obj.length === 8 && obj[7] !== connect) {
            return obj = [(obj).slice(0,7),connect,(obj).slice(7)].join("");
        } else if(obj.length === 4 && obj[3] !== connect){
            return obj = [(obj).slice(0,3),connect,(obj).slice(3)].join("");
        } else {
            return obj;
        }
    } 
    if(type === 2) {
        if(obj.length === 10 && obj[10] !== connect && obj[9] !== " " && obj[11] !== " ") {
            return obj = [(obj).slice(0,9)," ",connect," ",(obj).slice(9)].join("");
        } else if(obj.length === 4 && obj[4] !== connect && obj[3] !== " " && obj[5] !== " "){
            return obj = [(obj).slice(0,3)," ",connect," ",(obj).slice(3)].join("");
        } else if(obj.length === 6){
            return obj = [obj.slice(0,3)].join("");  
        } else if(obj.length === 12){
            return obj = [obj.slice(0,9)].join("");  
        } else {
            return obj;
        }
    }
    if(type === 3) {
        if(obj.length === 10 && obj[9] !== connect) {
            return obj = [(obj).slice(0,9),connect,(obj).slice(9)].join("");
        } else if(obj.length === 6 && obj[5] !== " "){
            return obj = [(obj).slice(0,5)," ",(obj).slice(5)].join("");
        } else if(obj.length === 3 && obj[0] !== "("){
            return obj = ["(",(obj).slice(0,3),")"].join("");
        } else if(obj.length === 5 && obj[4] !== ")" && obj[4] !== " "){
            return obj = [(obj).slice(0,4),") ", obj[4]].join("");
        } else {
            return obj;
        }
    }

}
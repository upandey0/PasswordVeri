let strength = document.getElementById('sten-check')
strength.value = 0;
document.addEventListener("keydown", (e) => {
    // console.log(e);
    
    
    let inputField = document.getElementById("inp-val");
    let lengthValue = document.getElementById("len-check");
    let inputValue = inputField.value;
    let statusResp = document.getElementById("status");

    if (inputValue.length >= 8) {
        lengthValue.checked = true;
    }
    else {
        lengthValue.checked = false;
    }
    console.log(e.keyCode)
    // statusResp.textContent = inputValue;

    let charVal = document.getElementById('char-check');
    let specialCheck = document.getElementById("spe-check");
    let numValue = document.getElementById("num-check");

    // let pattern = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[-+_!@#$%&*])");
    let pattern1 = new RegExp("^(?=.*[A-Z])+");
    let pattern2 = new RegExp("^(?=.*\\d)+");
    let pattern3 = new RegExp("^(?=.*[-+_!@#$%&])+")
    if(pattern1.test(inputValue))
    {
        charVal.checked = true;
       
    }
    else{
        charVal.checked = false;
    }
    if(pattern2.test(inputValue))
    {
        numValue.checked = true;
        
    }
    else{
        numValue.checked = false;
    }
    if(pattern3.test(inputValue))
    {
        specialCheck.checked = true;
        
    }
    else{
        specialCheck.checked = false;
    }

    if(lengthValue.checked && specialCheck.checked && numValue.checked && charVal.checked)
    {
        strength.value = 100;
        statusResp.textContent = "Excellent!!"
    }

    else if(lengthValue.checked && specialCheck.checked && numValue.checked || specialCheck.checked && numValue.checked && charVal.checked ||lengthValue.checked && numValue.checked && charVal.checked )
    {
        strength.value = 75;
        statusResp.textContent = "Good!"
    }
    else if(lengthValue.checked && specialCheck.checked || numValue.checked && charVal.checked || lengthValue.checked && numValue.checked || lengthValue.checked && charVal.checked || specialCheck.checked  && charVal.checked || specialCheck.checked && numValue.checked )
    {
        strength.value = 50;
        statusResp.textContent = "Average";
    }
    else if(lengthValue.checked || specialCheck.checked || numValue.checked || charVal.checked)
    {
        strength.value = 25;
        statusResp.textContent = "weak";
    }
    else{
        strength.value = 0;
        statusResp.textContent = "Very Weak";
    }
})
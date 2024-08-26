function strings()
{
    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var zip = document.getElementById("zip").value; 
    
    var fullname = fname + " " + lname; 
    if (fullname.length < 20) 
        else
        {
            alert("Invalid Zipcode: Zipcode must be numbers and be exactly 5 digits long.")
        }  
    }
    else
    {
        alert("To many letters in First and Last name together, must be under 20 characters long!")
}
const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> is not`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is right`;
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});
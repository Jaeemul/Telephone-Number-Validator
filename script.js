const input = document.getElementById("user-input");

const checkButton = document.getElementById("check-btn");

const clearButton = document.getElementById("clear-btn");

const result = document.getElementById("results-div");

const checkValidation = input => {

  const regex = /^((1(\s)?((\(\d\d\d\))|(\d\d\d)))|(\(\d\d\d\))|(\d\d\d))(\s|-)?(\d\d\d)(\s|-)?(\d\d\d\d)$/i;
  console.log(regex.test(input));

  if(regex.test(input)){
    const p = document.createElement("p");
    result.appendChild(p);
    p.innerText = "Valid US number: "+input;
  }else{
    const p = document.createElement("p");
    result.appendChild(p);
    p.innerText = "Invalid US number: "+input;
  }
}

checkButton.addEventListener("click",(e) =>{
  e.preventDefault();
  if(!input.value){
    alert("Please provide a phone number");
  }
  checkValidation(input.value);
  input.value ="";
})

clearButton.addEventListener("click",()=> result.innerHTML="")
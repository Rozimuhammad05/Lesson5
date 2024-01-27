var elForm = document.querySelector(".js-form");
var elEntryMoney = elForm.querySelector(".js-entryMoney-input");
var elSelectCurrency = elForm.querySelector(".js-selectedCurrency");
var elConverterResult = elForm.querySelector(".js-convertedMoney-result")

var inputValue = Number(elEntryMoney.value)

elConverterResult.textContent = "0 so'm"

elForm.addEventListener("submit", function(evt){
    
    evt.preventDefault();
    
    var inputValue = elEntryMoney.value
    var selectValue = elSelectCurrency.value
    
    var USDconverter = inputValue * 12400;
    var EURconverter = inputValue * 13514;
    var AUDconverter = inputValue * 8273;
    var CADconverter = inputValue * 9213;
    
    if (selectValue === "USD" ) {
        elConverterResult.textContent = USDconverter;
    } else if (selectValue === "EUR") {
        elConverterResult.textContent = EURconverter;
    } else if (selectValue === "AUD") {
        elConverterResult.textContent = AUDconverter;
    } else {
        elConverterResult.textContent = CADconverter;
    }
    
})


// var elForm = document.querySelector(".js-findNumber-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-findNumber-result")
// var elAttempCount = document.querySelector(".attempCount")

// var maxAttempCount = 6;
// elAttempCount.textContent = `Urinishlar soni ${maxAttempCount} ta`

// var randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);


// elForm.addEventListener("submit", function(evt){

//     evt.preventDefault();

//     maxAttempCount--;
//     elAttempCount.textContent = `Urinishlar soni ${maxAttempCount} ta`

//     var inputValue = Number(elInput.value);

//     if (maxAttempCount == 0) {
//         elAttempCount.textContent = "Urinishlar soni tugadi";
//         elInput.disabled = true;
//         alert("Urinishlar soni tugadi");
//     }
//     if(inputValue > randomNumber) {
//         elResult.textContent = "Siz kiritgan raqam taxminiy raqamdan katta"
//     } else if (inputValue < randomNumber) {
//         elResult.textContent = "Siz kiritgan raqam taxminiy raqamdan kichik"
//     } else {
//         elResult.textContent = "Urraa Topdingiz"
//     }
// })
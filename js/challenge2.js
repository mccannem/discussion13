document.querySelector("#useBilling").addEventListener("click", function() {
    var textInput = document.getElementById("billing").innerHTML;
    console.log(textInput);
    document.getElementById("home").innerHTML = textInput;
})
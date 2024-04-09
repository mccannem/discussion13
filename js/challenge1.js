document.querySelector("#toggle").addEventListener("click", function() {
    var currentStyle = document.getElementById("emailBox").style.display;
    if (currentStyle === "inline") {
        currentStyle = "none";    
    }
    else {
        currentStyle = "inline";
    }
})
// Start Popup //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block";
    }
});
}

// End Popup //


$(document).ready(function(){
    $(".menu-mobile-button").click(function(){
        $(".menu-sec").toggle();
        $(".login-signup-sec").toggle();
    });
});



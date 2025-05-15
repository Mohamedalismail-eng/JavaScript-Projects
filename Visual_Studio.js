document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("animationBox");
    
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = "#e74c3c";
    });

    box.addEventListener("mouseout", function() {
        box.style.backgroundColor = "#3498db";
    });
});

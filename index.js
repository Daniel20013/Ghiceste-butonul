var buttons = document.querySelectorAll("button");
var randomIndex = Math.floor(Math.random() * buttons.length);


for (var i = 0; i < buttons.length; ++i) {
    if (i == randomIndex) {
        buttons[randomIndex].addEventListener("click", function() {
            window.location.href = "https://cdn.vectorstock.com/i/1000x1000/40/58/bravo-banner-vector-8544058.webp";
        });
    } else {
        buttons[i].addEventListener("click", function() {
            window.location.href = "https://www.etipy.cz/wp-content/uploads/2017/08/spatne-440x299.png";
        });
    }
}

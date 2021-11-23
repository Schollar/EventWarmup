
function background_color() {
    var num = Math.random() * (4 - 1) + 1;
    if (num >= 3) {
        document.body.style.backgroundColor = "lightblue";
    } else if (num >= 2) {
        document.body.style.backgroundColor = "pink";
    } else {
        document.body.style.backgroundColor = "red";
    }
}


var page_container = document.getElementById('page_container');
var party_button = document.createElement('button');
party_button.innerText = "Party Time!";
party_button.addEventListener('click', function () {
    setInterval(background_color, 3000);
});
page_container.appendChild(party_button);

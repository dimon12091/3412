var btn = document.getElementById('btn');
var dws = document.getElementById('dws-container');

btn.addEventListener('click', function() {
    dws.style.display = "block";
});

var close = document.getElementById('close');
close.onclick = function() {
    dws.style.display = "none";
}
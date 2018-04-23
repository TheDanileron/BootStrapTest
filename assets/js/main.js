document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if(keyCode == 69) {
        clicked();
    }
};
btnZ.onclick = clicked;

function clicked () {
    alert('Respect paid');
    //some code
}
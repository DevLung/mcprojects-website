$ = function (id) {
    return document.getElementById(id);
}

let openedOverlay;

var show = function (id) {
    $(id).style.display = 'block';
    openedOverlay = id;
}
var hide = function (id) {
    $(id).style.display = 'none';
    openedOverlay = null;
}
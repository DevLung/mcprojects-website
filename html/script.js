$ = function (id) {
    return document.getElementById(id);
}

var openedOverlay;

// open popup and save its ID in openedOverlay
var show = function (id) {
    $(id).style.display = 'block';
    openedOverlay = id;
}
// close popup
var hide = function (id) {
    $(id).style.display = 'none';
    openedOverlay = null;
}
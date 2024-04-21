// import "jquery"; // uncomment while developing for intellisense


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


function search(input) {
    var text = jQuery(input).val().toLowerCase();
    jQuery(".project").show();
    jQuery(".project").each(function () {
        if (jQuery(this).text().toLowerCase().indexOf(text) == -1) {
            jQuery(this).hide();
        }
    });
}
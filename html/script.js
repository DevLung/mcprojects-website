// import "jquery"; // uncomment while developing for intellisense


var openedOverlay;

// open popup and save its ID in openedOverlay
function show(id) {
    document.getElementById(id).style.display = 'block';
    openedOverlay = id;
}
// close popup
function hide(id) {
    document.getElementById(id).style.display = 'none';
    openedOverlay = null;
}


function search(inputElement, searchClass) {
    var text = jQuery(inputElement).val().toLowerCase();
    jQuery(searchClass).show();
    jQuery(searchClass).each(function () {
        if (jQuery(this).text().toLowerCase().indexOf(text) == -1) {
            jQuery(this).hide();
        }
    });
}
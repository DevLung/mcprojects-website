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


function search(inputElement, selector, parentSelector=null) {
    var text = jQuery(inputElement).val().toLowerCase();
    var selection = jQuery(selector);
    var searchForParent = parentSelector != null;

    if (searchForParent) {
        selection.parent(parentSelector).show();
    } else {
        selection.show();
    }
    selection.each(function () {
        if (jQuery(this).text().toLowerCase().indexOf(text) == -1) {
            if (searchForParent) {
                jQuery(this).parent(parentSelector).hide();
            } else {
                jQuery(this).hide();
            }
        }
    });
}
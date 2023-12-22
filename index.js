document.onkeypress = (evt) => {
    evt = evt || window.event;
    var modal = document.getElementsByClassName("modal")[0];
    if (evt.keyCode == 27) {
        modal.style.display == "none"
    }
}
// when the user click anywhere outside of the modal dialog
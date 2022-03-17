/function if text is with display none or dont have anything to be block/
function toggleExtraText(element, button) {
    if (element.style.display == "none" || element.style.display == "") {
        button.innerHTML = 'Show less';
        element.style.display = "block";
    } else {
        button.innerHTML = 'Show more';
        element.style.display = "none";
    }
}

/function when you tap the button "Show more" more information will be displayed/
window.addEventListener("DOMContentLoaded", (event) => {
    const buttons = document.querySelectorAll(".read-more");
    buttons.forEach(readMoreButton => {
        readMoreButton.addEventListener('click', function() {
            const toggleElement = document.querySelector("#" + readMoreButton.getAttribute("data-toggle"));
            toggleExtraText(toggleElement, readMoreButton);
        });
    });

});
/*Function if text is with display none or don't have anything to be block.*/
function toggleExtraText(element, button) {
  if (element.style.display == "none" || element.style.display == "") {
    button.innerHTML = "Show less";
    element.style.display = "block";
  } else {
    button.innerHTML = "Show more";
    element.style.display = "none";
  }
}

/*Function when you tap the button "Show more" more information will be displayed.*/
window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".read-more");
  buttons.forEach((readMoreButton) => {
    readMoreButton.addEventListener("click", function () {
      const toggleElement = document.querySelector(
        "#" + readMoreButton.getAttribute("data-toggle")
      );
      toggleExtraText(toggleElement, readMoreButton);
    });
  });
});

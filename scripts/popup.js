//This function opens a popup.
function openPopup(popupId) {
  document.querySelector(popupId).showModal();
}
//This is the function for the "Back" button on all popups.
function closePopup(popupId) {
  document.querySelector(popupId).close();
}
/*
This function takes the html content from the "popupText" arrays
and places it in the "index.html".
*/
function changeContent(year, parId) {
  if (year == 39) {
    var pop = document.getElementById("par" + parId);
    pop.innerHTML = popupText39[parId - 1];
  } else {
    var pop = document.getElementById("par" + parId);
    pop.innerHTML = popupText45[parId - 1];
  }
}

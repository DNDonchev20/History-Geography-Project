function openPopup(popupId) {
  document.querySelector(popupId).showModal();
}

function closePopup(popupId) {
  document.querySelector(popupId).close();
}

function changeContent(year, parId) {
  if (year == 39) {
    var pop = document.getElementById("par" + parId);
    while (pop.firstChild) {
      pop.removeChild(pop.firstChild);
    }
    pop.innerHTML = popupText39[parId - 1];
  } else {
    var pop = document.getElementById("par" + parId);
    while (pop.firstChild) {
      pop.removeChild(pop.firstChild);
    }
    pop.innerHTML = popupText45[parId - 1];
  }
}

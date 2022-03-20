var slideIndex = 0;
var pauseAuto = 0;
showSlidesAuto();
/*
This function switches beatween slides automatically.
*/
function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("carouselImg");
  let dots = document.getElementsByClassName("dot");

  if (pauseAuto == 1) {
    pauseAuto = 0;
    //Wait 15 seconds before continuing on auto.
    setTimeout(showSlidesAuto, 15000);
    return;
  }
  //Hides all slides.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //Shows the current slide.
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // Change image every 2 seconds.
  setTimeout(showSlidesAuto, 2000);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Enables manual slide change.
function currentSlide(n) {
  showSlides((slideIndex = n));
  pauseAuto = true;
}
/*
This function switches beatween slides manually.
*/
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carouselImg");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
/*
This function is used to get the current user from
the locally stored object "currentUser"
and display it in the navbar.
*/
function getCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  const loggedUser = document.getElementById("loggedUser");
  if (currentUser != null) {
    loggedUser.innerHTML = `&nbsp;${currentUser.Username}`;
  } else {
    loggedUser.innerHTML = "&nbsp;Guest";
  }
}

window.addEventListener("DOMContentLoaded", getCurrentUser);

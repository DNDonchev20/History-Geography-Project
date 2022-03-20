/*
This function switches between the maps of
Europe 1939 and Europe 1945 and
Asia 1939 and Asia 1945.
*/
function switchMap(arg, once = 1) {
  switch (arg) {
    //The first letter means the continent and the number is the year
    case "e39":
      //Sets the background image propetry
      document.getElementById("map1").style.backgroundImage =
        "url(images/europe_1939.svg)";
      //When the function is called on load it doesn't scroll to the maps
      if (once == 0) {
        document.querySelector("#map1").scrollIntoView({
          behavior: "smooth",
        });
      }
      for (let i = 1; i <= 5; i++) {
        changeContent(39, i);
      }
      break;
    case "e45":
      document.getElementById("map1").style.backgroundImage =
        "url(images/europe_1945.svg)";
      document.querySelector("#map1").scrollIntoView({
        behavior: "smooth",
      });
      for (let i = 1; i <= 5; i++) {
        changeContent(45, i);
      }
      break;
    case "a39":
      document.getElementById("map2").style.backgroundImage =
        "url(images/asia_1939.svg)";
      if (once == 0) {
        document.querySelector("#map2").scrollIntoView({
          behavior: "smooth",
        });
      }
      for (let i = 6; i <= 10; i++) {
        changeContent(39, i);
      }
      break;
    case "a45":
      document.getElementById("map2").style.backgroundImage =
        "url(images/asia_1945.svg)";
      document.querySelector("#map2").scrollIntoView({
        behavior: "smooth",
      });
      for (let i = 6; i <= 10; i++) {
        changeContent(45, i);
      }
      break;
  }
}

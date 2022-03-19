function switchMap(arg) {
  switch (arg) {
    case "e39":
      document.getElementById("map1").style.backgroundImage =
        "url(images/europe_1939.svg)";
      document.querySelector("#map1").scrollIntoView({
        behavior: "smooth",
      });
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
      document.querySelector("#map2").scrollIntoView({
        behavior: "smooth",
      });
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

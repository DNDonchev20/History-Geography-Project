
function drawMap(mapId, starDraw, info) {
  const canvas = document.getElementById(mapId);
  const context = canvas.getContext("2d");
  const items = starDraw(context); //make the items clickable

  const map = document.getElementById(mapId);
  map.addEventListener("click", function (e) {
    let clickedX = e.pageX - this.offsetLeft;
    let clickedY = e.pageY - this.offsetTop;

    for (let i = 0; i < items.length; i++) {
      if (
        clickedX < items[i].right + 0.5*items[i].offset &&
        clickedX > items[i].left &&
        clickedY > items[i].top &&
        clickedY < items[i].bottom + 0.5*items[i].offset
      ) {
        alert(info[i].text);
      }
    }
  });
}

function render() {
  //add more drawMap calls to draw each map
 
  drawMap(
    "map1", //mapId
    function (context) {
      const items = [];
      //Germany
      const Star1 = new Star(270, 350, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);
      //USSR
      const Star2 = new Star(600, 300, 35, 14, 5, 6, "#f06d06", "#fed8b1", 60);
      //Britain
      const Star3 = new Star(140, 330, 20, 8, 5, 3.2, "#f06d06", "#fed8b1", 60);
      //Italy
      const Star4 = new Star(280, 440, 15, 6, 5, 2.5, "#f06d06", "#fed8b1", 60);
      //France
      const Star5 = new Star(190, 420, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);

      //push the drawn star to the items list
      items.push(Star1.drawStar(context, Star1));
      items.push(Star2.drawStar(context, Star2));
      items.push(Star3.drawStar(context, Star3));
      items.push(Star4.drawStar(context, Star4));
      items.push(Star5.drawStar(context, Star5));
      return items;
    },
    [
      {
        text: "Germany info",
      },
      {
        text: "USSR info",
      },
      {
        text: "Britain info",
      },
      {
        text: "Italy info",
      },
      {
        text: "France info",
      },
    ]
  );

  drawMap(
    "map2", //mapId
    function (context) {
      const items = [];

      //China
      const Star1 = new Star(450, 320, 35, 14, 5, 6, "#f06d06", "#fed8b1", 60);
      //USSR
      const Star2 = new Star(300, 150, 35, 14, 5, 6, "#f06d06", "#fed8b1", 60);
      //Japan
      const Star3 = new Star(640, 320, 20, 8, 5, 3.2, "#f06d06", "#fed8b1", 60);
      //Philippines
      const Star4 = new Star(580, 490, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);
      //Manchuria
      const Star5 = new Star(520, 260, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);

      //star drawing begin

      //push the drawn star to the items list
      items.push(Star1.drawStar(context, Star1));
      items.push(Star2.drawStar(context, Star2));
      items.push(Star3.drawStar(context, Star3));
      items.push(Star4.drawStar(context, Star4));
      items.push(Star5.drawStar(context, Star5));

      return items;
    },
    [
      {
        text: "China info",
      },
      {
        text: "USSR info",
      },
      {
        text: "Japan info",
      },
      {
        text: "Philippines info",
      },
      {
        text: "Manchuria info",
      },
    ]
  );
  drawMap(
    "map3", //mapId
    function (context) {
      const items = [];
      //USA
      const Star1 = new Star(300, 310, 35, 14, 5, 6, "#f06d06", "#fed8b1", 60);
      //Brazil
      const Star2 = new Star(530, 650, 35, 14, 5, 6, "#f06d06", "#fed8b1", 60);

      //push the drawn star to the items list
      items.push(Star1.drawStar(context, Star1));
      items.push(Star2.drawStar(context, Star2));
      return items;
    },
    [
      {
        text: "USA info",
      },
      {
        text: "Brazil info",
      },
    ]
  );
}
window.addEventListener("DOMContentLoaded", render);

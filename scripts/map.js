var drawStar = function (context, o = {}) {
  let numPoints = o.numPoints || 5;
  let outerRadius = o.outerRadius || 100;
  let innerRadius = o.innerRadius || 50;
  let cx = o.cx || 0;
  let cy = o.cy || 0;

  let rotate = o.rotate || 0;

  context.lineWidth = o.lineWidth || 1;
  context.strokeStyle = o.stroke || "#000";
  context.beginPath();
  const draw = (radius, angle, action) => {
    let x = cx + radius * Math.cos(angle);
    let y = cy + radius * Math.sin(angle);
    context[action](x, y);
  };

  draw(outerRadius, rotate, "moveTo");

  let angle = (2 * Math.PI) / numPoints;

  for (var i = 0; i <= numPoints; i++) {
    let outerAngle = i * angle + rotate;
    let innerAngle = outerAngle + angle / 2;
    draw(outerRadius, outerAngle, "lineTo");
    draw(innerRadius, innerAngle, "lineTo");
  }

  context.stroke();

  if (o.fill) {
    context.fillStyle = o.fill;
    context.fill();
  }

  return {
    left: cx - innerRadius,
    top: cy - innerRadius,
    right: cx + innerRadius,
    bottom: cy + innerRadius,
  };
};

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
        clickedX < items[i].right &&
        clickedX > items[i].left &&
        clickedY > items[i].top &&
        clickedY < items[i].bottom
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

      const Star1 = new Star(500, 300, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);
      //star drawing begin
      console.log(Star1);
      const star1 = drawStar(context, Star1);
      items.push(star1); //push the drawn star to the items list
      const Star2 = new Star(200, 100, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);
      const star2 = drawStar(context, Star2);
      items.push(star2);

      return items;
    },
    [
      {
        text: "Country 0 info",
      },
      {
        text: "Country 1 info",
      },
      {
        text: "Country 2 info",
      },
      {
        text: "Country 3 info",
      },
    ]
  );
}
window.addEventListener("DOMContentLoaded", render);

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

var drawArrowhead =function (locx, locy, angle, sizex, sizey) {
  var hx = sizex / 2;
  var hy = sizey / 2;
  ctx.translate((locx ), (locy));
  ctx.rotate(angle);
  ctx.translate(-hx,-hy);

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(0,1*sizey);    
  ctx.lineTo(1*sizex,1*hy);
  ctx.closePath();
  ctx.fill();
}


// returns radians
var findAngle = function(sx, sy, ex, ey) {
  // make sx and sy at the zero point
  return Math.atan((ey - sy) / (ex - sx));
}

var drawArrow= function(){
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(cx,cy);
  ctx.quadraticCurveTo(sx, sy, ex, ey);
  ctx.stroke();

  var ang = findAngle(sx, sy, ex, ey);
  drawArrowhead(ex, ey, ang, hh, hw);
}

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
      //Germany
      const Star1 = new Star(330, 350, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);
      //USSR
      const Star2 = new Star(600, 300, 35, 14, 5, 6, "#f06d06", "#fed8b1", 60);
      //Britain
      const Star3 = new Star(180, 300, 20, 8, 5, 3.2, "#f06d06", "#fed8b1", 60);
      //Italy
      const Star4 = new Star(310, 490, 15, 6, 5, 2.5, "#f06d06", "#fed8b1", 60);
      //France
      const Star5 = new Star(200, 400, 25, 10, 5, 4, "#f06d06", "#fed8b1", 60);

      //star drawing begin
      const star1 = drawStar(context, Star1);
      const star2 = drawStar(context, Star2);
      const star3 = drawStar(context, Star3);
      const star4 = drawStar(context, Star4);
      const star5 = drawStar(context, Star5);
      const arrow1 = new Arrow(300, 100, 50, 30, 100, 200, 10, 10, "#FFF000");

      arrow1.drawArrow();
      //push the drawn star to the items list
      items.push(star1);
      items.push(star2);
      items.push(star3);
      items.push(star4);
      items.push(star5);
      items.push(arrow1);
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
}
window.addEventListener("DOMContentLoaded", render);

/*
This class contains the main variables and methods to draw a star.
*/
class Star {
  constructor(
    cx, //Center x coordinate
    cy, //Center y coordinate
    outerRadius, //How far from the center point does the star go
    innerRadius, //Where does the first color of the star end
    numPoints, //How many points the star has
    lineWidth, //Thickness of the lines
    stroke, // The color of the outer radius
    fill, //The color of the inner part of the star
    rotate //How rotated the star should be
  ) {
    this.cx = cx;
    this.cy = cy;
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
    this.numPoints = numPoints;
    this.lineWidth = lineWidth;
    this.stroke = stroke;
    this.fill = fill;
    this.rotate = rotate;
  }
  //This function draws the star to the canvas.
  drawStar = function (context, o = {}) {
    let numPoints = o.numPoints || 5;
    let outerRadius = o.outerRadius || 100;
    let innerRadius = o.innerRadius || 50;
    let cx = o.cx || 0;
    let cy = o.cy || 0;

    let rotate = o.rotate || 0;

    context.lineWidth = o.lineWidth || 1;
    context.strokeStyle = o.stroke || "#000";
    context.beginPath();
    //This function is used to execute the "action" on the right coordinates
    const draw = (radius, angle, action) => {
      let x = cx + radius * Math.cos(angle); //Cos = (adjacent side) / (hypotenuse)
      let y = cy + radius * Math.sin(angle); //Sin = (opposite side) / (hypotenuse)
      context[action](x, y);
    };

    draw(outerRadius, rotate, "moveTo");
    //Decides the angle of each corner of the star
    let angle = (2 * Math.PI) / numPoints;

    for (var i = 0; i <= numPoints; i++) {
      let outerAngle = i * angle + rotate;
      let innerAngle = outerAngle + angle / 2;
      draw(outerRadius, outerAngle, "lineTo");
      draw(innerRadius, innerAngle, "lineTo");
    }

    context.stroke();
    //Fills the star
    if (o.fill) {
      context.fillStyle = o.fill;
      context.fill();
    }
    //Returns the "hitbox" for the star
    return {
      left: cx - innerRadius,
      top: cy - innerRadius,
      right: cx + innerRadius,
      bottom: cy + innerRadius,
      offset: innerRadius + outerRadius,
    };
  };
}

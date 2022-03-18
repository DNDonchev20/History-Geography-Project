class Star {
  constructor(
    cx,
    cy,
    outerRadius,
    innerRadius,
    numPoints,
    lineWidth,
    stroke,
    fill,
    rotate
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
      offset: innerRadius + outerRadius,
    };
  };
}

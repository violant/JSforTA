module.exports = { getCircleLength, getCircleArea };

function getCircleLength(radius) {
  return Math.PI * 2 * radius;
}

function getCircleArea(radius) {
  return Math.PI * radius * radius;
}

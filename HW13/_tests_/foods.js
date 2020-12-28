function filterFoodPrice(food, min, max) {
  return food.filter((element) => element.price >= min && element.price <= max);
}
module.exports = filterFoodPrice;
module.exports.food = [
  { kind: "potato", price: 10 },
  { kind: "bred", price: 16 },
  { kind: "pepper", price: 27 },
  { kind: "banana", price: 32 },
  { kind: "lemon", price: 50 },
];


//Exercise 2

//--------------GLUTENFREE------------

//Making array from gluten free names
var glutenFreeNames = []
function glutenFreeNamesArray() {
  for (var i = 0; i < bakeryDatas["recipes"].length; i++)
    if (bakeryDatas["recipes"][i]["glutenFree"] == true && bakeryDatas["recipes"][i]["lactoseFree"] != true)
      glutenFreeNames.push(bakeryDatas["recipes"][i]["name"])
  return glutenFreeNames
};

//Making array from gluten free prices
var glutenFreePrices = []
function glutenFreePricesArray() {
  for (var i = 0; i < bakeryDatas["recipes"].length; i++)
    if (bakeryDatas["recipes"][i]["glutenFree"] == true && bakeryDatas["recipes"][i]["lactoseFree"] != true)
      glutenFreePrices.push(bakeryDatas["recipes"][i]["price"])
  return glutenFreePrices
};

//---------LACTOSEFREE------------

//Making array from lactose free names
var lactoseFreeNames = []
function lactoseFreeNamesArray() {
  for (var i = 0; i < bakeryDatas["recipes"].length; i++)
    if (bakeryDatas["recipes"][i]["lactoseFree"] == true && bakeryDatas["recipes"][i]["glutenFree"] != true)
      lactoseFreeNames.push(bakeryDatas["recipes"][i]["name"])
  return lactoseFreeNames
};

//Making array from lactose free prices
var lactoseFreePrices = []
function lactoseFreePricesArray() {
  for (var i = 0; i < bakeryDatas["recipes"].length; i++)
    if (bakeryDatas["recipes"][i]["lactoseFree"] == true && bakeryDatas["recipes"][i]["glutenFree"] != true)
      lactoseFreePrices.push(bakeryDatas["recipes"][i]["price"])
  return lactoseFreePrices
};

//-------LACTOSE AND GLUTEN FREE----------

//Making array from lactose and gluten free names
var lactoseAndGlutenFreeNames = []
function lactoseAndGlutenFreeNamesArray() {
  for (var i = 0; i < bakeryDatas["recipes"].length; i++)
    if (bakeryDatas["recipes"][i]["lactoseFree"] == true &&
      bakeryDatas["recipes"][i]["glutenFree"] == true)
      lactoseAndGlutenFreeNames.push(bakeryDatas["recipes"][i]["name"])
  return lactoseAndGlutenFreeNames
};

//Making array from lactose and gluten free prices
var lactoseAndGlutenFreePrices = []
function lactoseAndGlutenFreePricesArray() {
  for (var i = 0; i < bakeryDatas["recipes"].length; i++)
    if (bakeryDatas["recipes"][i]["lactoseFree"] == true &&
      bakeryDatas["recipes"][i]["glutenFree"] == true)
      lactoseAndGlutenFreePrices.push(bakeryDatas["recipes"][i]["price"])
  return lactoseAndGlutenFreePrices
};

//-------------SOLUTION---------------

//Making an object from names and prices
function getFreeObject() {
  glutenFreePricesArray()
  lactoseFreePricesArray()
  lactoseAndGlutenFreePricesArray()
  var freeObject = { "glutenFree": [], "lactoseFree": [], "lactoseAndGlutenFree": [] }
  var glutenLength = glutenFreeNamesArray().length
  for (var i = 0; i < glutenLength; i++) {
    freeObject["glutenFree"][i] = { name: glutenFreeNames[i], price: glutenFreePrices[i] };
  }
  var lactoseLength = lactoseFreeNamesArray().length
  for (var x = 0; x < lactoseLength; x++) {
    freeObject["lactoseFree"][x] = { name: lactoseFreeNames[x], price: lactoseFreePrices[x] };
  }
  var lactoseAndGlutenLength = lactoseAndGlutenFreeNamesArray().length
  for (var a = 0; a < lactoseAndGlutenLength; a++) {
    freeObject["lactoseAndGlutenFree"][a] = { name: lactoseAndGlutenFreeNames[a], price: lactoseAndGlutenFreePrices[a]};
  }
  return JSON.stringify(freeObject)
};
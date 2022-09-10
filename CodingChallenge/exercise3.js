//Exercise 3

var allIngredientsPrice = 0;
function getIngredientPrice2(ingredient) {
  var ingredientPrice = 0;
  for (let x = 0; x < bakeryDatas["recipes"].length; x++) {
    for (let a = 0; a < bakeryDatas["salesOfLastWeek"].length; a++) {
      for (let i = 0; i < bakeryDatas["recipes"][x]["ingredients"].length; i++) {
        if (bakeryDatas["recipes"][x]["ingredients"][i]["name"] == ingredient &&
         bakeryDatas["recipes"][x]["name"] == bakeryDatas["salesOfLastWeek"][a]["name"]){
              ingredientPrice += bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0] *
              bakeryDatas["salesOfLastWeek"][a]["amount"]
        }
      }
    }
  }
  if (ingredient == "flour") {
    ingredientPrice = ingredientPrice/10000*1500
  }
  if (ingredient == "gluten-free flour") {
  ingredientPrice = ingredientPrice/10000*3000
  }
  if (ingredient == "egg") {
    ingredientPrice = ingredientPrice/12*240
  }
  if (ingredient == "sugar") {
    ingredientPrice = ingredientPrice/10000*1200
  }
  if (ingredient == "milk") {
    ingredientPrice = ingredientPrice/10000*2000
  }
  if (ingredient == "soy-milk") {
    ingredientPrice = ingredientPrice/10000*4000
  }
  if (ingredient == "butter") {
    ingredientPrice = ingredientPrice/1000*2000
  }
  if (ingredient == "vanilin sugar") {
    ingredientPrice = ingredientPrice/1000*3000
  }
  if (ingredient == "fruit") {
    ingredientPrice = ingredientPrice/10000*2000
  }
  if (ingredient == "chocolate") {
    ingredientPrice = ingredientPrice/10000*2000
  }
  return allIngredientsPrice += ingredientPrice;
};

function getAllIngredientsPrice() {
  let ingredientsArray = ["flour","gluten-free flour","egg","sugar","milk",
  "soy-milk","butter","vanilin sugar", "fruit","chocolate"];
  for (let index = 0; index < ingredientsArray.length; index++) {
    getIngredientPrice2(ingredientsArray[index])
  }
  return allIngredientsPrice;
};

function getIncome() {
  lastWeekSale();
  getAllIngredientsPrice();
  return sale - allIngredientsPrice;
};

//##################################################
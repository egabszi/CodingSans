//Exercise 5.

var maffiaDatas = [];
function getIngredientForMaffia() {
    var array = ["Francia krémes", "Rákóczi túrós", "Képviselőfánk", "Isler", "Tiramisu"]
    for (let i = 0; i < bakeryDatas["recipes"].length; i++) {
      for (let x = 0; x < array.length; x++) {
        if (bakeryDatas["recipes"][i]["name"] == array[x]) {
          maffiaDatas.push(bakeryDatas["recipes"][i])
        }
      }
    }
};

var allPrice = 0;
function getFranciaKremesExpenses() {
    for (let x = 0; x < maffiaDatas.length; x++) {
      if (maffiaDatas[x]["name"] == "Francia krémes") {
        for (let i = 0; i < maffiaDatas[x]["ingredients"].length; i++) {
          if (maffiaDatas[x]["ingredients"][i]["name"] == "flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 1500
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "gluten-free flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "egg") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 12) * 240
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 1200
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "soy-milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 4000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "butter") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 1000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "vanilin sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 1000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "fruit") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "chocolate") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 2000
          }
        }
      }
    }
    return allPrice;
};

function getRakocziTurosExpenses() {
    for (let x = 0; x < maffiaDatas.length; x++) {
      if (maffiaDatas[x]["name"] == "Rákóczi túrós") {
        for (let i = 0; i < maffiaDatas[x]["ingredients"].length; i++) {
          if (maffiaDatas[x]["ingredients"][i]["name"] == "flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 10000) * 1500
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "gluten-free flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 10000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "egg") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 12) * 240
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 10000) * 1200
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "soy-milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 10000) * 4000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "butter") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 1000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "vanilin sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 1000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "fruit") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "chocolate") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 200 / 10000) * 2000
          }
        }
      }
    }
    return allPrice;
};

function getKepviselofankExpenses() {
    for (let x = 0; x < maffiaDatas.length; x++) {
      if (maffiaDatas[x]["name"] == "Képviselőfánk") {
        for (let i = 0; i < maffiaDatas[x]["ingredients"].length; i++) {
          if (maffiaDatas[x]["ingredients"][i]["name"] == "flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 1500
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "gluten-free flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "egg") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 12) * 240
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 1200
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "soy-milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 4000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "butter") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 1000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "vanilin sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 1000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "fruit") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "chocolate") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 300 / 10000) * 2000
          }
        }
      }
    }
    return allPrice;
};

function getIslerExpenses() {
    for (let x = 0; x < maffiaDatas.length; x++) {
      if (maffiaDatas[x]["name"] == "Isler") {
        for (let i = 0; i < maffiaDatas[x]["ingredients"].length; i++) {
          if (maffiaDatas[x]["ingredients"][i]["name"] == "flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 10000) * 1500
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "gluten-free flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 10000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "egg") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 12) * 240
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 10000) * 1200
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "soy-milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 10000) * 4000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "butter") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 1000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "vanilin sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 1000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "fruit") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "chocolate") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 100 / 10000) * 2000
          }
        }
      }
    }
    return allPrice;
};

function getTiramisuExpenses() {
    for (let x = 0; x < maffiaDatas.length; x++) {
      if (maffiaDatas[x]["name"] == "Tiramisu") {
        for (let i = 0; i < maffiaDatas[x]["ingredients"].length; i++) {
          if (maffiaDatas[x]["ingredients"][i]["name"] == "flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 10000) * 1500
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "gluten-free flour") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 10000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "egg") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 12) * 240
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 10000) * 1200
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "soy-milk") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 10000) * 4000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "butter") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 1000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "vanilin sugar") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 1000) * 3000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "fruit") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 10000) * 2000
          }
          if (maffiaDatas[x]["ingredients"][i]["name"] == "chocolate") {
            allPrice += Math.ceil(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0] * 150 / 10000) * 2000
          }
        }
      }
    }
    return allPrice;
};

function paybackToMaffia() {
  getIngredientForMaffia()
  getFranciaKremesExpenses()
  getRakocziTurosExpenses()
  getKepviselofankExpenses()
  getIslerExpenses()
  getTiramisuExpenses()
  return allPrice;
};
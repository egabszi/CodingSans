/*
//Make objects
var objects = {};
for (var x = 0; x < 10; x++) {
  objects[x] = {name: "etc", value: 200};
}

// exercise 3 próbák

var eggs = 0;
function getEggPrice() {
  for (let x = 0; x < bakeryDatas["salesOfLastWeek"].length; x++) {
    for (let i = 0; i < bakeryDatas["recipes"][x]["ingredients"].length; i++) {
      if (bakeryDatas["recipes"][x]["ingredients"][i]["name"] == "egg"){
        eggs += Number(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0] *
        bakeryDatas["salesOfLastWeek"][x]["amount"])
        console.log(Number(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0]) + "*" + bakeryDatas["salesOfLastWeek"][x]["amount"])
      }
    }
  }
  return console.log(eggs)
};


function getFlourPrice() {
  for (let x = 0; x < bakeryDatas["salesOfLastWeek"].length+1; x++) {
    for (let a = 0; a < bakeryDatas["salesOfLastWeek"].length; a++) {
      for (let i = 0; i < bakeryDatas["recipes"][x]["ingredients"].length; i++) {
        if (bakeryDatas["recipes"][x]["ingredients"][i]["name"] == "flour" && bakeryDatas["recipes"][x]["name"] == bakeryDatas["salesOfLastWeek"][a]["name"]){
          console.log(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0])
        }
      }
    }
  }
};

//######################################################


{
  "name": "Gyümölcsös krémes",
  "price": "450 Ft",
  "lactoseFree": true,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "7 pc" },
    { "name": "sugar", "amount": "300 g" },
    { "name": "fruit", "amount": "60 g" },
    { "name": "vanilin sugar", "amount": "80 g" },
    { "name": "soy-milk", "amount": "600 ml" },
    { "name": "flour", "amount": "1000 g" }
  ]
},
{
  "name": "Rigó Jancsi",
  "price": "450 Ft",
  "lactoseFree": true,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "3 pc" },
    { "name": "sugar", "amount": "600 g" },
    { "name": "chocolate", "amount": "100 g" },
    { "name": "soy-milk", "amount": "200 ml" },
    { "name": "flour", "amount": "900 g" }
  ]
},
{
  "name": "Tiramisu",
  "price": "600 Ft",
  "lactoseFree": false,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "3 pc" },
    { "name": "sugar", "amount": "400 g" },
    { "name": "fruit", "amount": "80 g" },
    { "name": "vanilin sugar", "amount": "20 g" },
    { "name": "milk", "amount": "800 ml" },
    { "name": "butter", "amount": "60 g" },
    { "name": "flour", "amount": "500 g" }
  ]
},
{
  "name": "Rákóczi túrós",
  "price": "500 Ft",
  "lactoseFree": true,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "6 pc" },
    { "name": "sugar", "amount": "200 g" },
    { "name": "fruit", "amount": "10 g" },
    { "name": "vanilin sugar", "amount": "70 g" },
    { "name": "chocolate", "amount": "20 g" },
    { "name": "soy-milk", "amount": "300 ml" },
    { "name": "flour", "amount": "800 g" }
  ]
},
{
  "name": "Isler",
  "price": "500 Ft",
  "lactoseFree": false,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "2 pc" },
    { "name": "sugar", "amount": "400 g" },
    { "name": "fruit", "amount": "80 g" },
    { "name": "milk", "amount": "500 ml" },
    { "name": "butter", "amount": "50 g" },
    { "name": "flour", "amount": "900 g" }
  ]
},
{
  "name": "Mákos habos",
  "price": "550 Ft",
  "lactoseFree": true,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "4 pc" },
    { "name": "sugar", "amount": "100 g" },
    { "name": "vanilin sugar", "amount": "10 g" },
    { "name": "soy-milk", "amount": "800 ml" },
    { "name": "flour", "amount": "900 g" }
  ]
},
{
  "name": "Képviselőfánk",
  "price": "700 Ft",
  "lactoseFree": false,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "1 pc" },
    { "name": "sugar", "amount": "900 g" },
    { "name": "vanilin sugar", "amount": "60 g" },
    { "name": "milk", "amount": "600 ml" },
    { "name": "butter", "amount": "90 g" },
    { "name": "flour", "amount": "500 g" }
  ]
},
{
  "name": "Ekler fánk",
  "price": "700 Ft",
  "lactoseFree": false,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "4 pc" },
    { "name": "sugar", "amount": "100 g" },
    { "name": "vanilin sugar", "amount": "20 g" },
    { "name": "chocolate", "amount": "80 g" },
    { "name": "milk", "amount": "900 ml" },
    { "name": "butter", "amount": "20 g" },
    { "name": "flour", "amount": "1000 g" }
  ]
},
{
  "name": "Flódni",
  "price": "580 Ft",
  "lactoseFree": true,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "8 pc" },
    { "name": "sugar", "amount": "400 g" },
    { "name": "vanilin sugar", "amount": "20 g" },
    { "name": "chocolate", "amount": "100 g" },
    { "name": "soy-milk", "amount": "600 ml" },
    { "name": "flour", "amount": "800 g" }
  ]
},
{
  "name": "Zserbó",
  "price": "520 Ft",
  "lactoseFree": false,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "10 pc" },
    { "name": "sugar", "amount": "200 g" },
    { "name": "fruit", "amount": "40 g" },
    { "name": "chocolate", "amount": "30 g" },
    { "name": "milk", "amount": "1000 ml" },
    { "name": "butter", "amount": "80 g" },
    { "name": "flour", "amount": "500 g" }
  ]
},
{
  "name": "Mézes krémes",
  "price": "450 Ft",
  "lactoseFree": false,
  "glutenFree": false,
  "ingredients": [
    { "name": "egg", "amount": "8 pc" },
    { "name": "sugar", "amount": "700 g" },
    { "name": "vanilin sugar", "amount": "80 g" },
    { "name": "milk", "amount": "900 ml" },
    { "name": "butter", "amount": "60 g" },
    { "name": "flour", "amount": "300 g" }
  ]
},
{
  "name": "Túrós pite",
  "price": "450 Ft",
  "lactoseFree": false,
  "glutenFree": true,
  "ingredients": [
    { "name": "egg", "amount": "7 pc" },
    { "name": "sugar", "amount": "300 g" },
    { "name": "chocolate", "amount": "60 g" },
    { "name": "milk", "amount": "600 ml" },
    { "name": "butter", "amount": "60 g" },
    { "name": "gluten-free flour", "amount": "600 g" }
  ]
},
{
  "name": "Meggyes pite",
  "price": "450 Ft",
  "lactoseFree": true,
  "glutenFree": true,
  "ingredients": [
    { "name": "egg", "amount": "3 pc" },
    { "name": "sugar", "amount": "800 g" },
    { "name": "vanilin sugar", "amount": "50 g" },
    { "name": "chocolate", "amount": "10 g" },
    { "name": "soy-milk", "amount": "800 ml" },
    { "name": "gluten-free flour", "amount": "700 g" }
  ]
},
{





  console.log(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0] *
  bakeryDatas["salesOfLastWeek"][a]["amount"])
 ingredientPrice += bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0] *
 bakeryDatas["salesOfLastWeek"][a]["amount"]




 function getPricesForMaffia(){
  for (let x = 0; x < maffiaDatas.length; x++){
    if (maffiaDatas[x]["name"] == "Francia krémes") {
      for (let i = 0; i < maffiaDatas[x]["ingredients"].length; i++){
        if (maffiaDatas[x]["ingredients"][i]["name"] == "flour") {
          flour += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "gluten-free flour") {
          glutenFreeFlour += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "egg") {
          egg += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "sugar") {
          sugar += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "milk") {
          milk += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "soy-milk") {
          soyMilk += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "butter") {
          butter += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "vanilin sugar") {
          vanilinSugar += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "fruit") {
          fruit += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
        if (maffiaDatas[x]["ingredients"][i]["name"] == "chocolate") {
          chocolate += (Number(maffiaDatas[x]["ingredients"][i]["amount"].split(" ")[0])*300)
        }
      }

*/

var array = []
var amounts = []
function getAmountOfMaxCakes(){
  for (let x = 0; x < bakeryDatas["recipes"].length; x++) {
    for (let i =0; i < bakeryDatas["recipes"][x]["ingredients"].length; i++) {
      for (let a=0; a< bakeryDatas["inventory"].length; a++)
      if (bakeryDatas["recipes"][x]["ingredients"][i]["name"] == bakeryDatas["inventory"][a]["name"]) {
        if (bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[1] != "pc") {
          //console.log(Number(bakeryDatas["inventory"][a]["amount"].split(" ")[0])/((Math.round(Number(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0])))/1000))
          amounts.push(Number(bakeryDatas["inventory"][a]["amount"].split(" ")[0])/((Math.round(Number(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0])))/1000))
        }
        if (bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[1] == "pc") {
          //console.log(Number(bakeryDatas["inventory"][a]["amount"].split(" ")[0])/(Math.round(Number(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0]))))
          amounts.push(Number(bakeryDatas["inventory"][a]["amount"].split(" ")[0])/(Math.round(Number(bakeryDatas["recipes"][x]["ingredients"][i]["amount"].split(" ")[0]))))
        }
      }
    }
    array.push(Math.floor(Math.min.apply(null,amounts)))
    amounts = []
  }
  return array
};

var namesArray = [];
function getNamesArray(){
  for (let i= 0; i < bakeryDatas["recipes"].length; i++) {
    namesArray.push(bakeryDatas["recipes"][i]["name"])
  }
  return namesArray;
};

var abcArray = [];
function getAbcArray(){
  for (let i= 0; i < bakeryDatas["recipes"].length; i++) {
    abcArray.push(bakeryDatas["recipes"][i]["name"])
  }
  abcArray.sort()
  return abcArray;
};


function getAmountsInAbcOrder() {
  getAmountOfMaxCakes()
  getNamesArray()
  getAbcArray()
  var bigObj = [{}];
  for (var x = 0; x < namesArray.length ; x++) {
    bigObj[x] = {name: namesArray[x] , amount: array[x]};
  }
  bigObj.sort(function (a, b) {
    return a.name.localeCompare(b.name) || b.price - a.price;
  });
  return JSON.stringify(bigObj);
};






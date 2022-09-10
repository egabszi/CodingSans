// Exercise 4

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
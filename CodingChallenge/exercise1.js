//Exercise 1

//Getting amount from last week sale
function lastWeekSale(){
    var sale = 0;
    for (var item = 0; item < bakeryDatas["salesOfLastWeek"].length; item++){
        for (var i = 0; i < bakeryDatas["recipes"].length; i++) {
          if (bakeryDatas["salesOfLastWeek"][item]["name"] == bakeryDatas["recipes"][i]["name"])
          sale = sale + (bakeryDatas["salesOfLastWeek"][item]["amount"] * Number(bakeryDatas["recipes"][i]["price"].slice(0,3)))
        }
      }
    return console.log(sale)
  };

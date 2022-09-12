var obj1 = {
  Company: "Samsung",
  model: "Galaxy",
  Memory: "64",
  Price: 15000,
  rate: "0",
};
var obj2 = {
  Company: "Nokia",
  model: "S730",
  Memory: "128",
  Price: 22000,
  rate: "0",
};
var obj3 = {
  Company: "Xiaomi",
  model: "Note",
  Memory: "32",
  Price: 12000,
  rate: "0",
};
var obj4 = {
  Company: "Motorola",
  model: "G10",
  Memory: "32",
  Price: 15000,
  rate: "0",
};
var obj5 = {
  Company: "Apple",
  model: "S12",
  Memory: "64",
  Price: 25000,
  rate: "0",
};
var ar = [obj1, obj2, obj3, obj4, obj5];
function fun1() {
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;
  var str =[]
    if (obj1.Price>=min && obj1.Price<=max) {
        str.push(obj1)
        
    }
    if (obj2.Price>=min && obj2.Price<=max) {
        str.push(obj2)
    }
    if (obj3.Price>=min && obj3.Price<=max) {
        str.push(obj3)
    }
    if (obj4.Price>=min && obj4.Price<=max) {
        str.push(obj4)
    }
    if (obj5.Price>=min && obj5.Price<=max) {
        str.push(obj5)
    }
    
    var src=
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th>";
    document.getElementById("final").innerHTML = src;
    str.forEach((element) => {
      
        src +=
          "<tr><td id='tds'>" +
          element.Company +
          "</td id='tds'><td id='tds'>" +
          element.model +
          "</td> <td id='tds'>" +
          element.Memory +
          "</td> <td id='tds'>" +
          element.Price +
          "</td> </tr>";
          document.getElementById("final").innerHTML = src;
      });
      
      src += "</div></table>";

}

var obj1 = {
  Company: "Samsung",
  model: "Galaxy",
  Memory: "64",
  Price: "15000",
};
var obj2 = {
  Company: "Nokia",
  model: "S730",
  Memory: "128",
  Price: "22000",
};
var obj3 = {
  Company: "Xiaomi",
  model: "Note",
  Memory: "32",
  Price: "12000",
};
var obj4 = {
  Company: "Motorola",
  model: "G10",
  Memory: "32",
  Price: "15000",
};
var obj5 = {
  Company: "Apple",
  model: "S12",
  Memory: "64",
  Price: "25000",
};
var ar = [obj1, obj2, obj3, obj4, obj5];
function t1() {
  var src =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th>";
  document.getElementById("res").innerHTML = src;
  ar.forEach((element) => {
    
    src +=
      "<tr><td id='tds'>" +
      element.Company +
      "</td id='tds'><td id='tds'>" +
      element.model +
      "</td> <td id='tds'>" +
      element.Memory +
      "</td> <td id='tds'>" +
      element.Price +

      "</td></tr>";
      document.getElementById("res").innerHTML = src;
  });
  src += "</div></table>";
}

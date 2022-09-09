var obj1 = {
  company: "Samsung",
  model: "Galaxy",
  memory: "64",
  price: "15000",
};
var obj2 = {
  Company: "Nokia",
  model: "S730",
  memory: "128",
  price: "22000",
};
var obj3 = {
  company: "Xiaomi",
  model: "Note",
  memory: "32",
  price: "12000",
};
var obj4 = {
  company: "Motorola",
  model: "G10",
  memory: "32",
  price: "15000",
};
var obj5 = {
  company: "Apple",
  model: "S12",
  memory: "64",
  price: "25000",
};
var obj6 = {
  company: "temp",
  model: "temp",
  memory: "temp",
  price: "temp",
};
ar = [obj1, obj2, obj3, obj4, obj5, obj6];
function addfun() {
  var company = document.getElementById("company").value;
  var model = document.getElementById("model").value;
  var memory = document.getElementById("memory").value;
  var price = document.getElementById("price").value;
  obj6.company = company;
  obj6.model = model;
  obj6.memory = memory;
  obj6.price = price;
}
function t1() {
  var src =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th>";
  document.getElementById("res").innerHTML = src;
  ar.forEach((element) => {
    src +=
      "<tr><td id='tds'>" +
      element.company +
      "</td id='tds'><td id='tds'>" +
      element.model +
      "</td> <td id='tds'>" +
      element.memory +
      "</td> <td id='tds'>" +
      element.price +
      "</td></tr>";
    document.getElementById("res").innerHTML = src;
  });

  src += "</div></table>";
}

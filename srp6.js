var obj1 = {
  Company: "Samsung",
  model: "Galaxy",
  Memory: "64",
  Price: "15000",
  pos:"<input type='checkbox' id='scb'  value='box'> "
};
var obj2 = {
  Company: "Nokia",
  model: "S730",
  Memory: "128",
  Price: "22000",
  pos:"<input type='checkbox' id='ncb'  value='box'> "
};
var obj3 = {
  Company: "Xiaomi",
  model: "Note",
  Memory: "32",
  Price: "12000",
  pos:"<input type='checkbox' id='xcb'  value='box'> "
};
var obj4 = {
  Company: "Motorola",
  model: "G10",
  Memory: "32",
  Price: "15000",
  pos:"<input type='checkbox' id='mcb'  value='box'> "
  
};
var obj5 = {
  Company: "Apple",
  model: "S12",
  Memory: "64",
  Price: "25000",
  pos:"<input type='checkbox' id='acb'  value='box'> "
};
var ar = [obj1, obj2, obj3, obj4, obj5];

function chk() {
  var x1 = document.getElementById("scb").checked;
  var x2 = document.getElementById("ncb").checked;
  var x3 = document.getElementById("xcb").checked;
  var x4 = document.getElementById("mcb").checked;
  var x5 = document.getElementById("acb").checked;
  console.log(x1)
  if (x1===true) {
    
    delete ar[0]
    
    
  }
  if (x2===true) {
    delete ar[1]
    
    
  }
  if (x3===true) {
    delete ar[2]
    
    
  }
  if (x4===true) {
    delete ar[3]
   
    
  }
  if (x5===true) {
    delete ar[4]
    
    
  }
  var fsrc=
  "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th>";
  document.getElementById("fres").innerHTML = fsrc;
  ar.forEach((element) => {
    
    fsrc +=
      "<tr><td id='tds'>" +
      element.Company +
      "</td id='tds'><td id='tds'>" +
      element.model +
      "</td> <td id='tds'>" +
      element.Memory +
      "</td> <td id='tds'>" +
      element.Price +
      "</td> </tr>";
      document.getElementById("fres").innerHTML = fsrc;
  });
  
  fsrc += "</div></table>";

  console.log(ar)
 
}
function t1() {
  var src =
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Action</th>";
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
      "</td> <td id='tds'> "+
      element.pos
      "</td></tr>";
      document.getElementById("res").innerHTML = src;
  });
  
  src += "</div></table>";
}
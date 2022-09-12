var obj1 = {
    Company: "Samsung",
    model: "Galaxy",
    Memory: "64",
    Price: "15000",
    rate: "0",
  };
  var obj2 = {
    Company: "Nokia",
    model: "S730",
    Memory: "128",
    Price: "22000",
    rate: "0",
  };
  var obj3 = {
    Company: "Xiaomi",
    model: "Note",
    Memory: "32",
    Price: "12000",
    rate: "0",
  };
  var obj4 = {
    Company: "Motorola",
    model: "G10",
    Memory: "32",
    Price: "15000",
    rate: "0",
  };
  var obj5 = {
    Company: "Apple",
    model: "S12",
    Memory: "64",
    Price: "25000",
    rate: "0",
  };
  var ar = [obj1, obj2, obj3, obj4, obj5];
  
  var ar1 = [];
  function fun1() {
    var prod = document.getElementById("pro").value;
    var val = document.getElementById("val").value;
    if (prod === "Samsung Galaxy") {
      obj1.rate = val;
    }
    if (prod === "Nokia S730") {
      obj2.rate = val;
    }
    if (prod === "Xiaomi Note") {
      obj3.rate = val;
    }
    if (prod === "Motorola G10") {
      obj4.rate = val;
    }
    if (prod === "Apple S12") {
      obj5.rate = val;
    }
    var src =
      "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id ='tdh'>Rating</th>";
    document.getElementById("vals").innerHTML = src;
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
        "</td> <td id='tds'>" +
        element.rate +
        "</td></tr>";
      document.getElementById("vals").innerHTML = src;
    });
    src += "</div></table>";
  }
  
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
    var x = document.getElementById("acb").checked;
    console.log(x)
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
  
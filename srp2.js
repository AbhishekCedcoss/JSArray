var obj1 = {
  company: "Samsung",
  model: "Galaxy",
  memory: "64",
  price: "15000",
};
var obj2 = {
  company: "Nokia",
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
var test = undefined;
var ar = [obj1, obj2, obj3, obj4, obj5];
var src =
  "<div id='Dd'><label for='Selelct Field'>Selelct Field:</label><select name='Selelct Field' id='Selelct Field'><option value='#'>-Select Field-</option><option value='company' id ='tm'>Company</option><option value='model'id='tm'>Model</option><option value='memory'id='tm'>Memory</option><option value='price'id='tm'>Price</option></select>";
src +=
  '<input id="mys" type="text" placeholder=" Search...." name="search"> <button type="submit" onclick="dd()">Submit</button> </div>';

document.getElementById("dd").innerHTML = src;

function dd() {
  var srm = document.getElementById("tm").value;
  var sr = document.getElementById("mys").value;
  if (sr == "Samsung") {
    document.getElementById("st2").innerHTML =
      obj1.company + " :" + obj1.model + " " + obj1.memory + " " + obj1.price;
  } else if (sr == "Nokia") {
    document.getElementById("st2").innerHTML =
      obj2.company + " :" + obj2.model + " " + obj2.memory + " " + obj2.price;
  } else if (sr == "Xiaomi") {
    document.getElementById("st2").innerHTML =
      obj3.company + " :" + obj3.model + " " + obj3.memory + " " + obj3.price;
  } else if (sr == "Motorola") {
    document.getElementById("st2").innerHTML =
      obj4.company + " :" + obj4.model + " " + obj4.memory + " " + obj4.price;
  } else if (sr == "Apple") {
    document.getElementById("st2").innerHTML =
      obj5.company + " :" + obj5.model + " " + obj5.memory + " " + obj5.price;
  } else if (sr == "Galaxy") {
    document.getElementById("st2").innerHTML =
      obj1.company + " :" + obj1.model + " " + obj1.memory + " " + obj1.price;
  } else if (sr == "S730") {
    document.getElementById("st2").innerHTML =
      obj2.company + " :" + obj2.model + " " + obj2.memory + " " + obj2.price;
  } else if (sr == "Note") {
    document.getElementById("st2").innerHTML =
      obj3.company + " :" + obj3.model + " " + obj3.memory + " " + obj3.price;
  } else if (sr == "G10") {
    document.getElementById("st2").innerHTML =
      obj4.company + " :" + obj4.model + " " + obj4.memory + " " + obj4.price;
  } else if (sr == "S12") {
    document.getElementById("st2").innerHTML =
      obj5.company + " :" + obj5.model + " " + obj5.memory + " " + obj5.price;
  }else if (sr == "64") {
    document.getElementById("st2").innerHTML =
      obj1.company + " :" + obj1.model + " " + obj1.memory + " " + obj1.price;
  } else if (sr == "128") {
    document.getElementById("st2").innerHTML =
      obj2.company + " :" + obj2.model + " " + obj2.memory + " " + obj2.price;
  } else if (sr == "32") {
    document.getElementById("st2").innerHTML =
      obj3.company + " :" + obj3.model + " " + obj3.memory + " " + obj3.price;
  } else if (sr == "32") {
    document.getElementById("st2").innerHTML =
      obj4.company + " :" + obj4.model + " " + obj4.memory + " " + obj4.price;
  } else if (sr == "64") {
    document.getElementById("st2").innerHTML =
      obj5.company + " :" + obj5.model + " " + obj5.memory + " " + obj5.price;
  }else if (sr == "15000") {
    document.getElementById("st2").innerHTML =
      obj1.company + " :" + obj1.model + " " + obj1.memory + " " + obj1.price;
  } else if (sr == "22000") {
    document.getElementById("st2").innerHTML =
      obj2.company + " :" + obj2.model + " " + obj2.memory + " " + obj2.price;
  } else if (sr == "12000") {
    document.getElementById("st2").innerHTML =
      obj3.company + " :" + obj3.model + " " + obj3.memory + " " + obj3.price;
  } else if (sr == "15000") {
    document.getElementById("st2").innerHTML =
      obj4.company + " :" + obj4.model + " " + obj4.memory + " " + obj4.price;
  } else if (sr == "25000") {
    document.getElementById("st2").innerHTML =
      obj5.company + " :" + obj5.model + " " + obj5.memory + " " + obj5.price;
  }
  // else{
  //   document.getElementById("st2").innerHTML="Invalid Input"
  // }
}

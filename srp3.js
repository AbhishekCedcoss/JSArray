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
var s1 = document.getElementById("click1").value;
var s2 = document.getElementById("click2").value;
var ar = [obj1, obj2, obj3, obj4, obj5];
ar.sort((a,b)=>{
  return a.company -b.company
});
function fun2() {
  console.log(s1);
  console.log(s2);
}

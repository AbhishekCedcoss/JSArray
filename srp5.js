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

var ar1=[]
function fun1() {
    var prod = document.getElementById("pro").value;
    var val = document.getElementById("val").value;
    if (prod==="Samsung Galaxy") {
        ar1.push(prod)
        ar1.push(val)
        ar1.push(val*15000) 
        
        console.log(ar1)
        
      }
      if (prod==="Nokia S730") {
        ar1.push(prod)
        ar1.push(val)
        ar1.push(val*22000) 
        
        console.log(ar1)
        
      }
      if (prod==="Xiaomi Note") {
        ar1.push(prod)
        ar1.push(val)
        ar1.push(val*12000) 
        
        console.log(ar1)
        
      }
      if (prod==="Motorola G10") {
        ar1.push(prod)
        ar1.push(val)
        ar1.push(val*15000) 
        
        console.log(ar1)
        
      }
      if (prod==="Apple S12") {
        ar1.push(prod)
        ar1.push(val)
        ar1.push(val*25000) 
        
        console.log(ar1)
        
      }
//       for (let i = 0; i < ar1.length; i++) {
//         var ele = ar1[i];
//         console.log(ar1[i])<th id ='tdh'>Action</th>
// //   console.log(prod);<th id ='tdh'>Action</th>
//   console.log(val);
}
function fun2() {
    var tab="<h2>Bill</h2><div><table border=1><tr><th id ='tdh'>Description</th><th id ='tdh'>Quantity</th> <th id ='tdh'>Amount</th>";
    document.getElementById("table").innerHTML = tab;
    sum=0

    for (let i = 0; i < ar1.length; i++){
        tab +=
          "<tr><td id='tds'>" +
          ar1[i] +
          "</td id='tds'><td id='tds'>" +
          ar1[i+1] +
          "</td> <td id='tds'>" +
         ar1[i+2] +    
          "</td></tr>"
          
          sum+=ar1[i+2]
          i+=2;
          
          
      };
      console.log(sum)
      
      tab += "</div></table>";
      tab+="<h4> Total Amount :"+sum+"</h4>"

      document.getElementById("table").innerHTML = tab;

   
   
}

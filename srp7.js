var obj1 = {
  Company: "Samsung",
  model: "Galaxy",
  Memory: "64",
  Price: "15000",
  quant: "50",
};
var obj2 = {
  Company: "Nokia",
  model: "S730",
  Memory: "128",
  Price: "22000",
  quant: "50",
};
var obj3 = {
  Company: "Xiaomi",
  model: "Note",
  Memory: "32",
  Price: "12000",
  quant: "50",
};
var obj4 = {
  Company: "Motorola",
  model: "G10",
  Memory: "32",
  Price: "15000",
  quant: "50 ",
};
var obj5 = {
  Company: "Apple",
  model: "S12",
  Memory: "64",
  Price: "25000",
  quant: "50",
};
var src=
    "<div><table border=1><tr><th id ='tdh'>Company</th><th id ='tdh'>Model</th> <th id ='tdh'>Memory(GB)</th><th id ='tdh'>Price(RS)</th><th id='tdh'>Quantity</th>";
    document.getElementById("src").innerHTML = src;
var ar = [obj1, obj2, obj3, obj4, obj5];
ar.forEach(element => {
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
        element.quant
        "</td> </tr>";
        document.getElementById("src").innerHTML = src;
    
});
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
function fianl() {
    var ftab="<div><table border=1><tr><th id ='tdh'>Description</th><th id ='tdh'>Quantity</th> ";
    document.getElementById("final").innerHTML = ftab;
    ar.forEach((element) => {
      
        ftab +=
          "<tr><td id='tds'>" +
          element.Company +
          "</td id='tds'><td id='tds'>" +
          element.model +
          "</td> <td id='tds'>" +
          element.Memory +
          "</td> <td id='tds'>" +
          element.Price +
          "</td> </tr>";
          document.getElementById("fres").innerHTML = ftab;
      });
      
      ftab += "</div></table>";
      
   
}
// number of persons
var number=document.getElementById("number");
var minus=document.getElementById("minus");
var plus=document.getElementById("plus");
minus.addEventListener("click", function(){
   if(number.value>=1)
   {
      number.stepDown(1);
   }
});
plus.addEventListener("click", function(){
   
      number.stepUp(1);
});
function abc() {
// validation for cost
  var from=document.getElementById("from");
  var fromVal = from.options[from.selectedIndex].value;
  var to=document.getElementById("to");
  var toVal = to.options[to.selectedIndex].value;
  //tirupathi to different places
  if(fromVal=="Tirupati"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2000+"<b>";
  }
  if(fromVal=="Tirupati"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1500+"<b>";
  }
  if(fromVal=="Tirupati"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1400+"<b>";
  }
  if(fromVal=="Tirupati"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2200+"<b>";
  }
  if(fromVal=="Tirupati"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="Tirupati"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1300+"<b>";
  }
  if(fromVal=="Tirupati"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2500+"<b>";
  }
  if(fromVal=="Tirupati"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";//local trip
  }
  //alappuzha to different places
  if(fromVal=="alappuzha"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";
  }
  if(fromVal=="alappuzha"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2300+"<b>";
  }
  if(fromVal=="alappuzha"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1400+"<b>";
  }
  if(fromVal=="alappuzha"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="alappuzha"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1200+"<b>";
  }
  if(fromVal=="alappuzha"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1100+"<b>";
  }
  if(fromVal=="alappuzha"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1800+"<b>";
  }
  if(fromVal=="alappuzha"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2000+"<b>";
  }

// hampi to different places
  if(fromVal=="hampi"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2300+"<b>";
  }
  if(fromVal=="hampi"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";
  }
  if(fromVal=="hampi"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="hampi"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1100+"<b>";
  }
  if(fromVal=="hampi"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*800+"<b>";
  }
  if(fromVal=="hampi"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1100+"<b>";
  }
  if(fromVal=="hampi"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2200+"<b>";
  }
  if(fromVal=="hampi"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1200+"<b>";
  }

  // madurai to different places
  if(fromVal=="madurai"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1400+"<b>";
  }
  if(fromVal=="madurai"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="madurai"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";
  }
  if(fromVal=="madurai"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*800+"<b>";
  }
  if(fromVal=="madurai"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*700+"<b>";
  }
  if(fromVal=="madurai"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="madurai"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1800+"<b>";
  }
  if(fromVal=="madurai"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1400+"<b>";
  }

  // munnar to different places
  if(fromVal=="munnar"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="munnar"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1100+"<b>";
  }
  if(fromVal=="munnar"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*800+"<b>";
  }
  if(fromVal=="munnar"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";
  }
  if(fromVal=="munnar"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*700+"<b>";
  }
  if(fromVal=="munnar"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="munnar"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1500+"<b>";
  }
  if(fromVal=="munnar"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2200+"<b>";
  }

  // mysore to different places
  if(fromVal=="mysore"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1200+"<b>";
  }
  if(fromVal=="mysore"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*800+"<b>";
  }
  if(fromVal=="mysore"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*700+"<b>";
  }
  if(fromVal=="mysore"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*700+"<b>";
  }
  if(fromVal=="mysore"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";
  }
  if(fromVal=="mysore"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*500+"<b>";
  }
  if(fromVal=="mysore"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1300+"<b>";
  }
  if(fromVal=="mysore"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }

  // ooty to different places
   if(fromVal=="ooty"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1100+"<b>";
  }
  if(fromVal=="ooty"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1100+"<b>";
  }
  if(fromVal=="ooty"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="ooty"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*900+"<b>";
  }
  if(fromVal=="ooty"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*500+"<b>";
  }
  if(fromVal=="ooty"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";
  }
  if(fromVal=="ooty"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1200+"<b>";
  }
  if(fromVal=="ooty"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1300+"<b>";
  }

  //rameshwaram to different places
  if(fromVal=="rameshwaram"&&toVal=="alappuzha")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2000+"<b>";
  }
  if(fromVal=="rameshwaram"&&toVal=="hampi")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2200+"<b>";
  }
  if(fromVal=="rameshwaram"&&toVal=="madurai")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1800+"<b>";
  }
  if(fromVal=="rameshwaram"&&toVal=="munnar")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1500+"<b>";
  }
  if(fromVal=="rameshwaram"&&toVal=="mysore")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1300+"<b>";
  }
  if(fromVal=="rameshwaram"&&toVal=="ooty")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*1200+"<b>";
  }
  if(fromVal=="rameshwaram"&&toVal=="rameshwaram")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*400+"<b>";
  }
  if(fromVal=="rameshwaram"&&toVal=="tirupati")
  {
     var val=document.querySelector("#cost");
     val.innerHTML="cost is <b>"+number.value*2500+"<b>";
  }
};


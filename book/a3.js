function abc() {
            // alert("Welcome to the School of CSE")
            var from=document.getElementById("from");
            var fromVal = from.options[from.selectedIndex].value;
            var to=document.getElementById("to");
            var toVal = to.options[to.selectedIndex].value;
            if(fromVal=="Tirupati"&&toVal=="Rajahmundry")
            {
               var val=document.querySelector("h1");
               val.textContent="cost is 100";
            }
            if(fromVal=="Tirupati"&&toVal=="Amaravathi")
            {
               var val=document.querySelector("h1");
               val.textContent="cost is 200";
            }
            if(fromVal=="Vizag"&&toVal=="Rajahmundry")
            {
               var val=document.querySelector("h1");
               val.textContent="cost is 300";
            }
            if(fromVal=="Vizag"&&toVal=="Amaravathi")
            {
               var val=document.querySelector("h1");
               val.textContent="cost is 400";
            }
         }
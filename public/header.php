<html>
   <head>
      <style>
         .header
         {
         position:
         right: 0;
         bottom: 0;
         left: 0;
         padding: 1rem;
         background-color: #efefef ;
         text-align: center;
         }
         body {font-family: "Lato", sans-serif;}
         .tablink {
         background-color: #555;
         color: white;
         float: left;
         border: none;
         outline: none;
         cursor: pointer;
         padding: 14px 16px;
         font-size: 17px;
         width: 25%;
         }
         .tablink:hover {
         background-color: #777;
         }
         /* Style the tab content */
         .tabcontent {
         color: white;
         display: none;
         padding: 50px;
         text-align: center;
         }
         #London {background-color:#B8B8B8;}
         #Paris {background-color:#888888;}
         #Tokyo {background-color:#484848;}
         #Oslo {background-color:#282828;}
      </style>
   </head>
   <body>
      <div class="header">
         <header>
            <h1>Welcome to my home page!</h1>
         </header>
      </div>
      <div id="London" class="tabcontent">
         <h3>London</h3>
         <p>London is the capital city of England.</p>
      </div>
      <div id="Paris" class="tabcontent">
         <h3>Paris</h3>
         <p>Paris is the capital of France.</p>
      </div>
      <div id="Tokyo" class="tabcontent">
         <h3>Tokyo</h3>
         <p>Tokyo is the capital of Japan.</p>
      </div>
      <div id="Oslo" class="tabcontent">
         <h3>Oslo</h3>
         <p>Oslo is the capital of Norway.</p>
      </div>
      <button class="tablink" onclick="openCity('London', this, '#B8B8B8')" id="defaultOpen">London</button>
      <button class="tablink" onclick="openCity('Paris', this, '#888888')">Paris</button>
      <button class="tablink" onclick="openCity('Tokyo', this, '#484848')">Tokyo</button>
      <button class="tablink" onclick="openCity('Oslo', this, '#282828')">Oslo</button>
      <script>
         function openCity(cityName,elmnt,color) {
             var i, tabcontent, tablinks;
             tabcontent = document.getElementsByClassName("tabcontent");
             for (i = 0; i < tabcontent.length; i++) {
                 tabcontent[i].style.display = "none";
             }
             tablinks = document.getElementsByClassName("tablink");
             for (i = 0; i < tablinks.length; i++) {
                 tablinks[i].style.backgroundColor = "";
             }
             document.getElementById(cityName).style.display = "block";
             elmnt.style.backgroundColor = color;

         }
         // Get the element with id="defaultOpen" and click on it
         document.getElementById("defaultOpen").click();
      </script>
   </body>
</html>

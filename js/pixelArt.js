console.log("started js");
var container = document.getElementById("container")
var pattern = ["                                      ",
               "            xx         xx             ",
               "              x       x               ",
               "               x     x                ",
               "               x     x                ",
               "              xx     xx               ",
               "          xxxxxxxxxxxxxxxxxx          ",
               "        xx   ooo      ooo   xx        ",
               "      xx                      xx      ",
               "     xx                        xx     ",
               "    xx      oo          oo      xx    ",
               "    xx      oo          oo      xx    ",
               "    xx                          xx    ",
               "    xx                          xx    ",
               "     xx                        xx     ",
               "      xx        l    l        xx      ",
               "       xx        llll        xx       ",
               "        xx                  xx        ",
               "         xx                xx         ",
               "           xxxxxxxxxxxxxxxx           ",
               "                                      ",
               "                                      ",
             ];

pattern.forEach(function(string) {
  var row=document.createElement("div");
  row.className ="row"
  var ele;
  for (var ix in string) {
    console.log(ix);
    ele=document.createElement("div");
    if (string[ix] ==="x") {ele.className = "cross";}
    if (string[ix] ==="o") {ele.className = "oh";}
    if (string[ix] ==="l") {ele.className = "lips";}
    row.appendChild(ele);
  }
  console.log(row);
  container.appendChild(row);
});

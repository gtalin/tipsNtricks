console.log("started js");
var container = document.getElementById("container");
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
               "                                      "
             ];

/*pattern.forEach(function(string) {
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
*/

/*
function Vector(x,y) {
  this.x = x;
  this.y = y
}

Vector.prototype.plus = function(vector) {
  var newVect = new Vector;
  return new Vector(this.x+vector.x,this.y+vector+y);
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x-vector.x, this.y-vector.y)
}

Object.defineProperty ( Vector.prototype , "length", {
get : function () { return Math.pow((Math.pow(this.x,2)+Math.pow(this.y,2)),1/2); }
}) ;*/


function createEle(name, className) {
  var element = document.createElement(name);
  if (className) element.className = className;
  return element;
}


var scale = 20; /*width=50;*/

function display() {
  var table = createEle("table", "background");
  /*table.style.maxWidth = "800px";*/ //width*scale+"px";
  console.log(table);

  pattern.forEach(function(row){
    var rowElement = table.appendChild(createEle("tr"));
    rowElement.style.height = scale +"px";
    row.split("").forEach(function(ele){
      var className="";
      if (ele ==="x") {className = "cross";}
      if (ele ==="o") {className = "oh";}
      if (ele ==="l") {className = "lips";}
      var cell = createEle("td",className);
      rowElement.appendChild(cell);
      
    });
  });
  container.appendChild(table);
}

display();

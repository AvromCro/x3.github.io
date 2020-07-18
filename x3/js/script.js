let stepbl1 = document.getElementById("stepbl1");
let stepbr1 = document.getElementById("stepbr1");

let stepbl2 = document.getElementById("stepbl2");
let stepbr2 = document.getElementById("stepbr2");

let stepbl3 = document.getElementById("stepbl3");
let stepbr3 = document.getElementById("stepbr3");


stepbl1.onmouseover = function ()  {
    stepbr1.style.borderBottom = "3px solid white"
}
stepbl1.onmouseout = function ()  {
    stepbr1.style.borderBottom = "3px solid black"
}

stepbl2.onmouseover = function ()  {
    stepbr2.style.borderBottom = "3px solid white"
}
stepbl2.onmouseout = function ()  {
    stepbr2.style.borderBottom = "3px solid black"
}

stepbl3.onmouseover = function ()  {
    stepbr3.style.borderBottom = "3px solid white"
}
stepbl3.onmouseout = function ()  {
    stepbr3.style.borderBottom = "3px solid black"
}
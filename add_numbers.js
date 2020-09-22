"use strict";

function calculate() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);

	document.getElementById('total_marks').innerHTML = (0.2*x+0.4*y);
    document.getElementById('result').innerHTML = (50-(0.2*x+0.4*y))/.4;
    return false;
}

document.getElementById('go').addEventListener('click', calculate);
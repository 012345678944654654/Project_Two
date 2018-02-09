function initiate() {
  var elem=document.getElementById('canvas');
var canvas=elem.getContext('2d');
  
canvas.font="bold 24px verdana,sans-serif";
canvas.fillStyle="white";
canvas.textAlign="start";
 canvas.textBaseline="bottom";
canvas.fillText("AEPN.com",10,60);

 

}

addEventListener("load",initiate);
var Images=[" https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?w=940&h=650&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/460373/pexels-photo-460373.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?h=350&auto=compress&cs=tinysrgb"];
var step=1;
function gallery() {
document.getElementById('Imgs').src=Images[step];
if(step<Images.length-1)
{step++;
}else{step=0;
}

}

window.onload=setInterval(gallery,2500); 
 var Images=["https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?h=350&auto=compress&cs=tinysrgb"];
var step=1;
function gallery() {
document.getElementById('Imgs').src=Images[step];
if(step<Images.length-1)
{step++;
}else{step=0;
}

}

window.onload=setInterval(gallery,2500);
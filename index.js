 var Images=["https://images.pexels.com/photos/575226/pexels-photo-575226.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/860271/pexels-photo-860271.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/230/landscape-nature-forest-trees.jpg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/534171/pexels-photo-534171.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/461862/pexels-photo-461862.jpeg?h=350&auto=compress&cs=tinysrgb"];
var step=1;
function gallery() {
document.getElementById('Imgs').src=Images[step];
if(step<Images.length-1)
{step++;
}else{step=0;
}

}

window.onload=setInterval(gallery,2500);

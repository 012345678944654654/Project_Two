var Images=["https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/276677/pexels-photo-276677.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/276653/pexels-photo-276653.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/259602/pexels-photo-259602.jpeg?h=350&auto=compress&cs=tinysrgb"];
var step=1;
function gallery() {
document.getElementById('Imgs').src=Images[step];
if(step<Images.length-1)
{step++;
}else{step=0;
}

}

window.onload=setInterval(gallery,2500); 
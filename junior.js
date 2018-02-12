 var Images=["https://images.pexels.com/photos/280208/pexels-photo-280208.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/279813/pexels-photo-279813.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?h=350&auto=compress&cs=tinysrgb","https://images.pexels.com/photos/418806/pexels-photo-418806.jpeg?h=350&auto=compress&cs=tinysrgb"];
var step=1;
function gallery() {
document.getElementById('Imgs').src=Images[step];
if(step<Images.length-1)
{step++;
}else{step=0;
}

}

window.onload=setInterval(gallery,2500);
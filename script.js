var i=0;
var quality=[];
var images=[];
var time=3000;
images[0]="./images/powerful.jpeg"
images[1]="./images/creative.jpg";
images[2]="./images/innovative.jpeg";
quality[0]="Creative"
quality[1]="Innovative"
quality[2]="Powerful"
var qualities=document.querySelector(".quality");
changeimg();
function changeimg(){
    document.slide.src=images[i];
    qualities.textContent = quality[i];
    console.log(i);
    if(i<images.length-1)
    {i++;}
    else
    {i=0;}
    setTimeout("changeimg()",time);
}


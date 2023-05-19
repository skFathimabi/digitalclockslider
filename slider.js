var num=0;
var imageArr=["1.jpg","2.jpg","f6.jpg","f5.jpg"]
var headerTag=document.querySelector("header")
function autoSlide()
{
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else
    {
       num=0;
       headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    setTimeout(autoSlide,10000)
}
autoSlide()

function sliderRight()
{
    num++;
    if(num<=imageArr.length-1)
{
    headerTag.style.backgroundImage=`url(${imageArr[num]})`
}
else
{
    num=0;
    headerTag.style.backgroundImage=`url(${imageArr[num]})`
}
}
function sliderLeft()
{
    num--;
   if(num<0)
{   
    num=imageArr.length-1;
    headerTag.style.backgroundImage=`url(${imageArr[num]})`
}
else
{   
    
    headerTag.style.backgroundImage=`url(${imageArr[num]})`
}
}
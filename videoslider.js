var num=0;
var arrofVid=["snow fall.mp4","exibition.mp4","water fall.mp4",]
var vidTag=document.querySelector("video")
function autoSlide()
{
    num++
    if (num<=arrofVid.length-1)
    {
        vidTag.src=`./${arrofVid[num]}`
    }
    else
    {
      num=0
      vidTag.src=`./${arrofVid[num]}`
    }
}
setTimeout(autoSlide,10000)

function autoSlide()
{
    num++
    if(num<=arrofVid.length-1)
    {
        vidTag.src=`./${arrofVid[num]}`
    }
    else
    {
      num=0
      vidTag.src=`./${arrofVid[num]}`
    }
    setTimeout(autoSlide,10000)
}
autoSlide()
var date=new Date()
function clk(){
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth() 
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="Am"
    if(hh>=12){
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    var fulltime=`${hh}:${mm}${am_pm}`
    document.getElementById("Time").innerHTML=fulltime
    document.getElementById("sec").innerHTML=ss 
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="Jul"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else if(mo==11)
    {
        mo="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    var bdy=document.querySelector("body")
    document.getElementById("Date").innerHTML=fullDate
    switch(dy){
        case 0:dy="sunday"
        bdy.style.backgroundImage="url(image1.jpg)"
        break;
        case 1:dy="monday"
        bdy.style.backgroundImage="url(image2.html.jpg)"
        break;
        case 2:dy="tuesday"
        bdy.style.backgroundImage="url(image3.html.jpg)"
        break;
        case 3:dy="wednesday"
        bdy.style.backgroundImage="url(image4.html.jpg)"
        break;
        case 4:dy="thursday"
        bdy.style.backgroundImage="url(image5.jpg)"
        break;
        case 5:dy="friday"
        bdy.style.backgroundImage="url(image6.jpg)"
        break;
        case 6:dy="saturday"
        bdy.style.backgroundImage="url(image7.jpg)"
        break;
    }
    document.getElementById("Day").innerHTML=dy
    setTimeout(clk,1000)
}
function greet()
{
   var time=date.getHours()
    if(time>=5 && time<=12)
    {
        document.getElementById("message").innerHTML="good morning!!"
        document.getElementById("vid").src="goodmrn.mp4"
        document.getElementById("container").style.backgroundColor="rgba(219,245,255,0.619)"
        document.getElementById("Time").style.color="black"
        document.getElementById("Date").style.color="darkblue"
        document.getElementById("Day").style.color="darkblue"
        document.getElementById("sec").style.color="white"
    }
    else if(time>=12 && time<16)
    {
        document.getElementById("message").innerHTML="good afternoon!!"
        document.getElementById("vid").src="goodmrn"
    }
    else if(time>=16 && time<=20)
    {
       
        document.getElementById("message").innerHTML="good evening!!"
        document.getElementById("vid").src="evening"
        document.getElementById("container").style.backgroundColor="grey"
        document.getElementById("Time").style.color="white"
        document.getElementById("Date").style.color="wheat"
        document.getElementById("Day").style.color="wheat"
        document.getElementById("sec").style.color="black" 
    }
    else{
        
        document.getElementById("message").innerHTML="good night!!"
        document.getElementById("vid").src="night"
        document.getElementById("container").style.backgroundColor="rgba(0,0,0,0.57)"
        document.getElementById("Time").style.color="white"
        document.getElementById("Date").style.color="wheat"
        document.getElementById("Day").style.color="wheat"
        document.getElementById("sec").style.color="black"
    }
}
greet();
function removeTheGreetWindow(){
    document.getElementById("greet").style.display="none"
}
setTimeout(removeTheGreetWindow,5000)
function removeAlarm()
{
    document.getElementById("alarm").style.display="none"
}
function loadAlarm()
{
    document.getElementById("alarm").style.display="flex"
}
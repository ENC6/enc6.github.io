function changecolor()
{
    var b=document.getElementById("a").style.color;
    if(b=="green"){document.getElementById("a").style.color="#CCCC00";}
    else {document.getElementById("a").style.color="green";}
}
setInterval("changecolor()",500)

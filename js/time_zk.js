function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("6/20/2021 09:00:00");
today=new Date();
timeold=(BirthDay.getTime()-today.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML="<div height="50"><font size=5.2 face='ff'>距</font><font size=5.2 face='ff' color=red>中考</font><font size=5.2 face='ff'>还有：</div></font><font size=8 face='led'>"+daysold+"</font><font size=8 face='ff'>天</font><font size=8 face='led'>"+hrsold+"</font><font size=8 face='ff'>小时</font><font size=8 face='led'>"+minsold+"</font><font size=8 face='ff'>分</font><font size=8 face='led'>"+seconds+"</font><font size=8 face='ff'>秒</font>"+"<br></font><br>" ; // 这里你自己改。就是倒计时的样式，字体大小size=4 颜色是color
}
show_date_time();

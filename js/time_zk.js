function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("6/20/2021 08:00:00");
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
span_dt_dt.innerHTML="<font size=2 face='ff'>距中考还有：</font><font size=3.5 face='ff'>"+daysold+"天"+hrsold+"小时"+minsold+"分"+seconds+"秒"+"<br></font><br>" ; // 这里你自己改。就是倒计时的样式，字体大小size=4 颜色是color
}
show_date_time();

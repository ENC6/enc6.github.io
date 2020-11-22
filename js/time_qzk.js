function show_date_time_qzk(){

window.setTimeout("show_date_time_qzk()", 1000);

BirthDay=new Date("11/02/2020 08:00:00");

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

span_dt_qzk.innerHTML="<font size=10 face='ff'>"+"正在进行："+"</font><font color=red size=10 face='ff'>期中考试"+"<br></font><br>" ; // 这里你自己改。就是倒计时的样式，字体大小size=4 颜色是color

}

show_date_time_qzk();
    

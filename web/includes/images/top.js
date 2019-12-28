var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var montharray=new Array("Jan.","Feb.","March.","April.","May.","june.","July.","August.","Sep.","Oct.","Nov.","Dec.")

function getthedate(){
var mydate=new Date()
var year=mydate.getYear()
if (year < 1000)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
var hours=mydate.getHours()
var minutes=mydate.getMinutes()
var seconds=mydate.getSeconds()
var dn="AM"
if (hours>=12)
dn="PM"
if (hours>12){
hours=hours-12
}
if (hours==0)
hours=12
if (minutes<=9)
minutes="0"+minutes
if (seconds<=9)
seconds="0"+seconds


var cdate="<small><font color='#8A320D' face='verdana' size=2><b>"+hours+":"+minutes+":"+seconds+" "+dn
+"<br> "+dayarray[day]+",<br> "+montharray[month]+" "+daym+", "+year+"</b></font></small>"


//change font size here
//var cdate="<small><font color='darkblue' face='verdana' size=1><b>"+dayarray[day]+", "+montharray[month]+" "+daym+", //"+year+" //"+hours+":"+minutes+":"+seconds+"</b></font></small>"
if (document.all)
document.all.clock.innerHTML=cdate
else if (document.getElementById)
document.getElementById("clock").innerHTML=cdate
else
document.write(cdate)
}
if (!document.all&&!document.getElementById)
getthedate()
function goforit(){
if (document.all||document.getElementById)
setInterval("getthedate()",1000)
}



var swidth=927;

//scroller's height
var sheight=20;

//scroller's speed 
var sspeed=10;
var restart=sspeed;
var rspeed=sspeed;

//scroller's pause 
var spause=2000;

//scroller's background
var sbcolor="";

//messages: change to your own; use as many as you'd like; set up Hyperlinks to URLs as you normally do: <a target=... href="... URL ...">..message..</a>
var singletext=new Array();

//singletext[0]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="SCHEME-for-HOTEL.doc">SCHEME – 2007-08 (COMMERCIAL & HOTEL  PLOTS - I)</a></nobr>';
//singletext[1]='<nobr align="left" class=tabb><a notarget class=tabb href="plateform-draw-result-for-miscellgeneral.xls">Draw of Platform for MISC./GENERAL under Scheme 2004-05 held on 01-10-2007 </a></nobr>';
//singletext[2]='<nobr align="left" class=tabb><a notarget class=tabb href="pltaform-draw-result-FRUITS1.xls">Draw of Platform for Fruits/Vegetables works under Scheme 2004-05 held on 01-10-2007  </a></nobr>';
//singletext[3]='<nobr align="left" class=tabb><a notarget class=tabb href="pltaform-draw-result-for-barbar.xls">Draw of Platform for Barber under Scheme 2004-05 held on 01-10-2007  </a></nobr>';
//singletext[4]='<nobr align="left" class=tabb><a notarget class=tabb href="pltaform-draw-result-clothe.xls">Draw of Platform for Cloth/Readymade works under Scheme 2004-05 held on 01-10-2007  </a></nobr>';
//singletext[5]='<nobr align="left" class=tabb><a notarget class=tabb href="pltaform-draw-result-for-MEET-MURGA.xls">Draw of Platform for MEAT/MURGA works under Scheme 2004-05 held on 01-10-2007 </a></nobr>';
singletext[0]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="EOIofcovereddrainagesystem.doc">EOI Of Covered Drainage System</a></nobr>';
singletext[1]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="result_category(04).xls"><B>RESULT:</B> RESIDENTIAL PLOT SCHEME 2004(1)- FINAL LOTTERY DRAW RESULT PLOT CATEGORY-04 (450 SQ.MTR) HELD ON DATED: 5th NOVEMBER, 2008 </a></nobr>';

//singletext[1]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="http://site413.mysite4now.net/nkbssl/site1/noida_res/RES_WEB.aspx">KIND ATTENTION: RESIDENTIAL PLOT SCHEME 2004(1) LIST OF ELIGIBLE APPLICANTS FOR GEN. CATEGORY</a></nobr>';
singletext[2]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="res-current-scheme.html">KIND ATTENTION: RESIDENTIAL PLOT SCHEME 2004(1) LIST OF ELIGIBLE APPLICANTS UNDER COMMERCIAL / INSTITUTIONAL / INDUSTRIAL/ VILLAGERS / EMPLOYEES RESERVED CATEGORY FOR ALLOTMENT OF PLOT </a></nobr>';
singletext[3]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="PLOTFORSCH2004.xls">KIND ATTENTION: RESIDENTIAL PLOT SCHEME 2004(1) LIST OF AVAILABLE PLOTS</a></nobr>';

singletext[4]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="fog_march.pdf">FOGGING PROGRAM FOR THE MONTH OF MARCH-2009</a></nobr>';
singletext[5]='<nobr align="left" class=tabb><A HREF="antilarva.html" class=tabb TARGET="_blank">ANTI LARVA PROGRAM </A></nobr>';
singletext[6]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="SPORTS.jpg">SPORTS SCHEME FOR COMMERICAL</a></nobr>'
singletext[7]='<nobr align="left" class=tabb><a notarget class=tabb href="MASTER-LIST-OES-2008-091.xls">THOSE APPLICANTS WHO HAVE APPLIED AGAINST INDUSTRIAL PLOT SCHEME CODE NO NOIDA /IP/2008-09/OES/01 FROM 21/09/2008 TO 16/10/2008 AND ABSENTEES OF EARLIER INTERVIEW ARE REQUESTED TO BE PRESENT BEFORE SCREENING COMMETTEE AT AUHTORITIES BOARD ROOM,MAIN ADMINISTRATIVE BUILDING,SECTOR-6 ,NOIDA AS PER SCHEDULE </a></nobr>';
singletext[8]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="plant.html">PLANTATION PROGRAM W.E.F. FROM DATED 12-09-08 TO 15-10-08</a></nobr>';

// singletext[6]='<nobr align="left" class=tabb><a notarget class=tabb href="current-scheme.html">AREAWISE LIST OF AVAILABLE INDUSTRIAL PLOTS LARGER THAN2000 SQ. MTRS IN INDUSTRIAL AREA PHASE-II/III OF NOIDA SCHEME CODE: NOIDA/IP/2008-09/OES/(01)</a></nobr>';

singletext[9]='<nobr align="left" class=tabb><a notarget class=tabb href="current-scheme.html">APPLICATION FORM FOR ALLOTMENT OF INDUSTRIAL PLOTS LARGER THAN 2000 SQ. MTRS IN INDUSTRIAL AREA PHASE-II/III OF NOIDA SCHEME CODE: NOIDA/IP/2008-09/OES/(01)</a></nobr>';
//singletext[7]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="OES-II(08).xls">DATES OF INTERVIEW FOR INSTITUTIONAL PLOTS UNDER OES-II/08 </a></nobr>';
//singletext[4]='<nobr align="left" class=tabb><a notarget class=tabb href="http://www.noidaauthorityonline.com/current-scheme1.html">OBJECTION LIST OF INDUSTRIAL PLOTS UPTO 2000 SQ. MTRS IN INDUSTRIAL AREA PHASE-II/III OF NOIDA </a></nobr>';
singletext[10]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="commerScheme.jpg">New Commercial Scheme AREA 3414* Sq. Mt. Sector - 18 Noida</a></nobr>';
singletext[11]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="Institutional-Scheme3.pdf">OPEN ENDED SCHEME FOR INSTITUTIONAL PLOTS - III(Office Use) (2008-09)</a></nobr>';
//singletext[11]='<nobr align="left" class=tabb><a target="_blank" class=tabb href="AL1-07-08.xls">Allotment List of Institutional Plots 28-03-2008</a></nobr>';
singletext[12]='<nobr align="left" class=tabb><a target="_blank" notarget class=tabb href="selection.html">Seletion of Architect </a></nobr>';
singletext[13]='<nobr align="left" class=tabb><a notarget class=tabb href="Authorisedbank.doc">ON LINE AUTHORISED BANKS & ACCOUNT NUMBERS </a></nobr>';
//singletext[1]='<nobr align="left" class=tabb><a notarget class=tabb href="interviewnet.xls">THOSE APPLICANTS WHO HAVE APPLIED AGAINST INDUSTRIAL PLOT SCHEME CODE NO NOIDA/IP/2007-08/OES/01 UPTO 12-8-2007 ARE REQUESTED TO BE PRESENT BEFORE SCREENING COMMETTEE AT INDIRA GANDHI KALA KENDRA, SECTOR-6, NOIDA</a></nobr>';
singletext[14]='<nobr align="left" class=tabb><a notarget class=tabb href="LISTOFINTERNETGHP.pdf">LIST OF ALLOTED PLOTS OF GHP/SOCITIES</a></nobr>';
singletext[15]='<nobr align="left" class=tabb><a notarget class=tabb href="garage.pdf">Hon!ble High Court Judgement Regarding Use of Garage for parking vehicles And Conditions for Construction of  Buldings</a></nobr>';
singletext[16]='<nobr align="left" class=tabb><a notarget class=tabb href="builderdefalt.jpg">Beware Of Illegal Developers and Builders!!! </a></nobr>';
singletext[17]='<nobr align="left" class=tabb><a notarget class=tabb href="DEFAULTERLISTOFGHPASON.pdf">Defaulter List Of GHP/ Societies  </a></nobr>';




//singletext[...]='...';
//-- end Parameters and message -->

//-- begin: Scroller's Algorithm -->
var ii=0;var gekso=0;if(navigator.product&&navigator.product=="Gecko"){var agt = navigator.userAgent.toLowerCase();var rv
 = agt.indexOf('rv:');var rvEnd = agt.indexOf(')', rvStart);var check15 = agt.substring(rvStart+3, rvEnd);if(parseFloat(check15)<1.8) gekso=1;}var operbr=0; operbr=navigator.userAgent.toLowerCase().indexOf('opera');
function goup(){if(sspeed!=rspeed*16){sspeed=sspeed*2;restart=sspeed;}}
function godown(){if(sspeed>rspeed){sspeed=sspeed/2;restart=sspeed;}}
function start(){
	//document.write("hiiiiiii");
goforit()
if(document.getElementById){ns6div=document.getElementById('iens6div');if(operbr!=-1)operdiv=document.getElementById('operaslider');ns6div.style.left=swidth;ns6div.innerHTML=singletext[0];sizeup=ns6div.offsetWidth;if(operbr!=-1&&sizeup==swidth){operdiv.innerHTML=singletext[0];sizeup=operdiv.offsetWidth;}ns6scroll();}
else 
if(document.layers){ns4layer=document.ns4div.document.ns4div1;ns4layer.left=swidth;ns4layer.document.write(singletext[0]);ns4layer.document.close();sizeup=ns4layer.document.width;ns4scroll();}
else 
if(document.all){iediv=iens6div;iediv.style.pixelLeft=swidth;iediv.innerHTML=singletext[0];sizeup=iediv.offsetWidth;iescroll();}}
function iescroll(){if(iediv.style.pixelLeft>0&&iediv.style.pixelLeft<=sspeed){iediv.style.pixelLeft=0;setTimeout("iescroll()",spause);}else 
if(iediv.style.pixelLeft>=sizeup*-1){iediv.style.pixelLeft-=sspeed;setTimeout("iescroll()",100);}else{if(ii==singletext.length-1)ii=0;else ii++;iediv.style.pixelLeft=swidth;iediv.innerHTML=singletext[ii];sizeup=iediv.offsetWidth;iescroll();}}
function ns4scroll(){if(ns4layer.left>0&&ns4layer.left<=sspeed){ns4layer.left=0;setTimeout("ns4scroll()",spause);}else 
if(ns4layer.left>=sizeup*-1){ns4layer.left-=sspeed;setTimeout("ns4scroll()",100);}else{if(ii==singletext.length-1)ii=0;else ii++;ns4layer.left=swidth;ns4layer.document.write(singletext[ii]);ns4layer.document.close();sizeup=ns4layer.document.width;ns4scroll();}}
function ns6scroll(){if(parseInt(ns6div.style.left)>0&&parseInt(ns6div.style.left)<=sspeed){ns6div.style.left=0;setTimeout("ns6scroll()",spause);}else if(parseInt(ns6div.style.left)>=sizeup*-1){ns6div.style.left=parseInt(ns6div.style.left)-sspeed;setTimeout("ns6scroll()",100);}
else{if(ii==singletext.length-1)ii=0;else ii++;
ns6div.style.left=swidth;ns6div.innerHTML=singletext[ii];sizeup=ns6div.offsetWidth;if(operbr!=-1&&sizeup==swidth){operdiv.innerHTML=singletext[ii];sizeup=operdiv.offsetWidth;}ns6scroll();}}
//-- end Algorithm -->
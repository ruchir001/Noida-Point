/* (C) Copyright 2007 ZZEE. All rights reserved. http://www.zzee.com .
This file is a part of ZZEE DHTML Menu Free Version (Product).

You may use or display this file only according to the terms of the License
for the Product. Any other use or copying is prohibited.

You may not modify or alter this file. You may not remove
this copyright notice. 

Version 2.1.0 */
 ZZEEMenus.prototype.ieHack=function(){function ver(){var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(navigator.userAgent)){return parseFloat(RegExp.$1);}return 0;}var H=this,v=ver(),f=(v>=5.5);H.hackOnExp=function(e){if(f){nf(e);}};H.hackOnColl=function(e){if(f){df(e);}};function nf(e){var i=document.createElement('iframe');if(!i){return;}var u=e.ul;i.src=H.libPath+'iframe.html';i.style.position='absolute';i.style.width=u.offsetWidth;i.style.height=u.offsetHeight;i.style.left=u.style.left;i.style.top=u.style.top;i.style.zIndex=parseInt(H.getStyle(u,'zIndex'),10)-1;i.style.backgroundColor="#ffffff";i.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";i.style.display="block";if(!e.par().ul.appendChild(i)){return;}e.hack=i;}function df(e){if(e.hack){e.par().ul.removeChild(e.hack);e.hack=0;}}};
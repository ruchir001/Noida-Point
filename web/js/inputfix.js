function getEvent(e){
  if(window.event != null) {
    return event;
  }
  return e;
}
function setBKColor(e){
 e = getEvent(e);
 var src =  e.srcElement || e.target;
 //window.status="t";
 if(src != null) {
   src.className+=" sffocus";
 }
}
function reSetBKColor(e){
 e = getEvent(e);
 var src =  e.srcElement || e.target;
 if(src != null) {
   src.className = src.className.replace(new RegExp(" sffocus\\b"), "");
 }
}
function attachEvent(name,element,callBack) {
    /*if (element.addEventListener) {
      element.addEventListener(name, callBack,false);
    } else*/ if (element.attachEvent) {
      element.attachEvent('on' + name, callBack);
    }
  }

function setListner(eve,func) {
   var ele = document.getElementsByTagName("INPUT");
   for(var i = 0; i <ele.length;i++) {
    element = ele[i];
    if (element.type) {
      switch (element.type) {
        case 'checkbox':
        case 'radio':
        case 'password':
        case 'text':
        case 'textarea':
        case 'select-one':
        case 'select-multiple':
           attachEvent(eve,element,func);
       }
     }
  }
}
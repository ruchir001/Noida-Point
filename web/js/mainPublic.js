	function isNull(obj, msg)
	{
		if(obj.value.replace(/^\s+|\s+$/g,"") == "")
		{
			alert(msg);
			obj.focus();
			return false;
		}
		else
		{
			return true;
		}
	}
	function isMRP(keyCode)
	{
	
		if(keyCode == 35)return true;
		if(keyCode == 36)return true;
		if(keyCode == 37)return true;
		if(keyCode == 39) return true; 
		if(keyCode == 46) return true; 
		if(keyCode == 190) return true; 
		if(keyCode == 110) return true; 
		
		if(keyCode == 109) return false; 
		
		if(keyCode == 189) return false; 
		
		if(keyCode == 9) return true; 
		if(keyCode == 8) return true;
		if(keyCode > 95 && keyCode < 106) return true; 
		if(keyCode < 48 || keyCode > 57) return false;	
		
	}
	function isdouble(keyCode)
	{		
		if(keyCode == 35)return true;
		if(keyCode == 36)return true;
		if(keyCode == 37)return true;
		if(keyCode == 39) return true; 
		if(keyCode == 46) return true; 
		if(keyCode == 190) return true; 
		if(keyCode == 110) return true; 
		
		if(keyCode == 109) return false; 
		
		if(keyCode == 189) return false; 
		
		if(keyCode == 9) return true; 
		if(keyCode == 8) return true;
		if(keyCode > 95 && keyCode < 106) return true; 
		if(keyCode < 48 || keyCode > 57) return false;	
	}
	function isnum(keyCode)
	{		
		if(keyCode == 35)return true;
		if(keyCode == 36)return true;
		if(keyCode == 37)return true;
		if(keyCode == 39) return true; 
		if(keyCode == 46) return true; 
		if(keyCode == 190) return true; 
		if(keyCode == 110) return true; 
		
		if(keyCode == 109) return false; 
		
		if(keyCode == 189) return false; 
		
		if(keyCode == 9) return true; 
		if(keyCode == 8) return true;
		if(keyCode > 95 && keyCode < 106) return true; 
		if(keyCode < 48 || keyCode > 57) return false;	
	}
	function isdigit(keyCode)
	{		
		if(keyCode == 35)return true;
		if(keyCode == 36)return true;
		if(keyCode == 37)return true;
		if(keyCode == 39) return true; 
		if(keyCode == 46) return true; 
		if(keyCode == 109) return false; 
		if(keyCode == 110) return false; 
		if(keyCode == 189) return false; 
		if(keyCode == 9) return true; 
		if(keyCode == 8) return true;
		if(keyCode > 95 && keyCode < 106) return true; 
		if(keyCode < 48 || keyCode > 57) return false;	
	}
	function IsEmail(string, obj, msgstr)
	{
		if(string.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
			return true;
		else
		{
			alert(msgstr);
			obj.focus();
			return false;
		}
	}
	function IsNumeric(strString)
	{
		var strValidChars = "0123456789";
		var strChar;
		var blnResult = true;
		
		if (strString.length == 0) return true;
		
		//  test strString consists of valid characters listed above
		for (i = 0; i < strString.length && blnResult == true; i++)
		{
			strChar = strString.charAt(i);
			if (strValidChars.indexOf(strChar) == -1)
			{
				blnResult = false;
			}
		}
		return blnResult;
	}
	function isDelete(msg)
	{
		var tf;
		tf = confirm(msg);
		
		if(tf == true)
			return true;
		else
			return false;
	}
	
	function IsValidFile(strVal, filetype)
	{
		var arrName = strVal.split("/");
		if(arrName.length < 1)
		{
			
			alert("Please Select Valid File...");
			return false;
		}
		else
		{
			var arrExt = arrName[arrName.length -1].split(".");
			
			if(arrExt.length < 2)
			{
				alert("Please Select Valid File...");
				return false;
			}
			else
			{
				var strExt = arrExt[arrExt.length -1].toLowerCase();
				
				if(filetype == "image")
				{
					
					if(strExt == "jpg" || strExt == "jpeg" || strExt == "png" || strExt == "gif")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid Image...");
						return false;
					}
				}
				else if(filetype =="zipimages")
				{
					
					if(strExt == "zip" || strExt == "jpg" || strExt == "jpeg" || strExt == "png" || strExt == "gif")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid File...");
						return false;
					}
				}
				else if(filetype == "audio")
				{
					if(strExt == "mp3" || strExt == "wav" || strExt == "rm" || strExt == "wma")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid Audio...");
						return false;
					}
				}
				else if(filetype == "video")
				{
					if(strExt == "dat" || strExt == "mpeg" || strExt == "mpg" || strExt == "avi" || strExt == "wmv")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid Video...");
						return false;
					}
				}
				else if(filetype == "flash")
				{
					if(strExt == "swf")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid Flash...");
						return false;
					}
				}
				else if(filetype == "banner")
				{
					if(strExt == "swf" || strExt == "jpg" || strExt == "jpeg" || strExt == "png" || strExt == "gif")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid Banner...");
						return false;
					}
				}
			}
		}
	}
	
	function checkdate(sday,smon,syear,eday,emon,eyear)
	{
		if(parseInt(syear) <= parseInt(eyear))
		{ 
			if(parseInt(syear) < parseInt(eyear))
			{
				return true;
			}
			else
			{
				  if(parseInt(smon) <= parseInt(emon))
				  {
					  if(parseInt(smon) < parseInt(emon))
					  {
						  return true;
					  }
					  else
					  {
							if(parseInt(sday) <= parseInt(eday))
							{ 
							return true;
							}
					  }
				  }
			}
		 }
		return false;
	}
	
	function Ajax(url,method,eleid) 
	{
		
		var xmlhttp = false;
	  if (window.XMLHttpRequest)
	  {
		xmlhttp = new XMLHttpRequest();
	  }
	  else if (window.ActiveXObject)// code for IE
	  {
		try
		{
		  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
		  try
		  {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		  } catch (E) {
			xmlhttp=false;
		  }
		}
	  }
	  if(xmlhttp)
	  {
		  xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp && xmlhttp.readyState==4)
			{
				if (xmlhttp.status==200)
				{
					document.getElementById(eleid).innerHTML = "";					
					document.getElementById(eleid).innerHTML = xmlhttp.responseText;
					callBackFunction(eleid);
					
				}
				else
				{
				}
			}
			else
			{
			//alert(xmlhttp.readyState);
			}
		}
		
		  xmlhttp.open(method,url,true);
		  xmlhttp.send(null);
	  }
	  else
	  {
	  alert("Unable to creat Ajax Object for this browser");
	  }
	}
	
var gErrors = 0;
function validate(frmname,id)
{
var tables; 
document.getElementById(id).focus();
tables = document.getElementsByTagName('span');

	for (i=0; i<tables.length; i++)//loop through all the <td> elements 
	{
		// if the class name of that td element is rules check to see if there are error warnings
		if (tables[i].className == "rules")
		{
			//if there is a thank you or its blank then it passes
			if (tables[i].innerHTML.replace(/^\s+|\s+$/g,"") == 'Thank You' || tables[i].innerHTML.replace(/^\s+|\s+$/g,"") == '' )
			{
				tables[i].style.color = '#ff0000';//the color is changed to black or stays black
			}
			else
			{
				gErrors = gErrors + 1; //the error count increases by 1
				tables[i].style.color = '#ff0000';//error messages are changed to red
			}
		}
	}
		
	if (gErrors > 0)
	{
		//if there are any errors give a message
		alert ("Please make sure all fields are properly completed.  Errors are marked in red!");
		gErrors = 0;// reset errors to 0
		return false;
	}
	else
	{
		document.forms[frmname].submit();
	}// return true;

}
function validateRequired(eleid,msgid)
{
	if(document.getElementById(eleid).value.replace(/^\s+|\s+$/g,"") == "")
	{
		document.getElementById(msgid).innerHTML = "Required";
		return false;
	}
	else
	{
		if(document.getElementById(msgid).innerHTML.replace(/^\s+|\s+$/g,"")=="Already Exists")
		{
			return false;
		}
		else
		{
			document.getElementById(msgid).innerHTML = "";
			return true;
		}
	}
}

function validateRequiredCombo(eleid,msgid)
{

	if(document.getElementById(eleid).value.replace(/^\s+|\s+$/g,"") == "0")
	{
		document.getElementById(msgid).innerHTML = "Required";
		return false;
	}
	else
	{
		document.getElementById(msgid).innerHTML = "";
		return true;
	}
}
function validateRequiredMultiple(eleid,msgid)
{
	if(document.getElementById(eleid).value.replace(/^\s+|\s+$/g,"") == "")
	{
		document.getElementById(msgid).innerHTML = "Required";
		return false;
	}
	else
	{
		document.getElementById(msgid).innerHTML = "";
		return true;
	}
}

function callajax(url,eleid)
{
	obj = new Ajax(url,'get',eleid);
}
function IsValidMedia(strVal, filetype)
	{
		var arrName = strVal.split("/");
		if(arrName.length < 1)
		{
			
			alert("Please Select Valid File...");
			return false;
		}
		else
		{
			var arrExt = arrName[arrName.length -1].split(".");
			
			if(arrExt.length < 2)
			{
				alert("Please Select Valid File...");
				return false;
			}
			else
			{
				var strExt = arrExt[arrExt.length -1].toLowerCase();
				
				if(filetype == "audio")
				{
					if(strExt == "mp3")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid Audio...");
						return false;
					}
				}
				else if(filetype == "video")
				{
					if(strExt == "flv")
					{
						return true;
					}
					else
					{
						alert("Please Select Valid Video...");
						return false;
					}
				}
			}
		}
	}
	var i = 0;
	function addElement() {
var ni = document.getElementById('Option');
var numi = document.getElementById('txtoptionname');
//var num = (document.getElementById('txtoptionname').value -1 + 2);
var num = (i - 1 + 2);
//numi.value = num;
var newdiv = document.createElement('div');

var divIdName = 'Option'+num;
newdiv.setAttribute('id',divIdName);
newdiv.setAttribute('class','option_view');
newdiv.innerHTML = '<input type=text id=txtoptionname name=txtoptionname[]>&nbsp;<a href="javascript:remove('+divIdName+')">Remove</a>';
ni.appendChild(newdiv);
i++;
}


function remove(dId) {
var ni = document.getElementById('Option');
ni.removeChild(dId);
}

var k = 0;
function addImage() {
var si = document.getElementById('Image');
var snumi = document.getElementById('txtimage');
//var num = (document.getElementById('txtoptionname').value -1 + 2);
var snum = (k - 1 + 2);
//numi.value = num;
var newdivision = document.createElement('div');

var divIdNames = 'Image'+snum;
newdivision.setAttribute('id',divIdNames);
newdivision.setAttribute('class','option_view');
newdivision.innerHTML = '<input type=file id=txtimage name=txtimage[]>&nbsp;<a href="javascript:removeImage('+divIdNames+')">Remove</a>';
si.appendChild(newdivision);
k++;
}


function removeImage(sdId) {
var si = document.getElementById('Image');
si.removeChild(sdId);
}

function getCookie(name) 
{
	var namePattern = name + "="
	var cookies = document.cookie.split(';')
	for(var i = 0, n = cookies.length; i < n; i++) 
	{
		var c = cookies[i]
		while (c.charAt(0) == ' ') c = c.substring(1, c.length)
		if (c.indexOf(namePattern) == 0)
		return c.substring(namePattern.length, c.length)
	}
	return null
}
function eraseCookie(name) 
{
	createCookie(name, "", -1)
}
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


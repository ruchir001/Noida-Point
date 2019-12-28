

<HTML><HEAD><TITLE>Noida Point</TITLE>
<META http-equiv=Content-Type content="text/html; charset=windows-1252">
<LINK href="css/leftmenu.css" type=text/css rel=stylesheet>
<LINK href="css/style.css" type=text/css rel=stylesheet>
<LINK href="css/topmenu.css" type=text/css rel=stylesheet>
<LINK href="css/ajax-tooltip.css" type=text/css rel=stylesheet>
<LINK href="images/style.css" type=text/css rel=stylesheet>
<SCRIPT language=javascript src="js/date.js" type=text/javascript></SCRIPT>
<SCRIPT language=javascript src="js/mainPublic.js" type=text/javascript></SCRIPT>
<SCRIPT language=javascript src="js/index.js" type=text/javascript></SCRIPT>
<SCRIPT language=javascript src="js/leftmenu.js" type=text/javascript></SCRIPT>
<SCRIPT language=javascript src="js/datetimepicker.js" type=text/javascript></SCRIPT>
<SCRIPT language=javascript src="js/inputfix.js" type=text/javascript></SCRIPT>
<SCRIPT language=javascript src="js/shortcut.js" type=text/javascript></SCRIPT>
<SCRIPT language=javascript src="js/popcalendar.js"></SCRIPT>
<SCRIPT language=javascript type=text/javascript>

	function showHideMenu()
	{
		var menu = document.getElementById('divleftmenu'); 
		var img = document.getElementById('imgShowHide');
		var tdleft = document.getElementById('tdleftmenu'); ;

		var cookie = getCookie("leftmenu");	
		if(cookie == 'none') 
		{
			img.src = "images/menu_hide.jpg";
			tdleft.style.width = 150;
			menu.style.display = 'block';
			document.cookie = "leftmenu=block";
		}
		else 
		{
			img.src = "images/menu_show.jpg";
			tdleft.style.width = 0;
			menu.style.display = 'none';
			document.cookie = "leftmenu=none";
		}
	}
	
	var getHeight = screen.height - 252;
	
</SCRIPT>

<style type="text/css">
.options{display: none;}
</style>
<script language="javascript" type="text/javascript" src="js/datetimepicker.js"></script>
<script language="javascript" type="text/javascript" src="js/inputfix.js"></script>
<script language="javascript" type="text/javascript" src="js/shortcut.js"></script>

<link rel="stylesheet" type="text/css" href="css/sample.css"><!--<script type="text/javascript" src="includes/jscript/popup-window.js"></script>-->

<link rel="stylesheet" href="css/demo.htm" type="text/css">

<link rel="stylesheet" href="css/modal-message.css" type="text/css">

<link rel="stylesheet" href="css/scroll.css" type="text/css">
<link rel="stylesheet" href="includes/css/autosuggest_inquisitor.css" type="text/css" media="screen" charset="utf-8" />

<style type="text/css">
input.b {
    width: 300px;
}
</style></head><body>
<div id="dhtmltooltip"></div>
	<table class="table_main" cellspacing="0">
	  <tbody><tr>
	    <td>	

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tbody><tr>
    <td colspan="2">
    <%@ page import="np.helper.RequestMapper, np.dto.Login" buffer="20kb"%>
    	<%
    	System.out.println("default buffer size:"+response.getBufferSize());
    	Login log=(Login) session.getAttribute("login");
    	if (log !=null && log.getRole().equals("admin") )
    	{
    	%>
    	<jsp:include page="jspPages/adminHeader.jsp"/>
    	<%
    	}else
    	{
    	%>
				<jsp:include page="jspPages/header.jsp"/>
		<%} %>
	</td>  </tr>
	  <tr>
      	<td valign="top">
			<jsp:include page="jspPages/left.jsp"/>
        	 <td id="tdMain" style="padding-top: 5px;" valign="top" width="100%">
		
				 
        	 
        	 

<%! String resource;
    RequestMapper publicResource,protectedResource; 
%>
        	 
		
			<% 
			if (publicResource==null)
			{
			protectedResource=new RequestMapper();
			String path1=application.getRealPath("Web-INF/classes/np/resources/protectedResources.properties");
        	protectedResource.load(path1);
        	publicResource=new RequestMapper();
			String path2=application.getRealPath("Web-INF/classes/np/resources/publicResources.properties");
        	publicResource.load(path2);
        	
			}
			String key=request.getParameter("p");
			System.out.println(key);
			if (key !=null)
			{
			resource=protectedResource.getResource(key);
			System.out.println("protected:"+resource);
			Login l=(Login) session.getAttribute("login");
			if (resource !=null && l==null)
			{
			request.setAttribute("msg","You need to login to use this feature.");

 			%>
			<jsp:include page="jspPages/msg.jsp"/> 	
			<%
			}
			else 
			{
			if (resource==null)
			resource=publicResource.getResource(key);
			System.out.println("public resource:"+resource);
			%>                  
     		<jsp:include page="<%=resource%>"/>
			<%
			}
			}
			else
			{
			%>
			
			<jsp:include page="includes/home.html"/>
			<%
			}
			%>	
		</td>
      			</tr>
      		</tbody></table>
      	</td>                  
	  </tr>
	  
	</tbody></table>
             </TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE></FORM>
                  
</body></html>
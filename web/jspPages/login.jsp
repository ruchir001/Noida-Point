<%@ page import="np.dao.UserDao,np.dto.Login" %>
<%
UserDao udao=new UserDao();
String name=request.getParameter("name");
String pass=request.getParameter("password");
Login l=udao.findUser(name,pass);
if (l != null)
{
session.setAttribute("login",l);
if (l.getRole().equals("user"))
{
request.setAttribute("msg","Welcome, "+l.getName());
%>
<jsp:include page="msg.jsp"/>
<%
}
else
{
System.out.println("forwarding...");
request.setAttribute("msg","Welcome, Admin");
%>
<jsp:forward page="../index.jsp?p=msg"/>
<%
}

}else
{
out.println("Invalid userName or Password!");
%>
<jsp:include page="../includes/login.html" />
<%

}
%>

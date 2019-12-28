<%
session.invalidate();

request.setAttribute("msg","You are successfully logged out");

%>
<jsp:forward page="../index.jsp?p=msg"/>



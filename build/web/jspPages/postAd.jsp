<jsp:useBean id="cDao" class="np.dao.ClassifiedDao" scope="application" />
<jsp:useBean id="ad1" class="np.dto.Classified" />
<%@ page import="np.dto.Login" %>
<%
String address=request.getParameter("address");
String postDate=request.getParameter("postDate");
String available=request.getParameter("available");
System.out.println("111112");
ad1.setAddress(address);
ad1.setPostDate(postDate);
ad1.setAvailable(available);
Login login=(Login) session.getAttribute("login");
System.out.println("111113");
ad1.setUserId(login.getUserId());
cDao.insertClassified(ad1);
System.out.println("111114");
request.setAttribute("msg","Classified successfully posted.");
%>
<jsp:include page="msg.jsp"/>

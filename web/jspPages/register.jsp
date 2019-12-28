<jsp:useBean id="uDao" class="np.dao.UserDao" scope="application" />
<jsp:useBean id="user" class="np.dto.User" />

<%
String name=request.getParameter("name");
String pass=request.getParameter("password");
String mailId=request.getParameter("mailId");
String contactNo=request.getParameter("contactNo");
String jdate=request.getParameter("joiningDate");
user.setName(name);
user.setPassword(pass);
user.setMailId(mailId);
user.setContactNo(contactNo);
user.setJoiningDate(jdate);
uDao.insertUser(user);
request.setAttribute("msg","Registration successfully completed.");
%>
<jsp:include page="msg.jsp"/>

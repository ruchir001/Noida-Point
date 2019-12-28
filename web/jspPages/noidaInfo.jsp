<%@ page import="np.dto.Category, np.dto.Info,java.util.*" %>
<jsp:useBean id="caDao" class="np.dao.CategoryDao" scope="application" />

<%

String catId=request.getParameter("category");
if (catId ==null)
{
ArrayList list=caDao.findAllCategories();
Iterator itr=list.iterator();
%>
<TABLE class=table_page cellSpacing=0 align=center>
                    <TBODY>
                    <TR>
                      <TD width=599>&nbsp; </TD></TR>
                    <TR class=textlarge_dark>
                      <TD>Post Information</TD></TR>
                    <TR>
                      <TD>&nbsp;</TD></TR>
                    <TR>
                      <TD>
<form action="index.jsp?p=postInfo" method="post">
<br><br>
<table  class=table_view cellSpacing=0>
<TBODY>
<TR class=table_head>
<TD colSpan=2>Information</TD></TR>
<tr>
<td><b>Category</b></td>

<td> <SELECT name="category"> 
<%
while (itr.hasNext())
{
Category cat=(Category) itr.next();
out.print("<OPTION value="+cat.getCategory_id()+">"+cat.getName() +"</OPTION>");
}
%>

</SELECT> </td>
</tr>
<tr>
<td><b>Description</b></td>
<td><input type="text" size="20" name="description"></td>
</tr>
<tr>
<td><b>Address</b></td>
<td><input type="text" size="20" name="address"></td>
</tr>
<tr>
<td><b>contact No.</b></td>
<td><input type="text" size="20" name="contactNo"></td>
</tr>
</table>
</td>
</tr>

<TR>

<TD>&nbsp;<INPUT type="submit" value="Submit">&nbsp;
<INPUT type="reset" value="Cancel"></TD></TR>
</table>
</form></TD></TR></TBODY></TABLE>
<%
}
else
{
String des=request.getParameter("description");
String address=request.getParameter("address");
String contactNo=request.getParameter("contactNo");
Info info=new Info();
info.setCategory_id(Integer.parseInt(catId));
info.setDescription(des);
info.setAddress(address);
info.setContactNo(contactNo);
caDao.insertInfo(info);
request.setAttribute("msg","Information successfully saved.");
%>
<jsp:include page="msg.jsp"/>
<%
}
%>
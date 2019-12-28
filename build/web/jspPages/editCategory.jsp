<jsp:useBean id="caDao" class="np.dao.CategoryDao" scope="application" />
<jsp:useBean id="cat" class="np.dto.Category" />

<%
String ids=request.getParameter("catId");
System.out.println("111111");
cat=caDao.searchCategoryId(Integer.parseInt(ids));
%>
<TABLE class=table_page cellSpacing=0 align=center>
                    <TBODY>
                    <TR>
                      <TD width=599>&nbsp; </TD></TR>
                    <TR class=textlarge_dark>
                      <TD>Edit Category</TD></TR>
                    <TR>
                      <TD>&nbsp;</TD></TR>
                    <TR>
                      <TD>
<form action="index.jsp?p=addCategory&edit=edit&ids=<%=Integer.parseInt(ids)%>" method="post">
<br><br>
<table  class=table_view cellSpacing=0>
<TBODY>
<TR class=table_head>
<TD colSpan=2>Category Details</TD></TR>
<tr>
<td><b>Name</b></td>
<td><input type="text" size="20" name="name" value="<%= cat.getName()%>"> </td>
</tr>
</table>
</td>
</tr>

<TR>

<TD>&nbsp;<INPUT type="submit" value="Submit">&nbsp;
<INPUT type="reset" value="Cancel"></TD></TR>
</table>
<P></P><P> </P></form></TD></TR></TBODY></TABLE>

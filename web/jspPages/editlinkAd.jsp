<jsp:useBean id="lDao" class="np.dao.LinkDao" scope="application" />
<jsp:useBean id="lk" class="np.dto.Link" />

<%
String ids=request.getParameter("ids");
//lk.setSiteLink(SITELINK);
//lk.setSiteName(SITENAME);
lk=lDao.searchLink(Integer.parseInt(ids));
%>
<TABLE class=table_page cellSpacing=0 align=center>
                    <TBODY>
                    <TR>
                      <TD width=599>&nbsp; </TD></TR>
                    <TR class=textlarge_dark>
                      <TD>Post a new SiteLink</TD></TR>
                    <TR>
                      <TD>&nbsp;</TD></TR>
                    <TR>
                      <TD>
<form action="index.jsp?p=linkAd&edit=edit&ids=<%=lk.getLinkID()%>" method="post">
<br><br>
<table  class=table_view cellSpacing=0>
<TBODY>
<TR class=table_head>
<TD colSpan=2>Edit Site Link Information</TD></TR>
<tr>
<td><b>SITENAME</b></td>
<td><input type="text" size="20" name="SITENAME" value="<%=lk.getSiteName()%>"></td>
</tr>
<td><b>SITELINK</b></td>
<td><input type="text" size="20" name="SITELINK" value="<%=lk.getSiteLink()%>"></td>
</tr>
</table>
</td>
</tr>
<TR>
<TD>&nbsp;<INPUT type="submit" value="Submit">&nbsp;
<INPUT type="reset" value="Cancel"></TD></TR>
</table>
<P></P><P> </P></form></TD></TR></TBODY></TABLE>



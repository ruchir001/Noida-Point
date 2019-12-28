<jsp:useBean id="lDao" class="np.dao.LinkDao" scope="application" />
<jsp:useBean id="lk" class="np.dto.Link" />

<%
String edit=request.getParameter("edit");
String ids=request.getParameter("ids");
if(edit!=null && edit.equals("edit"))
{
System.out.println("Edit link"+ids);
String SITENAME=request.getParameter("SITENAME");
String SITELINK=request.getParameter("SITELINK");
lk.setLinkID(Integer.parseInt(ids));
lk.setSiteLink(SITELINK);
lk.setSiteName(SITENAME);
lDao.updateLink(lk);
System.out.println("111114");
request.setAttribute("msg","Site Link successfully Edit.");
}
else if(edit!=null && edit.equals("delete"))
{
System.out.println("Edit link");
lDao.deleteLink(Integer.parseInt(ids));
System.out.println("111114");
request.setAttribute("msg","Site Link successfully Delete.");
}
else
{
String SITENAME=request.getParameter("SITENAME");
String SITELINK=request.getParameter("SITELINK");
System.out.println("111112");
lk.setSiteLink(SITELINK);
lk.setSiteName(SITENAME);
lDao.insertLink(lk);
System.out.println("111114");
request.setAttribute("msg","Site Link successfully posted.");
}
%>
<jsp:include page="msg.jsp"/>

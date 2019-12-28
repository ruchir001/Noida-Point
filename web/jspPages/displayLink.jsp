<%@ page import="np.pagination.*" %>
<jsp:useBean id="lDao" class="np.dao.LinkDao" scope="application" />
<%!
Paginate p;
%>
<%
String pg=request.getParameter("page");
System.out.println(lDao.getClass().getName()+"page==="+pg);
if(pg==null)
{
String lastCategory=(String)session.getAttribute("category");
String category=request.getParameter("category");

if(lastCategory !=null &&  category!=null && category.equals(lastCategory))
{
System.out.println("obtaining paginate from session");
p=(Paginate) session.getAttribute("paginate");
}
else
{
System.out.println("not found, creating...");
PaginateLink.setDao(lDao);
p=PaginateLink.getPaginate();
if(p!=null)
{
p.setPreviousUrl("index.jsp?p=viewLinks&page=previous");
p.setNextUrl("index.jsp?p=viewLinks&page=next");
session.setAttribute("category",category);
session.setAttribute("paginate",p);
}
else
out.println("Please set data into DataBase Post View not found");
}
}
else if(pg.equals("previous"))
{
System.out.println("setting previous");
p.setPrevious();
}
if(p!=null)
{
System.out.println("displaying page.");
p.setOut(out);
p.displayPage();
System.out.println("page displayed.");
}
%>
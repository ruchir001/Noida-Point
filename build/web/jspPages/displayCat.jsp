<%@ page import="np.pagination.*" %>
<%@ page import="np.dao.CategoryDao" %>
<jsp:useBean id="caDao" class="np.dao.CategoryDao" scope="application" />
<%!
Paginate p;
%>
<%
String pg=request.getParameter("page");
System.out.println(caDao.getClass().getName()+"page==="+pg);
if (pg==null)
{
String lastCategory=(String)session.getAttribute("category");
String category=request.getParameter("category");

if (lastCategory !=null && category!=null && category.equals(lastCategory))
{
System.out.println("obtaining paginate from session");
p=(Paginate) session.getAttribute("paginate");
}
else
{
System.out.println("not found, creating...");

PaginateCategory.setDao(caDao);
p=PaginateCategory.getPaginate();
p.setPreviousUrl("index.jsp?p=viewCat&page=previous");
p.setNextUrl("index.jsp?p=viewCat&page=next");
session.setAttribute("category",category);
session.setAttribute("paginate",p);
}
}
else if(pg.equals("previous"))
{
System.out.println("setting previous");
p.setPrevious();
}
System.out.println("displaying page.");
p.setOut(out);
p.displayPage();
System.out.println("page displayed.");
%>
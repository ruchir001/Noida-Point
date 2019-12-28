<%@ page import="np.pagination.*" %>
<jsp:useBean id="cDao" class="np.dao.ClassifiedDao" scope="application" />
<%!
Paginate p;
%>
<%
String pg=request.getParameter("page1");
System.out.println("page===");
if (pg==null)
{
System.out.println("page=== null");
String lastCategory=(String)session.getAttribute("category");
System.out.println("page=== 1111");
String category=request.getParameter("category");
System.out.println("page=== 1111222");
if(lastCategory !=null && category!=null && category.equals(lastCategory))
{
System.out.println("page=== 11113333");
System.out.println("obtaining paginate from session");
p=(Paginate) session.getAttribute("paginate");
}
else
{
System.out.println("page=== 11114444");
System.out.println("not found, creating...");
PaginateClassified.setDao(cDao);
p=PaginateClassified.getPaginate();
if(p!=null)
{
p.setPreviousUrl("index.jsp?p=viewAds&page1=previous");
p.setNextUrl("index.jsp?p=viewAds&page1=next");
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
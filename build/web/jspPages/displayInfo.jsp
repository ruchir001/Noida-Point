<%@ page import="np.pagination.*" %>
<jsp:useBean id="caDao" class="np.dao.CategoryDao" scope="application" />
<%!
Paginate p;
%>
<%

String pg=request.getParameter("page");
String category=request.getParameter("category");
System.out.println("category=="+category);
if (pg==null)
{
String lastCategory=(String)session.getAttribute("category");
category=request.getParameter("category");
if(lastCategory !=null && category!=null && category.equals(lastCategory))
{
System.out.println("obtaining paginate from session");
p=(Paginate) session.getAttribute("paginate");
}
else
{
System.out.println("not found, creating...");
PaginateManager.setDao(caDao);
p=PaginateManager.getPaginate(category);
if(p!=null)
{
p.setPreviousUrl("index.jsp?p=noidaInfo&page=previous");
p.setNextUrl("index.jsp?p=noidaInfo&page=next");
session.setAttribute("category",category);
session.setAttribute("paginate",p);
}
else
out.println("Please set data into DataBase Category not found");
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
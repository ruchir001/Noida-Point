<jsp:useBean id="caDao" class="np.dao.CategoryDao" scope="application" />
<jsp:useBean id="cat" class="np.dto.Category" />

<%
String edit=request.getParameter("edit");
if(edit!=null && edit.equals("edit"))
{
System.out.println("Edit11111111");
String name=request.getParameter("name");
String ids=request.getParameter("ids");
cat.setCategory_id(Integer.parseInt(ids));
cat.setName(name);
caDao.updateCategory(cat);
request.setAttribute("msg","Category successfully Edit.");
}
else if(edit!=null && edit.equals("delete"))
{
System.out.println("Delete11111111");
//String name=request.getParameter("name");
String ids=request.getParameter("ids");
cat.setCategory_id(Integer.parseInt(ids));

//cat.setName(name);
caDao.deleteCategory(cat);
request.setAttribute("msg","Category successfully Delete.");
}
else
{
System.out.println("ADD 11111111");
String name=request.getParameter("name");
cat.setName(name);
System.out.println("111111");
caDao.insertCategory(cat);
request.setAttribute("msg","Category successfully added.");
}
%>
<jsp:include page="msg.jsp"/>

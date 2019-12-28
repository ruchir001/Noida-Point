package np.pagination;

import javax.servlet.jsp.JspWriter;

public class Paginate {
private String[][] data;
private MetaData metaData;
private JspWriter out;
private String nextUrl,previousUrl;

public Paginate(String header[],String[][]data,int rowPerPage,String caption)
{
metaData=new MetaData(header,rowPerPage,caption);
this.data=data;	
metaData.setTotalRows(data.length);
}

public void setOut(JspWriter out) {
	this.out = out;
}
public boolean isNextPage()
{
	int d=metaData.getTotalRows()-metaData.getNextRow();
if (d>0)	
	return true;
else
	return false;
}
public boolean isPreviousPage()
{
	
if (metaData.getPreviousRow()>0)	
	return true;
else
	return false;
}

public void setPrevious()
{
int p=	metaData.getPreviousRow();
int rp=metaData.getRowPerPage();
metaData.setNextRow(p-rp)	;
p = p- 2 * rp;
metaData.setPreviousRow(p);
}
public String getNextUrl() {
	return nextUrl;
}

public void setNextUrl(String nextUrl) {
	this.nextUrl = nextUrl;
}

public String getPreviousUrl() {
	return previousUrl;
}

public void setPreviousUrl(String previousUrl) {
	this.previousUrl = previousUrl;
}

public void displayPage()
{
displayHeader();
displayData();
displayLinks();
}
private void displayHeader()
{
	try{
out.print("<TABLE class=table_page cellSpacing=0 align=center><TBODY><TR><TD width=599>&nbsp; </TD></TR><TR class=textlarge_dark>");
out.println("<TD>"+metaData.getCaption()+"</TD></TR>");
out.println("<TR><TD>&nbsp;</TD></TR><TR><TD><br><br><table  class=table_view cellSpacing=0><TBODY>");
out.println("<TR class=table_head>");
int c=metaData.getFieldCount();
for (int i=0;i<c;i++)
{
out.println("<TD colSpan=2>");
out.println(metaData.getFieldName(i));
out.println("</TD>");
}
out.println("</TR>");

	}catch(Exception e)
	{
		System.out.println(e);
	}
}
private void displayData()
{
try{
int r=metaData.getNextRow();
System.out.println("Current row count "+r);
int p=metaData.getRowPerPage();
System.out.println("row per page "+p);

int t=metaData.getTotalRows();
System.out.println("total rows "+t);

int rowCount=((r+p)<t)?p:(t-r);
System.out.println("row to be displayed in this pages "+rowCount);

int columnCount=metaData.getFieldCount();
for (int i=0;i<rowCount;i++,r++)
{
out.println("<tr>")	;
for (int c=0;c<columnCount;c++)
{
	out.println("<TD colSpan=2>");
	out.println(data[r][c]);
	out.println("</TD>");

}
out.print("</tr>");
}
out.println("</table><P></P><P> </P></form></TD></TR></TBODY></TABLE>");
metaData.setPreviousRow(metaData.getNextRow());
metaData.setNextRow(r);	
}catch(Exception e)
{
	System.out.println(e);
}
}
private void displayLinks()
{
try
{
	out.println("<table><tr>");	
	if (isPreviousPage())
	{
	
	out.println("<td><a href="+getPreviousUrl()+"> previous</a></td>");
	}
	if (isNextPage())
	{
	out.println("<td><a href="+getNextUrl()+">next</a></td>");
	}
	out.println("</table>");
}catch(Exception e)
{
System.out.println(e);	
}
}
}

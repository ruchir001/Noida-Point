package np.pagination;


public class MetaData {
private int fieldCount,rowPerPage,totalRows,nextRow,previousRow;
private String[] fieldNames;
private String caption;

public MetaData(String [] header,int rowPerPage,String caption)
{
	fieldCount=header.length;
	fieldNames=header;
	this.rowPerPage=rowPerPage;
	this.caption=caption;
}
public String[] getFieldNames()
{
return fieldNames;	
}
public String getFieldName (int index)
{
if (index >=0 && index <= fieldCount)
	return fieldNames[index];
else
	return null;
}
public int getNextRow() {
	return nextRow;
}
public void setNextRow(int nextRow) {
	this.nextRow = nextRow;
}

public int getRowPerPage() {
	return rowPerPage;
}
public void setRowPerPage(int rowPerPage) {
	this.rowPerPage = rowPerPage;
}
public int getTotalRows() {
	return totalRows;
}
public void setTotalRows(int totalRows) {
	this.totalRows = totalRows;
}
public String getCaption() {
	return caption;
}

public int getFieldCount() {
	return fieldCount;
}

public int getPreviousRow() {
	return previousRow;
}

public void setPreviousRow(int previousRow) {
	this.previousRow = previousRow;
}

}

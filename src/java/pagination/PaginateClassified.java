package np.pagination;
import np.dao.ClassifiedDao;
public class PaginateClassified {
	static ClassifiedDao dao;
	
	public static void setDao(ClassifiedDao cDao) {
		dao = cDao;
	}

	public static Paginate getPaginate( )
{
	//int id=dao.getCategoryId(category);
	System.out.println("ClassifiedDao " );
	String [][]data=null;
	
		
	data=dao.recordsForClassified();
		
	if (data !=null)
	{
	String []header={"Name","Available/Wanted","Address","Contact No","E mail","PostDate"};
	int rowPerPage=5;
	String caption="Classified Post in Noida";
	Paginate p=new Paginate(header,data,rowPerPage,caption);
	System.out.println("Paginate object created.");
	return p;
	}
	else
	return null;
}
}

package np.pagination;
import np.dao.CategoryDao;;
public class PaginateCategory {
	static CategoryDao dao;
	
	public static void setDao(CategoryDao cDao) {
		dao = cDao;
	}

	public static Paginate getPaginate( )
{
	//int id=dao.getCategoryId(category);
	System.out.println("category Dao " );
	String [][]data=null;
	
		
	data=dao.recordsForClassified();
		
	if (data !=null)
	{
	String []header={"ID","Name","Edit","Delete"};
	int rowPerPage=5;
	String caption="Category";
	Paginate p=new Paginate(header,data,rowPerPage,caption);
	System.out.println("Paginate object created.");
	return p;
	}
	else
		return null;
}
}

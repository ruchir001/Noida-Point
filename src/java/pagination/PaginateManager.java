package np.pagination;
import np.dao.CategoryDao;
public class PaginateManager {
	static CategoryDao dao;
	
	public static void setDao(CategoryDao cDao) {
		dao = cDao;
	}

	public static Paginate getPaginate(String category)
{
	int id=dao.getCategoryId(category);
	System.out.println("Category id "+id);
	String [][]data=null;
	if (id!=-1)
	{
		
		data=dao.recordsForCategory(id);
		
	}
	if (data !=null)
	{
	String []header={"Description","Address","Contact No"};
	int rowPerPage=5;
	String caption=category+" in Noida";
	Paginate p=new Paginate(header,data,rowPerPage,caption);
	System.out.println("Paginate object created.");
	return p;
	}
	else
		return null;
}
}

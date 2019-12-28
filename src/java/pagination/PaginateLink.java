package np.pagination;
import np.dao.LinkDao;;
public class PaginateLink {
	static LinkDao dao;
	
	public static void setDao(LinkDao cDao) {
		dao = cDao;
	}

	public static Paginate getPaginate( )
{
	//int id=dao.getCategoryId(category);
	System.out.println("ClassifiedDao " );
	String [][]data=null;
	
		
	data=dao.recordsForLink();
		
	if (data !=null)
	{
	String []header={"SiteName","SiteLink","Edit","Delete"};
	int rowPerPage=5;
	String caption="Site Link ";
	Paginate p=new Paginate(header,data,rowPerPage,caption);
	System.out.println("Paginate object created.");
	return p;
	}
	else
		return null;
}
}

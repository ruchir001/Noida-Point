package np.listener;
import np.helper.*;

import javax.servlet.*;
public class CtxListener implements ServletContextListener {

	public void contextDestroyed(ServletContextEvent c) {
		
	}

	public void contextInitialized(ServletContextEvent c) {
		ServletContext ctx=c.getServletContext();
		String param=ctx.getInitParameter("createTables");
		if (param.equals("yes"))
		{
		String p=ctx.getRealPath("WEB-INF/classes/np/sql/npTables.sql");	
			DBInitializer db=new DBInitializer();
			db.createTables(p);
		}
	}

}

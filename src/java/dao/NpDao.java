package np.dao;
import java.sql.*;
public abstract class NpDao {
	public Connection getConnection()throws Exception
	{
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","oracle");
		    return con;
		}catch(Exception e)
		{
		throw (e);	
		}
		
	}
}

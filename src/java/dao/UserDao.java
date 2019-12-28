package np.dao;
import java.sql.*;

import np.dto.User;
import np.dto.Login;
import java.util.*;



public class UserDao extends NpDao {
	
	
public int insertUser (User u ){
	int id=0;
	try
	{
		Connection con=getConnection();
		PreparedStatement stmt=con.prepareStatement("insert into npUsers values(?,?,?,?,?,?,?)");
		Statement stmt1=con.createStatement();
		ResultSet rset=stmt1.executeQuery("select np.nextval from dual");
		rset.next();
		id=rset.getInt(1);
		stmt.setInt(1,id);
		rset.close();
		stmt.setString(2,u.getMailId());
		stmt.setString(3,u.getPassword());
		stmt.setString(4,u.getName());
		stmt.setString(5,u.getContactNo());
		stmt.setString(6,u.getJoiningDate());
		stmt.setString(7,"user");
		stmt.executeUpdate();
		con.close();
		
	}catch(Exception e)
	{
		System.out.println(e);
		
	}
	return id;
}
public void deleteUser (User u){
	try
	{
		Connection con=this.getConnection();
		PreparedStatement stmt=con.prepareStatement("delete from npUsers where user_id=?");
		stmt.setInt(1,u.getUser_Id());
		stmt.executeUpdate();
		con.close();
		
	}catch(Exception e)
	{
		System.out.println(e);
		
	}
	
}
public Login findUser (String mailId,String password){
	Login l=null;
	try
	{
		Connection con=this.getConnection();
		PreparedStatement stmt=con.prepareStatement("select * from npUsers where mailId=? and password=?");
		stmt.setString(1,mailId);
		stmt.setString(2,password);
		ResultSet rset=stmt.executeQuery();
		if (rset.next())
		{
			l=new Login();
			l.setUserId(rset.getInt(1));
			l.setName(rset.getString(4));
			l.setRole(rset.getString(7));
			
				
		}
		con.close();
		
	}catch(Exception e)
	{
		System.out.println(e);
		
	}
	return l;
	
}

public User findUser (int id){
	User u=null;
	try
	{
		Connection con=this.getConnection();
		PreparedStatement stmt=con.prepareStatement("select * from npUsers where user_id=?");
		stmt.setInt(1,id);
		ResultSet rset=stmt.executeQuery();
		if (rset.next())
		{
			u=new User();
			u.setUser_Id(rset.getInt(1));
			u.setName(rset.getString(4));
			u.setMailId(rset.getString(2));
			u.setPassword(rset.getString(3));
			u.setContactNo(rset.getString(5));
			u.setJoiningDate(rset.getString(6));
			
			
		}
		con.close();
		
	}catch(Exception e)
	{
		System.out.println(e);
		
	}
	return u;
	
}

public Map getRoleMap()
{
	HashMap map=new HashMap();
	try
	{
		Connection con=this.getConnection();
		PreparedStatement stmt=con.prepareStatement("select * from npUsers");
		ResultSet rset=stmt.executeQuery();
		while (rset.next())
		{
			
			map.put(rset.getString(1),rset.getString(4));
			
			
		}
		con.close();
		
	}catch(Exception e)
	{
		System.out.println(e);
	}
	return map;
}
public ArrayList findAllUser (){
	ArrayList list=new ArrayList();
	try
	{
		Connection con=this.getConnection();
		PreparedStatement stmt=con.prepareStatement("select * from npUsers ");
		ResultSet rset=stmt.executeQuery();
		while (rset.next())
		{
			User u=new User();
			u.setUser_Id(rset.getInt(1));
			u.setName(rset.getString(4));
			u.setMailId(rset.getString(2));
			u.setPassword(rset.getString(3));
			u.setContactNo(rset.getString(5));
			u.setJoiningDate(rset.getString(6));
			list.add(u);
			
		}
		con.close();
		
	}catch(Exception e)
	{
		System.out.println(e);
		
	}
	return list;
	
}

}

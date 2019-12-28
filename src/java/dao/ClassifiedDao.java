package np.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import np.dto.Classified;
import np.dto.User;

public class ClassifiedDao extends NpDao
{
	public int insertClassified (Classified c ){
		int id=0;
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("insert into npClassified values(?,?,?,?,?)");
			Statement stmt1=con.createStatement();
			ResultSet rset=stmt1.executeQuery("select np.nextval from dual");
			rset.next();
			id=rset.getInt(1);
			stmt.setInt(1,id);
			rset.close();
			stmt.setInt(2,c.getUserId());
			stmt.setString(3,c.getAddress());
			stmt.setString(4,c.getAvailable());
			stmt.setString(5,c.getPostDate());
			stmt.executeUpdate();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		return id;
	}
	public String[][] recordsForClassified ( ){
		String data[][]=null;
		UserDao user=new UserDao();
		try
		{
			Connection con=this.getConnection();
			Statement stmt1=con.createStatement();
			ResultSet rset1=stmt1.executeQuery("select count(addId) from npClassified");
			rset1.next();
			int c=rset1.getInt(1);
			//rset1.close();
			System.out.println("No of records "+c);
			if (c>0)
			{
				data=new String[c][6];
				ResultSet rset=stmt1.executeQuery("select * from npClassified");
			for (int i=0;i<c;i++)
			{
				System.out.println(rset.next());
				User u=user.findUser(rset.getInt(2));
				data[i][0]=u.getName();
				data[i][1]=rset.getString(4);
				data[i][2]=rset.getString(3);
				data[i][3]=u.getContactNo();
				data[i][4]=u.getMailId();
				data[i][5]=rset.getString(5);
				System.out.println(data[i]);
				System.out.println(u);
				
				
			}
			}
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		System.out.println("returing data");
		return data;
		
	}


}

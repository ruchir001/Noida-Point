package np.dao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import np.dto.Category;
import np.dto.Info;
import np.dto.User;

public class CategoryDao extends NpDao
{
	public void insertCategory (Category c ){
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("insert into category values(?,?)");
			Statement stmt1=con.createStatement();
			ResultSet rset=stmt1.executeQuery("select np.nextval from dual");
			rset.next();
			int id=rset.getInt(1);
			stmt.setInt(1,id);
			
			stmt.setString(2,c.getName());
			stmt.executeUpdate();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		
	}
	public void updateCategory (Category c ){
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("update category  set name=? where category_id=?");
			stmt.setString(1,c.getName());
			stmt.setInt(2,c.getCategory_id());
			stmt.executeUpdate();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		
	}
	public void deleteCategory (Category c ){
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("delete category where category_id=?");
			stmt.setInt(1,c.getCategory_id());
			stmt.executeUpdate();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		
	}
	public int getCategoryId (String name ){
		int id=-1;
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("select category_id from category where name=?");
			stmt.setString(1,name);
			ResultSet rset=stmt.executeQuery();
			if (rset.next())
				id= rset.getInt(1);
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		return id;
	}
	
	public Category searchCategoryId (int ids ){
		Category cat=null;
		try
		{
			
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("select * from category where category_id=?");
			stmt.setInt(1,ids);
			ResultSet rset=stmt.executeQuery();
			
			if (rset.next())
			{
				cat=new Category();
				cat.setCategory_id(rset.getInt(1));
			    cat.setName(rset.getString(2));
			}
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		return cat;
	}
	
	public void insertInfo (Info i ){
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("insert into noidainfo values(?,?,?,?,?)");
			Statement stmt1=con.createStatement();
			ResultSet rset=stmt1.executeQuery("select np.nextval from dual");
			rset.next();
			int id=rset.getInt(1);
			stmt.setInt(1,id);
			stmt.setInt(2,i.getCategory_id());
			stmt.setString(3,i.getDescription());
			stmt.setString(4,i.getAddress());
			stmt.setString(5,i.getContactNo());
			stmt.executeUpdate();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		
	}
	
	public String[][] recordsForClassified ( ){
		String data[][]=null;
		UserDao user=new UserDao();
		try
		{
			Connection con=this.getConnection();
			Statement stmt1=con.createStatement();
			ResultSet rset1=stmt1.executeQuery("select count(CATEGORY_ID) from CATEGORY");
			rset1.next();
			int c=rset1.getInt(1);
			//rset1.close();
			System.out.println("No of records "+c);
			if (c>0)
			{
				data=new String[c][4];
				ResultSet rset=stmt1.executeQuery("select * from CATEGORY");
			for (int i=0;i<c;i++)
			{
				System.out.println(rset.next());
				//User u=user.findUser(rset.getInt(2));
				String id=""+rset.getInt(1);
				data[i][0]=id;
				data[i][1]=rset.getString(2);
				data[i][2]="<a href=index.jsp?p=editCategory&catId="+id+">"+"Edit</a>";
				data[i][3]="<a href=index.jsp?p=addCategory&edit=delete&ids="+id+">"+"Delete</a>";
				System.out.println("data"+data[i]);
				//System.out.println(u);
				
				
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

	public String[][] recordsForCategory (int catId){
		String data[][]=null;
		try
		{
			Connection con=this.getConnection();
			Statement stmt1=con.createStatement();
			ResultSet rset1=stmt1.executeQuery("select count(info_id) from noidainfo where category_id="+catId);
			
			rset1.next();
			int c=rset1.getInt(1);
			//rset1.close();
			System.out.println("No of records "+c);
			if (c>0)
			{
				data=new String[c][3];
			PreparedStatement stmt=con.prepareStatement("select * from noidaInfo where category_id=? ");
			stmt.setInt(1,catId);
			ResultSet rset=stmt.executeQuery();
			for (int i=0;i<c;i++)
			{
				System.out.println(rset.next());
				
				data[i][0]=rset.getString(3);
				data[i][1]=rset.getString(4);
				data[i][2]=rset.getString(5);
				System.out.println(data[i]);
				
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

	
	public ArrayList findAllCategories (){
		ArrayList list=new ArrayList();
		try
		{
			Connection con=this.getConnection();
			PreparedStatement stmt=con.prepareStatement("select * from category ");
			ResultSet rset=stmt.executeQuery();
			while (rset.next())
			{
				Category c=new Category();
				c.setCategory_id(rset.getInt(1));
				c.setName(rset.getString(2));
				list.add(c);
				
			}
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		return list;
		
	}


}

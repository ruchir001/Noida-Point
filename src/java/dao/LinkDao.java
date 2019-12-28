package np.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import np.dto.Link;
 

public class LinkDao extends NpDao
{
	public int insertLink (Link c ){
		int id=0;
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("insert into NPLINK values(?,?,?)");
			Statement stmt1=con.createStatement();
			ResultSet rset=stmt1.executeQuery("select np.nextval from dual");
			rset.next();
			id=rset.getInt(1);
			stmt.setInt(1,id);
			rset.close();
			stmt.setString(2,c.getSiteName());
			stmt.setString(3,c.getSiteLink());
			stmt.executeUpdate();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		return id;
	}
	public void  deleteLink (int ids )
	{
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("delete from NPLINK where LINK_ID=?");
			stmt.setInt(1,ids);
            stmt.executeQuery();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
		}
			
		}
	
	public Link  searchLink(int ids ){
		Link lk=null;
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("select * from NPLINK where LINK_ID=?");
			stmt.setInt(1,ids);
            ResultSet rset=stmt.executeQuery();
			if (rset.next())
			{
				lk=new Link();
				lk.setLinkID(rset.getInt(1));
			    lk.setSiteName(rset.getString(2));
			    lk.setSiteLink(rset.getString(3));
			    
			}
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		return lk;
	}
	
	public void updateLink (Link c ){
		try
		{
			Connection con=getConnection();
			PreparedStatement stmt=con.prepareStatement("update NPLINK set SITENAME=?,SITELINK=? where LINK_ID=?");
			stmt.setString(1,c.getSiteName());
			stmt.setString(2,c.getSiteLink());
			stmt.setInt(3,c.getLinkID());
			stmt.executeUpdate();
			con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
			
		}
		 
	}
	public String[][] recordsForLink ( ){
		String data[][]=null;
		try
		{
			Connection con=this.getConnection();
			Statement stmt1=con.createStatement();
			ResultSet rset1=stmt1.executeQuery("select count(LINK_ID) from NPLINK");
			rset1.next();
			int c=rset1.getInt(1);
			//rset1.close();
			System.out.println("No of records "+c);
			if (c>0)
			{
				data=new String[c][5];
				ResultSet rset=stmt1.executeQuery("select * from NPLINK");
			for (int i=0;i<c;i++)
			{
				System.out.println(rset.next());
				 
				int id=rset.getInt(1);
				String name=rset.getString(2);
				data[i][0]=name;
				data[i][1]="<a href="+rset.getString(3)+">"+name+"</a>";
				data[i][2]="<a href=index.jsp?p=editLink&ids="+id+">"+"Edit</a>";
				data[i][3]="<a href=index.jsp?p=linkAd&edit=delete&ids="+id+">"+"Delete</a>";
				System.out.println(data[i]);
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


}

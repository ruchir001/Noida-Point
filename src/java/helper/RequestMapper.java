package np.helper;
import java.io.FileInputStream;
import java.util.Properties;
 
public class RequestMapper {
Properties p;
public RequestMapper()
{
	p=new Properties();
} 
public void load(String path)
{
	try{
		FileInputStream f=new FileInputStream(path);
		p.load(f);
		}catch(Exception e){System.out.println(e);}
	
}
public String getResource(String key)
{
return p.getProperty(key);	
}
}

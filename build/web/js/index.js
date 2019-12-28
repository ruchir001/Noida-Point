	function selectAll(ele)
	{				
		for(var i = 0;i<ele.length;i++)
		{	
			if(ele[i].type == "checkbox")
			{		
				
				if(ele[i].name == "chkactive[]")
				{
					ele[i].checked = true;					
				}
				else
				{
					ele[i].checked = true;					
				}
			}			
		}
		document.getElementById('chkall').style.display = "none";
		document.getElementById('dechkall').style.display = "block";
		
	}
	function DeselectAll(ele)
	{
		for(var i = 0;i<ele.length;i++)
		{			
			if(ele[i].type == "checkbox")
			{				
				if(ele[i].name == "chkactive[]")
				{
					ele[i].checked = false;					
				}
				else
				{
					ele[i].checked = false;					
				}
				
			}			
		}
		document.getElementById('dechkall').style.display = "none";
		document.getElementById('chkall').style.display = "block";		
	}
	
	function ClearAll()
	{
		document.getElementById('chkall').style.display = "block";		
		document.getElementById('dechkall').style.display = "none";
		
		document.getElementById('dechkall').checked = false;
		document.getElementById('chkall').checked = false;		
	}

	function CheckSelectedBox(ele)
	{
		for(var i = 0;i<ele.length;i++)
		{		
			
			if(ele[i].type == "checkbox")
			{				
				if(ele[i].name == "chkactive[]")
				{
					if(ele[i].checked == true)
					{						
						return true;
					}					
				}				
			}			
		}		
		return false;
	}
	function empty(search1)
	{
		if(search1.value.replace(/^\s+|\s+$/g,"")=="-- Type Here --")		
				search1.value="";
				
	}
	function doSearch(ele)
	{
		
		if (document.getElementById('txtsearch').value.replace(/^\s+|\s+$/g,"")=="-- Type Here --")
		{
			alert('Please Enter Search Criteria');
			document.getElementById('txtsearch').focus();
			return false;
		}
		else
		{
			//window.location.search;
			//alert(window.location.search);
			return true;
		}
	}	
	

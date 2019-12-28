
<table class="login_head" width="100%" border="0" bgcolor="#fffff">
      <tbody><tr>
    <td><img src="images/top.jpg" width="100%" ></td>
      </tr>
    </tbody></table>
	
	</td>
  </tr>	
  <tr>
  	<td class="top_menu">
		 	
			

    	<!--[if lt IE 6]>
<style type="text/css">ul.zzmenuNS li.v, ul.zzmenuNS li.sv { margin-left: -20px; }</style>
<![endif]-->
<!--[if IE]>
<style type="text/css">ul.zzmenuNS span.h { float: left; }</style>
<![endif]-->
<script src="js/zzmenujs.js" type="text/javascript"></script>
<!--[if lt IE 7]>
<script src="js/zzmenuiehack.js" type="text/javascript"></script>
<![endif]-->





 <DIV id=menuDiv 
            style="PADDING-RIGHT: 0px; BORDER-TOP: #000000 0px solid; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; PADDING-TOP: 0px; BORDER-BOTTOM: #000000 1px solid"></DIV>



<script type="text/javascript">
<!--

// Here go the code for our two menus:

// This is the first line that will initialize the menu library:
var menuLibrary = new ZZEEMenus();
menuLibrary.libPath = 'zzmenu/';

// Menus are created with the "newMenu" method of the library.
// There could be more than one menu on a page, let's create the first:
var menu1 = menuLibrary.newMenu();
menu1.horizontal(true);  // Make it horizontal.
//menu1.closeOnmouseout = false;

// Also we can define some additional properties for the menu if we need
// See help for additional parameters

// Now we need to assign menu items.
// You can use methods "add", "insert", "insertChild", "addItems" and "remove"
// of the menu to add or delete menu items. You can use these methods
// to manipulate subitems of a menu item either. When subitems are added
// to a menu item, it becomes a submenu.

// We can assign all menu items with a single call to "addItems" method,
// you need to pass here an array of objects, each of them may have zero or
// more attributes (they include "caption", "url", "icon" and some more).
// Note that if you put "&" somewhere in the caption,
// the letter after it will become an accelerator:

menu1.addItems([ 
	{caption: "category management", subitems: [
		
	{caption: "add category",  url: "index.jsp?p=newCategory", icon: "images/list_ico.gif"},
	{caption: "view and edit categories",  url: "index.jsp?p=viewCat", icon: "images/add_ico.gif"},
	{caption: "post information",  url: "index.jsp?p=postInfo", icon: "images/add_ico.gif"},
    ]},
	{caption: "link management", subitems: [
		
	{caption: "add site link",  url: "index.jsp?p=newLink", icon: "images/list_ico.gif"},
	{caption: "view and edit site links",  url: "index.jsp?p=viewLinks", icon: "images/add_ico.gif"},
	]},
	{caption: "Logout", url: "index.jsp?p=logout"},
	]);				

	
	//	{caption: "Help"}
    // Our second top item will show how you can use radios and checkboxes.
    // Note double '&' in the caption - if you need to put an ampersand you need to double it.
    // Radio and checkbox capabilities for the items will be defined below.
   /*{caption: "&Radios && Checkboxes", subitems: [
        {caption: "Radio &1"},
        {caption: "Radio &2"},
        {caption: "Radio &3"},
        {caption: "-"},
 
        {caption: "Just a checkbox, not radio"},
        {caption: "Another checkbox"}
        ]},

    {caption: "-"},

    // Shortcuts test
    // We set the "shortcut" property, and the library will handle shortcuts for us,
    // you don't need to write any special code for that.
    // Shortcuts may look like "F1" or "Ctrl+Shift+0" or "Alt+PgDown", etc
    {caption: "&Shortcuts", subitems: [
        {caption: "&Yahoo",     shortcut: "Ctrl+Y", url: "http://www.yahoo.com",
            target: "_self"},
        {caption: "&Google",    shortcut: "Ctrl+G", url: "http://www.google.com"},
        {caption: "&Microsoft in new window", shortcut: "Ctrl+M", url: "http://www.microsoft.com",
            target: "_blank"}
        ]}*/
    
    	var mi = menu1.getItem([1]);
//	var mitem = menu1.getItem([5, 3]);  	

//	var menuprice = menu1.getItem([2,1]);
	
	

//onclick="window.open('term.jsp','tos','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1resizable=1,width=760,height=500,copyhistory=0,top=100,left=100');return false;"
mi.onclick = function() {
		window.open('includes/map.html','tos','toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=760,height=500,copyhistory=0,top=100,left=100');return false;
		return false;
		};

//menuprice.onclick = function() {
//		displayExport('export_pricelist.php'); 
//		return false;
//		};
			
	
// For radios and checkboxes we need to do a little bit more.

// Get "Radios & Checkboxes" item (the second menu item) with the "getItem" method of the menu.
// You need to pass an array of integer zero based offsets,
// that defines a route to an item from the menu:
/*var mi = menu1.getItem([2]);

// "getItem" method can be applied to submenus as well, so
// mi will become "Radio 1" item (the first subitem of "Radios & Checkboxes")
mi = mi.getItem([0]);

// Now convert this "Radio 1" to radio item, using "setRadio" method:
mi.setRadio(1);                 
    // Parameter to "setRadio" is the number of radioGroup,
    // it must be a positive integer.
mi.setChecked(true);    
    // The "setChecked" method checks or unchecks the item (depending on the parameter passed).
    // Now "Radio 1" will be the item with the radio mark.

// Now make radios other two items:
// We get them via "getItem" method, passing the full path from the root:
menu1.getItem([2, 1]).setRadio(1);  // "Radio 2"
menu1.getItem([2, 2]).setRadio(1);  // "Radio 3"

// Checkbox is an item that gets checked or unchecked on click,
// so we need to define its "onclick" event handler to handle it.
// We use "getChecked" method to find if the item is checked:
mi = menu1.getItem([2, 4]);     // "Just a checkbox, not radio"
mi.onclick = function() {
    this.setChecked(!this.getChecked()); 
};
// We need to set the initial state of the checkbox item
mi.setChecked(false);

// Do the same thing for the second checkbox
mi = menu1.getItem([2, 5]);     // "Another checkbox"
mi.onclick = function() { this.setChecked(!this.getChecked()); };
// We need to set the initial state of the checkbox item
mi.setChecked(true);
*/
// When we have created all the items, there is a final step,
// we need to initialize the menu, so it will become visible and working.
// This is done using method "initMenu" of the library,
// we pass two parameters: a menu object, and an HTML container for the menu:
menuLibrary.initMenu(menu1, document.getElementById('menuDiv'));
//=============================================================

// If you are still interested, here is the second menu :)
// It will show how to use other methods besides "addItems" to add items.

// Create a new menu


//=============================================================

// And finally we will show how to enable / disable and add / delete 
// menu items / submenus after menus have been initialized. 
// We will use two buttons for that.

// Function to disable and enable menu item:


//-->
messageObj = new DHTML_modalMessage();	// We only create one object of this class
messageObj.setShadowOffset(5);	// Large shadow

function displayShortcut(url)
{
	
	messageObj.setSource(url);
	messageObj.setCssClassMessageBox(false);
	messageObj.setSize(650,520);
	messageObj.setShadowDivVisible(true);	// Enable shadow for these boxes
	messageObj.display();
}

function closeShortcut(val)
{
	
	messageObj.close();	
}
    
		
</script>
<!-- End of Javascript part for the menu -->
	
  
    </td>
  </tr>

</tbody></table>

	
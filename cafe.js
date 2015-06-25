// JavaScript Document
// A function that handles XHLHttpRequest for page
function menuCat(page){
// detects if the browser has XMLHttpRequest functionality implemented as a global function
// if so the XMLHttpRequest object is created that way.
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
//otherwise an ActiveXobject would need to be creadted for a IE6 or 5 browser.
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

// The following code fragment parses an XML document called navigation_kids.xml into an XML DOM object by
//The open() and send(X) methods of the XHMLHttpRequest onject are also used to send requests to the server
// the get method is passed, then the url we want to get, then Synchronous was chossen
xmlhttp.open("GET","../../../../navigation_kids.xml",false);
xmlhttp.send();
// Builds an XMLDocument object from the body of the servers response.
xmlDoc=xmlhttp.responseXML;

// Var n is assigned getElementsByTagName()medthod, which returns a NodeList(An Array Of Nodes) of all elements
var n=xmlDoc.getElementsByTagName("nav");

// a for loop is created to loop through each NodeList of "nav" by using the length property.
for (i=0;i<n.length;i++)
  {
    //if the title NodeList at the childNodes and nodeValue 0 position, is not equal to page.
    if(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue != page)
	{
    // then the following code is executed. and the link and title page are created
    document.write("<li><a href=");
    document.write(n[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
	  document.write(">");
	  document.write(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
	  document.write("</a></li>");
	}
  // the "nav-selected" code is listed.
	else{
		    document.write("<li class=\"nav-selected\">");
			  document.write(page);
			  document.write("<li>");
	}

  }
}

// Once this function is called the XHLHttpRequest for page and xmlpage is passed
function menuLeftNav(page, xmlpage){
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }


xmlhttp.open("GET",xmlpage,false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

// Var n is assigned getElementsByTagName()medthod, which returns a NodeList(An Array Of Nodes) of all elements
var n=xmlDoc.getElementsByTagName("nav");

The ul document Category/Nav navText is created.
document.write("<ul class=\"categoryNav navText\">");

// a for loop is created to loop through each NodeList of "nav" by using the length property.
for (i=0;i<n.length;i++)
  {
    //if the title NodeList at the childNodes and nodeValue 0 position, is not equal to page.
    if(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue != page)
	{
    // then the following code is executed. and the link and title page are created
    document.write("<li><a href=");
    document.write(n[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
	  document.write(">");
	  document.write(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
	  document.write("</a></li>");
	}
	else{
      // the "nav-selected" code is listed.
		    document.write("<li class=\"nav-selected\">");
			  document.write(page);
			  document.write("</li>");
	}

  }
        document.write("</ul>");
}

// Once this function is called the XHLHttpRequest for leftNav and topNav
function appContainer(leftNav, topNav){
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","../../../../webMasterList.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

// Var n is assigned getElementsByTagName()medthod, which returns a NodeList(An Array Of Nodes) of all elements with "app".
var x=xmlDoc.getElementsByTagName("app");
// flag variable is created assigned with 0 value.
var flag=0;

// a for loop is created to loop through each NodeList of "app" by using the length property.
for (i=0;i<x.length;i++)
  {

    // another for loop is created to loop through each NodeList of "category" by using the length property.
  c=x[i].getElementsByTagName("category");
   for (j=0;j<c.length;j++)
  {
    // if category in the Nodelist is equals to leftNav
    if (x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue == leftNav )
   { //document.write(x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue);

   // then another for loop with an if statement is created to check if topNav is also equals to category
	 for (f=0;f<c.length;f++)
  	 {
       // if category in the Nodelist is equals to topNav
	     if (x[i].getElementsByTagName("category")[f].childNodes[0].nodeValue == topNav)
         {
           // 1 is added to flag, then the following code is sent to the browser.
		 	       flag=flag + 1;
             document.write("<div class=\"app-container\">");
             document.write("<div class=\"app-image\" style=\" background:url(");
             document.write(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
             document.write(")  center no-repeat; background-size: 163px Auto\">");
             document.write("<div class=\"stores-links\">");
            //if win8 is node list is true
         if (x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue != "false")
         {
           //the following documents are sent to the browser.
      		document.write("<a href=\"http://apps.microsoft.com/webpdp/app/");
      		document.write(x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue);
      		document.write("\">");
      		document.write("<img id=\"store\" alt=\"W8\" onmouseout=\"this.src='../../../../images/W8.png'\"  onmouseover=\"this.src='../../../../images/W8_hover.png'\" src=\"../../../../images/W8.png\">");
      		document.write("</a>");
         }
         //if id in node list is true
	     if (x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue != "false")
         {
           //the following documents are sent to the browser.
           document.write("<a href=\"http://www.windowsphone.com/s?appid=");
           document.write(x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
           document.write("\"><img id=\"store\"  alt=\"Wp7\" onmouseout=\"this.src='../../../../images/WP7.png'\"  onmouseover=\"this.src='../../../../images/WP7_hover.png'\" src=\"../../../../images/WP7.png\"></a>");
	    }
      //if review in node list is not equals to 0
	    if (x[i].getElementsByTagName("review")[0].childNodes[0].nodeValue != "0")
         {
           //the following documents are sent to the browser.
           document.write("<a href=\"");
           document.write(x[i].getElementsByTagName("review")[0].childNodes[0].nodeValue);
		   document.write("\"><img id=\"store\"  alt=\"rating\" onmouseout=\"this.src='images/ratings/rating_");
		   document.write(x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
           document.write(".png'\"  onmouseover=\"this.src='images/ratings/rating_");
		   document.write(x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
		   document.write("_hover.png'\" src=\"images/ratings/rating_");
		   document.write(x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
		   document.write(".png\"></a>");
	    }
	    document.write("</div></div>");
        document.write("<h4>");
        document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
        document.write("</h4>");
        document.write(x[i].getElementsByTagName("tweet")[0].childNodes[0].nodeValue);
        document.write("</div>");
		 }
        }

     }


 }

  }
  if(flag == 0){
  document.write("<div class=\"review-breakdown\">We couldn&acute;t find any apps under these filters.<br /><br />We are adding new apps on a daily basis,<br /> please come back soon : )</div>");
  }
}

function review(appID){
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","../../../../webMasterList.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var n=xmlDoc.getElementsByTagName("app");

for (i=0;i<n.length;i++)
  {

     if (n[i].getElementsByTagName("id")[0].childNodes[0].nodeValue == appID)
     {

	  document.write("<h1 class=\"appSet\">");
      document.write(n[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
	  document.write("</h1>");
	  document.write("<div class=\"review-left-container\"><img src=\"");
	  document.write(n[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
	  document.write("\" class=\"review-tile-image\"> ");
	  document.write("<div class=\"windows-rating-padding\">Windows Parent Rating<img src=\"images/ratings/rating_stars_");
	  document.write(n[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
	  document.write(".png\" alt=\"rating\" class=\"rating-starts-images\"></div>");

	  if (n[i].getElementsByTagName("id")[0].childNodes[0].nodeValue != "false")
         {
           document.write("<a href=\"http://www.windowsphone.com/s?appid=");
           document.write(n[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
           document.write("\"><img src=\"images/windows-phone-store-button.png\" alt=\"Download on Windows Phone\" border=0></a>");
	    }

      if (n[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue != "false")
         {
      		document.write("<a href=\"http://apps.microsoft.com/webpdp/app/");
      		document.write(n[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue);
      		document.write("\"><img src=\"images/windows-store-button.png\" alt=\"Download on Windows 8\" border=0></a>");

         }
	  document.write("</div><div class=\"appMainContainer\">");
	  document.write("<h1>");
	  document.write(n[i].getElementsByTagName("thebottomline")[0].childNodes[0].nodeValue);
	  document.write("</h1>");
	  document.write("<hr>");
	  document.write("<div class=\"review-breakdown\">The Good</div>");
	  document.write(n[i].getElementsByTagName("thegoods")[0].childNodes[0].nodeValue);
      document.write("<div class=\"review-breakdown\">The Bad</div>");
	  document.write(n[i].getElementsByTagName("thebads")[0].childNodes[0].nodeValue);
  	  document.write("<div class=\"review-breakdown\">The Ugly</div>");
	  document.write(n[i].getElementsByTagName("theuglys")[0].childNodes[0].nodeValue);
	  document.write("<div class=\"review-breakdown\">The Amazing</div>");
	  document.write(n[i].getElementsByTagName("theamazings")[0].childNodes[0].nodeValue);
	  document.write("</div>");

		 }
  }
}

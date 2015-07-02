// JavaScript Document
// A function that handles XHLHttpRequest when the page is passed in its parameters
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

// Var n is assigned xmlDoc.getElementsByTagName()medthod, which returns a NodeList(An Array Of Nodes) of all elements
var n=xmlDoc.getElementsByTagName("nav");

// a for loop is created to loop through each NodeList of "nav" by using the length property.
for (i=0;i<n.length;i++)
  {
    //if the title NodeList at the childNodes and nodeValue 0 position, is not equal to page.
    if(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue != page)
	{
    // list element with a href tage is written in the browser
    document.write("<li><a href=");
    // the link element is written on page.
    document.write(n[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
    // the a href tag is closed off
	  document.write(">");
    // the title element is written on page.
	  document.write(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
    // the a href and li element is closed off.
	  document.write("</a></li>");
	}
  // if it is equals to the page
	else{
        // the "nav-selected" code is listed.
		    document.write("<li class=\"nav-selected\">");
        // the page is listed in the browser.
			  document.write(page);
        // the list is closed, (I just added a closing tag)
			  document.write("</li>");
	}

  }
}

// function for left side navigation.
function menuLeftNav(page, xmlpage){
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }


xmlhttp.open("GET",xmlpage,true);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

// Var n is assigned getElementsByTagName()medthod, which returns a NodeList(An Array Of Nodes) of all elements
var n=xmlDoc.getElementsByTagName("nav");

The ul document Category/Nav navText is created.
document.write("<ul class=\"categoryNav navText\">");

// for loop to travers the xml file.
for (i=0;i<n.length;i++)
  {
    /* if/else statement to determine if the text should be hyper linked or not
     if the parameter "page" is the same as the child of the xml node, then
     the text is not hyper linked because that is the page you are on.
    */
    if(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue != page)
	{

    document.write("<li><a href=");
    document.write(n[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
	  document.write(">");
	  document.write(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
	  document.write("</a></li>");
	}
	else{

		    document.write("<li class=\"nav-selected\">");
			  document.write(page);
			  document.write("</li>");
	}

  }
        document.write("</ul>");
}

// funcfion for appContainer
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


var x=xmlDoc.getElementsByTagName("app");

var flag=0;

// the xml file "app" is travers.
for (i=0;i<x.length;i++)
  {


  c=x[i].getElementsByTagName("category");
  // another xml file "category" is travers.
   for (j=0;j<c.length;j++)
  {
    /*
      multiple if steatements used to determine which page the user is on if the leftNav and topNav is the same
      as the childNode then user is on the category page.
    */
    if (x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue == leftNav )
   { //document.write(x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue);


	 for (f=0;f<c.length;f++)
  	 {

	     if (x[i].getElementsByTagName("category")[f].childNodes[0].nodeValue == topNav)
         {

		 	       flag=flag + 1;
             document.write("<div class=\"app-container\">");
             document.write("<div class=\"app-image\" style=\" background:url(");
             document.write(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
             document.write(")  center no-repeat; background-size: 163px Auto\">");
             document.write("<div class=\"stores-links\">");

            //if win8 is node list is true then hyper link is created because user is not on the right page.
         if (x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue != "false")
         {

      		document.write("<a href=\"http://apps.microsoft.com/webpdp/app/");
      		document.write(x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue);
      		document.write("\">");
      		document.write("<img id=\"store\" alt=\"W8\" onmouseout=\"this.src='../../../../images/W8.png'\"  onmouseover=\"this.src='../../../../images/W8_hover.png'\" src=\"../../../../images/W8.png\">");
      		document.write("</a>");
         }
         //if id is node list is true then hyper link is created because user is not on the right page.
	     if (x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue != "false")
         {

           document.write("<a href=\"http://www.windowsphone.com/s?appid=");
           document.write(x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
           document.write("\"><img id=\"store\"  alt=\"Wp7\" onmouseout=\"this.src='../../../../images/WP7.png'\"  onmouseover=\"this.src='../../../../images/WP7_hover.png'\" src=\"../../../../images/WP7.png\"></a>");
	    }
      //if review is node list is true then hyper link is created because user is not on the right page.
	    if (x[i].getElementsByTagName("review")[0].childNodes[0].nodeValue != "0")
         {

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
 //if flag stays on 0 no apps were found..
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

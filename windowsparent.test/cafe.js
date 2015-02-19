// JavaScript Document
function menuCat(page){
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","../../../../navigation_kids.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

var n=xmlDoc.getElementsByTagName("nav");

for (i=0;i<n.length;i++)
  { 
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
			  document.write("<li>");
	}
  
  }
}

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
var n=xmlDoc.getElementsByTagName("nav");


document.write("<ul class=\"categoryNav navText\">");

for (i=0;i<n.length;i++)
  { 

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

for (i=0;i<x.length;i++)
  { 
  
  c=x[i].getElementsByTagName("category");
   for (j=0;j<c.length;j++)
  { 
  
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
      
         if (x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue != "false")
         {
      		document.write("<a href=\"");
      		document.write(x[i].getElementsByTagName("bitlyW8")[0].childNodes[0].nodeValue);
      		document.write("\">");
      		document.write("<img id=\"store\" alt=\"W8\" onmouseout=\"this.src='../../../../images/W8.png'\"  onmouseover=\"this.src='../../../../images/W8_hover.png'\" src=\"../../../../images/W8.png\">");
      		document.write("</a>");
         }  
	     if (x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue != "false")
         {
           document.write("<a href=\"");
           document.write(x[i].getElementsByTagName("bitly")[0].childNodes[0].nodeValue);
           document.write("\"><img id=\"store\"  alt=\"Wp7\" onmouseout=\"this.src='../../../../images/WP7.png'\"  onmouseover=\"this.src='../../../../images/WP7_hover.png'\" src=\"../../../../images/WP7.png\"></a>");
	    }
	    if (x[i].getElementsByTagName("review")[0].childNodes[0].nodeValue != "0")
         {
           document.write("<a href=\"");
           document.write(x[i].getElementsByTagName("review")[0].childNodes[0].nodeValue);
		   document.write("\"><img id=\"store\"  alt=\"rating\" onmouseout=\"this.src='../../../../images/ratings/rating_");
		   document.write(x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
           document.write(".png'\"  onmouseover=\"this.src='../../../../images/ratings/rating_");
		   document.write(x[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
		   document.write("_hover.png'\" src=\"../../../../images/ratings/rating_");
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

xmlhttp.open("GET","webMasterList.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 
var n=xmlDoc.getElementsByTagName("app");

for (i=0;i<n.length;i++)
  { 
  
     if (n[i].getElementsByTagName("bitly")[0].childNodes[0].nodeValue == appID)
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
           document.write(n[i].getElementsByTagName("bitly")[0].childNodes[0].nodeValue);
           document.write("\"><img src=\"images/windows-phone-store-button.png\" alt=\"Download on Windows Phone\" border=0></a>");           
	    }
		
      if (n[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue != "false")
         {
      		document.write("<a href=\"");
      		document.write(n[i].getElementsByTagName("bitlyW8")[0].childNodes[0].nodeValue);
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
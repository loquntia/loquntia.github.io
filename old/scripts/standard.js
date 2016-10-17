/****************************************************************
*             Poor Man's Language Selection Script              *
* (C) 2015 John Houston, all rights defended with lethal force. *
*****************************************************************/

function setLanguage(lang) 
{
 switch(lang)
 {
  default:setEnglish();break;
  case "en":setEnglish();break;
  case "nr":setNorling();break;
  case "es":setSpanish();break;
  case "th":setThoodish();break;
 }
}

function setEnglish()
{
document.title=document.getElementById("title-en").innerHTML;
var nodeList = document.getElementsByClassName("en");
for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].style.display="inline";
}
}

function setSpanish()
{
document.title=document.getElementById("title-es").innerHTML;
var nodeList = document.getElementsByClassName("es");
for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].style.display="inline";
}
}

function setNorling()
{
document.title=document.getElementById("title-nr").innerHTML;
var nodeList = document.getElementsByClassName("nr");
for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].style.display="inline";
}
}

function setThoodish()
{
document.title=document.getElementById("title-th").innerHTML;
var nodeList = document.getElementsByClassName("th");
for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].style.display="inline";
}
}


/* Loads any query string Into Something Javascript-able */

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setLanguage(lang) 
{
 switch(lang)
 {
  default:setEnglish();break;
  case "en":setEnglish();break;
  case "nr":setNorling();break;
  case "es":setSpanish();break;
 }
}
function setEnglish()
{
var nodeList = document.getElementsByClassName("en");
for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].style.display="inline";
}
}
function setSpanish()
{
var nodeList = document.getElementsByClassName("es");
for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].style.display="inline";
}
}
function setNorling()
{
var nodeList = document.getElementsByClassName("nr");
for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].style.display="inline";
}
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function h2u(hex) {
    var hex = hex.toString();//force conversion
    var str;
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function u2h(str) {
    var hex;
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16).toUpperCase();
    }
    return hex;
}
function init()
{
setLanguage(getParameterByName("lang"));
document.getElementById("userinfo").innerHTML=atob(document.getElementById("userinfo").innerHTML);
if (document.getElementById("userinfo").innerHTML == "")
{
	window.top.close();
}
	void(0);
}
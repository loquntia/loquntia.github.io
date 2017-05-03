function logIn(username, password, tpsn)
{
document.getElementById("status").innerHTML="Verifying...<br>";
 // DEBUG PROBE 1 alert("Lol:"+username+"\r\n"+password);
 // DEBUG PROBE 2 alert(CryptoJS.SHA512(username + password + tpsn));
 var code = CryptoJS.SHA512(username + password + tpsn);
 // document.write(code) // Code finding probe
$(function(){
      $("#user").load("restricted/"+code);
    });
}
function base64_to_base10(str) {
    var order = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
    var base = order.length;
    var num = 0, r;
    while (str.length) {
        r = order.indexOf(str.charAt(0));
        str = str.substr(1);
        num *= base;
        num += r;
    }
    return num;
}
function verify(username, password, tpsn)
{
 var code = CryptoJS.SHA512(username + password + tpsn);
if (document.login.username.value.length != 0 && document.login.password.value.length != 0)
  {
    if (document.getElementById("user").innerHTML == document.getElementById("test").innerHTML)
    {
	switch(getParameterByName("lang"))
	{
    	default: document.getElementById("status").innerHTML+="<strong>Credentials do not match.</strong>";break;
	case "en": document.getElementById("status").innerHTML+="<strong>Credentials do not match.</strong>";break;
	case "es": document.getElementById("status").innerHTML+="<strong>Las credenciales no coinciden.</strong>";break;
	case "nr": document.getElementById("status").innerHTML="<strong>Fästneße hedden ik þeim solfe.</strong>";break;
        }
    }
   else {
	  window.open("userhome.htm?lang="+getParameterByName("lang")+"&usercode="+code); window.close();
    }
  }
  else {
	switch(getParameterByName("lang"))
	{
    	default: document.getElementById("status").innerHTML+="<strong>One or more fields have been left blank.</strong>";break;
	case "en": document.getElementById("status").innerHTML+="<strong>One or more fields have been left blank.</strong>";break;
	case "es": document.getElementById("status").innerHTML+="<strong>Uno o más campos están vacios.</strong>";break;
	case "nr": document.getElementById("status").innerHTML+="<strong>En fästneß or ander ar emptleft.</strong>";break;
        }
   }
}
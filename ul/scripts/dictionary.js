function dictionary(value)
{
 if (value.indexOf(" ") >= 0)
 {
 document.getElementById("definition").innerHTML = "Do not include spaces, please refer to the instructions above.";
 }
 else if (value.indexOf("ö") >= 0)
 {
 value = value.replace("ö", "oe");dictionary(value);
 }
 else if (value.indexOf("ø") >= 0)
 {
 value = value.replace("ø", "oe");dictionary(value);
 }
 else if (value.indexOf("œ") >= 0)
 {
 value = value.replace("œ", "oe");dictionary(value);
 }
 else if (value.indexOf("ä") >= 0)
 {
 value = value.replace("ä", "ae");dictionary(value);
 }
 else if (value.indexOf("æ") >= 0)
 {
 value = value.replace("æ", "ae");dictionary(value);
 }
 else if (value.indexOf("å") >= 0)
 {
 value = value.replace("å", "aa");dictionary(value);
 }
 else if (value.indexOf("ü") >= 0)
 {
 value = value.replace("ü", "y");dictionary(value);
 }
 else if (value.indexOf("ÿ") >= 0)
 {
 value = value.replace("ÿ", "ij");dictionary(value);
 }
 else if (value.indexOf("ð") >= 0)
 {
 value = value.replace("ð", "dh");dictionary(value);
 }
 else if (value.indexOf("þ") >= 0)
 {
 value = value.replace("þ", "th");dictionary(value);
 }
 else if (value.indexOf("w") >= 0)
 {
 value = value.replace("w", "v");dictionary(value);
 }
 else if (value.indexOf("tt") >= 0)
 {
 value = value.replace("tt", "t");dictionary(value);
 }
 else if (value.indexOf("ll") >= 0)
 {
 value = value.replace("ll", "l");dictionary(value);
 }
 else if (value.indexOf("gg") >= 0)
 {
 value = value.replace("gg", "g");dictionary(value);
 }
 else if (value.indexOf("nn") >= 0)
 {
 value = value.replace("nn", "n");dictionary(value);
 }
 else if (value.indexOf("ss") >= 0)
 {
 value = value.replace("ss", "s");dictionary(value);
 }
 else if (value.indexOf("kk") >= 0)
 {
 value = value.replace("kk", "k");dictionary(value);
 }
 else if (value.indexOf("pp") >= 0)
 {
 value = value.replace("pp", "p");dictionary(value);
 }
 else if (value.indexOf("ff") >= 0)
 {
 value = value.replace("ff", "f");dictionary(value);
 }
 else if (value.indexOf("pf") >= 0)
 {
 value = value.replace("pf", "p");dictionary(value);
 }
 else if (value.indexOf("bb") >= 0)
 {
 value = value.replace("bb", "b");dictionary(value);
 }
 else if (value.indexOf("ß") >= 0)
 {
 value = value.replace("ß", "s");dictionary(value);
 }
 else
 {
  var filename = value;
  window.location.assign("norling.htm?lang="+getParameterByName("lang")+"&input="+filename);
 }
}
function check()
{
 if (document.getElementById("definition").innerHTML == "")
 {
  document.getElementById("definition").innerHTML = 'Remember to follow spelling rules above.';
 }
}
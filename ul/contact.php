<a href="/bot-trap/"><img src="images/pixel.gif" border="0" alt=" " width="1" height="1"></a>
<script language="javascript" src="scripts/standard.js"></script>
<script src="scripts/jquery.js"></script> 
    <script> 
    $(function(){
      $("#footer").load("templates/footer.txt"); $("#header").load("templates/header.txt");  
    });
    </script> 
<html>
<head>
</head>

<body>
<div id="header"></div>
<?php
$to = "somebody@example.com, somebodyelse@example.com";
$subject = "HTML email";

$message = "
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>";
?><input type="button" value="Send" onlick="<?php mail($to,$subject,$message,$headers); ?>">
<div id="footer"></div>
</body>
</html>
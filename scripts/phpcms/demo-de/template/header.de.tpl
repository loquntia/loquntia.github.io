{PLUGIN FILE="$plugindir/tag.php" TYPE="STATIC"}
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">
<head>
<title>{TITLE}</title>
        <!----- phpCMS META TAGS START ----->
{TEMPLATE FILE="meta.de.tpl"}
        <!----- phpCMS META TAGS END ----->
<!-- Workaround für das fouc-Problem, http://www.bluerobot.com/web/css/fouc.asp -->
<script type="text/javascript"></script>
<style type="text/css" media="screen">
<!--/*--><![CDATA[/*><!--*/
@import url("$home/css_phpcms.css");
/*]]>*/-->
</style>
</head>

<body>
<table border="0" cellspacing="0" cellpadding="3" width="100%" style="height:600px">
    <tr bgcolor="#eeeeee">
        <!-- <td width="150"><span style="color:#708090; font-size:24px; font-weight:bold;font-family:Verdana,sans-serif"><i>php</i>CMS</span></td> -->
        <td width="150"><img src="$home/gif/demo_logo_grey_150x38.gif" alt="phpCMS-Logo" /></td>
        <td width="650" colspan="2">
<phpcms:noindex>
{MENU NAME="MAIN"}
</phpcms:noindex>
        </td>
    </tr>
    <tr bgcolor="#dddddd">
        <td width="150" align="right">
           <p> Sie sind hier: </p>
        </td>
        <td width="400">
<phpcms:noindex>
{MENU NAME="MAIN" MENTEMP="LINE"}{MENU NAME="SUB1" MENTEMP="LINE"}
</phpcms:noindex>
        </td>
        <td width="250" align="right" valign="bottom">
            <form action="$home/result.de.htm" method="post">
            <!-- use method "post" for non-stealth-mode, and "get" in stealth-mode so resultpages can be cached by clients -->
                <input type="hidden" name="phpcms_rc" value="3" />
                <!-- how many results should be displayed on one page? -->
                <input type="hidden" name="datadir" value="$home/suche" />
                <!-- path to the directory where the index is stored -->
                <span>Suche: </span><input name="query" value="" type="text" size="15" maxlength="30" />&nbsp;&nbsp;
                <!-- the search-term -->
                <input type="submit" name="submit" value="Los!" />
            </form>
        </td>
    </tr>
    <tr>
        <td valign="top" bgcolor="#eeeeee" height="100%" width="150">
<phpcms:noindex>
{MENU NAME="SUB1"}
</phpcms:noindex>
        </td>
        <td colspan="2" valign="top" bgcolor="#ffffff">
        <!----- phpCMS HEADER END ----->
{EDITLINE FILE="start_edit.tpl"}

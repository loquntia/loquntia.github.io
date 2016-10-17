/* $Id: UPGRADE_README.txt,v 1.1.2.7 2006/06/19 15:26:14 ignatius0815 Exp $ */

These instructions assume that you have an older version of phpCMS running on
your server that you do not want to interfere with during upgrade. If you want
to make a fresh installation instead, please read the file "install.txt" in the
directory "/parser/readme/en".

################################################################################
    Upgrade from phpCMS 1.1.x or phpCMS 1.2.x to the current phpCMS Version
################################################################################

(10 Steps to Success ;-))

   0. Unpack the phpCMS archive (phpcms-1_2_x.zip or phpcms-1_2_x.tar.gz) on
      your local machine.

   1. Rename the directory "/parser" that you now have on your local machine into
      "/parser_new".

   2. Upload the complete parser_new directory and its contents to your webserver.
      You should now have these two directories on your webserver:
        /parser (your old phpCMS)
        /parser_new (new phpCMS 1.2.x)

   3. Your current settings and HTTP-Indexer profiles can be easily transferred
      to the new parser. To do so, _copy_ the two files "default.php" and
      "defaults_indexer.php" from the directory "/parser/include" into the new
      directory "/parser_new/include", overwriting the two existing files in
      the target-directrory.

   4. Copy any plug-ins and scripts you are using from your old directory
      "/parser/plugs" into the new directory "/parser_new/plugs".

   5. Make sure that all new directories and files are given appropriate
      permissions. You will find the permissions necessary described in the
      file "install.txt" in the directory "/parser/readme/en".

   6. Login into the GUI with your old password:
       http://www.domain.test/parser_new/parser.php
      When you first access "Configuration" from the GUI menu, the file
      default.php is automatically converted, and new settings are added. The
      file defaults_indexer.php is not converted at this point, since its format
      has not changed.
      (Two new settings in version 1.2.x are automatically added if neccessary,
      when you edit your profiles)

   7. Check all of your settings:
         1. Change all instances of "/parser" into "/parser_new".
         2. Turn off Stealth Mode for now.
         3. Read the section "Notes regarding various changes" below and make
            changes where necessary.

   8. Now you may check to see whether the new parser correctly outputs your
      pages:
      http://www.domain.test/parser_new/parser.php?file=/demo-en/index.htm .

   9. When you are satisfied with the results of your test, go back to
      "Configuration" in the GUI, and change all instances of "/parser_new" back
      to "/parser". If you are using Stealth Mode, turn in back on now.

  10. Rename your old and the new parser directory:
        /parser to /parser_old (your old phpCMS)
        /parser_new to /parser (your new phpCMS)
      After renaming the directories please archive your phpcms_old directory
      for some days in a secure place, that is not accessible from the web.
      You should keep this archived version, until you are sure, that your
      website works as expected with the new phpCMS version.

All set and ready to go!


################################################################################
   Additional instructions for the upgrade from phpCMS 1.1.x to phpCMS 1.2.x
################################################################################


################################################################################
                                    PLUG-INS
################################################################################

    * Copy all of your plug-ins into the new plug-ins directory
      "/parser_new/plugs/"
    * Plug-in sXform:
         1. find:
            while (list($k,$v) = each($HTTP_GET_VARS))
         2. replace with:
            reset($HTTP_GET_VARS);
            while (list($k,$v) = each($HTTP_GET_VARS))
         3. find:
            while (list($k,$v) = each($HTTP_POST_VARS))
         4. replace with:
            reset($HTTP_POST_VARS);
            while (list($k,$v) = each($HTTP_POST_VARS))


################################################################################
                                  SCRIPTS
################################################################################

    * The Auto-Gallery script needs some adjustments when running in Secure
      Stealth-Mode:

    * In autogallery.inc.php:

         1. find:
            // create new query-string
            foreach($q as $key => $val ) {
            $str .= "$key=$val&";
            }
         2. replace with:
            // create new query-string
            foreach($q as $key => $val ) {
            // phpCMS 1.2.x safe-stealth-mode modification:
            if ($key != "file") {
            $str .= "$key=$val&";
            }
            }


################################################################################
                                        SEARCH
################################################################################

In version 1.2.0 both the stop words file and the file containing the indexed
words are stored in a different format. There are two things you may do:

   1. Best solution: re-index your site!
   2. 2nd best: open "words.db" and "stop.db" with a good text editor, and
      convert them all to lowercase.

    * New Feature: you may define <SEARCH_MIDDLE> in your tags file. This is put
      between <SEARCH_PREV> and <SEARCH_NEXT> on your search results page. If
      undefined this will be replaced with " " (a space). Have a look at the
      demo to see how this may be used.
    * New Feature: In the new file "nono.db" you may define search terms that
      are forbidden. If a visitor types one of these into your search, s/he will
      be presented with a special message.


################################################################################
                              Mail2Crypt SPAM Proofing
################################################################################

SPAM proofing, introduced in v1.1.9 as "PAX MailCrypt", has been re-implemented
independent of PAX. In order to use Mail2Crypt you no longer need to have
"parse PAX TAGS" activated.
Also, because of a collision of names, MailCrypt was renamed to "Mail2Crypt".

    * In future versions of phpCMS the tag identifier will change exclusively to
      "MAIL2CRYPT". In v1.2.x, however, you may still use "MAILCRYPT".
    * The JavaScript file was renamed to js_mail2crypt.js.
    * The tag <!-- MAILCRYPT include ---> is no longer needed and may be deleted.
      In order to include the JS file, the Parser automatically adds a <script>
      tag to the <head> of your pages where necessary.


################################################################################
                       Instructions for geeks (via symlinks)
################################################################################

Another way of updating phpCMS, is via "symlinks". This only works under
[Linux|Unix], of course. Here is a nice how-to from [TOM], but unfortunately
in German:
http://phpcms.de/forum/index.en.html?topic=1509.0
Feel free to ask in the forum, if you want to do this and have problems with it.
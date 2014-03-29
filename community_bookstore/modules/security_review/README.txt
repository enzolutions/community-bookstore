
-- ABOUT --

Security Review automates checking many of the configuration errors that lead
to an insecure Drupal site and looks for existing vulnerabilities and attack
attempts.

The primary goal of the module is to elevate your awareness of the importance of
securing your Drupal site. The results of some checks may be incorrect depending
on unique factors, this module does not make your site more secure. You should
use the results of the checklist and its resources to manually secure your site.

Refer to the support section below if you are interested in securing your Drupal
site. 

-- INSTALLATION --

Place the security_review directory and its contents under sites/all/modules or
under an appropriate sites/ directory if you are using Drupal's multisite
capabilities.

Enable the module at Administer >> Modules and refer to the
following sections for configuration and usage.

-- CONFIGURATION --

Two permissions are provided and required to use the module. Navigate to
Administer >> People >> Permissions to enable
'access security review list' and 'run security checks' for trusted roles.

NOTICE: This module provides information on the state of your site's security so
it is imperative you grant these permissions to trusted roles and users only.
For instance, if you have an admin role, be sure that all the users who have
been granted this role are indeed users you trust if you grant them these
permissions.

After you have granted permissions to the module you should inform the system
what roles are not trusted. Navigate to
Administer >> Reports >> Security Review >> Settings to mark which roles are
untrusted. Most checks only care if the resource is usable by
untrusted roles.

On this page you can also define the level of logging. The result
of the last checklist is always stored but you can enable watchdog logging of
each check if you like.

-- USAGE --

Navigate to Administer >> Reports >> Security Review to run the checklist.

If a check is enabled it will be run. You can enable or skip a check on this
page only after it has been run. Clicking on the 'Help' link beside each check
will provide details on why the check exists and what was found on the last run.

-- SUPPORT --

Please use the issue queue at http://drupal.org/project/security_review for all
module support. You can read more about securely configuring your site at
http://drupal.org/security/secure-configuration and http://drupalscout.com

Acquia, the provider of this module, offers detailed,
targetted security review and support for Drupal websites and can be contacted
at http://wwww.acquia.com or via email at sales@acquia.com.

You can read more about our Drupal security review service at 
http://www.acquia.com/products-services/acquia-professional-services/service-offerings


-- CREDIT --

Security Review module written by Benjamin Jeavons, drupal.org user coltrane,
with thanks to Greg Knaddison, drupal.org user greggles, for the idea and
mentorship.

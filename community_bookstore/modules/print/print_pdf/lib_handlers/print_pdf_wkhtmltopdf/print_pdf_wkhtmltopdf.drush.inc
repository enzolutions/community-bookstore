<?php

/**
 * @file
 * drush integration for print_pdf_wkhtmltopdf module PDF libraries download.
 */

/**
 * The PDF project download URL
 */

// wkhtmltopdf is a binary, requiring a different download for each platform
define('WKHTMLTOPDF_AMD64_DOWNLOAD_URI', 'http://wkhtmltopdf.googlecode.com/files/wkhtmltopdf-0.11.0_rc1-static-amd64.tar.bz2');
define('WKHTMLTOPDF_I386_DOWNLOAD_URI', 'http://wkhtmltopdf.googlecode.com/files/wkhtmltopdf-0.11.0_rc1-static-i386.tar.bz2');
define('WKHTMLTOPDF_WIN_DOWNLOAD_URI', 'http://wkhtmltopdf.googlecode.com/files/wkhtmltox-0.11.0_rc1-installer.exe');
define('WKHTMLTOPDF_OSX_DOWNLOAD_URI', 'http://wkhtmltopdf.googlecode.com/files/wkhtmltopdf-OSX-0.10.0_rc2-static.tar.bz2');

/**
 * Implements hook_drush_command().
 */
function print_pdf_wkhtmltopdf_drush_pdf_libs_alter(&$pdf_libs) {
  $pdf_libs['wkhtmltopdf'] = array(
    'callback' => '_print_pdf_wkhtmltopdf_drush_download_url',
  );
}

/**
 * Discover the correct URL of the package to download.
 *
 * @return string
 *   URL of the file to download, FALSE if not known
 */
function _print_pdf_wkhtmltopdf_drush_download_url() {
  $ret = FALSE;

  switch (drupal_substr(php_uname('s'), 0, 3)) {
    case 'Lin':
      $ret = (php_uname('m') == 'x86_64') ? WKHTMLTOPDF_AMD64_DOWNLOAD_URI : WKHTMLTOPDF_I386_DOWNLOAD_URI;
      break;
    case 'Win':
      $ret = WKHTMLTOPDF_WIN_DOWNLOAD_URI;
      break;
    case 'Dar':
      $ret = WKHTMLTOPDF_OSX_DOWNLOAD_URI;
      break;
    default:
      drush_log(dt('wkhtmltopdf is not supported in this system, please choose another library.'), 'error');
      break;
  }

  return $ret;
}

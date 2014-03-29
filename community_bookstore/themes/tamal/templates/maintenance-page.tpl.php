<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">
  <head>
    <title><?php print $head_title; ?></title>
    <?php print $head; ?>
    <?php print $styles; ?>
    <?php print $scripts; ?>
  </head>
  <body class="<?php print $classes; ?> <?php print drupal_html_class($title);?>">

  <?php print $page_top; ?>
  <div class="body-wrapper">
  <div class="page-outer">
  <div id="header">  
    <div id="branding">
      <?php if ($logo): ?>
      <div class="logo-wrapper">
        <img id="logo" src="<?php print $logo ?>" alt="<?php print $site_name ?>" />
      </div>
      <?php endif; ?>
    </div>
  </div>
  <div id="page">
    <div class="page-wrapper clearfix">

      <?php if ($sidebar_first): ?>
        <div id="sidebar-first" class="sidebar">
          <div id="sidebar-background" class="sidebar-bg">
          <?php print $sidebar_first ?>
        </div>
        </div>  
      <?php endif; ?>

      <div id="content" class="clearfix">
        <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
        <?php if ($messages): ?>
          <div id="console"><?php print $messages; ?></div>
        <?php endif; ?>
        <?php if ($help): ?>
          <div id="help">
            <?php print $help; ?>
          </div>
        <?php endif; ?>
        <?php print $content; ?>
      </div>
    </div>
  </div>
    <div class="footer-section clearfix">
      <div class="footer-wrapper">  
        <div class="footer-logo"></div>
        <div class="footer-content"><p>7Sabores es una marca registrada de Anexus IT. Todos los derechos reservados 2013.</p></div>
      </div>
   </div>
  <?php print $page_bottom; ?>
  </div>
  </div>
  </body>
</html>

<?php
/**
 * @file
 * Enables modules and site configuration for a minimal site installation.
 */

/**
 * Implements hook_form_FORM_ID_alter() for install_configure_form().
 *
 * Allows the profile to alter the site configuration form.
 */
/*  // Pre-populate the site name with the server name.
  $form['site_information']['site_name']['#default_value'] = $_SERVER['SERVER_NAME'];
}**/


/*function system_form_install_select_profile_form_alter(&$form, $form_state) {
  // select plato_tipico install profile by default
  foreach ($form['profile'] as $key => $element) {
    $form['profile'][$key]['#value'] = 'community_bookstore';
  }
}*/

/**
 * Implements hook_install_tasks_alter().
 */

function community_bookstore_install_tasks_alter(&$tasks, $install_state) {
	// Change install theme
  $target_theme = 'tamal';
  $theme_settings  = &drupal_static('theme_get_setting', array());

 // $theme_settings[$target_theme]['logo'] = substr(dirname(__FILE__), strlen($_SERVER['DOCUMENT_ROOT'])) . '/themes/transparency/logo.png';

  if ($GLOBALS['theme'] != $target_theme) {

    unset($GLOBALS['theme']);
    drupal_static_reset();
    $GLOBALS['conf']['maintenance_theme'] = $target_theme;
    _drupal_maintenance_theme();

  //$theme_settings[$target_theme]['favicon'] = substr(dirname(__FILE__), strlen($_SERVER['DOCUMENT_ROOT'])) . '/images/favicon_installer.png';
  }
 // The "Welcome" screen needs to come after the first two steps
  // (profile and language selection), despite the fact that they are disabled.
  $new_task['install_welcome'] = array(
    'display' => TRUE,
    'display_name' => st('Welcome'),
    'type' => 'form',
    'run' => isset($install_state['parameters']['welcome']) ? INSTALL_TASK_SKIP : INSTALL_TASK_RUN_IF_REACHED,
  );
  $old_tasks = $tasks;
  $tasks = array_slice($old_tasks, 0, 2) + $new_task + array_slice($old_tasks, 2);
}

//instalar otra tarea
function install_welcome($form, &$form_state, &$install_state) {
  drupal_set_title(st('Welcome'));

  $message = st('Thank you for choosing the distribution ').'<strong>Community Bookstore</strong>';

  $form = array();
  $form['welcome_message'] = array(
    '#markup' => $message,
  );
  $form['actions'] = array(
    '#type' => 'actions',
  );
  $form['actions']['submit'] = array(
    '#type' => 'submit',
    '#value' => st("Proceed with installation!"),
    '#weight' => 10,
  );
  return $form;
}

function install_welcome_submit($form, &$form_state) {
  global $install_state;

  $install_state['parameters']['welcome'] = 'done';
}


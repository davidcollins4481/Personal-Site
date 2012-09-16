<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
    support for mobile views directory
 */

class MY_Loader extends CI_Loader {

    function __construct() {
        parent::__construct();
    }

    function view($view, $vars = array(), $return = FALSE) {
        $agent = load_class('User_agent');
        $mobile = $agent->is_mobile;

        // for testing
        if (isset($_COOKIE["mobile"])) {
            $mobile = $_COOKIE["mobile"] == 1 ? true : false;
        }

        if ($mobile) {
            $view = 'mobile/'.$view;
        } else {
            $view = 'pc/'.$view;
        }

        return $this->_ci_load(array('_ci_view' => $view, '_ci_vars' => $this->_ci_object_to_array($vars), '_ci_return' => $return));
    }
}

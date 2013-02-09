<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class main extends CI_Controller {

    public function index() {
        $agent = load_class('User_agent');
        if ($agent->is_mobile) {
            $this->load->view('static/mobile_home.php');
        } else {
            $this->load->view('static/home.php');
        }
    }

    public function contact() {
        $this->load->view('static/contact.php');
    }

    public function playground() {
        $this->load->view('static/playground');
    }

    public function boilerplate() {
        $this->load->view('static/boilerplate.php');
    }

    public function gears() {
        $this->load->view('static/gears.php');
    }

    public function destroy() {
        $this->load->view('static/destroy-the-page.php');
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */


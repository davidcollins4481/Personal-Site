<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class main extends CI_Controller {

    public function index() {
        $this->load->view('static/home.php');
    }

    public function contact() {
        $this->load->view('static/contact.php');
    }

    public function projects() {
        $this->load->view('static/projects');
    }

    public function boilerplate() {
        $this->load->view('static/boilerplate.php');
    }
    
    public function gears() {
        $this->load->view('static/gears.php');
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */


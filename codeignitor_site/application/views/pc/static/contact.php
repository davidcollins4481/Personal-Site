<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/head_start.php");?>
<?php $this->load->view("global/head_end.php");?>
<?php $this->load->view("global/content_start.php");?>

    <div class="content">
        <div id="contact_container">
            <div class="contact_icon">
                <span>
                    <a href="mailto:davidcollins4481@gmail.com?subject=Website Inquiry">
                        <img style="height:50px;" src="/images/gmail.png" />
                    </a>
                </span>
            </div>

            <div class="contact_icon">
                <span>
                    <a href="https://github.com/davidcollins4481" target="_blank">
                        <img style="height:50px;" src="/images/github.png" />
                    </a>
                </span>
            </div>
        </div>

        <div style="float: left; clear:both; margin-top:20px; margin-right: 20px;">
            <img style="width:100px" src="/images/qr.png" />
        </div>
    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>
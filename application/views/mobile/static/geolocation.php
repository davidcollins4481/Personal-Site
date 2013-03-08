<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/body_start.php");?>
<?php $this->load->view("global/content_start.php");?>
<style type="text/css">
    #postal_code {
        background: url('/images/geo.png') no-repeat 5px -2px;
        background-size: 20px;
        padding-left: 25px; 
    }
</style>
    <div class="content">
        <p>Let's find out where you are on the map!</p>
        <ul>
            <li id="postal_code" style="font-style:italic;font-weight:bold"></li>
        </ul>
    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>

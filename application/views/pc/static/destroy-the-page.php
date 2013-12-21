<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/head_start.php");?>

<script type="text/javascript" src="/js/projects/dtp/ship.js"></script>
<script type="text/javascript" src="/js/projects/dtp/weaponry/torpedo.js"></script>
<script type="text/javascript" src="/js/projects/destroy_the_page.js"></script>
<link rel="stylesheet" type="text/css" href="/css/projects/destroy_the_page.css">

<?php $this->load->view("global/head_end.php");?>
<?php $this->load->view("global/content_start.php");?>

    <div id="gameboard" class="content" style="position:relative;height: 400px; width:400px;">
        <h1>Destroy the page!</h1>
        
        <div id="ship"></div>

    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>

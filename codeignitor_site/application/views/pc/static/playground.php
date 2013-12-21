<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/head_start.php");?>

<style type="text/css">
    p {
        padding: 10px 0 0 0;
    }
</style>

<?php $this->load->view("global/head_end.php");?>
<?php $this->load->view("global/content_start.php");?>

    <div class="content">
        <p>Things I tinker with for fun when I get some extra time</p>
        <a href="/main/gears">CSS gears</a>

        <p>Playing with the Mustache templating </p>
        <a href="/main/mustache">Mustache fun</a>
    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>

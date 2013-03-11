<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/head_start.php");?>
<script type="text/javascript">

    $(document).ready(function() {
        var obj = <?php echo $house_members ?>;
        var members = obj.results[0].members;
        console.log(members);
    });

</script>
<?php $this->load->view("global/head_end.php");?>
<?php $this->load->view("global/content_start.php");?>

    <div class="content">
        <h1>Mustache Fun</h1>
        <p>
            <a href="">Mustache</a> is a cool templating library that I've been meaning to check out. Let's do something
            simple like get a list of all of Ohio's US House of Representative members from the NY Time API.
        </p>

    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>

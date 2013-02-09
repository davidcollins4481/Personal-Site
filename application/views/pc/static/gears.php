<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/body_start.php");?>
<?php $this->load->view("global/content_start.php");?>

    <div class="content">
        <h1>CSS Gears</h1>
        <p>
            All animations are pure CSS (This will not work on IE or Opera). 
            There is a lot of fun to be had with these...especially when they're
            better supported. Here's where all of the heavy lifting is done if you're
            curious <a href="/css/projects/gears.css">here</a>.
        </p>
        <div id="gear-container">
            <div id="gear1" class="gear"></div>
            <div id="gear2" class="gear"></div>
            <div id="gear3" class="gear"></div>
        </div>

    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>
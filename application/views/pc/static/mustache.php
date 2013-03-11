<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/head_start.php");?>

<script src="http://github.com/janl/mustache.js/raw/master/mustache.js" type="text/javascript"></script>

<script type="text/javascript">

    $(document).ready(function() {
        var obj = <?php echo $house_members ?>;
        var data = obj.results[0];
        var template = $('#congress_person').html();
        var rendered = Mustache.to_html(template, data);
        $('#attach_point').html(rendered);
    });

</script>

<script id="congress_person" type="text/template">
    {{#members}}
    <div style="float:left;margin: 10px;">
        <h3>{{first_name}} {{last_name}}</h3>
        <ul>
            <li>District: {{district}}</li>
            <li>Party Affiliation: {{party}}</li>
            <li>Votes with Party: {{votes_with_party_pct}}</li>
        </ul>
    </div>
    {{/members}}
</script>

<?php $this->load->view("global/head_end.php");?>
<?php $this->load->view("global/content_start.php");?>

    <div class="content">
        <h1>Mustache Fun</h1>
        <p>
            <a href="">Mustache</a> is a cool templating library that I've been meaning to check out. Let's do something
            simple like get a list of all of Ohio's US House of Representative members from the NY Time API.
        </p>
        <div id="attach_point"></div>
    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>

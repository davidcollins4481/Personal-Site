<?php $this->load->view("global/html_start.php");?>
<?php $this->load->view("global/head_start.php");?>

<style type="text/css">
    #attach_point {
        float: left;
        width: 100%;
    }

    .person {
        float: left;
        width: 50%;
    }

        .person h3 {
            padding: 0;
        }

        .person ul {

        }

        .person li {
            background: none !important;
            padding: 0 !important;
        }

        .party-D .party-label {
            color: blue;
        }

        .party-R .party-label {
            color: red;
        }
</style>

<script src="/js/mustache.js" type="text/javascript"></script>

<script type="text/javascript">

    $(document).ready(function() {
        var obj = <?php echo $house_members ?>;
        var data = obj.results[0];

        // a little bit of sorting
        data.members.sort(function(a, b) {
            return parseInt(a.district) > parseInt(b.district) ? 1 : -1;
        });

        var template = $('#congress_person').html();
        var rendered = Mustache.to_html(template, data);
        $('#attach_point').html(rendered);
    });

</script>

<script id="congress_person" type="text/template">
    {{#members}}
    <div class="person party-{{party}}">
        <h3>{{first_name}} {{last_name}}</h3>
        <ul>
            <li>District: {{district}}</li>
            <li class="party-label">Party Affiliation: {{party}}</li>
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
            <a href="http://mustache.github.com/">Mustache</a> is a templating library that can be used with several different languages. 
            Here I get a list of all members of the US House of Representatives from The New York Times Congress API and render each of them with
            a Mustache template.
        </p>
        <div id="attach_point"></div>
    </div>

<?php $this->load->view("global/content_end.php");?>
<?php $this->load->view("global/body_end.php");?>
<?php $this->load->view("global/html_end.php");?>

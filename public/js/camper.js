import { templateLoader } from './template-loader';
import {data } from './data';

let camper = (() => {
    function getCamper(context) {

        let camperId = context.params["id"];

        data.getCamperById(camperId).then((response)=> {
           
            templateLoader.get("camper")
   
            .then((template) => {
               
                context.$element().html(template(response.data));

            });


        })

       
    }

    return {
        renderPage: getCamper
    }
})();
/*
        <script type="text/javascript">
    $(function () {
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker7').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
    });
</script>*/

export { camper };
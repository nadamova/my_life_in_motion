import { templateLoader } from './template-loader';

let camper = (() => {
    function getCamper(context) {

        templateLoader.get("camper")
   
            .then((template) => {
               
                context.$element().html(template({}));

            });
    }

    return {
        renderPage: getCamper
    }
})();

export { camper };
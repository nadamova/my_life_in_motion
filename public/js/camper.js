import { templateLoader } from './template-loader';
import { data } from './data';

let camper = (() => {
    function getCamper(context) {
        let camperId = context.params["id"];
        data.getCamperById(camperId).then((response) => {
            templateLoader.get("camper")
                .then((template) => {
                    context.$element().html(template(response.data));
                });
        })
    }

    function getAllCampers(context) {

        data.getAllCampers().then((response) => {
            templateLoader.get("campers")
                .then((template) => {
                    
                    let campers = {
                        integrated: [],
                        "semi-integrated": [],
                        all: []
                    }

                    response.data.forEach(function(camper) {
                        
                        let category = camper.category || 'all'
                        campers[category] = campers[category].concat(camper)
                    }, this);
                    context.$element().html(template({ campers: campers }));

                    templateLoader.get("footer")
                        .then((template) => {
                            context.$element().append(template)
                        })
                });
        })
    }

    return {
        singleCamper: getCamper,
        allCampers: getAllCampers
    }
})();


export { camper };
import { camper } from './camper';
import { data } from './data';
import { templateLoader } from './template-loader';

let home = function getHome(context) {

    data.getAllCampers().then((response) => {
        templateLoader.get("home")
            .then((template) => {
                context.$element().html(template({ campers: response.data.slice(0, 3) }));
            });
    });

    return {
        getHome
    };
};


export { home };
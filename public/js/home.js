import { templateLoader } from './template-loader';
import { data } from './data';
import { camper } from './camper';

let home = function getHome(context) {

    data.getAllCampers().then((response) => {
        templateLoader.get("home")
            .then((template) => {
                context.$element().html(template({ campers: response.data.slice(0, 3) }));
            });
    })

    return {
        getHome
    }
}



export { home };
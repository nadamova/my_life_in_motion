import { templateLoader } from './template-loader';
import { data } from './data';
import { camper } from './camper';

let home = function getHome(context) {
    templateLoader.get("home")
        .then((template) => {
            context.$element().html(template);
        });
    return {
         getHome
    }
}

export { home };
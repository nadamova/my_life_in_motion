import { templateLoader } from './template-loader';
import { data } from './data';


let location = function getLocation(context) {
    templateLoader.get("location")
        .then((template) => {
            context.$element().html(template);
        });
    return {
         getLocation
    }
}

export { location };
import { data } from './data';
import { templateLoader } from './template-loader';

let location = function getLocation(context) {
    templateLoader.get("location")
        .then((template) => {
            context.$element().html(template);
        });
    return {
         getLocation
    };
};

export { location };
import { templateLoader } from './template-loader';
import { data } from './data';


let tips = function getTips(context) {
    templateLoader.get("tips")
        .then((template) => {
            context.$element().html(template);
        });
    return {
         getTips
    }
}

export { tips };
import { data } from './data';
import { templateLoader } from './template-loader';

let tips = function getTips(context) {
    templateLoader.get("tips")
        .then((template) => {
            context.$element().html(template);
        });
    return {
         getTips
    };
};

export { tips };
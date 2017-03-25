import { controllers } from './controllers';

let router = (() => {

    function init() {
        let sammyApp = Sammy("#content", function () {
            this.get('#/', function (context) {
                context.redirect('#/home');
            });

            this.get("#/camper/:id", controllers.camper.singleCamper);

            this.get("#/home/campers", controllers.camper.allCampers);

            this.get("#/home/location", controllers.location);

            this.get("#/home", controllers.home);

        });

        sammyApp.run('#/');
    }

    function navigate(path) {
        //navigo.navigate(path);
    }

    //parse query params in object form (paramName: value)
    function getQueryParams(qstr) {
        var query = {};
        var a = qstr.split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
    }

    return {
        init: init,
        navigate: navigate
    }

})();

export { router };
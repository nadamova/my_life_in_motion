/* globals module */

module.exports = function(params) {
    let { data } = params;

    return {
        getAllCampers(req, res) {
            data.getAllCampers()
                .then(allCampers => {
                    console.log(allCampers)
                    res.json({ data: allCampers });
                })
                .catch(err => {
                    res.json(err);
                });
        },
        getCamperById(req, res) {
            data.getCamperById(req.params.id)
                .then((camper) => {
                    // console.log(camper);
                    res.json({ data: camper });
                })
                .catch(err => {
                    res.json(err);
                });
        }
    };
};
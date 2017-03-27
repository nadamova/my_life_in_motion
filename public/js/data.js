import { requester } from './requester';


let data = (() => {

    function getCamperById(id) {
        return requester.getJSON(`api/camper-list/${id}`);
    }

    function getAllCampers() {
        return requester.getJSON(`api/camper-list`);
    }

    return {
        getCamperById,
        getAllCampers
    }
})();

export { data };
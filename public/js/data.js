import { requester } from './requester';


let data = (() => {

    function getCamperById(id) {
        return requester.getJSON(`api/camper-list/${id}`);
    }

    function getAllCampers() {
        return requester.getJSON(`api/camper-list`);
    }

    /*function addComment(id, text) {
        return isLoggedIn()
            .then((result) => {
                if (!result.username) {
                    throw new Error("You have to be logged in to comment!");
                }
            })
            .then(() => {
                let postData = { "commentText": text };
                let headers = { [AUTH_KEY]: localStorage.getItem(AUTH_KEY) };
                return requester.putJSON(`api/materials/${id}/comments`, postData, headers);
            });
    }*/


    return {
        getCamperById,
        getAllCampers
    }
})();

export { data };
const restify = require("restify-clients");

// url for the API
let apiUrl = "https://picsum.photos/";

// defining the client using the apiUrl
let client = restify.createJsonClient(apiUrl);



module.exports = {

// fetch 12 photos from the client
    "haeKuvat" : () => {

        return new Promise((resolve, reject) => {
            client.get("/v2/list?limit=12", (err, req, res, data) => {

              


                if (!err) {
                    resolve(data);
                }
                else {
                    reject(err);
                    }; 
                    });
        });
    },
    

}
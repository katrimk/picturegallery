const express = require("express");
const app = express();

const portti = 3100;

const picsum = require("./models/lorempicsum.js");

app.use("/public", express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");



app.get("/", (req, res) => {
// this path renders the index page, which is the only page in this app
    
// fetching data
    picsum.haeKuvat()
        .then((data) => {
            
            // create an array for inserting the picture data
            let kuvat = [];

            // iterating through the data and pushing each picture object into the array
            data.forEach((kuva) => {
                kuvat.push(kuva);
            });
            
            

            // rendering the index page with the array as the kuvat variable
            res.render("index", {"kuvat": kuvat});
            
        });

    
    
})





app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: String,
        url :{
            type: String,
            default: "https://unsplash.com/photos/a-group-of-vases-filled-with-different-colored-flowers-OcFMl43VjCQ",
        
        
        set: (v) => 
            v === "" 
        ? "https://unsplash.com/photos/a-group-of-vases-filled-with-different-colored-flowers-OcFMl43VjCQ"
        : v,

    },
},
    price: Number,
    location: String,
    country: String,

});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
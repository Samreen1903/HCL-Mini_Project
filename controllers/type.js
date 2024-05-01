const Listing = require("../models/listings.js");

module.exports.Buy = async (req, res) => {
    let allListings = await Listing.find({
        propertyType: { $in: ["Sell", "Open-for-both"] },
    });
    res.render("listings/index.ejs", { allListings });
};

module.exports.Rent = async (req, res) => {
    let allListings = await Listing.find({
        propertyType: { $in: ["Rent", "Open-for-both"] },
    });
    res.render("listings/index.ejs", { allListings });
};

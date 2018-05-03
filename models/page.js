var mongoose = require('mongoose');

var pageSchema = mongoose.Schema({
    title: {
        type: String
    },
    slug: {
        type: String
    },
    content: {
        type: String
    },
    sidebar: {
        type: String
    },            
});

var page = module.exports = mongoose.model("page", pageSchema);
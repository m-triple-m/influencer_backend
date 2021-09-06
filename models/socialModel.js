const mongoose = require('../connection');

const schema = new mongoose.Schema({
    platform: String,
    data: Object,
})


const model = mongoose.model('SocialProfiles', schema);

module.exports = model;

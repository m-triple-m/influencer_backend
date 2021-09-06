const mongoose = require('../connection');

const schema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'Users' },
    data: Object,
    created: Date,
    socialProfiles: [{ type: mongoose.Types.ObjectId, ref: 'SocialProfiles' }]
})


const model = mongoose.model('Influencers', schema);

module.exports = model;

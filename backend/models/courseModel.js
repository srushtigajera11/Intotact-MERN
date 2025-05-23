const  mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    title : String,
    description : String,
    materials : [String],
    enrolledUser : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Course', courseSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unque: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
});

module.exports = mongoose.model('User', userSchema);
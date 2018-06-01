"use strict";

var mongoose = require('mongoose');
var sha1     = require('sha1');
var Schema   = mongoose.Schema;

var User = new Schema({
	fname     :{ type: String, required: true, trim: true },
	lname     :{ type: String, required: true, trim: true },
	full_name :{ type: String, trim    : true },
	email     :{ type: String, required: true, trim: true, lowercase: true, unique : true},
	password  :{ type: String, required: true },
	created_at:{ type: Date, default   : Date.now },
	update_at :{ type: Date, default   : Date.now },
});


// Pre-Processing before saving docemunet
User.pre('save', function(next) {
	this.updated_at = Date.now();

	// encrypt password before save
	if (this.isModified('password')){
		this.password = sha1(this.password);
	}

	// full name from first name and lastname
	if (this.isModified('fname') || this.isModified('lname')){
		this.full_name = this.fname +" "+this.lname;
	}
	next();
});



User.methods.verifyPassword = function(password) {
  return this.password === sha1(password);
}

module.exports = mongoose.model('User',User);

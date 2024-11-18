const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    profilePicture: [
        {
            type: String,
            required: true,
        },
    ],

    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    gender: {
        type: String,

    },
    country: {
        type: String,

    },
    zipCode: {
        type: Number,

    },
    email: {
        type: String,

    },
    password: {
        type: String,
        required: true,

    },


    dateOfBirth: {
        type: Date,

    },
    verified: {
        type: Boolean,
        default: false
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date

}, {
    timeStamp: true
});


UserSchema.method.createResetPasswordTokken = function () {
    const resetTokken = crypto.randomBytes(32, this.toString('hex'));
    this.passwordResetToken = crypto.createHash('sha256').update(resetTokken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    console.log(resetTokken, this.passwordResetToken)

    return resetTokken;
}

module.exports = mongoose.model('User', UserSchema)

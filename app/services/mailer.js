const nodemailer = require('nodemailer');

const {
    host,
    port,
    user,
    pass,
} = require('../../config/mail');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

module.exports = (options) => {
    return transport.sendMail(options)
};
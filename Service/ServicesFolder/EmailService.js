const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yahalomtestproject@gmail.com',
      pass: 'Yahalom22'
    }
});

module.exports = class EmailService {

    async SendEmail(mailOptions){
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
      });
    }
}
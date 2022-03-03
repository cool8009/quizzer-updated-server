const { EmailService } = require("../../Service/Services");

exports.SendEmail=(recipient, subject, content)=>{
    const mailOptions = {
            from: 'yahalomtestproject@gmail.com',
            to: recipient,
            subject: subject,
            text: content
          };
    EmailService.SendEmail(mailOptions);
}


const nodemailer = require("nodemailer");
require('dotenv').config();
const sendMail = async (req, res) => {
  // let testAccount = await nodemailer.createTestAccount();
  const { senderEmail, senderName, phoneNumber, subject, message } = req.body;
  // connect with the smtp
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NOTIFICATION_EMAIL, // Your Gmail email address
        pass: process.env.NOTIFICATION_EMAIL_PASSWORD // Your Gmail password
    }
});

  let info = await transporter.sendMail({
    from: ` ${senderName}  ${senderEmail} `,
    to: "hr@teminos.com",
    subject: subject,
    html: `<p>${message}</p>`,
  });

  res.json(info);
};

module.exports = sendMail;

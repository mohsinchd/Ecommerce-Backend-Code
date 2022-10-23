const nodeMailer = require("nodemailer");

const sendEmail = async ({ email, message, subject }) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.NODE_MAILER_HOST,
    port: process.env.NODE_MAILER_PORT,
    service: process.env.NODE_MAILER_SERVICE,
    auth: {
      user: process.env.NODE_MAILER_MAIL,
      pass: process.env.NODE_MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODE_MAILER_MAIL,
    to: email,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

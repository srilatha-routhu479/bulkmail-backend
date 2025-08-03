const nodemailer = require("nodemailer");
const Credential = require("../models/credentialModel");

const sendBulkEmail = async (req, res) => {
  const { msg, emaillist } = req.body;

  try {
    const data = await Credential.find();
    console.log("Credentials from DB:", data);

    const gmailUser = data[0]?.user;
    const gmailPass = data[0]?.pass;

   

    if (!gmailUser || !gmailPass) {
      return res.status(400).send(" Missing user or password in DB");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    for (let i = 0; i < emaillist.length; i++) {
      await transporter.sendMail({
        from: gmailUser,
        to: emaillist[i],
        subject: "A message from Srilatha",
        text: msg,
      });
      console.log(" Email sent to:", emaillist[i]);
    }

    res.send(" Emails sent successfully");
  } catch (error) {
    console.error(" Error while sending emails:", error.message);
    res.status(500).send(" Failed to send emails");
  }
};

module.exports = sendBulkEmail;

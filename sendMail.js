const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    try {
        // Create a test account
        let testAccount = await nodemailer.createTestAccount();

        // Create a transporter
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "	johnny.marvin51@ethereal.email", // generated ethereal user
                pass: "3E1xvdXBXwJ8sG92VX"  // generated ethereal password
            }
        });

        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Ayush Mane" <ayumane63@gmail.com>',
            to: "ayumane04@gmail.com",
            subject: "Sending Mail",
            text: "Hey Ayush here",
            html: "<b>Hello Ayush Mane here</b>"
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error("Error sending mail: %s", error);
        res.status(500).send("Error sending mail");
    }
};

module.exports = sendMail;

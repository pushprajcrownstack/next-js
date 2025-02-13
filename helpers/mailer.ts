import nodemailer from 'nodemailer'

export const sendEmail = async ({ email, emailSubject, userId }: { email: string, emailSubject: string, userId: string }) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.forwardemail.net",
            port: 465,
            secure: false, // true for port 465, false for other ports
        })

        const info = await transporter.sendMail({
            from: 'pushpraj@crownstack.com', // sender address
            to: email, // list of receivers
            subject: emailSubject, // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);

        return info;
    } catch (error) {
        console.log(error)
    }
}
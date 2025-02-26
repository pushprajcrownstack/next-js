import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'
import User from '@/models/userModel';
export const sendEmail = async ({ email, emailType, userId }: { email: string, emailType: string, userId: string }) => {
    try {

        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            })
        } else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgorPasswordToken: hashedToken,
                forgorPasswordTokenExpiry: Date.now() + 3600000
            })
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.EMAIL_AUTH_USER, // this will be in your env file
                pass: process.env.EMAIL_AUTH_PASS  // this will be in your env file
            }
        });

        const info = await transport.sendMail({
            from: 'pushpraj@crownstack.com', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? 'Verify you email' : 'Reset your password', // Subject line
            text: "Hello world?", // plain text body
            html: `<p>Click <a href="${process.env.DOMAIL_URL}}/verifyemail?token=${hashedToken}">here</a> to ${emailType === 'VERIFY' ? 'verify your email address' : 'reset your account password'}
            or copy and paste the below link in your browser. <br> ${process.env.DOMAIL_URL}}/verifyemail?token=${hashedToken} </br> </p>`,
        });

        console.log("Message sent: %s", info.messageId);

        return info;
    } catch (error) {
        console.log(error)
    }
}
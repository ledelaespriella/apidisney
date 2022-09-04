import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.API_KEY_SENDGRID);

const sendEmail = (to, from, subject, text) => {
    const msg = {
        to,
        from,
        subject,
        text,
    };

    sgMail
        .send(msg)
        .then((res) => {
            console.log(res[0].statusCode);
            console.log('Email was Sent');
        })
        .catch((err) => {
            console.log(`message: ${err.message}`);
        });
};

export default sendEmail;

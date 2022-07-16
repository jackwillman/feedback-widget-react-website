import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "./mail.adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3f8ac83ceba555",
        pass: "56144baf017984"
    }
});

export const NodemailerMailAdapter = class implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from : 'Equipe Feedget <oi@feedget.com>',
            to : 'João Luís Rheingantz Scaini <jlrscaini@yahoo.com.br>',
            subject,
            html : body
        });
    };
};
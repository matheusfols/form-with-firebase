import nodemailer from 'nodemailer';
import { SendMailProps } from './interfaces';

const SendEmail = async (props: SendMailProps) => {
  const { subject, to, cc, bcc, html: htmlEmail, text: textEmail } = props;
  const configMail = {
    name: process.env.EMAIL_USER,
    host: process.env.EMAIL_SMTP,
    port: Number(process.env.EMAIL_SMTP_PORT ?? 465),
    secure: Boolean(process.env.EMAIL_SECURE ?? true),
    debug: Boolean(process.env.EMAIL_DEBUG ?? false),
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  }

  const transporter = nodemailer.createTransport(configMail);

  transporter.verify((error, success) => {
    if (error) {
      console.error('Server Error', error);
    }
  });

  const info = await transporter.sendMail({
    from: `"${process.env.NEXT_PUBLIC_TITLE_MAIN}" <${process.env.EMAIL_USER}>`, // sender address
    to, // list of receivers
    cc,
    bcc,
    subject, // Subject line
    text: textEmail ? textEmail : 'Não há dados do email', // plain text body
    html: htmlEmail ? htmlEmail : '<p>Não há dados do email</p>', // html body
  });

  return info;
};

export default SendEmail;

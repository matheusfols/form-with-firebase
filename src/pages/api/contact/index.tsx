import { addDocument } from '@/config/firebase';
import SendEmail from '@/services/mail';

import { render } from '@react-email/render';
import EmailContact from '@/components/mailTpl/contact';

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      try {
        const add = await addDocument('contact', body);
        const emailHtml = render(<EmailContact {...body} />);
        const send = await SendEmail({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          subject: `Contato - ${process.env.NEXT_PUBLIC_TITLE_MAIN}`,
          // text?: string
          html: emailHtml,
        });
        return res.status(200).json({ send });
      } catch (e) { }
      break;
    case 'GET':
    default:
      return res.status(200).json({ msg: 'ok' });
      break;
  }
};

export default handler;

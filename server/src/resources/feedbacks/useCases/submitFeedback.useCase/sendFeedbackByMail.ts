import { SubmitFeedbackUseCaseRequest } from ".";
import { MailAdapter } from "../../adapters/mail.adapter";

const sendFeedbackByMail = async function (
    {
        type,
        comment,
        screenshot
    } : SubmitFeedbackUseCaseRequest,
    mailAdapter : MailAdapter
) {
    await mailAdapter.sendMail({
        subject : 'Novo Feedback',
        body : [
            `<div style="font-family: sans-serif; font size: 16 px; color: #111;">`,
            `<p><strong>Tipo do feedback:</strong> ${type}</p>`,
            `<p><strong>Comentário:</strong> ${comment}</p>`,
            screenshot ? `<img src="${screenshot}" alt="Feedback Screenshot" style="vertical-align:middle;margin:12px 30px"/>` : '',
            `</div/>`
        ].join('\n')
    });
};

export default sendFeedbackByMail;
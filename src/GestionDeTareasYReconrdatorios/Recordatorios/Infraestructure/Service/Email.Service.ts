import { transporter } from '../../../../_config/transporter.config';

export async function sendRecordatorioEmail(to: string, subject: string, text: string) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo de recordatorio enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo de recordatorio:', error);
        throw error;
    }
}
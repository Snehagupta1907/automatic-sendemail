import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmailController = async (req, res) => {
  const { to, subject, text } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: to,
      subject: subject, 
      text: text
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
};
export { sendEmailController };

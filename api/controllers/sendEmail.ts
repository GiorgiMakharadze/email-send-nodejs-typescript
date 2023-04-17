import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendEmail = async (req: Request, res: Response) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: process.env.ETHEREAL_USERNAME,
      pass: process.env.ETHEREAL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"Giorgi" <makharadzegiorgi00@gmail.com>',
    to: "bar@example.com",
    subject: "Hello :)",
    html: "<h2>Sending email with Node.js</h2>",
  });

  res.json(info);
};

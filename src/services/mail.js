import nodemailer from "nodemailer";
import { pass, user } from "../../app.js";

const mail = async ({ name, phone }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: "application",
      to: "bazaleydmitriy@gmail.com",
      subject: "Application",
      html: `<h1>Новый ученик</h1>
        <p>Имя : ${name}</p>
        <p>Телефон : ${phone}</p>`,
    };

    const send = () => {
      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          }
          resolve(info);
        });
      });
    };

    await send();

    return {
      message: "Сообщение отправлено",
    };
  } catch (error) {
    console.log(error);
  }
};

export default mail;

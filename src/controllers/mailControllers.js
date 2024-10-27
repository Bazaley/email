import mail from "../services/mail.js";

export const mailController = (req, res) => {
  const { name, phone } = req.body;
  mail({ name, phone });

  res.status(201).json({
    status: "success",
    code: 201,
    data: { name, phone },
  });
};

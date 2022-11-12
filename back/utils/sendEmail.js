const nodemailer=require("nodemailer");

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "carlostello_25@hotmail.com",
          pass: "wswmgcewuuqykkdf"
        }
      });
      const mensaje = {
        from: "ShopOnline Store <carlostello_25@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
      }

      await transport.sendMail(mensaje)


}
module.exports = sendEmail;
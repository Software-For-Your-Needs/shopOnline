const nodemailer=require("nodemailer");

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "dd9d3b70858cbe",
          pass: "4a1db491a9e69d"
        }
      });
      const mensaje = {
        from: "ShopOnline Store <noreply@shoponline.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
      }

      await transport.sendMail(mensaje)


}
module.exports = sendEmail;
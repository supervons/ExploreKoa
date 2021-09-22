import * as nodemailer from 'nodemailer';
export async function sendMail() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'xxxx@163.com', // generated ethereal user
      pass: 'xxxx' // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"xxxx', // sender address
    to: 'xxxx', // list of receivers
    subject: '【ExploreRN】 Register Code', // Subject line
    html: '<b>Hello, welcome to ExploreRN, your register code is 【888999】</b>' // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

/**
 * Email send util.
 * Use nodemailer@^6.6.3, see more: https://nodemailer.com/about/
 * It is recommended that you register a new e-mail for sending verification codes and messages.
 */
import * as nodemailer from 'nodemailer';
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

/**
 * User register e-mail send function.
 * @param registerEmail user e-mail
 * @param code random code
 */
export async function sendRegisterMail(registerEmail: string, code: string) {
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"xxxx', // sender address
    to: registerEmail, // list of receivers
    subject: '【ExploreRN】 Register Code', // Subject line
    html: `<b>Hello, welcome to ExploreRN, your register code is 
            </br>【${code}】</b>` // html body
  });
  return info;
}

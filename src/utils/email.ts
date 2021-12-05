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
    from: 'xxxx', // sender address
    to: registerEmail, // list of receivers
    subject: '【ExploreRN】 Register Code', // Subject line
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body style="background-color: #ececec;height:900px;display:flex;justify-content: center;align-items: center">
    <table style="height:24px;width: 100%;position:relative;" border="0" cellspacing="0" cellpadding="0"><tr><td valign="middle" style="word-break:break-all;padding:14px 8px 5px 14px;" class="txt_left settingtable readmail_subject"><div class="qm_left"  style="padding-bottom:3px;">
        <table cellpadding="0" align="center" width="600" style="background:#fff;width:600px;margin:0 auto;text-align:left;position:relative;border-radius:5px;font-size:14px; font-family:'Microsoft YaHei','lucida Grande',Verdana;line-height:1.5;box-shadow:0 0 5px #999999;border-collapse:collapse;">
            <tr><th valign="middle" style="height:25px;color:#fff; font-size:24px;line-height:25px; font-weight:bold;text-align:left;padding:15px 35px; border-bottom:1px solid #467ec3;background:#518bcb;border-radius:5px 5px 0 0;">
                <div>EXPLORE-RN</div>
            </th></tr>
            <tr><td>
                <div style="padding:35px 35px 40px;">
                    <h2 style="font-weight:bold; font-size:14px;margin:5px 0;">Dear explorer：</h2>
                    <p style="color:#313131;line-height:24px;font-size:14px;margin:20px 0;">Welcome to register ExploreRN!</p>
                    <p style="color:#313131;line-height:24px;font-size:14px;margin:20px 0;">Your code is：</p>
                    <p style="font-weight: bold; color:#f08834; font-size: 24px">${code}</p>
                    <p style="color:#313131;line-height:24px;font-size:14px;margin:20px 0;">Valid for five minutes.</p>
                    <p style="color:#313131;line-height:28px;font-size:14px;margin:20px 0;">If you don’t know what happen, please ignore this message.</p>
                    <p style="color:#999; margin:26px 0 0 0; font-size:12px;">
                        RN-Home-Page：<a href="https://github.com/supervons/ExploreRN" target="_blank" style="color:#999;">https://github.com/supervons/ExploreRN</a><br>
                        KOA-Home-Page：<a href="https://github.com/supervons/ExploreKoa" target="_blank" style="color:#999;">https://github.com/supervons/ExploreKoa</a><br>
                        <span style="background:#ddd;height:1px;width:100%;overflow:hidden;display:block;margin:8px 0;"></span>
                        supervons@<a href="https://github.com/supervons/ExploreKoa" target="_blank" style="color:#999;">https://github.com/supervons</a><br>
                    </p>
                </div>
            </td></tr>
        </table>
    </div>
    </td>
    </tr>
    </table>
    </body>
    </html>` // html body
  });
  return info;
}

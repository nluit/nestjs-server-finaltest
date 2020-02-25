import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Injectable()
export class ContactService {

    SendMessage(user){
      
        var smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "projectqlhs123@gmail.com",
                pass: "qlhs123456"
            }
        });
        var mailOptions = {
            to: user.email,
            from: `projectqlhs123@gmail.com`,
            subject: 'Đăng kí email',
            text: ` ${user.fullname } Đăng kí Email thành công !!!`
        };
        smtpTransport.sendMail(mailOptions, function(err) {
            if (err) console.log(err);
            else {
                console.log("success !")
            }
        });
    }
    
}
